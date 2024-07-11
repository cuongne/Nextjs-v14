'use client'
import BigCard from '@/components/BigCard'
import Card from '@/components/Card'
import { Hot, Sale, SoldOut } from '@/components/Tag'
import { useCountdown } from '@/hooks/useCountDown'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000
const NOW_IN_MS = new Date().getTime()

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS
const Title = () => {
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays)
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">Best Deals</span>
        <span className="text-sm">Deals ends in</span>
        <span className="flex gap-2 px-3 p-2 bg-warning-300 text-gray-900 font-medium min-w-[150px]">
          <span className="min-w-[18px]">{days}d</span>
          <span>:</span>
          <span className="min-w-[28px]">{hours}h</span>
          <span>:</span>
          <span className="min-w-[28px]">{minutes}m</span>
          <span>:</span>
          <span className="min-w-[28px]">{seconds}s</span>
        </span>
      </div>
    </div>
  )
}

const Section = ({ resultTop, bigItem, resultBottom }) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-16">
        <Title />
        <Link href="/products" passHref target="_blank">
          <span className="flex items-center gap-2 text-secondary-500">
            Browse All Product <FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="flex border border-solid border-gray-100 mt-6">
        <BigCard product={bigItem} />
        <div>
          <div className="flex border-b border-solid border-gray-100">
            {resultTop?.map((item) => (
              <Card
                key={item?.id}
                className="w-[233px]"
                data={item}
                tag={[
                  { key: 'hot', component: <Hot /> },
                  { key: 'sale', component: <Sale percent={50} /> },
                ]}
              />
            ))}
          </div>
          <div className="flex">
            {resultBottom?.map((item) => (
              <Card className="w-[233px]" key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
