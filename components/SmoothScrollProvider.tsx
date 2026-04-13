'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect, useState, type ReactNode } from 'react'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnabled(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isEnabled) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchMultiplier: 2,
        autoRaf: true,
        autoToggle: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
