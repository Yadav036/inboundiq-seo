'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { OutlineContentCard } from '@/components/landing/OutlineContentCard'
import { cn } from '@/lib/utils'

import { INDUSTRIES, type IndustryId } from './industryShowcaseData'

export function IndustryShowcase() {
  const [activeId, setActiveId] = useState<IndustryId>('ecommerce')
  const active = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0]

  return (
    <OutlineContentCard className='mt-14 lg:mt-4'>
      {/* 578:8289 + 578:8340 — selector + detail (nested “nodes” styles) */}
      <div className='flex w-full flex-col gap-8 lg:flex-row lg:gap-12 lg:items-start'>
        <nav
          className='flex w-full shrink-0 flex-col gap-2 lg:w-[min(100%,280px)]'
          aria-label='Industries'
        >
          {INDUSTRIES.map(({ id, label, Icon }) => {
            const selected = id === activeId
            return (
              <button
                key={id}
                type='button'
                onClick={() => setActiveId(id)}
                className={cn(
                  'flex w-full items-center gap-2 px-3.5 py-3 text-left font-sans text-xs font-medium leading-[1.4] transition-colors',
                  selected
                    ? 'bg-white text-black'
                    : 'border border-[#303030] text-[#fafafa] hover:border-neutral-600',
                )}
              >
                <Icon
                  className={cn(
                    'size-4 shrink-0',
                    selected ? 'text-black' : 'text-[#fafafa]',
                  )}
                  strokeWidth={1.5}
                  aria-hidden
                />
                {label}
              </button>
            )
          })}
        </nav>

        <div className='min-w-0 flex-1 border border-[#303030] bg-black p-6 sm:p-8 lg:p-[30px]'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[72px]'>
            <div className='flex min-w-0 flex-1 flex-col gap-6'>
              <div className='flex flex-col gap-2.5'>
                <p className='font-sans text-xl font-normal leading-[1.2] tracking-[-0.02em] text-white'>
                  {active.title}
                </p>
                <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  {active.description}
                </p>
              </div>

              <div className='flex flex-col gap-2.5'>
                <p className='font-sans text-xs font-normal leading-[1.4] text-white'>
                  {active.whyHeading}
                </p>
                <ul className='flex flex-col gap-1'>
                  {active.bullets.map((line) => (
                    <li
                      key={line}
                      className='flex items-start gap-2 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'
                    >
                      <Check
                        className='mt-0.5 size-3.5 shrink-0 text-[color:var(--Primary-500,#B7F601)]'
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href='/demo'
                className='inline-flex w-fit items-center justify-center gap-1 border border-[#303030] px-4 py-3 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-white transition-colors hover:border-neutral-500'
                style={{ fontFeatureSettings: "'ss05' 1" }}
              >
                See your first leads
              </Link>
            </div>

            <div className='flex shrink-0 flex-col items-start gap-1 whitespace-nowrap lg:items-end lg:text-right'>
              <p
                className='font-sans text-[clamp(3rem,8vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white'
                aria-live='polite'
              >
                {active.stat}
              </p>
              <p className='font-mono text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
                {active.statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </OutlineContentCard>
  )
}
