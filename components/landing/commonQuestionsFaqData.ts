
export type CommonQuestionsFaqEntry = {
  id: string
  question: string
  answer: string
  bordered?: boolean
}

export const QUALIFIED_LEAD_DISCLAIMER =
  `Auto-replies and "not interested" responses never count.`

export const COMMON_QUESTIONS_FAQ_ITEMS: CommonQuestionsFaqEntry[] = [
  {
    id: 'qualified-lead',
    question: 'What exactly is a qualified lead?',
    answer:
      'A qualified lead is a genuine conversation with a decision-maker or stakeholder who fits your ICP and shows real interest in learning more.',
  },
  {
    id: 'control-sent',
    question: 'Can I control what is sent on my behalf?',
    answer:
      'Yes. You approve messaging, sequences, and guardrails before launch, and you can pause or adjust campaigns anytime.',
  },
  {
    id: 'no-leads',
    question: 'What happens if I do not get any leads?',
    answer:
      'We review targeting, messaging, and campaign performance with you, then refine the strategy to improve results.',
  },
  {
    id: 'vs-sdr',
    question: 'How does InboundIQ compare to hiring an SDR?',
    answer:
      'You get outbound execution and tooling without hiring delays, ramp time, or overhead. Pricing scales with qualified outcomes instead of headcount.',
  },
  {
    id: 'technical-setup',
    question: 'Do I need any technical setup?',
    answer:
      'Very little. Connect tools like your CRM or calendar where useful, and we will guide you through a lightweight setup.',
  },
]