export type B2BFeature = {
  title: string
  description: string
  /** Raster art from `public/landing/b2b-illustrations` (sassmetrics illustrations) */
  imageSrc: string
}

export const B2B_FEATURES: readonly B2BFeature[] = [
  {
    title: 'Smart ICP detection',
    description:
      'AI identifies your ideal customers from your website. No manual configuration.',
    imageSrc: '/landing/b2b-illustrations/smart-icp.png',
  },
  {
    title: 'Human-quality copy',
    description:
      "Personalized to each prospect's role, company stage, and pain points.",
    imageSrc: '/landing/b2b-illustrations/human.png',
  },
  {
    title: 'Enterprise-ready infra',
    description:
      'Domain warm-up, deliverability monitoring, and compliance built in.',
    imageSrc: '/landing/b2b-illustrations/enterprise-ready.png',
  },
  {
    title: 'Live analytics',
    description:
      'Track lead quality and pipeline impact in real time. No guessing.',
    imageSrc: '/landing/b2b-illustrations/live-analysis.png',
  },
  {
    title: 'CRM integrations',
    description:
      'HubSpot, Salesforce, Pipedrive — leads flow into your existing workflow.',
    imageSrc: '/landing/b2b-illustrations/crm-integration.png',
  },
  {
    title: 'Always-on sequencing',
    description:
      'Drip cadences, throttling, and retries run 24/7 while you stay focused on replies.',
    imageSrc: '/landing/b2b-illustrations/transparent.png',
  },
] as const
