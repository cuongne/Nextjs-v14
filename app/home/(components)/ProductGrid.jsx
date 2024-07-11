'use client'
import Button from '@/app/(components)/Button'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import products from 'public/images/home/products.png'
import { BestDeal, Hot, Sale, SoldOut } from '@/components/Tag'
import Card from '@/components/Card'
import Link from 'next/link'
import { cn } from '@/utils/lib'
import { useState } from 'react'

const ProductGrid = ({ listProduct }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClickTab = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="h-[716px] flex gap-6 items-center justify-center mt-16">
      <div className="bg-[url('/images/home/bg_products.png')] w-[27%] h-full">
        <div className="flex flex-col justify-between items-center px-4 pt-9 pb-2">
          <span className="block text-danger-600 text-xl">COMPUTER & ACCESSORIES</span>
          <span className="block text-gray-900 text-4xl mt-2">32% Discount</span>
          <span className="block text-gray-700 mt-3">For all ellectronics products</span>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-[14px]">Offers ends in:</span>
            <span className="inline-block text-gray-900 px-3 py-1 bg-gray-0 text-sm text-nowrap">ENDS OF CHRISTMAS</span>
          </div>
          <Button isButtonBase className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-9">
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
        <div className="relative w-full h-[428px]">
          <Image
            src={products}
            alt="Logo"
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-900 text-2xl">Featured Products</span>
          <div className="flex items-center">
            <Button
              isButtonBase
              onClick={() => handleClickTab(0)}
              className={cn('block cursor-pointer p-2 text-gray-600', activeIndex === 0 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              All Product
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(1)}
              className={cn('block cursor-pointer p-2 text-gray-600', activeIndex === 1 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Smart Phone
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(2)}
              className={cn('block cursor-pointer p-2 text-gray-600', activeIndex === 2 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Laptop
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(3)}
              className={cn('block cursor-pointer p-2 text-gray-600', activeIndex === 3 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              Headphone
            </Button>
            <Button
              isButtonBase
              onClick={() => handleClickTab(4)}
              className={cn('block cursor-pointer p-2 text-gray-600', activeIndex === 4 && 'text-gray-900 border-b-2 border-primary-500 text-bold')}
            >
              TV
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
    </div>
  )
}

export default ProductGrid
