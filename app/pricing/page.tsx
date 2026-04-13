import type { Metadata } from 'next'

import { CommonQuestionsSection } from '@/components/landing/CommonQuestionsSection'
import { PricingCard } from '@/components/pricing/PricingCard'
import { PricingPageHeader } from '@/components/pricing/PricingPageHeader'
import { SeeYourFirstLeadsCta } from '@/components/pricing/SeeYourFirstLeadsCta'
import { SiteNavbar } from '@/components/SiteNavbar'

export const metadata: Metadata = {
  title: 'Pricing — InboundIQ',
  description: 'Lead based pricing for AI-powered outbound.',
}

export default function PricingPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteNavbar />
      <main className='px-[76px]'>
        <PricingPageHeader />
        <section
          className='mx-auto w-full max-w-[1320px] px-0 pb-16 pt-8 md:pb-20 md:pt-10'
          aria-label='Pricing plans'
        >
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
            <PricingCard
              title='Pay As You Go'
              description='Perfect for testing or occasional lead generation'
              price='$99'
              period='/per qualified lead'
            />

            <PricingCard
              title='Starter'
              description='Best for small teams starting outbound without risk'
              price='$299'
              period='/per month'
            />

            <PricingCard
              title='Growth'
              description='Ideal for scaling companies wanting predictable results'
              price='$499'
              period='/per month'
              ctaLabel='Continue'
            />

            <PricingCard
              title='Pro'
              description='Built for aggressive growth and high-volume lead generation'
              price='$999'
              period='/per month'
            />
          </div>
        </section>

        <SeeYourFirstLeadsCta />

        <section
          className='mx-auto w-full max-w-[1320px] px-0 pb-20 pt-16 md:pb-28 md:pt-20'
          aria-labelledby='heading-pricing-common-questions'
        >
          <CommonQuestionsSection
            headingId='heading-pricing-common-questions'
            showFaqBadge
          />
        </section>
      </main>
    </div>
  )
}
