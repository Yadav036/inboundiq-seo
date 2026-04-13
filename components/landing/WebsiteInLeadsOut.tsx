'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { WEBSITE_IN_LEADS_STEPS } from '@/components/landing/websiteInLeadsOutData'
import { cn } from '@/lib/utils'

const STEP_CARD = 'website-in-leads-step-card'
const STEP_COUNT = WEBSITE_IN_LEADS_STEPS.length

function StepTabRow({
  badge,
  label,
  active,
}: {
  badge: string
  label: string
  active: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 p-2 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em]',
        'transition-[border-color,box-shadow] duration-500 ease-out',
        active
          ? 'border border-[color:var(--Primary-500,#b7f601)]'
          : 'border border-[#303030]',
      )}
    >
      <div
        className={cn(
          'flex w-7 shrink-0 flex-col items-center justify-center py-1 transition-colors duration-500 ease-out',
          active ? 'bg-[color:var(--Primary-500,#b7f601)]' : 'bg-transparent',
        )}
      >
        <span
          className={cn(
            active ? 'text-black' : 'text-[color:var(--Neutral-500,#737373)]',
          )}
          style={{ fontFeatureSettings: "'ss05' 1" }}
        >
          {badge}
        </span>
      </div>
      <p
        className='text-center uppercase text-white'
        style={{ fontFeatureSettings: "'ss05' 1" }}
      >
        {label}
      </p>
    </div>
  )
}

function StepVisual({
  variant,
  stepIndex,
}: {
  variant: 'figma-step1' | 'accent'
  stepIndex: number
}) {
  if (variant === 'figma-step1') {
    return (
      <div className='relative h-[280px] w-full shrink-0 overflow-hidden md:h-full md:min-h-[389px] md:w-[367px]'>
        <Image
          src='/landing/website-in-leads-out/step1-panel-bg.png'
          alt=''
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 367px'
          priority
        />
        <div
          className='pointer-events-none absolute inset-0 mix-blend-hue'
          style={{ backgroundColor: '#b7f601' }}
          aria-hidden
        />
        <div className='pointer-events-none absolute left-[56px] top-[76px] h-[238px] w-[256px] max-w-[calc(100%-3rem)]'>
          <Image
            src='/landing/website-in-leads-out/step1-screenshot.png'
            alt=''
            width={256}
            height={238}
            className='h-full w-full object-cover'
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className='relative h-[220px] w-full shrink-0 overflow-hidden md:h-full md:min-h-[389px] md:w-[367px]'
      aria-hidden
    >
      <div className='absolute inset-0 bg-[#050505]' />
      <div
        className='absolute inset-0 opacity-90 mix-blend-hue'
        style={{
          background:
            'linear-gradient(135deg, #3d5200 0%, #213300 45%, #0a0a0a 100%)',
        }}
      />
      <div className='absolute inset-0 bg-[#b7f601]/25' />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70' />
      <div className='absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:4px_4px]' />
      <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs font-normal uppercase tracking-[0.2em] text-white/40'>
        Step {String(stepIndex + 1).padStart(2, '0')}
      </p>
    </div>
  )
}

function StepDetailCard({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description: string
}) {
  return (
    <div className='relative flex min-h-[200px] flex-1 flex-col justify-between bg-black p-5 md:min-h-full md:p-6 md:pl-5 md:pr-10 md:pt-5'>
      <div className='inline-flex w-7 shrink-0 flex-col items-center justify-center bg-[#213300] p-1'>
        <span
          className='font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-white'
          style={{ fontFeatureSettings: "'ss05' 1" }}
        >
          {badge}
        </span>
      </div>
      <div className='space-y-2.5'>
        <h3 className='text-lg font-normal leading-[1.2] tracking-[0.01em] text-white'>
          {title}
        </h3>
        <p className='text-xs font-medium leading-[1.4] text-[color:var(--Neutral-500,#737373)] md:text-[12px]'>
          {description}
        </p>
      </div>
    </div>
  )
}

export function WebsiteInLeadsOut() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  /** Match sassmetrics HowItWorks: threshold 0.3 / 0.7, soft handoff when leaving */
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(`.${STEP_CARD}`)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(
            (entry.target as HTMLElement).dataset.stepIndex || '0',
            10,
          )

          if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
            setActiveIndex(index)
          } else if (
            !entry.isIntersecting &&
            entry.intersectionRatio <= 0.3 &&
            activeIndexRef.current === index
          ) {
            setActiveIndex(Math.max(0, index - 1))
          }
        })
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: '-10% 0px -10% 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /** Staggered fade / lift — similar to react-awesome-reveal “smooth” entrance */
  const [revealed, setRevealed] = useState(() =>
    WEBSITE_IN_LEADS_STEPS.map((_, i) => i === 0),
  )

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(`.${STEP_CARD}`)
    if (elements.length === 0) return

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.12) return
          const idx = Number.parseInt(
            (entry.target as HTMLElement).dataset.stepIndex || '0',
            10,
          )
          if (Number.isNaN(idx)) return
          setRevealed((prev) => {
            if (prev[idx]) return prev
            const next = [...prev]
            next[idx] = true
            return next
          })
        })
      },
      {
        threshold: [0, 0.12, 0.25, 0.5],
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:items-start md:gap-10 md:pt-4'>
      <div className='md:sticky md:top-24 md:flex md:h-fit md:max-w-md md:flex-col md:gap-8'>
        <h2
          id='heading-website-leads'
          className={cn(
            'font-sans font-medium leading-none tracking-[-0.02em] text-white',
            'text-[clamp(1.875rem,4.5vw,3rem)]',
          )}
        >
          Website in.
          <br />
          <span className='text-[color:var(--Primary-500,#b7f601)]'>
            Leads out.
          </span>
        </h2>
        <nav
          className='flex flex-col gap-2'
          aria-label='Inbound journey steps'
        >
          {WEBSITE_IN_LEADS_STEPS.map((step, index) => (
            <StepTabRow
              key={step.badge}
              badge={step.badge}
              label={step.tabLabel}
              active={index === activeIndex}
            />
          ))}
        </nav>
      </div>

      <div className='flex min-w-0 flex-col gap-12 md:gap-14'>
        {WEBSITE_IN_LEADS_STEPS.map((step, index) => (
          <article
            key={step.badge}
            data-step-index={index}
            className={cn(
              STEP_CARD,
              'flex flex-col overflow-hidden border border-[#303030] md:min-h-[389px] md:flex-row',
              /* Scale from the right so the active “zoom” does not bleed past the frame line */
              'scroll-mt-6 md:scroll-mt-10 md:origin-right',
              'transition-[box-shadow,transform,opacity] duration-700 ease-out motion-reduce:transition-none',
              revealed[index]
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
              index === activeIndex
                ? 'shadow-[0_0_52px_rgba(183,246,1,0.28),0_0_1px_rgba(183,246,1,0.35)] md:scale-[1.055]'
                : 'shadow-[0_0_24px_rgba(0,0,0,0.45)] md:scale-100',
            )}
          >
            <StepVisual variant={step.visual} stepIndex={index} />
            <StepDetailCard
              badge={step.badge}
              title={step.title}
              description={step.description}
            />
          </article>
        ))}
      </div>
    </div>
  )
}
