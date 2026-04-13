import Image from 'next/image'

import { cn } from '@/lib/utils'

/** Figma 654:3033 — #303030 border; illustration from raster assets */
type BackgroundFeatureCardProps = {
  title: string
  description: string
  imageSrc: string
  className?: string
}

export function BackgroundFeatureCard({
  title,
  description,
  imageSrc,
  className,
}: BackgroundFeatureCardProps) {
  return (
    <article
      className={cn(
        'flex h-full flex-col border border-[#303030] bg-black',
        className,
      )}
    >
      <div className='flex flex-col gap-2.5 px-[19px] pt-5 font-sans not-italic'>
        <h3 className='text-xl font-normal leading-[1.2] tracking-[-0.02em] text-white'>
          {title}
        </h3>
        <p className='text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
          {description}
        </p>
      </div>
      <div
        className='mt-5 flex min-h-[13rem] flex-1 items-end px-[19px] pb-7 pt-0'
        aria-hidden
      >
        <div className='relative h-[200px] w-full opacity-95'>
          <Image
            src={imageSrc}
            alt=''
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-contain object-bottom'
          />
        </div>
      </div>
    </article>
  )
}
