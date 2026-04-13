import type { ReactNode } from 'react'

import { FeatureCard } from '@/components/landing/FeatureCard'
import { B2B_FEATURES } from '@/components/landing/b2bFeatures'
import { IndustryShowcase } from '@/components/landing/IndustryShowcase'
import { BackgroundFeaturesGrid } from '@/components/landing/BackgroundFeaturesGrid'
import { SectionBreak } from '@/components/landing/SectionBreak'
import { MonthlyLeadsSliderCard } from '@/components/landing/MonthlyLeadsSliderCard'
import { SuggestedMetrics } from '@/components/landing/SuggestedMetrics'
import { WebsiteInLeadsOut } from '@/components/landing/WebsiteInLeadsOut'
import { CommonQuestionsSection } from '@/components/landing/CommonQuestionsSection'
import { CompareTable } from '@/components/landing/CompareTable'
import { ScrollReveal } from '@/components/landing/ScrollReveal'
import { cn } from '@/lib/utils'

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
      <div className='mx-auto w-full max-w-[1320px] px-0'>{children}</div>
    </section>
  )
}

export function LandingSections() {
  return (
    <>
      <SectionShell id='website-in-leads-out' labelledBy='heading-website-leads'>
        <ScrollReveal>
          <div className='flex flex-col pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20'>
            <WebsiteInLeadsOut />
          </div>
        </ScrollReveal>
      </SectionShell>

      {/* 654:3033 ×6 — background feature grid + illustrations */}
      <SectionShell id='how-it-works' labelledBy='heading-background'>
        <ScrollReveal delayMs={40}>
          <div className='flex flex-col pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20'>
            <h2
              id='heading-background'
              className={cn(displayHeading, 'max-w-[18ch] text-left')}
            >
              Everything runs in
              <br />
              the background
            </h2>
            <BackgroundFeaturesGrid />
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionBreak />

      {/* 619:614, 619:618, 654:3029, 654:3033, 654:3037 — feature grid */}
      <SectionShell id='built-b2b' labelledBy='heading-b2b'>
        <ScrollReveal delayMs={80}>
          <div className='flex flex-col pt-16 pb-4 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20'>
            <h2
              id='heading-b2b'
              className={cn(displayHeading, 'max-w-[20ch] text-left')}
            >
              Built for every B2B
              <br />
              business
            </h2>
     

            {/* 578:8289 + 578:8340 — industry selector + detail */}
            <IndustryShowcase />
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionBreak />

      <SectionShell id='pricing' labelledBy='heading-leads'>
        <div className='flex flex-col pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24'>
          <ScrollReveal delayMs={40}>
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
              </span>
              <span className='leading-[1.1]'> do you want this month?</span>
            </h2>
          </ScrollReveal>
          <div
            className={cn(
              'mt-10 grid w-full grid-cols-1 items-start gap-8 md:mt-12 lg:mt-14',
              'lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-10',
            )}
          >
            <div className='min-w-0'>
              <SuggestedMetrics className='mt-0' />
            </div>
            <ScrollReveal
              delayMs={150}
              className='w-full max-w-[320px] justify-self-center lg:w-[320px] lg:max-w-none lg:justify-self-stretch xl:w-[340px]'
            >
              <MonthlyLeadsSliderCard className='w-full max-w-none' />
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>

      <SectionBreak />

      <SectionShell id='compare' labelledBy='heading-compare'>
        <ScrollReveal delayMs={160}>
          <div className='flex flex-col pt-8 pb-24 md:pt-12 md:pb-28 lg:pt-16 lg:pb-32'>
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
            <CompareTable className='mt-10 md:mt-12 lg:mt-14' />
          </div>
        </ScrollReveal>
      </SectionShell>

      <SectionShell
        id='common-questions'
        labelledBy='heading-common-questions'
      >
        <ScrollReveal delayMs={200}>
          <div className='flex flex-col pb-24 pt-16 md:pb-28 md:pt-20 lg:pb-32 lg:pt-24'>
            <CommonQuestionsSection />
          </div>
        </ScrollReveal>
      </SectionShell>
    </>
  )
}
