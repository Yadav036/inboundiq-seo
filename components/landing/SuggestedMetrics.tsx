'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

import { useCountUp } from '@/hooks/useCountUp'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { cn } from '@/lib/utils'

/** Figma 644:1943 — “Suggested Metrics” block (pricing / leads section) */

function revealTileClass(visible: boolean) {
  return cn(
    'transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none',
    visible
      ? 'translate-y-0 opacity-100'
      : 'translate-y-2 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
  )
}

function MetricTile({
  label,
  children,
  className,
  visible,
  staggerMs = 0,
}: {
  label: string
  children: ReactNode
  className?: string
  visible: boolean
  staggerMs?: number
}) {
  return (
    <div
      className={cn(
        'relative min-h-[110px] overflow-hidden bg-[var(--Neutral-100,#171717)] p-3',
        revealTileClass(visible),
        className,
      )}
      style={{ transitionDelay: `${staggerMs}ms` }}
    >
      <p className='font-sans text-xs font-medium leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
        {label}
      </p>
      <div className='mt-2'>{children}</div>
    </div>
  )
}

function CountMoney({
  active,
  end,
  className,
}: {
  active: boolean
  end: number
  className?: string
}) {
  const n = useCountUp(active, end, { durationMs: 1400 })
  return (
    <span className={className}>
      ${Math.round(n).toLocaleString('en-US')}
    </span>
  )
}

function CountDayRange({
  active,
  min,
  max,
  className,
}: {
  active: boolean
  min: number
  max: number
  className?: string
}) {
  const a = useCountUp(active, min, { durationMs: 1300 })
  const b = useCountUp(active, max, { durationMs: 1300 })
  return (
    <p className={className}>
      ~{Math.round(a)}-{Math.round(b)} days
    </p>
  )
}

function CountInteger({
  active,
  end,
  className,
}: {
  active: boolean
  end: number
  className?: string
}) {
  const n = useCountUp(active, end, { durationMs: 1200 })
  return (
    <span className={className}>{Math.round(n)}</span>
  )
}

function CountRevenue({
  active,
  end,
  className,
}: {
  active: boolean
  end: number
  className?: string
}) {
  const n = useCountUp(active, end, { durationMs: 1800 })
  return (
    <p className={className}>
      ~${Math.round(n).toLocaleString('en-US')}*
    </p>
  )
}

function CountMultiplier({
  active,
  end,
  className,
}: {
  active: boolean
  end: number
  className?: string
}) {
  const n = useCountUp(active, end, { durationMs: 1600 })
  return (
    <p className={className}>
      {n.toFixed(2)}x return
    </p>
  )
}

function PanelReveal({
  visible,
  staggerMs,
  className,
  children,
}: {
  visible: boolean
  staggerMs: number
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-2 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
      style={{ transitionDelay: `${staggerMs}ms` }}
    >
      {children}
    </div>
  )
}

