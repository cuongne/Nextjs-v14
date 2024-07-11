'use client'
import Button from '@/app/(components)/Button'
import Card from '@/components/Card'
import { BestDeal, Hot, Sale, SoldOut } from '@/components/Tag'
import { cn } from '@/utils/lib'
import Image from 'next/image'
import Link from 'next/link'
import xiaomi_bud from 'public/images/home/xiaomi_bud_2.png'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ProductGridReverse = ({ listProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClickTab = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="h-[716px] flex gap-6 items-center justify-center mt-16">
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-900 text-2xl">Computer Accessories</span>
          <div className="flex items-center">
            <Button
              isButtonBase
              onClick={() => handleClickTab(0)}
              className={cn('block cursor-pointer p-2 text-gray-600 text-sm', activeIndex === 0 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              All Product
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(1)}
              className={cn('block cursor-pointer p-2 text-gray-600 text-sm', activeIndex === 1 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Keyboard & Mouse
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(2)}
              className={cn('block cursor-pointer p-2 text-gray-600 text-sm', activeIndex === 2 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Headphone
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(3)}
              className={cn('block cursor-pointer p-2 text-gray-600 text-sm', activeIndex === 3 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Webcam
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(4)}
              className={cn('block cursor-pointer p-2 text-gray-600 text-sm', activeIndex === 4 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Printer
            </Button>
            <Link href="/products" className="ml-2" passHref target="_blank">
              <span className="flex items-center gap-2 text-primary-500">
                Browse All Product <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {listProduct?.map((product) => (
            <Card key={product?.id} data={product} className="h-[320px]" haveRating />
          ))}
        </div>
      </div>
      <div className="w-[28%] h-full ">
        <div className="flex flex-col justify-center items-center bg-warning-200 p-8 mb-6 rounded">
          <div className="relative h-[108px] w-full">
            <Image
              src={xiaomi_bud}
              alt="Logo"
              width="auto"
              height="auto"
              style={{
                position: 'absolute',
                right: 50,
                top: -10,
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
          <span className="text-gray-900 text-2xl text-center mb-1 font-semibold">Xiaomi True Wireless Earbuds</span>
          <span className="text-gray-700 text-center">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</span>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-gray-700">Only for:</span>
            <span className="bg-gray-0 rounded-sm font-semibold  text-gray-900 py-1 px-3">$299 USD</span>
          </div>
          <Button isButtonBase className="flex gap-3 rounded-sm items-center justify-center w-60 h-14 bg-primary-500 text-xl text-gray-0 mt-9">
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center bg-secondary-800 px-6 py-9 rounded">
          <span className="bg-secondary-700 py-1 px-3 rounded-sm mb-3 text-gray-0">SUMMER SALES</span>
          <span className="text-2xl text-gray-0 mb-3">37% DISCOUNT</span>
          <span className="text-gray-0">
            only for <span className="text-warning-500">SmartPhone</span> product.
          </span>
          <Button isButtonBase className="flex gap-3 rounded-sm items-center justify-center w-60 h-14 bg-secondary-500 text-xl text-gray-0 mt-6">
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductGridReverse
