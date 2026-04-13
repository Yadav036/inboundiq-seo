import { HeroWebsiteInput } from '@/components/HeroWebsiteInput'
import { HeroLimeAnimation } from '@/components/landing/HeroLimeAnimation'

const HERO_VECTOR_BG = '/hero-vector-bg.png'

export function HeroSection() {
  return (
    <section
      data-site-hero
      className='relative isolate flex w-full min-h-[min(100svh,920px)] flex-col overflow-hidden'
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
          className='absolute inset-0 h-full w-full object-cover object-[center_42%] sm:object-right'
        />
      </div>

      {/* ── Layer 1: Dot grid ──────────────────────────────── */}
      <div
        className='pointer-events-none absolute inset-0 z-[1] opacity-[0.18]'
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 60% 50%, black 0%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 60% 50%, black 0%, transparent 72%)',
        }}
      />

      {/* ── Layer 2: Lime glow orb (right, echoes the animation) */}
      <div
        className='pointer-events-none absolute z-[2]'
        aria-hidden
        style={{
          right: '-8%',
          top: '10%',
          width: '55vw',
          maxWidth: 680,
          aspectRatio: '1',
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(163,230,53,0.18) 0%, rgba(101,163,13,0.10) 35%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'orb-drift 9s ease-in-out infinite alternate',
        }}
      />

      {/* ── Layer 3: Deep cyan accent orb (upper-left edge) ── */}
      <div
        className='pointer-events-none absolute z-[2]'
        aria-hidden
        style={{
          left: '-5%',
          top: '-15%',
          width: '40vw',
          maxWidth: 520,
          aspectRatio: '1',
          background:
            'radial-gradient(ellipse, rgba(20,184,166,0.10) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'orb-drift 13s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* ── Layer 4: Left scrim for headline contrast ────── */}
      <div
        className='pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-black/85 from-[0%] via-black/40 via-[35%] to-transparent to-[62%]'
        aria-hidden
      />

      {/* ── Layer 5: Bottom vignette ──────────────────────── */}
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-40'
        aria-hidden
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
        }}
      />

      {/* ── Layer 6: Film grain (SVG turbulence filter) ───── */}
      <svg className='pointer-events-none absolute inset-0 z-[4] h-full w-full opacity-[0.032]' aria-hidden>
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

      {/* ── Layer 7: Copy + lime demo ──────────────────────── */}
      <div className='relative z-10 mx-auto grid min-h-0 w-full max-w-[1320px] flex-1 grid-cols-1 content-start items-start gap-8 px-4 pb-16 pt-14 text-left sm:gap-9 sm:pb-20 sm:pt-16 md:gap-10 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(260px,min(480px,42vw))] lg:gap-x-10 lg:gap-y-6 lg:pb-12 lg:pt-10'>
        <div className='mt-5 flex flex-col items-start justify-start gap-4 sm:mt-6 sm:gap-5 md:gap-6 lg:mt-8 lg:max-w-none'>
          <div
            className='inline-flex h-7 items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
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
            Qualified leads.
            <br />
            Pay per reply.
          </h1>

          <div className='w-full max-w-[600px]'>
            <HeroWebsiteInput />
          </div>
        </div>

        <div className='flex w-full min-h-0 justify-center bg-transparent lg:-mt-4 lg:max-h-[min(78svh,640px)] lg:justify-end lg:self-start'>
          <HeroLimeAnimation
            compact
            className='w-full max-w-[480px] bg-transparent lg:max-h-full'
          />
        </div>
      </div>

      {/* ── Keyframes ──────────────────────────────────────── */}
      <style>{`
        @keyframes orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(2%, 4%) scale(1.06); }
        }
      `}</style>
    </section>
  )
}