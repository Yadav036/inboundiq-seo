'use client'

import type { CSSProperties } from 'react'
import { useCallback, useLayoutEffect, useState } from 'react'

const FRAME_INSET = 60
const HEADER_SELECTOR = '[data-site-header]'
const HERO_SELECTOR = '[data-site-hero]'

/** Figma 661:3959 — stroke-dasharray 8 4, color #303030 */
const dottedStyle: CSSProperties = {
  backgroundImage: `repeating-linear-gradient(
    to bottom,
    #303030 0,
    #303030 8px,
    transparent 8px,
    transparent 12px
  )`,
}

type Strip = { kind: 'solid' | 'dotted'; height: number }

function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length === 0) return []
  const sorted = intervals
    .filter(([a, b]) => b > a)
    .sort((x, y) => x[0] - y[0])
  const out: [number, number][] = [[sorted[0][0], sorted[0][1]]]
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i]
    const last = out[out.length - 1]!
    if (s <= last[1]) last[1] = Math.max(last[1], e)
    else out.push([s, e])
  }
  return out
}

/** Solid where header or hero intersect the viewport; dotted elsewhere. */
function buildStrips(vh: number, header: DOMRect | null, hero: DOMRect | null): Strip[] {
  const solids: [number, number][] = []
  if (header) {
    const t = Math.max(0, header.top)
    const b = Math.min(vh, header.bottom)
    if (b > t) solids.push([t, b])
  }
  if (hero) {
    const t = Math.max(0, hero.top)
    const b = Math.min(vh, hero.bottom)
    if (b > t) solids.push([t, b])
  }
  const merged = mergeIntervals(solids)
  if (merged.length === 0) {
    return [{ kind: 'dotted', height: vh }]
  }
  const strips: Strip[] = []
  let y = 0
  for (const [s, e] of merged) {
    if (s > y) strips.push({ kind: 'dotted', height: s - y })
    strips.push({ kind: 'solid', height: e - s })
    y = e
  }
  if (y < vh) strips.push({ kind: 'dotted', height: vh - y })
  return strips
}

function Rail({
  side,
  strips,
}: {
  side: 'left' | 'right'
  strips: Strip[]
}) {
  const pos: CSSProperties =
    side === 'left' ? { left: FRAME_INSET } : { right: FRAME_INSET }

  let top = 0
  return (
    <div
      className='pointer-events-none fixed top-0 z-[2] h-screen w-px'
      style={pos}
      aria-hidden
    >
      {strips.map((s, i) => {
        const el = (
          <div
            key={i}
            className='absolute left-0 w-px'
            style={{
              top,
              height: s.height,
              ...(s.kind === 'dotted'
                ? dottedStyle
                : { backgroundColor: '#252525' }),
            }}
          />
        )
        top += s.height
        return el
      })}
    </div>
  )
}

export function SiteFrameLines() {
  const [strips, setStrips] = useState<Strip[]>(() => [
    {
      kind: 'dotted',
      height: typeof window !== 'undefined' ? window.innerHeight : 900,
    },
  ])

  const measure = useCallback(() => {
    const vh = window.innerHeight
    const header = document.querySelector<HTMLElement>(HEADER_SELECTOR)
    const hero = document.querySelector<HTMLElement>(HERO_SELECTOR)
    const hr = header?.getBoundingClientRect() ?? null
    const ar = hero?.getBoundingClientRect() ?? null
    setStrips(buildStrips(vh, hr, ar))
  }, [])

  useLayoutEffect(() => {
    measure()
    const header = document.querySelector<HTMLElement>(HEADER_SELECTOR)
    const hero = document.querySelector<HTMLElement>(HERO_SELECTOR)
    const ro = new ResizeObserver(() => measure())
    if (header) ro.observe(header)
    if (hero) ro.observe(hero)
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  return (
    <>
      <Rail side='left' strips={strips} />
      <Rail side='right' strips={strips} />
    </>
  )
}
