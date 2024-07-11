'use client'
import Button from '@/app/(components)/Button'
import Image from 'next/image'
import new_img from 'public/images/home/new.png'
import { BsChatDots } from 'react-icons/bs'
import { CiCalendarDate } from 'react-icons/ci'
import { FaArrowRight, FaRegUserCircle } from 'react-icons/fa'

const News = () => {
  return (
    <div className="relative py-16 mt-16">
      <div className="absolute z-[-1] w-[200%] height-[100%] top-0 right-0 bottom-0 left-[-50%] bg-gray-50" />
      <span className='text-center font-semibold block mb-10 w-full text-3xl'>Latest News</span>
      <div className="flex justify-between bg-gray-50  ">
        <div className="bg-gray-0 p-8 flex flex-col gap-6 rounded border border-gray-100 max-w-[31%]">
          <Image
            src={new_img}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div>
            <div className="flex gap-4">
              <span className="flex gap-[6px] items-center text-gray-600">
                <FaRegUserCircle style={{ color: '#FA8232', fontSize: '18px' }} />
                Kristin
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <CiCalendarDate style={{ color: '#FA8232', fontSize: '18px' }} />
                19Dec, 2013
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <BsChatDots style={{ color: '#FA8232', fontSize: '18px' }} />
                453
              </span>
            </div>
          </div>
          <span className="text-lg">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
          <span className="text-gray-700">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.
          </span>
          <Button
            onClick={() => console.log('clicked')}
            isButtonBase
            className="flex gap-3 rounded-sm font-semibold uppercase items-center justify-center w-48 h-14 text-lg text-primary-500 border-[2px] border-primary-100"
          >
            Read more <FaArrowRight />
          </Button>
        </div>
        <div className="bg-gray-0 p-8 flex flex-col gap-6 rounded border border-gray-100 max-w-[33%]">
          <Image
            src={new_img}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div>
            <div className="flex gap-4">
              <span className="flex gap-[6px] items-center text-gray-600">
                <FaRegUserCircle style={{ color: '#FA8232', fontSize: '18px' }} />
                Kristin
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <CiCalendarDate style={{ color: '#FA8232', fontSize: '18px' }} />
                19Dec, 2013
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <BsChatDots style={{ color: '#FA8232', fontSize: '18px' }} />
                453
              </span>
            </div>
          </div>
          <span className="text-lg">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
          <span className="text-gray-700">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.
          </span>
          <Button
            onClick={() => console.log('clicked')}
            isButtonBase
            className="flex gap-3 rounded-sm font-semibold uppercase items-center justify-center w-48 h-14 text-lg text-primary-500 border-[2px] border-primary-100"
          >
            Read more <FaArrowRight />
          </Button>
        </div>
        <div className="bg-gray-0 p-8 flex flex-col gap-6 rounded border border-gray-100 max-w-[33%]">
          <Image
            src={new_img}
            alt="banner"
            width="auto"
            height="auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div>
            <div className="flex gap-4">
              <span className="flex gap-[6px] items-center text-gray-600">
                <FaRegUserCircle style={{ color: '#FA8232', fontSize: '18px' }} />
                Kristin
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <CiCalendarDate style={{ color: '#FA8232', fontSize: '18px' }} />
                19Dec, 2013
              </span>
              <span className="flex gap-[6px] items-center text-gray-600">
                <BsChatDots style={{ color: '#FA8232', fontSize: '18px' }} />
                453
              </span>
            </div>
          </div>
          <span className="text-lg">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
          <span className="text-gray-700">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.
          </span>
          <Button
            onClick={() => console.log('clicked')}
            isButtonBase
            className="flex gap-3 rounded-sm font-semibold uppercase items-center justify-center w-48 h-14 text-lg text-primary-500 border-[2px] border-primary-100"
          >
            Read more <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default News
