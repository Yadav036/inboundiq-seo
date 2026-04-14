'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import './heroLimeAnimation.css'

const WORD = 'threadjet.ai'
const TYPE_DELAY_MS = 950
const TYPE_INTERVAL_MS = 72
const CELL = 'size-[5px] shrink-0 bg-[color:var(--Primary-500,#b7f601)] will-change-[opacity]'
const CELL_ANIM = [
  '[animation:ib-loader-cell-0_0.8s_linear_infinite]',
  '[animation:ib-loader-cell-1_0.8s_linear_infinite]',
  '[animation:ib-loader-cell-2_0.8s_linear_infinite]',
  '[animation:ib-loader-cell-3_0.8s_linear_infinite]',
] as const

// ── Icons ──────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' aria-hidden>
      <path
        d='M3.5 9.5L7 13L14.5 5.5'
        stroke='#00bc7d'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width='14' height='14' viewBox='0 0 16 16' fill='none' aria-hidden>
      <rect x='1.5' y='6' width='13' height='9' rx='1' stroke='#737373' strokeWidth='1.2' />
      <path
        d='M5.5 6V4.5C5.5 3.67 6.17 3 7 3h2c.83 0 1.5.67 1.5 1.5V6'
        stroke='#737373'
        strokeWidth='1.2'
        strokeLinecap='round'
      />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width='14' height='14' viewBox='0 0 16 16' fill='none' aria-hidden>
      <rect x='2' y='1.5' width='12' height='13' rx='1' stroke='#737373' strokeWidth='1.2' />
      <path
        d='M5 5.5h1M10 5.5h1M5 8.5h1M10 8.5h1M5 11.5h1M10 11.5h1'
        stroke='#737373'
        strokeWidth='1.2'
        strokeLinecap='round'
      />
    </svg>
  )
}

/** 2x2 pixel loader for card activity state */
function IbLoader({ className }: { className?: string }) {
  return (
    <div
      role='status'
      aria-label='Loading'
      className={cn(
        'inline-grid size-[12px] shrink-0 grid-cols-2 gap-px overflow-hidden rounded-[1px]',
        className,
      )}
    >
      {CELL_ANIM.map((anim, i) => (
        <span key={i} className={cn(CELL, anim)} aria-hidden />
      ))}
    </div>
  )
}

function twoSecondsBefore(delay: string): string {
  const sec = Number.parseFloat(delay)
  if (Number.isNaN(sec)) return delay
  return `${Math.max(0, sec - 2).toFixed(1)}s`
}

// ── Sub-components ─────────────────────────────────────────

