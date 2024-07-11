'use client'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { cn } from '@/utils/lib'
import { useState } from 'react'
import Button from './Button'

const DropDown = ({
  title,
  children,
  className = 'flex-col items-center relative',
  classNameChild = '',
  disabledRipple,
  isButtonBase = false,
  hiddenWhenClickOutSide = true,
}) => {
  const [isShow, setIsShow] = useState(false)
  const ref = useOutsideClick((e) => {
    if (hiddenWhenClickOutSide) {
      setIsShow(false)
    }
  })
  const handleClickButton = (e) => {
    setIsShow((preValue) => {
      return !preValue
    })
  }
  return (
    <div ref={ref} className={className}>
      <Button onClick={handleClickButton} isButtonBase={isButtonBase} disabledRipple={disabledRipple}>
        {title}
      </Button>
      {isShow && <div className={cn('animate-scaleY origin-top absolute z-10 w-max top-0 left-0 translate-x-48', classNameChild)}>{children}</div>}
    </div>
  )
}

export default DropDown
