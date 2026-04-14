'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'

import {
  COMMON_QUESTIONS_FAQ_ITEMS,
  QUALIFIED_LEAD_DISCLAIMER,
} from '@/components/landing/commonQuestionsFaqData'
import { cn } from '@/lib/utils'

export function CompareFaq({ className }: { className?: string }) {
  return (
    <AccordionPrimitive.Root
      type='single'
      collapsible
      className={cn('flex w-full max-w-[900px] flex-col gap-2', className)}
    >
      {COMMON_QUESTIONS_FAQ_ITEMS.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className='border border-[#303030] bg-[#030303]'
          data-node-id={item.id === 'qualified-lead' ? '653:2646' : item.id === 'control-sent' ? '653:2785' : undefined}
        >
          {/* Trigger row — Figma 653:2739 */}
          <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger
              className={cn(
                'group flex w-full items-center justify-between gap-4 p-4 text-left',
                'font-sans text-base font-normal leading-[1.2] tracking-[0.01em] text-white data-[state=open]:text-[#b7f601]',
                'transition-colors hover:text-white/90',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20',
                '[&[data-state=open]_svg]:rotate-45',
              )}
            >
              <span className='min-w-0 flex-1'>
                {item.question}
              </span>
              {/* 24×24 plus icon — Figma 653:2740 */}
              <span className='relative inline-flex size-6 shrink-0 items-center justify-center text-[#a3a3a3] transition-colors group-data-[state=open]:text-white'>
                <Plus
                  className='size-6 transition-transform duration-200'
                  strokeWidth={1.5}
                  aria-hidden
                />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          {/* Answer */}
          <AccordionPrimitive.Content className='overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'>
            <div className='px-4 pb-4 pt-0'>
              <p className='font-sans text-sm font-normal leading-relaxed text-[color:var(--Neutral-500,#737373)]'>
                {item.answer}
              </p>
              {item.id === 'qualified-lead' && (
                <p className='mt-2.5 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  {QUALIFIED_LEAD_DISCLAIMER}
                </p>
              )}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
