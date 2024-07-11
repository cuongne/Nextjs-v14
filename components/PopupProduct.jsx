'use client'
import Button from '@/app/(components)/Button'
import Image from 'next/image'
import Link from 'next/link'
import macbook from 'public/images/home/macbook.png'
import { useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaArrowLeft, FaArrowRight, FaFacebook, FaPinterestP, FaStar, FaTwitter } from 'react-icons/fa'
import { FcDribbble, FcRegisteredTrademark, FcServiceMark, FcSteam, FcTrademark } from 'react-icons/fc'
import { IoClose, IoCopyOutline } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { VscGitCompare } from 'react-icons/vsc'
import Overlay from './Overlay'
import QuantityInput from './QuantityInput'
import { useCardPopup } from '@/zustand/useCardPopup'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/utils/lib'

const CarouselItem = ({ imageUrl, handleActiveImage }) => {
  return (
    <Button
      isButtonBase
      onClick={handleActiveImage}
      className="relative cursor-pointer w-24 h-24 flex items-center justify-center flex-col border border-solid border-gray-100 rounded transition-all duration-200 hover:shadow-md hover:border-primary-500"
    >
      <Image src={imageUrl} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill objectFit="contain" alt="Logo" />
    </Button>
  )
}

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

const WARNING = 'warning'
const GRAY = 'gray'
const PopupProduct = () => {
  const [progress, setProgress] = useState(0)
  const [activeImg, setActiveImg] = useState()
  const handleSlideChange = (data) => {
    setProgress(data?.progress)
  }
  const { togglePopup, openPopup, cardInfo } = useCardPopup((state) => state)
  const ref = useOutsideClick(() => {
    togglePopup(false)
  })
  const [activeColor, setActiveColor] = useState('gray')
  const handleChoseColor = (color) => {
    setActiveColor(color)
  }
  const handleClosePopup = () => {
    togglePopup(false)
  }
  const handleActiveImage = (image) => {
    setActiveImg(image)
  }
  useEffect(() => {
    setActiveImg(cardInfo?.image)
  }, [cardInfo])
  if (!openPopup) {
    return null
  }

  return (
    <div ref={ref} className="bg-gray-0 fixed z-20 top-[12%]  max-w-[70%] rounded">
      <Button onClick={handleClosePopup} isButtonBase className="absolute flex items-center justify-center top-0 -right-16 w-8 h-8 rounded-full bg-gray-700">
        <IoClose style={{ fontSize: '20px', color: '#fff' }} />
      </Button>
      <div className="flex justify-between p-10">
        <div className="pr-7 w-1/2">
          <div className="relative h-[464px] p-6 border border-gray-100 rounded">
            <Image
              src={activeImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              objectFit="contain"
              alt="Logo"
              style={{
                maxWidth: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="relative mt-6">
            <Button
              isButtonBase
              className={cn(
                'image-swiper-button-prev absolute z-10 -left-5 top-[50%] flex items-center justify-center h-12 w-12 rounded-full bg-primary-500 -translate-y-[50%]',
                progress === 0 && 'hidden'
              )}
            >
              <FaArrowLeft style={{ fontSize: '24px', color: '#fff' }} />
            </Button>

            <div className="w-[102%] overflow-hidden">
              <Swiper
                slidesPerView={5}
                spaceBetween={8}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.image-swiper-button-next',
                  prevEl: '.image-swiper-button-prev',
                  disabledClass: 'swiper-button-disabled',
                }}
                modules={[Navigation]}
                onSlideChange={handleSlideChange}
              >
                <SwiperSlide>
                  <CarouselItem imageUrl={macbook} handleActiveImage={() => handleActiveImage(macbook)} />
                </SwiperSlide>
                <SwiperSlide>
                  <CarouselItem
                    imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
                    handleActiveImage={() =>
                      handleActiveImage('https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0')
                    }
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CarouselItem
                    imageUrl={
                      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    handleActiveImage={() =>
                      handleActiveImage(
                        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      )
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CarouselItem
                    imageUrl={
                      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    handleActiveImage={() =>
                      handleActiveImage(
                        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      )
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CarouselItem
                    imageUrl={
                      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    handleActiveImage={() =>
                      handleActiveImage(
                        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      )
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CarouselItem
                    imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
                    handleActiveImage={() =>
                      handleActiveImage('https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0')
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CarouselItem
                    imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
                    handleActiveImage={() =>
                      handleActiveImage('https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0')
                    }
                  />
                </SwiperSlide>
              </Swiper>
              <div className="absolute h-full w-10 bg-gray-0 top-0 bottom-0 -right-10 z-10"></div>
            </div>
            <Button
              isButtonBase
              className={cn(
                'image-swiper-button-next absolute z-10 -right-5 top-[50%] flex items-center justify-center h-12 w-12 rounded-full bg-primary-500 -translate-y-[50%]',
                progress === 1 && 'hidden'
              )}
            >
              <FaArrowRight style={{ fontSize: '24px', color: '#fff' }} />
            </Button>
          </div>
        </div>
        <div className="pl-7 w-1/2">
          <div className="flex gap-1 items-center mb-2">
            {renderStars(cardInfo?.rating?.rate)}
            <span>({cardInfo?.rating?.rate})</span>
            <span className="text-gray-600">({cardInfo?.rating?.count} User feedback)</span>
          </div>
          <span className="text-lg block mb-5">{cardInfo?.title}</span>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 w-1/2">
              Sku:<span className="text-gray-900 font-semibold"> A264671</span>
            </span>
            <span className="text-gray-600 w-1/2">
              Availability: <span className="text-success-500 font-semibold"> A264671</span>
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 w-1/2">
              Brand:<span className="text-gray-900 font-semibold"> Apple</span>
            </span>
            <span className="text-gray-600 w-1/2">
              Category: <span className="text-gray-900 font-semibold"> Electronics Devices</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-secondary-500 text-xl font-semibold">${cardInfo?.price}</span>
            <span className="text-gray-500 text-lg line-through">${cardInfo?.price}</span>
            <span className="ml-2 w-fit text-gray-900 px-2 py-1 bg-warning-400 rounded-sm font-semibold">21% OFF</span>
          </div>
          <hr className="h-px my-6 bg-gray-100 border-0" />
          <div className="flex justify-between mb-2">
            <div className="w-1/2">
              <span className="block mb-2">Color</span>
              <div className="text-gray-600 flex gap-3">
                <div className="relative w-11 h-11">
                  <Button
                    isButtonBase
                    onClick={() => handleChoseColor(GRAY)}
                    className="absolute cursor-pointer h-8 w-8 rounded-full bg-gray-200 translate-x-[20%] translate-y-[20%]"
                  ></Button>
                  {activeColor === GRAY && <span className="absolute -z-10 w-11 h-11 border-[2px] border-primary-500 rounded-full "></span>}
                </div>
                <div className="relative w-11 h-11">
                  <Button
                    isButtonBase
                    onClick={() => handleChoseColor(WARNING)}
                    className="absolute cursor-pointer h-8 w-8 rounded-full bg-warning-200 translate-x-[20%] translate-y-[20%]"
                  ></Button>
                  {activeColor === WARNING && <span className="absolute -z-10 w-11 h-11 border-[2px] border-primary-500 rounded-full "></span>}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Size
              </label>
              <select
                id="countries"
                className="bg-gray-0 border border-gray-100 text-gray-700 text-sm rounded-sm focus:ring-gray-100 focus:border-gray-100 focus-visible:outline-none focus-visible:shadow-none block w-full px-4 py-3 "
              >
                <option selected>Choose your size</option>
                <option value="14-inch">14-inch</option>
                <option value="16-inch">16-inch</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="w-1/2 pr-6">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Memory
              </label>
              <select
                id="countries"
                className="bg-gray-0 border border-gray-100 text-gray-700 text-sm rounded-sm focus:ring-gray-100 focus:border-gray-100 focus-visible:outline-none focus-visible:shadow-none block w-full px-4 py-3 "
              >
                <option selected>Choose your memory</option>
                <option value="8GB">8 GB</option>
                <option value="16GB">16 GB</option>
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Storage
              </label>
              <select
                id="countries"
                className="bg-gray-0 border border-gray-100 text-gray-700 text-sm rounded-sm focus:ring-gray-100 focus:border-gray-100 focus-visible:outline-none focus-visible:shadow-none block w-full px-4 py-3 "
              >
                <option selected>Choose your storage</option>
                <option value="14-inch">256 SSD</option>
                <option value="16-inch">512 SSD</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <QuantityInput />
            <Button
              onClick={() => {}}
              isButtonBase
              className="flex gap-3 uppercase rounded-sm items-center justify-center w-[47%] h-14 bg-primary-500 text-xl text-gray-0"
            >
              Add to card
              <MdOutlineShoppingCart />
            </Button>
            <Button
              onClick={() => {}}
              isButtonBase
              className="flex gap-3 uppercase border-[2px] border-primary-500 rounded-sm items-center justify-center w-[21%] h-14  text-xl text-primary-500"
            >
              Buy now
            </Button>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex gap-6">
              <Button onClick={() => {}} isButtonBase>
                <CiHeart style={{ color: '#475156', fontSize: '24px' }} />
                <span className="text-gray-700 text-sm">Add to Wishlist</span>
              </Button>
              <Button onClick={() => {}} isButtonBase>
                <VscGitCompare style={{ color: '#475156', fontSize: '24px' }} />
                <span className="text-gray-700 text-sm">Add to Compare</span>
              </Button>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-700">Share product:</span>
              <Link href="/">
                <IoCopyOutline />
              </Link>
              <Link href="/">
                <FaFacebook />
              </Link>
              <Link href="/">
                <FaTwitter />
              </Link>
              <Link href="/">
                <FaPinterestP />
              </Link>
            </div>
          </div>
          <div className="border border-gray-100 rounded-sm p-5 mt-6">
            <span>100% Guarantee Safe Checkout</span>
            <div className="flex gap-2 mt-3">
              <FcSteam />
              <FcRegisteredTrademark />
              <FcServiceMark />
              <FcTrademark />
              <FcDribbble />
            </div>
          </div>
        </div>
      </div>
      <Overlay />
    </div>
  )
}

export default PopupProduct
