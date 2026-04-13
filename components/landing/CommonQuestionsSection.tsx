import { CompareFaq } from '@/components/landing/CompareFaq'
import { cn } from '@/lib/utils'

/** Common Questions section */
export function CommonQuestionsSection({
  className,
  headingId = 'heading-common-questions',
  showFaqBadge = false,
}: {
  className?: string
  /** Use unique id if reused on multiple pages */
  headingId?: string
  /** Show small FAQ badge above heading */
  showFaqBadge?: boolean
}) {
  return (
    <section className={cn('flex flex-col', className)} aria-labelledby={headingId}>
      {showFaqBadge && (
        <div
          className='mx-auto inline-flex h-7 items-center gap-2 border border-white/70 bg-[#030303] px-3 py-1.5'
          style={{ borderWidth: '0.5px' }}
        >
          <span className='size-2 shrink-0 bg-white' aria-hidden />
          <span className='font-mono text-xs uppercase tracking-[-0.04em] text-white sm:text-[13px]'>
            FAQ
          </span>
        </div>
      )}

      <h2
        id={headingId}
        className={cn(
          'mx-auto max-w-[22ch] text-center text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white md:max-w-none',
          showFaqBadge && 'mt-5 sm:mt-6',
        )}
      >
        Common questions
      </h2>

      <CompareFaq className='mx-auto mt-10 w-full max-w-[900px] md:mt-12 lg:mt-14' />
    </section>
  )
}