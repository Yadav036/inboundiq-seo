import { BackgroundFeatureCard } from '@/components/landing/BackgroundFeatureCard'
import { BACKGROUND_FEATURES } from '@/components/landing/backgroundFeaturesData'

export function BackgroundFeaturesGrid() {
  return (
    <div className='mt-10 w-full md:mt-14 lg:mt-16'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
        {BACKGROUND_FEATURES.map(({ title, description, imageSrc }) => (
          <BackgroundFeatureCard
            key={title}
            title={title}
            description={description}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </div>
  )
}
