import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/**
 * Figma 619:537 — white outline, px 19 / py 20, column gap 10px
 */
type OutlineContentCardProps = {
  children: ReactNode
  className?: string
}

export function OutlineContentCard({
  children,
  className,
}: OutlineContentCardProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-start gap-2.5 py-5 text-left',
        className,
      )}
    >
      {children}
    </div>
  )
}

type OutlineTextBlockProps = {
  title: string
  description: string
  className?: string
}

/** Figma 619:610 — title + body with 6px gap */
export function OutlineTextBlock({
  title,
  description,
  className,
}: OutlineTextBlockProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-1.5 font-sans not-italic',
        className,
      )}
    >
      <p className='w-full text-xl font-normal leading-[1.2] tracking-[-0.02em] text-white'>
        {title}
      </p>
      <p className='w-full text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
        {description}
      </p>
    </div>
  )
}
