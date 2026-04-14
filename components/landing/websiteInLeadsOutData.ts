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
    title: 'We learn your business',
    description: 'From one URL, we know where to start.',
    visual: 'figma-step1',
  },
  {
    badge: '02',
    tabLabel: 'Finding buyers',
    title: 'We find the right people',
    description: 'Best-fit buyers, ranked by signal and intent.',
    visual: 'accent',
  },
  {
    badge: '03',
    tabLabel: 'Outreach',
    title: 'We do the writing',
    description: 'Personal, relevant, and ready to send at scale.',
    visual: 'accent',
  },
  {
    badge: '04',
    tabLabel: 'Replies',
    title: 'You only pay later',
    description: 'Pay when qualified buyers actually respond.',
    visual: 'accent',
  },
]
