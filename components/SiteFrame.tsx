import type { ReactNode } from 'react'

/**
 * Global shell: fixed 60px left rail + border (wireframe gutter).
 * Content uses `pl-[60px]` so the rail stays pinned to the viewport while scrolling.
 * Mobile menu panels use `left-[60px]` so the rail stays visible there too.
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className='relative min-h-screen w-full bg-black text-white'>
      <div
        className='pointer-events-none fixed left-0 top-0 z-[40] h-full w-[60px] border-r border-[#262626] bg-black'
        aria-hidden
      />
      <div className='flex min-h-screen min-w-0 flex-col pl-[60px]'>{children}</div>
    </div>
  )
}
