import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

/** Figma 651:2505 — stat row + SEE PRICING (compare section) */
export function CompareSectionStats({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
      data-node-id='651:2505'
    >
      <div className='flex flex-wrap items-end gap-x-20 gap-y-8'>
        <div className='flex flex-col gap-2 whitespace-nowrap'>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Upto
          </p>
          <p className='font-sans text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white md:text-[72px]'>
            92%
          </p>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            vs. hiring an SDR
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='whitespace-nowrap font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Save
          </p>
          <div className='flex items-end gap-2'>
            <p className='whitespace-nowrap font-sans text-[clamp(2.25rem,10vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white md:text-[72px]'>
              $6,001
            </p>
            <div className='flex items-center pb-[5px]'>
              <span className='whitespace-nowrap font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
                /month
              </span>
            </div>
          </div>
          <p className='whitespace-nowrap font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            vs. an SDR
          </p>
        </div>
      </div>

      <Link
        href='/pricing'
        className='inline-flex shrink-0 items-center gap-1 self-start py-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-[color:var(--Primary-500,#b7f601)] sm:self-auto'
        style={{ fontFeatureSettings: '"ss05" 1' }}
      >
        SEE PRICING
        <ArrowRight className='size-[18px] shrink-0' strokeWidth={1.75} aria-hidden />
      </Link>
    </div>
  )
}
