import WrapperMaxWidth from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/images/footer/logo.png'
import { FaApple, FaArrowRight, FaGooglePlay } from 'react-icons/fa'

const TopCategory = () => {
  return (
    <div className="w-[16%]">
      <p className="text-gray-0 text-xl mb-2 uppercase">Top Category</p>
      <div className="flex flex-col gap-1">
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Computer & Laptop
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          SmartPhone
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Headphone
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Accessories
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Camera & Photo
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          TV & Homes
        </Link>
        <Link href="/" className="flex items-center  gap-2 text-warning-600  py-1">
          Browse All Product <FaArrowRight style={{ fontSize: '16px', color: '#EBC80C' }} />
        </Link>
      </div>
    </div>
  )
}
const QuickLinks = () => {
  return (
    <div className="w-[16%]">
      <p className="text-gray-0 text-xl mb-2 uppercase">Quick links</p>
      <div className="flex flex-col gap-1">
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Shop Product
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Shoping Cart
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Wishlist
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Compare
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Track Order
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          Customer Help
        </Link>
        <Link href="/" className="text-gray-400 py-1 transition-colors hover:text-gray-600">
          About Us
        </Link>
      </div>
    </div>
  )
}

const InfoCompany = () => (
  <div className="w-[20%]">
    <div className="flex gap-2 mb-6">
      <Image
        src={logo}
        alt="Logo"
        width={48}
        height={48}
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
      />
      <span className="text-[32px] text-gray-0 font-bold">CLICON</span>
    </div>
    <div className="flex flex-col gap-1 mb-3">
      <span className="text-base text-gray-500">Customer Supports:</span>
      <span className="text-2xl text-gray-0">(629) 555-0129</span>
    </div>
    <span className="block text-gray-300 text-lg">4517 Washington Ave. </span>
    <span className="block text-gray-300 text-lg">Manchester, Kentucky 39495</span>
    <span className="block text-gray-0 text-lg mt-3">xxx@gmail.com</span>
  </div>
)

const DownloadContent = () => (
  <div>
    <p className="text-gray-0 text-xl uppercase mb-4">Download App</p>
    <Link href="https://play.google.com/store/games?device=windows" className="mt-3 py-5 px-8 bg-gray-800 flex items-center gap-4 rounded">
      <FaGooglePlay style={{ fontSize: '32px', color: '#fff' }} />
      <div className="flex flex-col gap-1">
        <span className="text-gray-0 truncate">Get it now</span>
        <span className="text-gray-0 font-medium text-lg truncate">Google Play</span>
      </div>
    </Link>
    <Link href="https://play.google.com/store/games?device=windows" className="mt-3 py-5 px-8 bg-gray-800 flex items-center gap-4 rounded">
      <FaApple style={{ fontSize: '32px', color: '#fff' }} />
      <div className="flex flex-col gap-1">
        <span className="text-gray-0 truncate">Get it now</span>
        <span className="text-gray-0 font-medium text-lg truncate">App Store</span>
      </div>
    </Link>
  </div>
)
const PopularTag = () => (
  <div className="w-[25%]">
    <p className="text-gray-0 text-xl uppercase mb-4">Popular Tag</p>
    <div className="flex gap-2 flex-wrap">
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Game
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        iPhone
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        TV
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Asus Laptops
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Macbook
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        SSD
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Graphics Card
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Power Bank
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Smart TV
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Speaker
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Tablet
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Microwave
      </Link>
      <Link href="/" className="text-gray-0 py-2 px-3 rounded-sm border border-gray-800 transition-colors hover:border-gray-0 hover:bg-gray-800">
        Samsung
      </Link>
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className="mx-auto justify-between items-center pt-16 pb-6 bg-gray-900">
      <WrapperMaxWidth>
        <div className="flex gap-6">
          <InfoCompany />
          <TopCategory />
          <QuickLinks />
          <DownloadContent />
          <PopularTag />
        </div>
      </WrapperMaxWidth>
    </footer>
  )
}

export default Footer
