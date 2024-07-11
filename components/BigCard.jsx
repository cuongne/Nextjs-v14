import Button from '@/app/(components)/Button'
import Image from 'next/image'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { Hot, Sale } from './Tag'

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

const BigCard = ({ product }) => {
  const { title = '', price = 0, image = '', rating = {}, description = '' } = product
  return (
    <div className="p-6 border-r border-solid border-gray-100 w-fit max-w-[328px]">
      <div className="absolute flex flex-col w-fit gap-2">
        <Hot />
        <Sale percent={32} />
      </div>
      <Image
        src={image}
        alt="Logo"
        width={280}
        height={269}
        objectFit="contain"
        style={{
          maxWidth: '100%',
          height: '269px',
        }}
      />
      <div className="flex gap-1 items-center">
        {renderStars(rating?.rate)}

        <span>({rating?.count})</span>
      </div>
      <span className="line-clamp-2">{title}</span>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-gray-300 line-through">${price}</span>
        <span className="text-secondary-500 font-bold text-lg">${price}</span>
      </div>
      <span className="text-gray-600 text-sm mt-3 line-clamp-3">{description}</span>
      <div className="flex justify-between items-center mt-6">
        <Button onClick={() => {}} isButtonBase className="rounded-sm items-center justify-center w-12 h-12 bg-primary-100">
          <FaRegHeart style={{ color: '#191C1F', fontSize: '24px' }} />
        </Button>
        <Button onClick={() => {}} isButtonBase className="flex gap-3 rounded-sm items-center justify-center w-[172px] h-12 bg-primary-500 text-xl text-gray-0">
          <LuShoppingCart style={{ color: '#fff' }} />
          Add to card
        </Button>
        <Button onClick={() => {}} isButtonBase className="rounded-sm items-center justify-center w-12 h-12 bg-primary-100">
          <MdOutlineRemoveRedEye style={{ color: '#191C1F', fontSize: '24px' }} />
        </Button>
      </div>
    </div>
  )
}

export default BigCard
