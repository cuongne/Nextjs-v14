'use client'
import Button from '@/app/(components)/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import macbook from 'public/images/home/macbook.png'

const BigBanner = () => {
  const handleClickButton = () => {
    console.log('first button clicked')
  }
  return (
    <div className="bg-primary-100 p-16 flex justify-between mt-16 relative">
      <div className="flex flex-col gap-3">
        <Link href="/" className="text-gray-0 text-lg bg-secondary-500 px-3 py-2 rounded-sm w-fit">
          SAVE UP TO $200.00
        </Link>
        <span className="text-gray-900 text-3xl block font-bold max-w-[424px]">Macbook Pro</span>
        <span className="text-gray-700 max-w-[424px]">Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</span>
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
        src={macbook}
        alt="Logo"
        width="auto"
        height="auto"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          maxWidth: '90%',
          height: '100%',
        }}
      />
      <div className="absolute flex items-center justify-center top-[10%] right-[35%] rounded-full bg-gray-0 w-24 h-24 p-1">
        <div className="flex items-center justify-center rounded-full bg-primary-200 w-full h-full">
          <span className="text-xl">$1299</span>
        </div>
      </div>
    </div>
  )
}

export default BigBanner
