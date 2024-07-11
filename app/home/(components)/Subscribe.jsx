'use client'
import Button from '@/app/(components)/Button'
import { FaAmazon, FaArrowRight, FaGoogle } from 'react-icons/fa'
import { FaBookQuran } from 'react-icons/fa6'
import { SiDell, SiTesla } from 'react-icons/si'

const Subscribe = () => {
  const handleClickButton = () => {
    console.log('subscribe')
  }
  return (
    <div className="relative py-16">
      <div className="absolute z-[-1] w-[200%] height-[100%] top-0 right-0 bottom-0 left-[-50%] bg-secondary-700" />
      <div className="flex flex-col gap-3 items-center">
        <span className="text-gray-0 font-semibold text-2xl">Subscribe to our newsletter</span>
        <span className="max-w-xl text-center text-gray-200">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </span>
        <div className="flex gap-2 relative mt-5">
          <input
            className="w-[624px] h-16 px-7 py-3.5 bg-white rounded-sm shadow justify-start items-start gap-2 inline-flex focus:outline-none focus:ring-0"
            placeholder="Email address"
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2">
            <Button
              onClick={handleClickButton}
              isButtonBase
              className="flex gap-3 uppercase items-center justify-center w-44 h-12 bg-primary-500 text-base text-gray-0"
            >
              Subscribe <FaArrowRight />
            </Button>
          </span>
        </div>
        <div className="h-[1px] w-1/3 bg-gray-400 mt-5"></div>
        <div className='flex gap-12 mt-3'>
          <FaGoogle style={{ fontSize: '30px', color: '#C9CFD2' }} />
          <FaAmazon style={{ fontSize: '30px', color: '#C9CFD2' }} />
          <SiTesla style={{ fontSize: '30px', color: '#C9CFD2' }} />
          <SiDell  style={{ fontSize: '30px', color: '#C9CFD2' }} />
          <FaBookQuran  style={{ fontSize: '30px', color: '#C9CFD2' }} />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
