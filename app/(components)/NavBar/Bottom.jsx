'use client'
import { CiHeadphones } from 'react-icons/ci'
import { FiPhoneOutgoing } from 'react-icons/fi'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { TfiReload } from 'react-icons/tfi'
import DropDown from '../DropDown'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { cn } from '@/utils/lib'
import Image from 'next/image'
import Link from 'next/link'
import product from 'public/images/home/product.png'
import xiaomi_bud from 'public/images/home/xiaomi_bud_2.png'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import Button from '../Button'

const PHONE = '+84937959503'

const SubmenuLvOne = () => {
  return (
    <div className="flex gap-5 border border-gray-100 bg-gray-0 rounded  p-5 w-full ">
      <div className="flex flex-col  w-40">
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          All
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          iPhone
        </Link>
        <Link href="/" className="flex gap-1  items-center justify-between text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Sansung
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Realme
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Xiaomi
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Oppo
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Vivo
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          OnePlus
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Huawei
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Infinix
        </Link>
        <Link href="/" className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
          Tecno
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-[312px]">
        <span className="font-lg">FEATURED PHONES</span>
        <Link href="/" className="flex gap-3 p-4 rounded border border-gray-100 hover:translate-y-[-2px] hover:shadow-md duration-75">
          <Image
            src={product}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div className="flex flex-col gap-2">
            <span className="line-clamp-2">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</span>
            <span className="text-secondary-500">$1,500</span>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 p-4 rounded border border-gray-100 hover:translate-y-[-2px] hover:shadow-md duration-75">
          <Image
            src={product}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div className="flex flex-col gap-2">
            <span className="line-clamp-2">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</span>
            <span className="text-secondary-500">$1,500</span>
          </div>
        </Link>
        <Link href="/" className="flex gap-3 p-4 rounded border border-gray-100 hover:translate-y-[-2px] hover:shadow-md duration-75">
          <Image
            src={product}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div className="flex flex-col gap-2">
            <span className="line-clamp-2">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</span>
            <span className="text-secondary-500">$1,500</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center bg-warning-200 p-8 mb-6 rounded max-w-[312px]">
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
        <span className="text-gray-900 text-2xl text-center mb-1 font-semibold">21% Discount</span>
        <span className="text-gray-700 text-center">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</span>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-gray-700">Only for:</span>
          <span className="bg-gray-0 rounded-sm font-semibold  text-gray-900 py-1 px-3">$99 USD</span>
        </div>
        <Button isButtonBase className="flex gap-3 rounded-sm items-center justify-center w-60 h-14 bg-primary-500 text-xl text-gray-0 mt-9">
          Shop Now
          <FaArrowRight />
        </Button>
      </div>
    </div>
  )
}

const Bottom = ({ listCategories }) => {
  const [active, setActive] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const handleClick = () => {
    setActive((active) => !active)
  }
  const ref = useOutsideClick((e) => {
    setActive(false)
  })
  const handleEnterMouse = (open) => {
    setOpenSubMenu(open)
  }
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-6">
        <DropDown
          classNameChild="top-12"
          title={
            <div
              ref={ref}
              role="button"
              onClick={handleClick}
              className={cn('flex items-center gap-3  h-12 py-[14px] px-6 bg-gray-50', active && 'bg-primary-500')}
            >
              <span className={cn('text-gray-900 font-semibold', active && 'text-gray-0')}>All Category </span>
              <MdKeyboardArrowDown style={{ fontSize: '14px', color: active ? '#fff' : '#000' }} />
            </div>
          }
          isButtonBase
          disabledRipple
        >
          <div className="relative flex flex-col bg-gray-0 py-3 w-60 border border-gray-100 rounded translate-y-2">
            <Link
              onMouseEnter={() => handleEnterMouse(true)}
              href="/"
              className={cn(
                'flex gap-1 items-center justify-between text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900',
                openSubMenu && 'bg-gray-50 text-gray-900'
              )}
            >
              Smart Phone <IoIosArrowForward />
            </Link>
            {listCategories?.length > 0 &&
              listCategories.map((item) => (
                <Link key={item} href="/" onMouseEnter={() => handleEnterMouse(false)} className="text-gray-600 py-2 px-4 hover:bg-gray-50 hover:text-gray-900">
                  {item}
                </Link>
              ))}
            {openSubMenu && (
              <div className="absolute right-0 top-0 -z-10 translate-x-[102%]">
                <SubmenuLvOne />
              </div>
            )}
          </div>
        </DropDown>
        <Button isButtonBase className="flex gap-1 items-center justify-center text-gray-600 font-medium">
          <SlLocationPin />
          Track order
        </Button>
        <Button isButtonBase className="flex gap-1 items-center justify-center text-gray-600 font-medium">
          <TfiReload />
          Compare
        </Button>
        <Button isButtonBase className="flex gap-1 items-center justify-center text-gray-600 font-medium">
          <CiHeadphones />
          Customer Support
        </Button>
        <Button isButtonBase className="flex gap-1 items-center justify-center text-gray-600 font-medium">
          <IoInformationCircleOutline />
          Need Help
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        <FiPhoneOutgoing />
        <a className="text-gray-900" href={`tel:${PHONE}`}>
          0937959503
        </a>
      </div>
    </div>
  )
}

export default Bottom
