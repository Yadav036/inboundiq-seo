'use client'

import { useEffect, useRef, useState } from 'react'

import { WEBSITE_IN_LEADS_STEPS } from '@/components/landing/websiteInLeadsOutData'
import { cn } from '@/lib/utils'

/** px — must clear the fixed navbar so sticky cards don't hide behind it */
const STICKY_TOP = 64

const STEP_BACKGROUNDS = [
  '/landing/Background%20(2).png',
  '/landing/Background%20(3).png',
  '/landing/Background%20(4).png',
  '/landing/Background%20(5).png',
]

function StepTabRow({
  badge,
  label,
  active,
  onClick,
}: {
  badge: string
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-2 p-2 text-left font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em]',
        'transition-[border-color,background-color] duration-300 ease-out',
        active
          ? 'border border-[color:var(--Primary-500,#b7f601)] bg-[#111]'
          : 'border border-[#303030] bg-transparent',
      )}
      aria-pressed={active}
    >
      <div
        className={cn(
          'flex w-7 shrink-0 flex-col items-center justify-center py-1 transition-colors duration-500 ease-out',
          active ? 'bg-[color:var(--Primary-500,#b7f601)]' : 'bg-transparent',
        )}
      >
        <span
          className={cn(active ? 'text-black' : 'text-[color:var(--Neutral-500,#737373)]')}
          style={{ fontFeatureSettings: "'ss05' 1" }}
        >
          {badge}
        </span>
      </div>
      <p className='uppercase text-white' style={{ fontFeatureSettings: "'ss05' 1" }}>
        {label}
      </p>
    </button>
  )
}

export function WebsiteInLeadsOut() {
  const [activeIndex, setActiveIndex] = useState(0)
  const spacerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = spacerRefs.current.map((spacer, i) => {
      if (!spacer) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i)
        },
        {
          threshold: 0,
          rootMargin: `-${STICKY_TOP}px 0px -55% 0px`,
        },
      )
      obs.observe(spacer)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const scrollToSection = (i: number) => {
    const spacer = spacerRefs.current[i]
    if (!spacer) return
    const spacerTop = spacer.getBoundingClientRect().top
    window.scrollBy({ top: spacerTop - STICKY_TOP + 1, behavior: 'smooth' })
  }

  return (
    <div className='flex items-start gap-10'>
      {/* ── Left sticky nav ── */}
      <div
        className='hidden flex-col gap-8 md:flex'
        style={{
          position: 'sticky',
          top: STICKY_TOP + 20,
          width: 280,
          flexShrink: 0,
        }}
      >
        <h2
          id='heading-website-leads'
          className={cn(
            'font-sans font-medium leading-none tracking-[-0.02em] text-white',
            'text-[clamp(1.875rem,4.5vw,3rem)]',
          )}
        >
          Website in.
          <br />
          <span className='text-[color:var(--Primary-500,#b7f601)]'>Leads out.</span>
        </h2>

        <nav className='flex flex-col' aria-label='Inbound journey steps'>
          {WEBSITE_IN_LEADS_STEPS.map((step, i) => (
            <StepTabRow
              key={step.badge}
              badge={step.badge}
              label={step.tabLabel}
              active={i === activeIndex}
              onClick={() => scrollToSection(i)}
            />
          ))}
        </nav>
      </div>

      {/* ── Right stacking cards ── */}
      <div className='min-w-0 flex-1'>
        {WEBSITE_IN_LEADS_STEPS.map((step, i) => (
          /* Fixed height gives the browser a concrete scroll distance to pin against.
             140vh >> card height (75vh) = ~65vh of scroll room before next card slides in. */
          <div key={step.badge} className='relative h-[140vh]'>
            {/* Absolute spacer at top of wrapper — IntersectionObserver target */}
            <div
              ref={(el) => { spacerRefs.current[i] = el }}
              className='pointer-events-none absolute top-0 h-px w-full'
            />

            {/* Sticky card — later cards slide on top of earlier ones */}
            <div
              className='sticky bg-[#0f0f0f]'
              style={{ top: STICKY_TOP, zIndex: i + 1 }}
            >
              <div className='flex min-h-[75vh] border border-[#303030]'>
                {/* Visual panel — background image */}
                <div
                  className='relative hidden flex-shrink-0 md:block'
                  style={{
                    width: '52%',
                    backgroundImage: `url('${STEP_BACKGROUNDS[i]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Text panel */}
                <div className='flex flex-1 flex-col justify-between bg-[#111] p-6 md:p-8'>
                  <div className='flex flex-col gap-5'>
                    {/* badge */}
                    <div className='inline-flex w-7 shrink-0 flex-col items-center justify-center bg-[#213300] py-1'>
                      <span
                        className='font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-white'
                        style={{ fontFeatureSettings: "'ss05' 1" }}
                      >
                        {step.badge}
                      </span>
                    </div>

                    {/* title */}
                    <h3 className='font-sans text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-white md:text-[28px]'>
                      {step.title}
                    </h3>

                    {/* description */}
                    <p className='max-w-[38ch] font-sans text-sm font-normal leading-[1.5] text-[color:var(--Neutral-500,#737373)]'>
                      {step.description}
                    </p>
                  </div>

                  {/* step counter bottom-right */}
                  <p
                    className='mt-8 self-end font-mono text-xs leading-none text-[#303030]'
                    style={{ fontFeatureSettings: "'ss05' 1" }}
                    aria-hidden
                  >
                    {step.badge} / {String(WEBSITE_IN_LEADS_STEPS.length).padStart(2, '0')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom spacer — lets the last card stay visible before the next section arrives */}
        <div className='h-[50vh]' />
      </div>
    </div>
  )
}
