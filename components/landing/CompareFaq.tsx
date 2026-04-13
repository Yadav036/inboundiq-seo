'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import type { ReactNode } from 'react'

import {
  COMMON_QUESTIONS_FAQ_ITEMS,
  QUALIFIED_LEAD_DISCLAIMER,
} from '@/components/landing/commonQuestionsFaqData'
import { cn } from '@/lib/utils'

function FaqTrigger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex w-full flex-1 items-center justify-between gap-4 text-left',
          'font-sans text-base font-normal leading-[1.2] tracking-[0.16px] text-white',
          'transition-colors hover:text-white/90',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
          '[&[data-state=open]_svg]:rotate-45',
          className,
        )}
      >
        <span className='min-w-0 flex-1 whitespace-normal sm:whitespace-nowrap'>
          {children}
        </span>
        <span className='relative inline-flex size-6 shrink-0 items-center justify-center text-[#a3a3a3] transition-colors group-data-[state=open]:text-white'>
          <Plus
            className='size-6 transition-transform duration-200'
            strokeWidth={1.5}
            aria-hidden
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function CompareFaq({ className }: { className?: string }) {
  return (
    <AccordionPrimitive.Root
      type='single'
      collapsible
      className={cn('w-full max-w-[900px]', className)}
    >
      {COMMON_QUESTIONS_FAQ_ITEMS.map((item, index) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className={cn(
            item.bordered
              ? 'my-4 border border-[#303030] p-4'
              : 'border-b border-[#303030]',
          )}
        >
          <FaqTrigger
            className={cn(
              item.bordered ? 'py-0' : index === 0 ? 'pb-4 pt-0' : 'py-4',
            )}
          >
            {item.question}
          </FaqTrigger>
          <AccordionPrimitive.Content className='overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'>
            <div
              className={cn(
                'font-sans text-sm font-normal leading-relaxed text-[color:var(--Neutral-500,#737373)]',
                item.bordered ? 'pb-1 pt-3' : 'pb-4 pt-0',
              )}
            >
              <p className='mb-0'>{item.answer}</p>
              {item.id === 'qualified-lead' ? (
                <p className='mb-0 mt-3 font-sans text-xs font-normal leading-[1.4] text-[color:var(--Neutral-500,#737373)]'>
                  {QUALIFIED_LEAD_DISCLAIMER}
                </p>
              ) : null}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