/** Square green dot + uppercase label — matches Figma 636:738 header row */
function PanelSectionHeader({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 10px',
      }}
    >
      <div style={{ width: 7, height: 7, background: '#00bc7d', flexShrink: 0 }} />
      <span
        style={{
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          fontSize: 10,
          color: 'white',
          letterSpacing: '-0.04em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}

/** Single ICP row — Figma 636:742 */
function IcpCard({
  title,
  size,
  briefcase,
  building,
  delay,
}: {
  title: string
  size: string
  briefcase: number
  building: number
  delay: string
}) {
  const loaderDelay = twoSecondsBefore(delay)
  return (
    <div className='hl-card-wrap' style={{ '--ls': loaderDelay } as CSSProperties}>
      <div className='hl-card-loader' aria-hidden>
        <IbLoader />
      </div>
      <div
        className='hl-icard'
        style={
          {
            '--id': delay,
            background: '#171717',
            border: 'none',
            padding: 12,
            gap: 14,
            display: 'flex',
            flexDirection: 'column',
          } as CSSProperties
        }
      >
        <p
          className='hl-ititle'
          style={{ marginBottom: 0, fontSize: 13, letterSpacing: '-0.02em' }}
        >
          {title}
        </p>
        <div className='hl-imeta'>
          <span className='hl-isize' style={{ fontSize: 11 }}>
            {size}
          </span>
          <div className='hl-istats'>
            <div className='hl-istat'>
              <BriefcaseIcon />
              {briefcase}
            </div>
            <div className='hl-istat'>
              <BuildingIcon />
              {building}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Single lead row — Figma 636:844 */
function LeadCard({
  initials,
  name,
  role,
  delay,
}: {
  initials: string
  name: string
  role: string
  delay: string
}) {
  const loaderDelay = twoSecondsBefore(delay)
  return (
    <div className='hl-card-wrap' style={{ '--ls': loaderDelay } as CSSProperties}>
      <div className='hl-card-loader' aria-hidden>
        <IbLoader />
      </div>
      <div
        className='hl-lcard'
        style={
          {
            '--ld': delay,
            background: '#171717',
            border: 'none',
            padding: 10,
            gap: 10,
            alignItems: 'flex-start',
          } as CSSProperties
        }
      >
        {/* Square initials avatar — Figma 644:1706 */}
        <div
          style={{
            width: 42,
            height: 42,
            background: '#1e1e1e',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono, ui-monospace, monospace)',
              fontSize: 13,
              color: '#737373',
              letterSpacing: '-0.02em',
            }}
          >
            {initials}
          </span>
        </div>

        <div className='hl-linfo'>
          <div className='hl-lname' style={{ fontSize: 13, letterSpacing: '-0.02em' }}>
            {name}
          </div>
          <div className='hl-lrole' style={{ fontSize: 11 }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main ───────────────────────────────────────────────────

type HeroLimeAnimationProps = {
  className?: string
  compact?: boolean
}

export function HeroLimeAnimation({
  className,
  compact = false,
}: HeroLimeAnimationProps) {
  const [sceneKey, setSceneKey] = useState(0)
  const [typed, setTyped] = useState('')
  const [cursorOff, setCursorOff] = useState(false)

  useEffect(() => {
    setTyped('')
    setCursorOff(false)
    let i = 0
    let cancelled = false
    let intervalId: ReturnType<typeof setInterval> | undefined
    let cursorHideId: ReturnType<typeof setTimeout> | undefined

    const start = setTimeout(() => {
      intervalId = setInterval(() => {
        if (cancelled) return
        i += 1
        setTyped(WORD.slice(0, i))
        if (i >= WORD.length) {
          clearInterval(intervalId)
          cursorHideId = setTimeout(() => {
            if (!cancelled) setCursorOff(true)
          }, 2400)
        }
      }, TYPE_INTERVAL_MS)
    }, TYPE_DELAY_MS)

    // Auto-loop: restart after all card animations finish (~13 s) + brief pause
    const loopId = setTimeout(() => {
      if (!cancelled) setSceneKey((k) => k + 1)
    }, 14000)

    return () => {
      cancelled = true
      clearTimeout(start)
      clearTimeout(loopId)
      if (intervalId) clearInterval(intervalId)
      if (cursorHideId) clearTimeout(cursorHideId)
    }
  }, [sceneKey])

  return (
    <div
      className={cn(
        'hero-lime-scope bg-transparent font-mono',
        compact && 'hero-lime-scope--compact',
        className,
      )}
    >
      <div key={sceneKey} className='hl-root'>
        <div className='hl-scene'>

          {/* ── Panel 1: threadjet.ai header (Figma 635:680) ── */}
          <div
            className='hl-hdr'
            style={{
              background: '#030303',
              borderColor: '#303030',
              padding: '8px 10px',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div
                className='hl-logo-box'
                style={{
                  width: 28,
                  height: 28,
                  padding: 4,
                  background: 'transparent',
                  border: 'none',
                }}
              >
                <Image
                  src='/threadjet.png'
                  alt=''
                  width={20}
                  height={20}
                  className='pointer-events-none size-5 object-contain'
                  priority
                />
              </div>
              <div className='hl-logo-txt'>
                <span>{typed}</span>
                <span
                  className={cn('hl-cursor', cursorOff && 'hl-cursor--off')}
                  aria-hidden
                />
              </div>
            </div>
            <CheckIcon />
          </div>

          {/* connector */}
          <div className='hl-vwrap'>
            <div className='hl-vline' style={{ '--vd': '2.0s' } as CSSProperties} />
            <div className='hl-vdot' style={{ '--dd': '2.85s' } as CSSProperties} />
          </div>

          {/* ── Panel 2: ICP cards (Figma 636:712) ── */}
          <div
            className='hl-panel'
            style={
              {
                '--pd': '3.0s',
                '--ps': '3.3s',
                background: '#030303',
                borderColor: '#303030',
                padding: 8,
                gap: 8,
                display: 'flex',
                flexDirection: 'column',
              } as CSSProperties
            }
          >
            <PanelSectionHeader label='3 ICP Found' />
            <div className='hl-ilist'>
              <IcpCard
                title='SaaS founders of Series A–B'
                size='20–100 employees'
                briefcase={2}
                building={13}
                delay='3.5s'
              />
              <IcpCard
                title='VP of Marketing at B2B companies'
                size='20–100 employees'
                briefcase={3}
                building={22}
                delay='4.5s'
              />
              <IcpCard
                title='Head of Growth at PLG startups'
                size='10–50 employees'
                briefcase={5}
                building={18}
                delay='5.5s'
              />
            </div>
          </div>

          {/* connector */}
          <div className='hl-vwrap'>
            <div className='hl-vline' style={{ '--vd': '6.6s' } as CSSProperties} />
            <div className='hl-vdot' style={{ '--dd': '7.4s' } as CSSProperties} />
          </div>

          {/* ── Panel 3: Leads (Figma 636:840) ── */}
          <div
            className='hl-panel'
            style={
              {
                '--pd': '7.5s',
                '--ps': '7.8s',
                background: '#030303',
                borderColor: '#303030',
                padding: 8,
                gap: 8,
                display: 'flex',
                flexDirection: 'column',
              } as CSSProperties
            }
          >
            <PanelSectionHeader label='3 Leads found' />
            <div className='hl-llist'>
              <LeadCard
                initials='SC'
                name='Sarah Chen'
                role='VP Marketing · Reforge'
                delay='7.9s'
              />
              <LeadCard
                initials='DM'
                name='David Martinez'
                role='Lead Product Designer · Airbnb'
                delay='8.9s'
              />
              <LeadCard
                initials='AH'
                name='Amina Hassan'
                role='Head of Growth · Lattice'
                delay='9.9s'
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
