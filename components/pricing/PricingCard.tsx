import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

const OVERLAY_SRC = '/pricing-overlay.png'

export type PricingCardProps = {
  title: string
  description: string
  children?: ReactNode
  price: string
  period?: string
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export function PricingCard({
  title,
  description,
  children,
  price,
  period = '/month',
  ctaLabel = 'Get started',
  ctaHref = APP_GET_STARTED_URL,
  className,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        'group relative flex h-[268px] max-h-[268px] min-h-0 w-[300px] max-w-[300px] shrink-0 flex-col overflow-hidden border border-[#303030] bg-black',
        className,
      )}
    >
      {/* Decorative image — sits behind copy (lower z) */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-[1] transition-transform duration-500 ease-out will-change-transform',
          'translate-y-full group-hover:translate-y-0',
          'group-focus-within:translate-y-0',
        )}
        aria-hidden
      >
        <div className='absolute inset-0'>
          <Image
            src={OVERLAY_SRC}
            alt=''
            fill
            sizes='(max-width: 1024px) 100vw, 400px'
            className='object-cover object-bottom'
            priority={false}
          />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/30' />
        </div>
      </div>

      {/* Text + price + CTA — above overlay */}
      <div className='relative z-10 flex min-h-0 flex-1 flex-col justify-between bg-transparent px-4 pb-4 pt-4'>
        <div className='min-h-0 flex flex-1 flex-col gap-2 overflow-hidden'>
          <h2 className='w-full shrink-0 font-sans text-base font-normal leading-tight tracking-[0.12px] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.9)] group-hover:[text-shadow:0_2px_12px_rgba(0,0,0,0.85)] sm:text-[17px]'>
            {title}
          </h2>
          <div className='w-full min-h-0 font-sans text-[11px] font-medium leading-[1.35] text-[color:var(--Neutral-500,#737373)] [text-shadow:0_1px_2px_rgba(0,0,0,0.85)] sm:text-xs'>
            <p className='mb-0'>{description}</p>
            {children}
          </div>
        </div>
        <div className='mt-2 shrink-0 space-y-3 pt-1'>
          <div className='flex items-end gap-2 whitespace-nowrap'>
            <p className='font-sans text-[28px] font-medium leading-none text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.9)] sm:text-[32px]'>
              {price}
            </p>
            {period ? (
              <p className='pb-0.5 font-mono text-[11px] font-normal leading-[14px] text-[color:var(--Neutral-600,#a3a3a3)] [text-shadow:0_1px_2px_rgba(0,0,0,0.85)] sm:text-xs'>
                {period}
              </p>
            ) : null}
          </div>
          <div className='pointer-events-none opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100'>
            <Link
              href={ctaHref}
              className='block w-full bg-white px-3 py-2 text-center font-mono text-xs leading-[1.4] tracking-[-0.02em] text-black transition-opacity hover:opacity-90 sm:text-sm'
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
