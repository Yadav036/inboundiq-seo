import type { ReactNode } from 'react'

/**
 * Global shell: two vertical frame lines at 60px from each edge (#252525).
 * Content uses horizontal inset via `px-[76px]` on header / main / footer (60px rail + 16px).
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className='page-wrap min-h-screen w-full bg-black text-white'>
      <div className='frame-left' aria-hidden />
      <div className='frame-right' aria-hidden />
      <div className='relative z-0 flex min-h-screen min-w-0 flex-col'>{children}</div>
    </div>
  )
}
