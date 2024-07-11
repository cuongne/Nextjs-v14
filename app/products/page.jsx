import WrapperMaxWidth from '@/components'
import { BreadCrumb } from '@/components/BreadCrumb'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'

const Products = () => {
  return (
    <div className='bg-gray-50 w-full py-6'>
      <WrapperMaxWidth>
        <BreadCrumb
          listBreadCrumb={[
            {
              data: (
                <span className="flex gap-2 items-center">
                  <IoHomeOutline />
                  Home
                </span>
              ),
              key: 'home',
            },
            {
              data: 'Shop',
              key: 'shop',
            },
            {
              data: <span className="text-secondary-500">Electronics Devices</span>,
              key: 'shop',
            },
          ]}
        />
      </WrapperMaxWidth>
    </div>
  )
}

export default Products
