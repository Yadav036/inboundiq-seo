import Link from 'next/link'
import { Mail } from 'lucide-react'

import { Logo } from '@/components/svg/Logo'
import {
  APP_GET_STARTED_URL,
  APP_PRIVACY_URL,
  APP_TERMS_URL,
} from '@/lib/appUrls'
import { cn } from '@/lib/utils'

const FOOTER_COLUMNS: {
  title: string
  links: { label: string; href: string }[]
}[] = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Features', href: '/#built-b2b' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },

  {
    title: 'Legal',
    links: [

      { label: 'Privacy', href: APP_PRIVACY_URL },
      { label: 'Terms', href: APP_TERMS_URL },
    ],
  },
]

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'border-t border-white/[0.06] bg-black text-white',
        className,
      )}
    >
      <div className='mx-auto w-full max-w-[1320px] px-[60px] pb-10 pt-8 md:pb-12 md:pt-8'>
        <div className='flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16'>
          <div className='max-w-[248px] shrink-0'>
            <Link href='/' className='inline-block' aria-label='InboundIQ home'>
              <Logo width={124} height={25} />
            </Link>
            <p className='mt-3 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
              AI-powered outbound that delivers qualified leads. Pay only for
              interested replies.
            </p>
          </div>

          <nav
            className='flex flex-wrap gap-10 sm:gap-14 lg:gap-[60px]'
            aria-label='Footer'
          >
            {FOOTER_COLUMNS.map((col) => (
              <div
                key={col.title}
                className='flex min-w-[140px] flex-col gap-2.5'
              >
                <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  {col.title}
                </p>
                <ul className='flex flex-col gap-2.5'>
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className='font-sans text-base font-normal leading-[1.2] tracking-[0.16px] text-white transition-opacity hover:opacity-80'
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className='mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between'>
          <a
            href='mailto:hello@inboundiq.com'
            className='inline-flex items-center gap-2 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)] transition-colors hover:text-white'
          >
            <Mail className='size-4 shrink-0' strokeWidth={1.5} aria-hidden />
            hello@inboundiq.com
          </a>
          <p className='font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)] sm:text-right'>
            © {new Date().getFullYear()} InboundIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