export function SuggestedMetrics({ className }: { className?: string }) {
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className={cn(
        'mt-10 w-full max-w-full border border-[#303030] p-6 sm:p-7 md:mt-12 md:p-[30px] lg:mt-14',
        'duration-700 ease-out motion-safe:transition-[opacity,transform]',
        inView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      )}
      data-node-id='644:1943'
    >
      <div className='flex flex-col gap-6'>
        <PanelReveal visible={inView} staggerMs={0}>
          <div className='flex flex-col gap-2.5 font-sans not-italic'>
            <p className='text-xl font-normal leading-[1.2] tracking-[-0.02em] text-white'>
              Suggested Metrics
            </p>
            <p className='max-w-[52ch] text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
              You&apos;re charged only when a real person replies with interest.
              Not for opens. Not for clicks.
            </p>
          </div>
        </PanelReveal>

        <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-3'>
          <MetricTile
            label='Est. Cost'
            visible={inView}
            staggerMs={60}
          >
            <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0'>
              <CountMoney
                active={inView}
                end={499}
                className='font-sans text-[40px] font-medium leading-[1.2] text-white'
              />
              <span className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-500,#737373)]'>
                / month
              </span>
            </div>
          </MetricTile>
          <MetricTile
            label='Cost per lead'
            visible={inView}
            staggerMs={120}
          >
            <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0'>
              <CountMoney
                active={inView}
                end={62}
                className='font-sans text-[40px] font-medium leading-[1.2] text-white'
              />
              <span className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-500,#737373)]'>
                / lead
              </span>
            </div>
          </MetricTile>
          <MetricTile
            label='Est. Lead Timeline'
            className='sm:col-span-1'
            visible={inView}
            staggerMs={180}
          >
            <CountDayRange
              active={inView}
              min={5}
              max={10}
              className='font-sans text-[40px] font-medium leading-[1.2] text-white'
            />
          </MetricTile>
        </div>

        <div className='grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]'>
          <PanelReveal visible={inView} staggerMs={220}>
            <div className='relative min-h-[182px] overflow-hidden bg-[var(--Neutral-100,#171717)] p-3'>
              <div className='flex items-start justify-between gap-3'>
                <p className='font-sans text-xs font-medium leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  Best Plan for you
                </p>
                <Link
                  href='/pricing'
                  className='shrink-0 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-[color:var(--Primary-500,#b7f601)]'
                  style={{ fontFeatureSettings: '"ss05" 1' }}
                >
                  See All Plans
                </Link>
              </div>
              <p className='mt-2 font-sans text-[40px] font-medium leading-[1.2] text-white'>
                Growth Plan
              </p>
              <div className='mt-4 flex max-w-[23rem] flex-col gap-2 font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-500,#737373)]'>
                <p>
                  Best for scaling companies wanting predictable monthly results.{' '}
                  <br className='hidden sm:block' />
                  Includes -
                </p>
                <ul className='list-disc space-y-0 pl-[1.125rem] marker:text-[color:var(--Neutral-500,#737373)]'>
                  <li>
                    Includes{' '}
                    <span className='text-white'>
                      <CountInteger
                        active={inView}
                        end={8}
                        className='text-white'
                      />{' '}
                      qualified leads
                    </span>
                  </li>
                  <li>
                    Additional leads:{' '}
                    <span className='text-white'>
                      <CountMoney active={inView} end={69} className='text-white' />{' '}
                      /lead
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </PanelReveal>

          <PanelReveal visible={inView} staggerMs={280}>
            <div className='flex min-h-[182px] flex-col overflow-hidden bg-[#213300] p-3'>
              <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Primary-500,#b7f601)]'>
                Projected Revenue
              </p>
              <CountRevenue
                active={inView}
                end={33600}
                className='mt-2 font-sans text-[40px] font-medium leading-[1.2] text-white'
              />
              <CountMultiplier
                active={inView}
                end={67.33}
                className='mt-2 font-sans text-base font-normal leading-[1.2] tracking-[0.01em] text-[#618902]'
              />
              <p className='mt-auto pt-6 font-sans text-base font-normal leading-[1.2] tracking-[0.01em] text-[#4b6059]'>
                * At $4.2K avg revenue per lead
              </p>
            </div>
          </PanelReveal>
        </div>

        <PanelReveal visible={inView} staggerMs={340}>
          <div className='flex w-full min-h-[100px] flex-col justify-center border border-[#303030] bg-[var(--Neutral-100,#171717)] p-4 sm:min-h-[120px]'>
            <Link
              href='/pricing'
              className='inline-flex w-full items-center justify-center gap-2 bg-white px-4 py-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-black sm:inline-flex sm:w-fit sm:justify-start'
              style={{ fontFeatureSettings: '"ss05" 1' }}
            >
              CHECK PLANS
              <Check className='size-4 shrink-0' strokeWidth={2.25} aria-hidden />
            </Link>
          </div>
        </PanelReveal>
      </div>
    </div>
  )
}
