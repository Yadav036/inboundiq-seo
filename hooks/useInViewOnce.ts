'use client'

import { useEffect, useRef, useState } from 'react'

/** Aligned with `ScrollReveal` so section enter timing feels consistent */
const observerOptions: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: '0px 0px -6% 0px',
}

/**
 * Fires once when the element intersects the viewport (then unobserves).
 */
export function useInViewOnce() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setInView(true)
      io.unobserve(entry.target)
    }, observerOptions)

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView } as const
}
