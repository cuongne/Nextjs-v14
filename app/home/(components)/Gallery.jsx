'use client'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../../(components)/Button'
import Image from "next/image"
import xbox from 'public/images/home/xbox.png'
import mobile from 'public/images/home/mobile.png'
import xiaomi_bud from 'public/images/home/xiaomi_bud.png'

const Gallery = () => {
  const handleClickButton = (e) => {
    console.log('click')
  }
  return (
    <div className="flex justify-between">
      <div className="w-full max-w-[818px] bg-gray-50 flex items-center justify-center p-14 rounded-md">
        <div>
          <span className="text-secondary-500 flex gap-2 items-center">
            <span className="block w-6 h-[2px] bg-secondary-500" /> THE BEST PLACE TO PLAY
          </span>
          <span className="block text-gray-900 text-4xl font-bold mt-2">Xbox Consoles</span>
          <span className="block text-gray-700 w-80 mt-2">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</span>
          <Button
            onClick={handleClickButton}
            isButtonBase
            className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-4"
          >
            Shop Now
            <FaArrowRight />
          </Button>
        </div>
        <div className="relative">
          <Image
            src={xbox}
            alt="Logo"
            width="auto"
            height="auto"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div className="absolute flex items-center justify-center top-0 right-0 rounded-full bg-gray-0 w-24 h-24 p-1">
            <div className="flex items-center justify-center rounded-full bg-secondary-500 w-full h-full">
              <span className="font-bold text-xl text-gray-0 ">$299</span>
            </div>
          </div>
        </div>
    </div>
      <div className="flex flex-col w-full max-w-[424px] justify-between">
        <div className="bg-gray-900 h-[248px] p-10 relative rounded-md overflow-hidden">
          <span className="block text-warning-500 max-w-[160px]">Summer Sales</span>
          <span className="block text-gray-0 text-2xl max-w-[160px]">New Google Pixel 6 Pro</span>
          <Button
            onClick={handleClickButton}
            isButtonBase
            className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-4"
          >
            Shop Now
            <FaArrowRight />
          </Button>
          <div className="absolute max-w-[200px] right-0 bottom-0">
            <Image
              src={mobile}
              alt="Logo"
              width="auto"
              height="auto"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <span className="absolute top-5 right-5 px-4 py-2 bg-warning-400 font-bold">29% OFF</span>
        </div>
        <div className="flex justify-between bg-gray-50 h-[248px] p-10 relative rounded-md overflow-hidden">
          <Image
            src={xiaomi_bud}
            alt="Logo"
            width="auto"
            height="auto"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <div>
            <span className="block max-w-[140px] mb-1 text-gray-900 font-bold text-xl">Xiaomi FlipBuds Pro</span>
            <span className="block font-bold text-xl text-secondary-500">$299</span>
            <Button
              onClick={handleClickButton}
              isButtonBase
              className="flex gap-3 rounded-md items-center justify-center w-48 h-14 bg-primary-500 text-xl text-gray-0 mt-4"
            >
              Shop Now
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery
