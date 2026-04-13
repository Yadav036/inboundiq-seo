import { B2B_FEATURES } from '@/components/landing/b2bFeatures'

export type BackgroundFeatureItem = {
  title: string
  description: string
  imageSrc: string
}

/** Six cards for “Everything runs in the background” — uses `B2B_FEATURES` image paths */
export const BACKGROUND_FEATURES: BackgroundFeatureItem[] = B2B_FEATURES.map(
  (item) => ({
    title: item.title,
    description: item.description,
    imageSrc: item.imageSrc,
  }),
)
