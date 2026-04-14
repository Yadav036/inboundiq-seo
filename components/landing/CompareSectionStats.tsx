import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

/** Figma 651:2505 — stat row + SEE PRICING (compare section) */
export function CompareSectionStats({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex w-full flex-col sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
      data-node-id='651:2505'
    >
  

      
    </div>
  )
}
