'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '@/components/svg/Logo'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  {
    href: '/#how-it-works',
    label: 'How it works?',
    match: () => false,
  },
  { href: '/pricing', label: 'Pricing', match: (p: string) => p.startsWith('/pricing') },
] as const

export function SiteNavbar() {
  const pathname = usePathname()
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-white/[0.06]',
        'bg-black/80 backdrop-blur-[12px] supports-[backdrop-filter]:bg-black/60',
      )}
    >
      <div className='mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-2.5 py-4 sm:px-4'>
        <Link href='/' className='shrink-0' aria-label='InboundIQ home'>
          <Logo width={129} height={25} />
        </Link>

        <div className='flex flex-wrap items-center justify-end gap-5 sm:gap-6'>
          <nav
            className='flex items-center gap-4 font-mono text-xs leading-[1.4] tracking-[-0.02em] sm:gap-6 sm:text-sm'
            style={{ fontFeatureSettings: "'ss05' 1" }}
            aria-label='Primary'
          >
            {navItems.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'whitespace-nowrap transition-colors hover:text-white',
                  match(pathname)
                    ? 'text-white'
                    : 'text-[color:var(--Neutral-500,#737373)]',
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-1.5'>
            <Link
              href='/get-started'
              className='bg-[color:var(--Neutral-300,#404040)] px-3 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-white transition-opacity hover:opacity-90'
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              Get Started
            </Link>
            <Link
              href='/demo'
              className='bg-white px-3 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-black transition-opacity hover:opacity-90'
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
