'use client'

import { useState, type ReactNode } from 'react'
import { CircleHelp } from 'lucide-react'

import { BackgroundFeaturesGrid } from '@/components/landing/BackgroundFeaturesGrid'
import { SectionBreak } from '@/components/landing/SectionBreak'
import { SuggestedMetrics, QualifiedCriteriaPanel } from '@/components/landing/SuggestedMetrics'
import { MonthlyLeadsSliderCard } from '@/components/landing/MonthlyLeadsSliderCard'
import { WebsiteInLeadsOut } from '@/components/landing/WebsiteInLeadsOut'
import { CommonQuestionsSection } from '@/components/landing/CommonQuestionsSection'
import { CompareTable } from '@/components/landing/CompareTable'
import { ScrollReveal } from '@/components/landing/ScrollReveal'
import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

/** Figma 651:2505 — stat strip below compare table */
function CompareStatStrip() {
  return (
    <div
      className='mt-10 flex items-end justify-between md:mt-12 lg:mt-14'
      data-node-id='651:2505'
    >
      {/* Left: two big stat blocks */}
      <div className='flex items-center gap-12 sm:gap-16 md:gap-20'>
        {/* 92% */}
        <div className='flex flex-col gap-2'>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Upto
          </p>
          <p className='font-sans text-[clamp(3rem,7vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white'>
            92%
          </p>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            vs. hiring an SDR
          </p>
        </div>

        {/* $6,001 */}
        <div className='flex flex-col gap-2'>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            Save
          </p>
          <div className='flex items-end gap-2'>
            <p className='font-sans text-[clamp(3rem,7vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white'>
              $6,001
            </p>
            <p className='mb-[5px] font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
              /month
            </p>
          </div>
          <p className='font-sans text-xs font-normal leading-[18px] text-[color:var(--Neutral-600,#a3a3a3)]'>
            vs. an SDR
          </p>
        </div>
      </div>

      {/* Right: SEE PRICING link */}
      <a
        href={APP_GET_STARTED_URL}
        className='inline-flex items-center gap-1 p-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-[color:var(--Primary-500,#b7f601)] transition-opacity hover:opacity-80'
        style={{ fontFeatureSettings: "'ss05' 1" }}
      >
        SEE PRICING
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' aria-hidden>
          <path
            d='M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5'
            stroke='currentColor'
            strokeWidth='1.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    </div>
  )
}

const displayHeading = cn(
  'font-sans font-medium leading-none tracking-[-0.02em] text-white',
  'text-[clamp(1.875rem,4.5vw,3rem)]',
)

function SectionShell({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string
  labelledBy: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'scroll-mt-24 border-t border-white/[0.06] bg-black',
        className,
      )}
    >
      <div className='mx-auto w-full max-w-[1320px] p-8'>{children}</div>
    </section>
  )
}

