'use client'
import Button from '@/app/(components)/Button'
import { cn } from '@/utils/lib'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CarouselItem = ({ imageUrl, label }) => {
  return (
    <div className="cursor-pointer w-52 h-56 flex items-center justify-center flex-col border border-solid border-gray-100 rounded transition-all duration-200 hover:shadow-md hover:border-secondary-300">
      <div className="relative h-36 w-36">
        <Image src={imageUrl} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill objectFit="contain" alt="Logo" />
      </div>
      <span className="text-gray-900">{label}</span>
    </div>
  )
}

function Carousel() {
  const [progress, setProgress] = useState(0)
  const handleSlideChange = (data) => {
    setProgress(data?.progress)
  }
  return (
    <div className="relative">
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
          spaceBetween={30}
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
            <CarouselItem
              imageUrl={
                'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              label="Computer & Laptop"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'} label="Console" />
          </SwiperSlide>

          <SwiperSlide>
            <CarouselItem
              imageUrl={
                'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              label="Headphones"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              imageUrl={
                'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              label="Accessories"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              imageUrl={
                'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              label="Camera & Photo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'} label="TV & Homes" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
              label="Computer & Laptop"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
              label="Computer & Laptop"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              imageUrl={'https://th.bing.com/th/id/R.1cb6155ef8dd304322a62f644b292f84?rik=H%2f8WtexnYKe%2fUA&pid=ImgRaw&r=0'}
              label="Computer & Laptop"
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
  )
}

export default Carousel
