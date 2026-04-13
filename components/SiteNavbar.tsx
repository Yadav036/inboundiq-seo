'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      data-site-header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-[#252525]',
        'bg-black/80 backdrop-blur-[12px] supports-[backdrop-filter]:bg-black/60',
      )}
    >
      <div className='mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-[20px] py-4'>
        <Link href='/' className='shrink-0' aria-label='InboundIQ home'>
          <Logo width={129} height={25} />
        </Link>

        <div className='hidden flex-wrap items-center justify-end gap-5 sm:gap-6 md:flex'>
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

        <button
          type='button'
          className='inline-flex items-center justify-center rounded border border-[#252525] p-2 text-white md:hidden'
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls='mobile-primary-nav'
          aria-label='Open menu'
        >
          <Menu className='size-5' strokeWidth={1.5} aria-hidden />
        </button>
      </div>

      {mobileOpen ? (
        <>
          <div
            id='mobile-primary-nav'
            className='fixed inset-y-0 left-[60px] right-0 z-[60] flex flex-col border-l border-[#252525] bg-black p-6 md:hidden'
          >
            <div className='flex justify-end'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded border border-[#252525] p-2 text-white'
                onClick={() => setMobileOpen(false)}
                aria-label='Close menu'
              >
                <X className='size-5' strokeWidth={1.5} aria-hidden />
              </button>
            </div>
            <nav
              className='mt-8 flex flex-col gap-5 font-mono text-sm leading-[1.4] tracking-[-0.02em]'
              style={{ fontFeatureSettings: "'ss05' 1" }}
              aria-label='Primary'
            >
              {navItems.map(({ href, label, match }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'transition-colors hover:text-white',
                    match(pathname)
                      ? 'text-white'
                      : 'text-[color:var(--Neutral-500,#737373)]',
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className='mt-auto flex flex-col gap-3 pt-10'>
              <Link
                href='/get-started'
                className='bg-[color:var(--Neutral-300,#404040)] px-3 py-3 text-center font-mono text-sm text-white'
                style={{ fontFeatureSettings: "'ss05' 1" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
              <Link
                href='/demo'
                className='bg-white px-3 py-3 text-center font-mono text-sm text-black'
                style={{ fontFeatureSettings: "'ss05' 1" }}
                onClick={() => setMobileOpen(false)}
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}
