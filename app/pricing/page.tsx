import type { Metadata } from 'next'

import { CommonQuestionsSection } from '@/components/landing/CommonQuestionsSection'
import { PricingCard } from '@/components/pricing/PricingCard'
import { PricingPageHeader } from '@/components/pricing/PricingPageHeader'
import { SeeYourFirstLeadsCta } from '@/components/pricing/SeeYourFirstLeadsCta'
import { SiteNavbar } from '@/components/SiteNavbar'

export const metadata: Metadata = {
  title: 'Pricing — InboundIQ',
  description: 'Simple, transparent pricing. Pay only for results.',
}

export default function PricingPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <SiteNavbar />
      <main className='px-[60px]'>
        <PricingPageHeader />
        <section
          className='mx-auto w-full max-w-[1320px] px-0 pb-16 pt-8 md:pb-20 md:pt-10'
          aria-label='Pricing plans'
        >
          <div className='flex max-w-full justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            <div className='flex flex-col divide-y divide-[#303030] border border-[#303030] lg:flex-row lg:divide-x lg:divide-y-0'>
              <PricingCard
                title='Pay As You Go'
                description='Perfect for testing or occasional lead generation'
                price='$99'
                period='/per qualified lead'
                className='border-0'
              />

              <PricingCard
                title='Starter'
                description='Best for small teams starting outbound without risk'
                price='$299'
                period='/per month'
                className='border-0'
              />

              <PricingCard
                title='Growth'
                description='Ideal for scaling companies wanting predictable results'
                price='$499'
                period='/per month'
                ctaLabel='Continue'
                className='border-0'
              />

              <PricingCard
                title='Pro'
                description='Built for aggressive growth and high-volume lead generation'
                price='$999'
                period='/per month'
                className='border-0'
              />
            </div>
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
