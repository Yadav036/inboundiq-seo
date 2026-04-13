'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

type UseCountUpOptions = {
  durationMs?: number
  start?: number
}

/**
 * Animates from `start` to `end` when `active` becomes true (once per mount).
 * Respects `prefers-reduced-motion`.
 */
export function useCountUp(
  active: boolean,
  end: number,
  { durationMs = 1500, start = 0 }: UseCountUpOptions = {},
) {
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = useState(start)
  const rafRef = useRef<number | undefined>(undefined)

  useLayoutEffect(() => {
    if (!active) return
    if (reduced) {
      setValue(end)
    }
  }, [active, end, reduced])

  useEffect(() => {
    if (!active || reduced) return

    const from = start
    const span = end - from
    const t0 = performance.now()

    const tick = (now: number) => {
      const raw = Math.min(1, (now - t0) / durationMs)
      const t = easeOutCubic(raw)
      setValue(from + span * t)
      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(end)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
    }
  }, [active, end, durationMs, reduced, start])

  return value
}
