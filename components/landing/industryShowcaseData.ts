import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  GraduationCap,
  HeartPulse,
  Landmark,
  Rocket,
} from 'lucide-react'

export type IndustryId =
  | 'ecommerce'
  | 'fintech'
  | 'health'
  | 'edtech'
  | 'blockchain'

export type IndustryConfig = {
  id: IndustryId
  label: string
  Icon: LucideIcon
  title: string
  description: string
  whyHeading: string
  bullets: readonly [string, string, string]
  stat: string
  statLabel: string
}

export const INDUSTRIES: IndustryConfig[] = [
  {
    id: 'ecommerce',
    label: 'E-commerce Platforms',
    Icon: Rocket,
    title: 'E-commerce Platforms',
    description:
      'You need pipeline now, not in 3 months when an SDR finishes ramping. InboundIQ analyzes your product positioning and reaches the exact decision-makers evaluating solutions like yours.',
    whyHeading: 'Why InboundIQ works',
    bullets: [
      'No SDR hiring or training required',
      'AI adapts messaging as your product evolves',
      'Pay only when a prospect shows buying intent',
    ],
    stat: '3.2x',
    statLabel: 'avg. pipeline increase',
  },
  {
    id: 'fintech',
    label: 'Fintech Innovation',
    Icon: Landmark,
    title: 'Fintech Innovation',
    description:
      'Compliance-heavy cycles and long deal desks slow outbound. InboundIQ targets finance leaders with messaging that maps to regulatory reality and your product roadmap.',
    whyHeading: 'Why InboundIQ works',
    bullets: [
      'Reach CFOs and risk owners without cold-call spray',
      'Sequences respect disclosure and audit expectations',
      'Pipeline tied to qualified conversations, not vanity sends',
    ],
    stat: '2.4x',
    statLabel: 'avg. reply rate lift',
  },
  {
    id: 'health',
    label: 'Health Tech Solutions',
    Icon: HeartPulse,
    title: 'Health Tech Solutions',
    description:
      'Clinical buyers evaluate slowly and in committees. InboundIQ finds the right stakeholders across providers and payers with precise, human-quality outreach.',
    whyHeading: 'Why InboundIQ works',
    bullets: [
      'Account mapping across hospitals and IDNs',
      'Messaging tuned to specialty and procurement stage',
      'Pay for replies that move evaluation forward',
    ],
    stat: '41%',
    statLabel: 'shorter sales cycle',
  },
  {
    id: 'edtech',
    label: 'EdTech Companies',
    Icon: GraduationCap,
    title: 'EdTech Companies',
    description:
      'District and university buying windows are tight. InboundIQ surfaces curriculum and IT buyers when budgets open—without bloating your headcount.',
    whyHeading: 'Why InboundIQ works',
    bullets: [
      'Territory-aware outreach to districts and institutions',
      'Role-specific angles for teachers, admins, and IT',
      'Clear ROI narrative for every funnel stage',
    ],
    stat: '58%',
    statLabel: 'more qualified demos',
  },
  {
    id: 'blockchain',
    label: 'Blockchain Startups',
    Icon: Blocks,
    title: 'Blockchain Startups',
    description:
      'Technical audiences ignore generic sequences. InboundIQ researches protocol fit and speaks credibly to builders, funds, and ecosystem partners.',
    whyHeading: 'Why InboundIQ works',
    bullets: [
      'Deep personalization for devs and investors',
      'Fast iteration as your roadmap ships',
      'Performance pricing aligned to real engagement',
    ],
    stat: '2.1x',
    statLabel: 'pipeline per rep hour',
  },
]
