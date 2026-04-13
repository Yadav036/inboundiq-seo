'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import './heroLimeAnimation.css'

const WORD = 'threadjet.ai'
const TYPE_DELAY_MS = 950
const TYPE_INTERVAL_MS = 72

function StatLockIcon() {
  return (
    <svg width='11' height='11' viewBox='0 0 16 16' fill='none' aria-hidden>
      <rect
        x='2'
        y='6'
        width='12'
        height='9'
        rx='1.5'
        stroke='#888'
        strokeWidth='1.5'
      />
      <path
        d='M5 6V4a3 3 0 016 0v2'
        stroke='#888'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}

function StatBagIcon() {
  return (
    <svg width='11' height='11' viewBox='0 0 16 16' fill='none' aria-hidden>
      <rect
        x='1'
        y='7'
        width='14'
        height='8'
        rx='1.5'
        stroke='#888'
        strokeWidth='1.5'
      />
      <rect
        x='5'
        y='3'
        width='6'
        height='4'
        rx='1'
        stroke='#888'
        strokeWidth='1.5'
      />
    </svg>
  )
}

type HeroLimeAnimationProps = {
  className?: string
  /** Tighter padding / scale for fitting beside hero copy in the viewport */
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

    return () => {
      cancelled = true
      clearTimeout(start)
      if (intervalId) clearInterval(intervalId)
      if (cursorHideId) clearTimeout(cursorHideId)
    }
  }, [sceneKey])

  function handleReplay() {
    setSceneKey((k) => k + 1)
  }

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
          <div className='hl-hdr'>
            <div className='hl-logo-box' aria-hidden>
              <Image
                src='/threadjet.png'
                alt=''
                width={26}
                height={26}
                className='pointer-events-none size-[26px] object-contain'
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

          <div className='hl-vwrap'>
            <div className='hl-vline' style={{ '--vd': '2.0s' } as CSSProperties} />
            <div className='hl-vdot' style={{ '--dd': '2.85s' } as CSSProperties} />
          </div>

          <div
            className='hl-panel'
            style={
              { '--pd': '3.0s', '--ps': '3.3s' } as CSSProperties
            }
          >
            <div className='hl-sec-head'>
              <div className='hl-sdot' />
              <span className='hl-slbl'>3 ICP Found</span>
            </div>
            <div className='hl-ilist'>
              <div className='hl-icard' style={{ '--id': '3.5s' } as CSSProperties}>
                <div className='hl-ititle'>SaaS founders of Series A-B</div>
                <div className='hl-imeta'>
                  <span className='hl-isize'>20–100 employees</span>
                  <div className='hl-istats'>
                    <div className='hl-istat'>
                      <StatLockIcon />2
                    </div>
                    <div className='hl-istat'>
                      <StatBagIcon />
                      13
                    </div>
                  </div>
                </div>
              </div>
              <div className='hl-icard' style={{ '--id': '4.5s' } as CSSProperties}>
                <div className='hl-ititle'>VP of Marketing at B2B companies</div>
                <div className='hl-imeta'>
                  <span className='hl-isize'>20–100 employees</span>
                  <div className='hl-istats'>
                    <div className='hl-istat'>
                      <StatLockIcon />3
                    </div>
                    <div className='hl-istat'>
                      <StatBagIcon />
                      22
                    </div>
                  </div>
                </div>
              </div>
              <div className='hl-icard' style={{ '--id': '5.5s' } as CSSProperties}>
                <div className='hl-ititle'>Head of Growth at PLG startups</div>
                <div className='hl-imeta'>
                  <span className='hl-isize'>10–50 employees</span>
                  <div className='hl-istats'>
                    <div className='hl-istat'>
                      <StatLockIcon />5
                    </div>
                    <div className='hl-istat'>
                      <StatBagIcon />
                      18
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='hl-vwrap'>
            <div className='hl-vline' style={{ '--vd': '6.6s' } as CSSProperties} />
            <div className='hl-vdot' style={{ '--dd': '7.4s' } as CSSProperties} />
          </div>

          <div
            className='hl-panel'
            style={
              { '--pd': '7.5s', '--ps': '7.8s' } as CSSProperties
            }
          >
            <div className='hl-sec-head'>
              <div className='hl-sdot' />
              <span className='hl-slbl'>3 Leads Found</span>
            </div>
            <div className='hl-llist'>
              <div className='hl-lcard' style={{ '--ld': '7.9s' } as CSSProperties}>
                <div className='hl-ava-wrap'>
                  <svg viewBox='0 0 42 42' width='42' height='42' aria-hidden>
                    <circle
                      cx='21'
                      cy='21'
                      r='19.5'
                      style={{ '--ring': '8.0s' } as CSSProperties}
                    />
                  </svg>
                  <div
                    className='hl-ava-glow'
                    style={{ '--glow': '8.65s' } as CSSProperties}
                  />
                  <div
                    className='hl-ava-img'
                    style={{ '--reveal': '8.55s' } as CSSProperties}
                  >
                    <Image
                      src='https://i.pravatar.cc/80?img=47'
                      alt=''
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className='hl-linfo'>
                  <div className='hl-lname'>Sarah Chen</div>
                  <div className='hl-lrole'>
                    VP Marketing<em>·</em>Reforge
                  </div>
                </div>
              </div>

              <div className='hl-lcard' style={{ '--ld': '8.9s' } as CSSProperties}>
                <div className='hl-ava-wrap'>
                  <svg viewBox='0 0 42 42' width='42' height='42' aria-hidden>
                    <circle
                      cx='21'
                      cy='21'
                      r='19.5'
                      style={{ '--ring': '9.0s' } as CSSProperties}
                    />
                  </svg>
                  <div
                    className='hl-ava-glow'
                    style={{ '--glow': '9.65s' } as CSSProperties}
                  />
                  <div
                    className='hl-ava-img'
                    style={{ '--reveal': '9.55s' } as CSSProperties}
                  >
                    <Image
                      src='https://i.pravatar.cc/80?img=12'
                      alt=''
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className='hl-linfo'>
                  <div className='hl-lname'>David Martinez</div>
                  <div className='hl-lrole'>
                    Lead Product Designer<em>·</em>Airbnb
                  </div>
                </div>
              </div>

              <div className='hl-lcard' style={{ '--ld': '9.9s' } as CSSProperties}>
                <div className='hl-ava-wrap'>
                  <svg viewBox='0 0 42 42' width='42' height='42' aria-hidden>
                    <circle
                      cx='21'
                      cy='21'
                      r='19.5'
                      style={{ '--ring': '10.0s' } as CSSProperties}
                    />
                  </svg>
                  <div
                    className='hl-ava-glow'
                    style={{ '--glow': '10.65s' } as CSSProperties}
                  />
                  <div
                    className='hl-ava-img'
                    style={{ '--reveal': '10.55s' } as CSSProperties}
                  >
                    <Image
                      src='https://i.pravatar.cc/80?img=56'
                      alt=''
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div className='hl-linfo'>
                  <div className='hl-lname'>Amina Hassan</div>
                  <div className='hl-lrole'>
                    Head of Growth<em>·</em>Lattice
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <button
          type='button'
          className='hl-replay'
          onClick={handleReplay}
        >
          ↺ &nbsp;replay
        </button>
      </div>
    </div>
  )
}
