import { HeroWebsiteInput } from '@/components/HeroWebsiteInput'
import { HeroLimeAnimation } from '@/components/landing/HeroLimeAnimation'

const HERO_VECTOR_BG = '/Vector%20(3).png'

export function HeroSection() {
  return (
    <section
      data-site-hero
      className='relative isolate flex w-full  min-h-[calc(110svh-64px)] pt-20 flex-col overflow-hidden'
    >

      {/* ── Layer 0: Vector base ───────────────────────────── */}
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden' aria-hidden>
        <img
          src={HERO_VECTOR_BG}
          alt=''
          width={1319}
          height={766}
          decoding='async'
          fetchPriority='high'
          className='absolute inset-0 h-full w-full object-contain object-center'
        />
      </div>

      {/* ── Layer 1: Left scrim for headline contrast ────── */}
      <div
        className='pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-black/38 from-[0%] via-black/12 via-[35%] to-transparent to-[62%]'
        aria-hidden
      />

      {/* ── Layer 2: Bottom vignette ──────────────────────── */}
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-40'
        aria-hidden
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 100%)',
        }}
      />

      {/* ── Layer 3: Film grain (SVG turbulence filter) ───── */}
      <svg className='pointer-events-none absolute inset-0 z-[4] h-full w-full opacity-[0.008]' aria-hidden>
        <filter id='grain'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.72'
            numOctaves='4'
            stitchTiles='stitch'
          />
          <feColorMatrix type='saturate' values='0' />
        </filter>
        <rect width='100%' height='100%' filter='url(#grain)' />
      </svg>

      {/* ── Layer 4: Copy + lime demo ──────────────────────── */}
      <div
        className='relative z-10 mx-auto grid min-h-0 w-full max-w-[1320px] flex-1 grid-cols-1 content-center items-center gap-8 pb-[8vh] text-left sm:gap-9 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,min(480px,42vw))] lg:gap-x-10 lg:gap-y-6'
        style={{ padding: '0 63px' }}
      >
        {/* Animation first on mobile, right column on desktop */}
        <div className='hidden w-full min-h-0 justify-center bg-transparent lg:flex lg:order-last lg:max-h-[min(78svh,640px)] lg:justify-end lg:self-center'>
          <HeroLimeAnimation
            compact
            className='w-full max-w-[480px] bg-transparent lg:max-h-full'
          />
        </div>

        <div className='flex flex-col items-start justify-center lg:max-w-none'>
          <div
            className='inline-flex mb-[20px] h-7 items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
            style={{ borderWidth: '0.5px' }}
          >
            <span className='size-2 shrink-0 bg-white' aria-hidden />
            <p
              className='font-mono text-xs font-normal uppercase leading-[1.4] tracking-[-0.04em] text-white sm:text-[13px]'
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              AI-POWERED OUTBOUND
            </p>
          </div>

          <h1 className='max-w-[720px] font-sans text-[clamp(2.35rem,5.2vw,4.35rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]'>
            The easiest way to get qualified leads
          </h1>

          <p className='mt-5 mb-8 max-w-[520px] font-sans text-[15px] font-normal leading-[1.55] tracking-[-0.01em] text-white/70'>
            Drop in your website URL. InboundIQ figures out who to target, writes the outreach, and brings you qualified replies. You only pay when someone is actually interested.
          </p>

          <div className='w-full max-w-[600px]'>
            <HeroWebsiteInput />
            <p
              className='mt-3 font-mono text-[14px] font-normal leading-[1.4] tracking-[-0.02em] text-left text-white'
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              Try it - watch what happens
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}