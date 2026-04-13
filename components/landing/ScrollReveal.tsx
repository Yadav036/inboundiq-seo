'use client'

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Stagger when multiple blocks mount together */
  delayMs?: number
}

/**
 * Fade + slight rise when the block enters the viewport (once).
 * Respects `prefers-reduced-motion`.
 */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        io.unobserve(entry.target)
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style: CSSProperties | undefined =
    visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'duration-700 ease-out motion-safe:transition-[opacity,transform]',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
