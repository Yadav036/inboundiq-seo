import type { ReactNode } from 'react'

import { SiteFrameLines } from '@/components/SiteFrameLines'

/**
 * Global shell: vertical frame (solid over hero, dashed elsewhere — see SiteFrameLines).
 * Content uses horizontal inset via `px-[60px]` on header / main / footer so it stays inside the frame lines.
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className='page-wrap min-h-screen w-full bg-black text-white'>
      <SiteFrameLines />
      <div className='relative z-0 flex min-h-screen min-w-0 flex-col'>{children}</div>
    </div>
  )
}
