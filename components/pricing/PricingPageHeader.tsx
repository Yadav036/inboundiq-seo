/** Figma 661:4325 — pricing hero (no CTA input; that lives in SeeYourFirstLeadsCta) */
export function PricingPageHeader() {
  return (
    <header className='bg-[#030303]'>
      <div className='mx-auto flex w-full max-w-[1320px] flex-col items-center gap-5 px-0 pb-10 pt-12 text-center sm:gap-6 sm:pb-12 sm:pt-16 md:pt-20'>
        <div
          className='inline-flex h-7 items-center gap-2 border border-white bg-[#030303] px-3 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'
          style={{ borderWidth: '0.5px' }}
        >
          <span className='size-2 shrink-0 bg-white' aria-hidden />
          <p className='font-mono text-xs font-normal uppercase leading-[1.4] tracking-[-0.04em] text-white sm:text-[13px]'>
           Pay for Results
          </p>
        </div>
        <h1 className='max-w-[18ch] font-sans text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-none tracking-[-0.04em] text-white md:max-w-none md:text-[72px] md:tracking-[-2.88px]'>
          Simple. Transparent.
          <br />
          Pay Only for Results.
        </h1>
      </div>
    </header>
  )
}
