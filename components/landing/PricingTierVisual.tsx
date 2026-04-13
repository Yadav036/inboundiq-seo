import Image from 'next/image'

export function PricingTierVisual() {
  return (
    <div className='mt-10 w-full md:mt-14 lg:mt-16'>
      <figure className='mx-auto max-w-5xl overflow-hidden rounded-sm border border-[#303030] bg-[#050505]'>
        <Image
          src='/pricing-tier-visual.png'
          alt='Starter, Pro, and Scale pricing tiers'
          width={1536}
          height={1024}
          className='h-auto w-full object-contain'
          sizes='(max-width: 1320px) 100vw, 1280px'
        />
      </figure>
    </div>
  )
}
