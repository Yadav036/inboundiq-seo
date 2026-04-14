export type B2BFeature = {
  title: string
  description: string
  /** Raster art from `public/landing/b2b-illustrations` */
  imageSrc: string
}

export const B2B_FEATURES: readonly B2BFeature[] = [
  {
    title: 'Enterprise infra',
    description: 'Reliable sending infrastructure, built to run at scale.',
    imageSrc: '/landing/b2b-illustrations/enterprise-ready.png',
  },
  {
    title: 'Smart ICP detection',
    description: 'Finds your best-fit buyers using signals and intent.',
    imageSrc: '/landing/b2b-illustrations/smart-icp.png',
  },
  {
    title: '30+ data sources',
    description: 'Pulls from deep data sources to improve targeting.',
    imageSrc: '/landing/b2b-illustrations/live-analysis.png',
  },
  {
    title: 'Learns and improves',
    description: 'Gets smarter from replies and optimizes automatically.',
    imageSrc: '/landing/b2b-illustrations/transparent.png',
  },
  {
    title: 'AI sales insights',
    description: 'Helps you pitch better with sharper context and angles.',
    imageSrc: '/landing/b2b-illustrations/human.png',
  },
  {
    title: 'CRM sync',
    description: 'Pushes qualified leads straight into your CRM.',
    imageSrc: '/landing/b2b-illustrations/crm-integration.png',
  },
] as const
