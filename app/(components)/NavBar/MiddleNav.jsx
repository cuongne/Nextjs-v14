'use client'
import { CionIcon } from '../IconSvg'
import { CgShoppingCart } from 'react-icons/cg'
import { LuHeart } from 'react-icons/lu'
import { GoPerson } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import DropDown from '../DropDown'
import Button from '../Button'
import { FaArrowRight } from 'react-icons/fa'
import { signIn, signOut } from '@/auth/helpers'

const MiddleNav = ({ session }) => {
  return (
    <>
      <div className="flex gap-2">
        <CionIcon />
        <span className="text-[36px] text-gray-0 font-bold">CLICON</span>
      </div>
      <div className="flex gap-2 relative">
        <input
          className="w-[646px] h-12 px-5 py-3.5 bg-white rounded-sm shadow justify-start items-start gap-2 inline-flex focus:outline-none focus:ring-0"
          placeholder="Search for anything..."
        />
        <span className="absolute top-1/2 right-4 -translate-y-1/2">
          <IoSearchOutline style={{ fontSize: '20px', color: '#191C1F' }} />
        </span>
      </div>
      <div className="flex gap-6">
        <div className="relative cursor-pointer">
          <CgShoppingCart style={{ fontSize: '24px', color: '#fff' }} />
          <span className="absolute bg-gray-0 rounded-full top-[-8px] right-[-8px] w-5 h-5 border-r-[50%] cursor-pointer text-secondary-700 text-xs flex items-center justify-center">
            2
          </span>
        </div>
        <div className="cursor-pointer">
          <LuHeart style={{ fontSize: '24px', color: '#fff' }} />
        </div>
        <div className="cursor-pointer">
          <DropDown classNameChild="w-[424px] left-[-400px] top-10 shadow" title={<GoPerson style={{ fontSize: '24px', color: '#fff' }} />}>
            {session ? (
              <div className="rounded-sm bg-gray-0 p-8">
                <span className="text-gray-700">Hi {session?.user?.name}</span>
                <Button
                  onClick={async () => {
                    await signOut()
                  }}
                  isButtonBase
                  className="flex gap-3 mt-5 uppercase rounded-sm items-center justify-center w-full h-12 bg-primary-500 text-base text-gray-0"
                >
                  logout
                </Button>
              </div>
            ) : (
              <div className="rounded-sm bg-gray-0 p-8">
                <span className="block text-xl mb-5 text-center font-semibold">Sign in to your account</span>
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-sm" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    className="w-full h-11 px-4 border border-gray-100  py-3.5 bg-white rounded-sm  justify-start items-start gap-2 inline-flex focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-sm" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full h-11 px-4 border border-gray-100  py-3.5 bg-white rounded-sm  justify-start items-start gap-2 inline-flex focus:outline-none focus:ring-0"
                  />
                  <Button className="text-secondary-500 text-sm absolute right-0 top-0" isButtonBase onClick={() => {}}>
                    Forget Password
                  </Button>
                </div>
                <Button
                  onClick={async () => {
                    await signIn('credentials', { username: 'heelo', password: 'password' })
                  }}
                  isButtonBase
                  className="flex gap-3 mt-5 uppercase rounded-sm items-center justify-center w-full h-12 bg-primary-500 text-base text-gray-0"
                >
                  login <FaArrowRight />
                </Button>
                <Button
                  onClick={async () => {
                    await signIn('github', { callbackUrl: '/' })
                  }}
                  isButtonBase
                  className="flex gap-3 mt-5 uppercase rounded-sm items-center justify-center w-full h-12 bg-secondary-500 text-base text-gray-0"
                >
                  Github
                </Button>
                <Button
                  onClick={async () => {
                    await signIn('google', { callbackUrl: '/' })
                  }}
                  isButtonBase
                  className="flex gap-3 mt-5 uppercase rounded-sm items-center justify-center w-full h-12 bg-warning-500 text-base text-gray-0"
                >
                  Google
                </Button>
                <div className="h-[1px] w-full bg-gray-100 relative mt-5">
                  <span className="bg-gray-0 absolute right-1/2 -top-[10px] translate-x-1/2 px-2 text-gray-500 text-sm">Don’t have account</span>
                </div>
                <Button
                  onClick={() => {}}
                  isButtonBase
                  className="flex gap-3 mt-5 border-[2px] border-primary-100 uppercase rounded-sm items-center justify-center w-full h-12 font-semibold text-base text-primary-500"
                >
                  Create account
                </Button>
              </div>
            )}
          </DropDown>
        </div>
      </div>
    </>
  )
}

export default MiddleNav
