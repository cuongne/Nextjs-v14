'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Overlay = ({ closeModal, children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return mounted
    ? createPortal(
        <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-gray-900 opacity-70" role="button" onClick={closeModal}>
          {children}
        </div>,
        document.getElementById('portal')
      )
    : null
}

export default Overlay
