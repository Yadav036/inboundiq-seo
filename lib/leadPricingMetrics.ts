/** Avg revenue per lead for projected ROI (matches marketing copy). */
export const AVG_REVENUE_PER_LEAD = 4200

export type LeadPlanKey = 'payg' | 'starter' | 'growth' | 'pro'

export type LeadPricingMetrics = {
  monthlyLeads: number
  estimatedMonthlyCost: number
  costPerLead: number
  timelineMin: number
  timelineMax: number
  planKey: LeadPlanKey
  planDisplayName: string
  planPriceLine: string
  includedLeads: number
  additionalLeadPrice: number | null
  planBlurb: string
  projectedRevenue: number
  roiMultiplier: number
  ctaLabel: string
}

/**
 * Tiered pricing aligned with marketing snapshots (1 / 5 / 7 / 20 leads).
 * Starter: $299/mo · 4 included, +$79 each · Growth: $499 · 8 incl., +$69 · Pro: $999 · 20 incl., +$59
 */
export function computeLeadPricingMetrics(rawLeads: number): LeadPricingMetrics {
  const monthlyLeads = Math.min(50, Math.max(1, Math.round(rawLeads)))

  let estimatedMonthlyCost: number
  let planKey: LeadPlanKey
  let planDisplayName: string
  let planPriceLine: string
  let includedLeads: number
  let additionalLeadPrice: number | null
  let planBlurb: string
  let timelineMin: number
  let timelineMax: number
  let ctaLabel: string

  if (monthlyLeads === 1) {
    estimatedMonthlyCost = 99
    planKey = 'payg'
    planDisplayName = 'Pay-as-you-go'
    planPriceLine = '$99 per qualified lead'
    includedLeads = 1
    additionalLeadPrice = null
    planBlurb = 'Perfect for testing or occasional lead generation.'
    timelineMin = 3
    timelineMax = 5
    ctaLabel = 'Get 1 lead'
  } else if (monthlyLeads <= 5) {
    estimatedMonthlyCost = 299 + Math.max(0, monthlyLeads - 4) * 79
    planKey = 'starter'
    planDisplayName = 'Starter'
    planPriceLine = '$299/mo · 4 included'
    includedLeads = 4
    additionalLeadPrice = 79
    planBlurb = 'Best for small teams starting outbound without risk.'
    timelineMin = 5
    timelineMax = 10
    ctaLabel = `Start with ${monthlyLeads} leads`
  } else if (monthlyLeads <= 15) {
    estimatedMonthlyCost = 499 + Math.max(0, monthlyLeads - 8) * 69
    planKey = 'growth'
    planDisplayName = 'Growth'
    planPriceLine = '$499/mo · 8 included'
    includedLeads = 8
    additionalLeadPrice = 69
    planBlurb = 'Ideal for scaling companies wanting predictable results.'
    timelineMin = 5
    timelineMax = 10
    ctaLabel = `Start with ${monthlyLeads} leads`
  } else {
    estimatedMonthlyCost =
      monthlyLeads <= 20
        ? 999
        : 999 + (monthlyLeads - 20) * 59
    planKey = 'pro'
    planDisplayName = 'Pro'
    planPriceLine = '$999/mo · 20 included'
    includedLeads = 20
    additionalLeadPrice = 59
    planBlurb = 'Built for aggressive growth and high-volume lead generation.'
    timelineMin = 10
    timelineMax = 18
    ctaLabel = 'Launch my campaign'
  }

  const costPerLead = Math.round(estimatedMonthlyCost / monthlyLeads)
  const projectedRevenue = monthlyLeads * AVG_REVENUE_PER_LEAD
  const roiMultiplier =
    estimatedMonthlyCost > 0 ? projectedRevenue / estimatedMonthlyCost : 0

  return {
    monthlyLeads,
    estimatedMonthlyCost,
    costPerLead,
    timelineMin,
    timelineMax,
    planKey,
    planDisplayName,
    planPriceLine,
    includedLeads,
    additionalLeadPrice,
    planBlurb,
    projectedRevenue,
    roiMultiplier,
    ctaLabel,
  }
}
