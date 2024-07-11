import Button from '@/app/(components)/Button'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const QuantityInput = () => {
  const [value, setValue] = useState(0)
  const handleDecrease = () => {
    setValue((value) => {
      if (value - 1 < 0) {
        return 0
      }
      return value - 1
    })
  }
  const handleIncrease = () => {
    setValue((value) => {
      return value + 1
    })
  }
  return (
    <div className="relative w-[25%]">
      <Button isButtonBase onClick={handleDecrease} className="absolute left-[15px] top-1/2 -translate-y-1/2">
        <FaMinus />
      </Button>
      <input
        value={value}
        className="w-full h-14 px-5 py-3.5 bg-white text-center rounded-sm border-[2px] border-gray-100 focus:outline-none focus:ring-0"
      />
      <Button isButtonBase onClick={handleIncrease} className="absolute right-[15px] top-1/2 -translate-y-1/2">
        <FaPlus />
      </Button>
    </div>
  )
}

export default QuantityInput
