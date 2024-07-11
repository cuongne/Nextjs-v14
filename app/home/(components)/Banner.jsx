'use client'
import Button from '@/app/(components)/Button'
import Image from 'next/image'
import Link from 'next/link'
import banner from 'public/images/home/banner_1.png'
import banner2 from 'public/images/home/banner2.png'
import { FaArrowRight } from 'react-icons/fa'
const Banner = () => {
  const handleClickButton = () => {
    console.log('handleClickButton')
  }
  return (
    <div className="flex gap-6 mt-16">
      <div className="bg-gray-50 p-11 flex gap-10  w-[50%] rounded">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-gray-0 text-lg bg-secondary-500 px-3 py-2 rounded-sm w-fit">
            INTRODUCING
          </Link>
          <span className="text-gray-900 text-3xl block font-bold max-w-[280px]">New Apple Homepod Mini</span>
          <span className="text-gray-700 max-w-[280px]">Jam-packed with innovation, HomePod mini delivers unexpectedly.</span>
          <Button
            onClick={handleClickButton}
            isButtonBase
            className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-2"
          >
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
        <Image
          src={banner}
          alt="banner"
          width="auto"
          height="auto"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="bg-gray-900 p-11 flex gap-10 w-[50%] relative rounded">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-gray-900 font-medium text-lg bg-warning-400 px-3 py-2 rounded-sm w-fit">
            INTRODUCING NEW
          </Link>
          <span className="text-gray-0 text-3xl block font-bold max-w-[290px]">Xiaomi Mi 11 Ultra 12GB+256GB</span>
          <span className="text-gray-300 max-w-[290px]">*Data provided by internal laboratories. Industry measurement.</span>
          <Button
            onClick={handleClickButton}
            isButtonBase
            className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-2"
          >
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={banner2}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="absolute flex items-center justify-center top-4 right-4 rounded-full w-24 h-24 p-1">
          <div className="flex items-center justify-center rounded-full bg-secondary-500 w-full h-full">
            <span className="font-semibold text-lg text-gray-0 ">$590</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
