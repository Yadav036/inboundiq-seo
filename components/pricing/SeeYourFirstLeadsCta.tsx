'use client'

import { HeroWebsiteInput } from '@/components/HeroWebsiteInput'
import { cn } from '@/lib/utils'

const CTA_TEXTURE = '/pricing-header-diagonal-texture.png'

/** Figma 661:4074 — “See your first leads” + website field on textured band */
export function SeeYourFirstLeadsCta({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-y border-[#303030] bg-black',
        className,
      )}
      aria-labelledby='heading-see-first-leads'
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.28] mix-blend-screen'
        style={{ backgroundImage: `url(${CTA_TEXTURE})` }}
      />
      <div className='relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-10 bg-[#171717] p-8 md:flex-row md:items-center md:justify-between md:gap-8 md:p-10'>
        <div className='flex w-full max-w-[265px] shrink-0 flex-col gap-2.5'>
          <h2
            id='heading-see-first-leads'
            className='font-sans text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-[-0.96px] text-white md:text-[48px]'
          >
            See your first leads
          </h2>
          <p className='font-sans text-base font-normal leading-[1.2] tracking-[0.16px] text-[color:var(--Neutral-500,#737373)]'>
            No contracts. No setup fees. Pay only for interested replies.
          </p>
        </div>
        <div className='flex w-full max-w-[493px] shrink-0 flex-col gap-2.5 md:ms-auto'>
          <HeroWebsiteInput />
          <p className='font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-white'>
            Try it — watch what happens
          </p>
        </div>
      </div>
    </section>
  )
}
