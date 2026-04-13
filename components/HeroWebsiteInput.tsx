'use client'

import { ArrowUp, Globe } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function HeroWebsiteInput() {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Hook up analytics / navigation when flow exists
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full items-center justify-between gap-3 border border-white/10 bg-white/20 p-2.5 backdrop-blur-[34px]'
      aria-label='Enter your website'
    >
      <div className='flex min-w-0 flex-1 items-center gap-3'>
        <Globe
          className='size-6 shrink-0 text-[color:var(--Neutral-600,#a3a3a3)]'
          strokeWidth={1.5}
          aria-hidden
        />
        <input
          type='url'
          name='website'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter your website...'
          className='min-w-0 flex-1 bg-transparent font-mono text-sm leading-[1.4] tracking-[-0.02em] text-white placeholder:text-[color:var(--Neutral-600,#a3a3a3)] outline-none'
          style={{ fontFeatureSettings: "'ss05' 1" }}
          autoComplete='url'
          inputMode='url'
        />
      </div>
      <button
        type='submit'
        className='flex size-10 shrink-0 items-center justify-center bg-white text-black transition-opacity hover:opacity-90'
        aria-label='Submit website'
      >
        <ArrowUp className='size-5' strokeWidth={1.75} aria-hidden />
      </button>
    </form>
  )
}
