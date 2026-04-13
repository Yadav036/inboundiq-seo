import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { OutlineContentCard } from '@/components/landing/OutlineContentCard'

type FeatureCardProps = {
  title: string
  children: ReactNode
  className?: string
}

export function FeatureCard({ title, children, className }: FeatureCardProps) {
  return (
    <OutlineContentCard className={cn(className)}>
      <div className='flex w-full flex-col gap-1.5'>
        <h3 className='font-sans text-xl font-normal leading-[1.2] tracking-[-0.02em] text-white'>
          {title}
        </h3>
        <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
          {children}
        </p>
      </div>
    </OutlineContentCard>
  )
}
