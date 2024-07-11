import Image from 'next/image'
import { useState } from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaRegEye, FaStar } from 'react-icons/fa'

import Button from '@/app/(components)/Button'
import { cn } from '@/utils/lib'
import { useCardPopup } from '@/zustand/useCardPopup'

const renderStars = (rating) => {
  const stars = []
  const fullStars = Math.floor(rating) // Number of full stars
  const hasHalfStar = rating % 1 !== 0 // Check if there's a half star

  // Push full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar style={{ color: 'EBC80C' }} key={i} />)
  }

  // Push half star if applicable
  if (hasHalfStar) {
    stars.push(<FaStar style={{ color: 'EBC80C' }} key={stars.length} />)
  }

  // Push empty stars to complete to 5 stars
  const remainingStars = 5 - stars.length
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar style={{ color: 'EBC80C' }} key={stars.length} />)
  }

  return stars
}

const Card = ({ tag = [], className = '', haveRating = false, data ={} }) => {
  
  const { title = '', price = 0, image = '', rating = {} } = data

  const { updateCardInfo, togglePopup } = useCardPopup((state) => state)
  const [isWish, setIsWish] = useState(false)
  const [isInCart, setIsInCart] = useState(false)
  const toggleWish = () => {
    setIsWish((prev) => !prev)
  }
  const toggleCart = () => {
    setIsInCart((prev) => !prev)
  }
  const toggleView = () => {
    updateCardInfo(data)
    togglePopup(true)
  }
  return (
    <div className={cn('p-3 border border-solid border-gray-100 cursor-pointer group', className)}>
      <div className="absolute z-10 flex flex-col gap-2">
        {tag?.map((x) => (
          <div key={x?.key}>{x?.component}</div>
        ))}
      </div>
      <div className="relative  h-[188px]">
        <Image
          src={image}
          alt="Logo"
          fill
          sizes="100vw"
          objectFit="contain"
        />
        <div className="absolute w-full h-full flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100  bg-gray-800 bg-opacity-40 transition-all duration-300">
          <Button
            onClick={toggleWish}
            isButtonBase
            className={cn('w-12 h-12 flex items-center justify-center bg-gray-0 rounded-full', isWish ? 'bg-primary-500' : 'bg-gray-0')}
          >
            <CiHeart style={{ color: isWish ? '#fff' : '#191C1F', fontSize: '24px' }} />
          </Button>
          <Button
            onClick={toggleCart}
            isButtonBase
            className={cn('w-12 h-12 flex items-center justify-center rounded-full', isInCart ? 'bg-primary-500' : 'bg-gray-0')}
          >
            <CiShoppingCart style={{ color: isInCart ? '#fff' : '#191C1F', fontSize: '24px' }} />
          </Button>
          <Button onClick={toggleView} isButtonBase className={cn('w-12 h-12 flex items-center justify-center rounded-full', 'bg-gray-0')}>
            <FaRegEye style={{ color: '#191C1F', fontSize: '24px' }} />
          </Button>
        </div>
      </div>
      {haveRating && (
        <div className="flex gap-1 items-center">
          {renderStars()}
          <span>({rating?.count})</span>
        </div>
      )}
      <span className="max-w-[216px] mt-2 text-sm line-clamp-2">{title}</span>
      <span className="text-secondary-500 mt-2">${price}</span>
    </div>
  )
}

export default Card
