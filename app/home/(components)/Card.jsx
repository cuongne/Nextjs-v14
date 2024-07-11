
import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { TfiCup } from 'react-icons/tfi'
import { IoCardOutline } from 'react-icons/io5'
import { CiHeadphones } from 'react-icons/ci'

const Card = () => {
  return (
    <div className="flex justify-between border border-solid border-gray-100 p-4 mt-6">
      <div className="flex items-center justify-center gap-4 p-4">
        <CiDeliveryTruck style={{ fontSize: '40px' }} />
        <div className="relative">
          <span className="block text-gray-900">Fasted Delivery</span>
          <span className="block text-gray-600 text-sm">Delivery in 24/H</span>
          <span className="absolute right-[-50%] top-0 h-full w-[1px] bg-gray-100" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <TfiCup style={{ fontSize: '40px' }} />
        <div className="relative">
          <span className="block text-gray-900">24 Hours Return</span>
          <span className="block text-gray-600 text-sm">100% money-back guarantee</span>
          <span className="absolute right-[-35%] top-0 h-full w-[1px] bg-gray-100" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <IoCardOutline style={{ fontSize: '40px' }} />
        <div className="relative">
          <span className="block text-gray-900">Secure Payment</span>
          <span className="block text-gray-600 text-sm">Your money is safe</span>
          <span className="absolute right-[-50%] top-0 h-full w-[1px] bg-gray-100" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <CiHeadphones style={{ fontSize: '40px' }} />
        <div>
          <span className="block text-gray-900">Support 24/7</span>
          <span className="block text-gray-600 text-sm">Live contact/message</span>
        </div>
      </div>
    </div>
  )
}

export default Card
