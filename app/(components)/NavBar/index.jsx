import WrapperMaxWidth from '@/components'
import Link from 'next/link'
import { ImFacebook, ImFire, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Button from '../Button'
import DropDown from '../DropDown'
import Bottom from './Bottom'
import MiddleNav from './MiddleNav'
import { FaCheck, FaFlagUsa } from 'react-icons/fa'
import { auth } from '@/auth'
async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  return res.json()
}
const NavBar = async () => {
  const result = await getCategories()
  const session = await auth()
  return (
    <header>
      <div className="bg-secondary-700">
        <WrapperMaxWidth>
          <div className="flex justify-between items-center py-3">
            <span className="text-gray-0">Welcome to Clicon online eCommerce store. </span>
            <div className="flex gap-3 items-center">
              <span className="text-gray-0">Follow us:</span>
              <Link href="https://twitter.com" passHref target="_blank">
                <ImTwitter style={{ fontSize: '16px', color: '#fff' }} />
              </Link>
              <Link href="https://twitter.com" passHref>
                <ImFacebook style={{ fontSize: '16px', color: '#fff' }} />
              </Link>
              <Link href="https://twitter.com" passHref>
                <ImInstagram style={{ fontSize: '16px', color: '#fff' }} />
              </Link>
              <Link href="https://twitter.com" passHref>
                <ImYoutube style={{ fontSize: '16px', color: '#fff' }} />
              </Link>
              <Link href="https://twitter.com" passHref>
                <ImFire style={{ fontSize: '16px', color: '#fff' }} />
              </Link>
              <div className="w-[1px] h-7 border-r border-solid  border-gray-0 opacity-20" />
              <div className="flex gap-[6px] items-center">
                <DropDown
                  title={
                    <div className="flex gap-1 items-center p-1">
                      <span className="text-gray-0">Eng</span>
                      <MdKeyboardArrowDown style={{ fontSize: '12px', color: '#fff' }} />
                    </div>
                  }
                >
                  <div className="rounded-sm bg-gray-0 py-2">
                    <Button isButtonBase className="flex justify-between items-center px-4 gap-6">
                      <span className="flex gap-2 items-center">
                        <FaFlagUsa />
                        English
                      </span>
                      <FaCheck style={{ color: '#FA8232' }} />
                    </Button>
                  </div>
                </DropDown>
                <Button isButtonBase>
                  <span className="text-gray-0">USD</span>
                </Button>
              </div>
            </div>
          </div>
        </WrapperMaxWidth>
        <span className="absolute h-[1px] w-full bg-secondary-600" />
        <WrapperMaxWidth>
          <div className="container mx-auto  flex justify-between items-center py-3">
            <MiddleNav session={session} />
          </div>
        </WrapperMaxWidth>
      </div>
      <WrapperMaxWidth>
        <div className="w-full">
          <div className="container relative mx-auto  flex justify-between items-center py-3">
            <Bottom listCategories={result} />
          </div>
        </div>
      </WrapperMaxWidth>
      <span className="absolute h-[1px] w-full bg-gray-100" />
    </header>
  )
}

export default NavBar