export function LandingSections() {
  const [isQualifiedModalOpen, setIsQualifiedModalOpen] = useState(false)
  const [monthlyLeads, setMonthlyLeads] = useState(14)

  return (
    <>
      <SectionShell id='website-in-leads-out' labelledBy='heading-website-leads'>
        <div className='flex flex-col pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20'>
          <WebsiteInLeadsOut />
        </div>
      </SectionShell>

      <SectionBreak />

      {/* 654:3033 ×6 — background feature grid + illustrations */}
      <SectionShell id='how-it-works' labelledBy='heading-background'>
        <ScrollReveal delayMs={40}>
          <div className='flex flex-col pt-20 pb-12 md:pt-8 md:pb-8 lg:pt-8 lg:pb-8'>
            <div
              className='mb-5 inline-flex h-7 w-fit items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
              style={{ borderWidth: '0.5px' }}
            >
              <span className='size-2 shrink-0 bg-white' aria-hidden />
              <p
                className='font-mono text-[10px] font-normal uppercase leading-[1.4] tracking-[-0.04em] text-white'
                style={{ fontFeatureSettings: "'ss05' 1" }}
              >
                CAPABILITIES
              </p>
            </div>
            <h2
              id='heading-background'
              className={cn(displayHeading, 'max-w-[22ch] text-left')}
            >
              Everything, Done-for-you
            </h2>
            <p className='mt-4 max-w-[44ch] font-sans text-sm font-normal leading-[1.5] text-[color:var(--Neutral-500,#737373)] md:text-base'>
              All the moving parts, without the manual work.
            </p>
            <BackgroundFeaturesGrid />
          </div>
        </ScrollReveal>
      </SectionShell>


      <SectionBreak />

      <SectionShell id='pricing' labelledBy='heading-leads'>
        <div className='flex flex-col pt-16 pb-16 md:pt-10 md:pb-10 lg:pt-10'>
          <ScrollReveal delayMs={40}>
            <div className='flex flex-col items-center'>
              {/* Figma 644:1833 — kicker above pricing headline */}
              <div
                className='mb-5 inline-flex w-fit items-center gap-2 border border-white bg-[#030303] px-[10px] py-[5px] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
                style={{ borderWidth: '0.5px' }}
                data-node-id='644:1833'
              >
                <span className='size-[7px] shrink-0 bg-white' aria-hidden />
                <p
                  className='font-mono text-[10px] font-normal uppercase leading-[1.4] tracking-[-0.4px] text-white'
                  style={{ fontFeatureSettings: "'ss05' 1" }}
                >
                  WHO IT&apos;S FOR
                </p>
              </div>
              <h2
                id='heading-leads'
                className={cn(
                  displayHeading,
                  'mx-auto max-w-[22ch] text-center leading-[1.1] md:max-w-[36rem]',
                )}
              >
                <span className='leading-[1.1]'>How many </span>
                <span className='leading-[1.1] text-[color:var(--Primary-500,#B7F601)]'>
                  qualified leads
                  <button
                    type='button'
                    onClick={() => setIsQualifiedModalOpen(true)}
                    className='ms-2 inline-flex items-center align-middle text-[color:var(--Neutral-500,#737373)] transition-colors hover:text-white'
                    aria-label='What counts as qualified leads'
                  >
                    <CircleHelp
                      className='size-[30px]'
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </button>
                </span>
                <span className='leading-[1.1]'> do you want this month?</span>
              </h2>
            </div>
          </ScrollReveal>
          <QualifiedCriteriaPanel
            open={isQualifiedModalOpen}
            onClose={() => setIsQualifiedModalOpen(false)}
          />
          <div
            className={cn(
              'mt-10 grid w-full grid-cols-1 items-start gap-8 md:mt-12 lg:mt-14',
              'lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-4',
            )}
          >
            <SuggestedMetrics
              className='mt-0'
              monthlyLeads={monthlyLeads}
              qualifiedModalOpen={isQualifiedModalOpen}
              onQualifiedModalOpenChange={setIsQualifiedModalOpen}
            />
            <ScrollReveal
              delayMs={150}
              className='w-full max-w-[320px] justify-self-center lg:w-[320px] lg:max-w-none lg:justify-self-stretch xl:w-[340px]'
            >
              <MonthlyLeadsSliderCard
                className='w-full max-w-none'
                value={monthlyLeads}
                onValueChange={setMonthlyLeads}
              />
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>

      <SectionBreak />

      <SectionShell id='compare' labelledBy='heading-compare'>
        <ScrollReveal delayMs={160}>
          <div className='flex flex-col'>
            <div
              className='inline-flex h-7 w-fit items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
              style={{ borderWidth: '0.5px' }}
            >
              <span className='size-2 shrink-0 bg-white' aria-hidden />
              <p className='font-mono text-xs font-normal leading-[1.4] tracking-[-0.04em] text-white sm:text-[13px]'>
                WHY INBOUNDIQ
              </p>
            </div>
            <h2
              id='heading-compare'
              className={cn(displayHeading, 'mt-5 max-w-[18ch] text-left sm:mt-6')}
            >
              How does InboundIQ
              <br />
              compare?
            </h2>
            <CompareTable className='mt-2' />
            <CompareStatStrip />
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionBreak />

      <SectionShell
        id='common-questions'
        labelledBy='heading-common-questions'
      >
        <ScrollReveal delayMs={200}>
          <div className='flex flex-col pb-20  md:pb-20 '>
            <CommonQuestionsSection />
          </div>
        </ScrollReveal>
      </SectionShell>
    </>
  )
}
