'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

const MIN = 1
const MAX = 50
/** Scale labels every 10 (plus min at 1) */
const TICKS = [1, 10, 20, 30, 40, 50] as const

/** 0–100 along the track, matching `<input type="range" min max />` thumb position */
function tickPercent(t: number) {
  return ((t - MIN) / (MAX - MIN)) * 100
}

/** Figma 644:1877 — monthly leads slider + display + SEE PRICING */
export function MonthlyLeadsSliderCard({
  className,
  value,
  onValueChange,
}: {
  className?: string
  value: number
  onValueChange: (value: number) => void
}) {
  const pct = (value - MIN) / (MAX - MIN)

  return (
    <div
      className={cn(
        'flex min-h-[260px] w-full flex-col justify-between gap-8',
        'border border-[#303030] bg-[var(--Neutral-100,#171717)]',
        'p-6 sm:p-7 md:p-[30px]',
        className,
      )}
      data-node-id='644:1877'
    >
      <div className='flex w-full flex-col gap-6'>
        <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
          Drag to set your monthly leads
        </p>

        <div className='w-full'>
          <div className='relative mx-[5px] h-6 w-[calc(100%-10px)] max-w-full'>
            <div className='absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-[#303030]' />
            <div
              className='absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-[color:var(--Primary-500,#b7f601)]'
              style={{ width: `${pct * 100}%` }}
            />
            <div
              className='pointer-events-none absolute top-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2 bg-white'
              style={{ left: `${pct * 100}%` }}
            />
            <input
              type='range'
              min={MIN}
              max={MAX}
              value={value}
              onChange={(e) => onValueChange(Number(e.target.value))}
              className='absolute inset-0 z-10 h-full min-h-[44px] w-full cursor-pointer opacity-0'
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={value}
              aria-label='Monthly qualified leads target'
            />
          </div>
          <div className='relative mx-[5px] mt-2 min-h-[18px] font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            {TICKS.map((t) => {
              const left = tickPercent(t)
              const align =
                t === MIN ? 'translateX(0)' : t === MAX ? 'translateX(-100%)' : 'translateX(-50%)'
              return (
                <span
                  key={t}
                  className='absolute top-0 whitespace-nowrap tabular-nums'
                  style={{ left: `${left}%`, transform: align }}
                >
                  {t}
                </span>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col gap-2.5'>
        <div className='flex flex-col gap-1'>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Monthly Leads
          </p>
          <p
            className='font-sans text-[72px] font-medium leading-none tracking-[-0.04em] text-white'
            aria-live='polite'
          >
            {value}
          </p>
        </div>

        <Link
          href={APP_GET_STARTED_URL}
          className='inline-flex items-center gap-1 self-start py-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-[color:var(--Primary-500,#b7f601)]'
          style={{ fontFeatureSettings: '"ss05" 1' }}
        >
          SEE PRICING
          <ArrowRight className='size-[18px] shrink-0' strokeWidth={1.75} aria-hidden />
        </Link>
      </div>
    </div>
  )
}
