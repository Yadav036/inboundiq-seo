export type WebsiteInLeadsVisual = 'figma-step1' | 'accent'

export type WebsiteInLeadsStep = {
  badge: string
  tabLabel: string
  title: string
  description: string
  visual: WebsiteInLeadsVisual
}

export const WEBSITE_IN_LEADS_STEPS: WebsiteInLeadsStep[] = [
  {
    badge: '01',
    tabLabel: 'Website',
    title: 'Drop your URL',
    description:
      'Our AI analyzes your product, value props, and ideal buyer profile in seconds. No forms, no onboarding calls.',
    visual: 'figma-step1',
  },
  {
    badge: '02',
    tabLabel: 'Finding buyers',
    title: 'We surface your ICP',
    description:
      'InboundIQ maps accounts and contacts that match your story—intent, firmographics, and fit—so outbound isn’t a guessing game.',
    visual: 'accent',
  },
  {
    badge: '03',
    tabLabel: 'Personalized outreach',
    title: 'Human-grade messages at scale',
    description:
      'Sequences adapt to each prospect with context from your site and their world—so every touch feels deliberate, not templated.',
    visual: 'accent',
  },
  {
    badge: '04',
    tabLabel: 'Pay for interested reply',
    title: 'Only pay when they engage',
    description:
      'Budget follows outcomes: you’re billed for qualified replies, not spray-and-pray sends—clear ROI from week one.',
    visual: 'accent',
  },
]
