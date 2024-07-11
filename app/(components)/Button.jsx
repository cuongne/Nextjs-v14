'use client'
import { useRef, useState } from 'react'

const Button = ({ children, onClick, isButtonBase, disabledRipple = false, className = '', ...otherProps }) => {
  const [isRippling, setIsRippling] = useState(false)
  const [rippleCoords, setRippleCoords] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }
    if (isButtonBase) return null
    const widthButton = ref.current.getBoundingClientRect().width
    const heightButton = ref.current.getBoundingClientRect().height

    const x = event.clientX - event.currentTarget.offsetLeft
    const y = event.currentTarget.offsetTop - event.clientY

    setRippleCoords({ xPercent: (x / widthButton) * 100, yPercent: (y / heightButton) * 100 })
    setIsRippling(true)

    setTimeout(() => setIsRippling(false), 500)
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      ref={ref}
      className={isButtonBase ? `flex items-center overflow-hidden ${className}` : 'relative flex items-center overflow-hidden rounded-full gap-2'}
      {...otherProps}
    >
      {children}

      {isRippling && !disabledRipple && (
        <span
          style={{ left: rippleCoords.xPercent + '%', top: rippleCoords.yPercent + '%' }}
          className={`absolute z-10 bg-gray-500 -translate-x-1/2 rounded-full animate-ripple`}
        ></span>
      )}
    </button>
  )
}

export default Button
