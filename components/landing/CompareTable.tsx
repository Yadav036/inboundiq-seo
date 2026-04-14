import Link from 'next/link'
import { Check, ChevronRight, X } from 'lucide-react'

import { Logo } from '@/components/svg/Logo'
import { APP_GET_STARTED_URL } from '@/lib/appUrls'
import { cn } from '@/lib/utils'

type Cell =
  | { type: 'text'; value: string; accent?: boolean }
  | { type: 'check' }
  | { type: 'x' }
  | { type: 'partial'; value: string }

const ROWS: { label: string; google: Cell; sdr: Cell; inbound: Cell }[] = [
  {
    label: 'Monthly cost',
    google: { type: 'text', value: '~$3,000' },
    sdr: { type: 'text', value: '~$6,500' },
    inbound: { type: 'text', value: '$499', accent: true },
  },
  {
    label: 'Qualified leads / mo',
    google: { type: 'text', value: '~4' },
    sdr: { type: 'text', value: '~8' },
    inbound: { type: 'text', value: '8', accent: true },
  },
  {
    label: 'Cost per qualified lead',
    google: { type: 'text', value: '~$750' },
    sdr: { type: 'text', value: '~$813' },
    inbound: { type: 'text', value: '$62', accent: true },
  },
  {
    label: 'Time to first lead',
    google: { type: 'text', value: '2–4 weeks' },
    sdr: { type: 'text', value: '2–3 months' },
    inbound: { type: 'text', value: '~48 hours', accent: true },
  },
  {
    label: 'Pay only for results',
    google: { type: 'x' },
    sdr: { type: 'x' },
    inbound: { type: 'check' },
  },
  {
    label: 'Scales instantly',
    google: { type: 'partial', value: 'Partial' },
    sdr: { type: 'x' },
    inbound: { type: 'check' },
  },
  {
    label: 'Zero setup required',
    google: { type: 'x' },
    sdr: { type: 'x' },
    inbound: { type: 'check' },
  },
]

function CellContent({ cell }: { cell: Cell }) {
  if (cell.type === 'check') {
    return (
      <span className='inline-flex items-center justify-start text-[color:var(--Primary-500,#b7f601)]'>
        <Check className='size-5' strokeWidth={2.25} aria-hidden />
        <span className='sr-only'>Yes</span>
      </span>
    )
  }
  if (cell.type === 'x') {
    return (
      <span className='inline-flex items-center justify-start text-red-500'>
        <X className='size-5' strokeWidth={2} aria-hidden />
        <span className='sr-only'>No</span>
      </span>
    )
  }
  if (cell.type === 'partial') {
    return (
      <span className='font-sans text-sm text-[color:var(--Neutral-500,#737373)]'>
        {cell.value}
      </span>
    )
  }
  return (
    <span
      className={cn(
        'font-sans text-sm',
        cell.accent
          ? 'font-medium text-[color:var(--Primary-500,#b7f601)]'
          : 'text-[color:var(--Neutral-500,#737373)]',
      )}
    >
      {cell.value}
    </span>
  )
}

export function CompareTable({ className }: { className?: string }) {
  return (
    <table className={cn('w-full min-w-[720px] border-collapse text-left', className)}>
        <colgroup>
          <col className='w-[min(28%,220px)]' />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] p-4 pb-6 align-bottom'
            />
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] px-3 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-1.5 text-left'>
                <span className='font-sans text-sm font-normal leading-tight text-white'>
                  Google / Meta Ads
                </span>
                <span className='max-w-[12rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  Pay-per-click, hope they convert
                </span>
              </div>
            </th>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] px-3 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-1.5 text-left'>
                <span className='font-sans text-sm font-normal leading-tight text-white'>
                  Hiring an SDR
                </span>
                <span className='max-w-[12rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  Salary + tools + months to ramp
                </span>
              </div>
            </th>
            <th
              scope='col'
              className='border-b border-dashed border-[#303030] border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 pb-6 pt-4 align-bottom'
            >
              <div className='flex flex-col items-start gap-2 text-left'>
                <div className='flex justify-start'>
                  <Logo />
                </div>
                <span className='max-w-[14rem] font-sans text-xs font-normal leading-[1.35] text-[color:var(--Neutral-500,#737373)]'>
                  Pay only for interested replies
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label}>
              <th
                scope='row'
                className='border-b border-dashed border-[#303030] py-4 pr-4 text-left font-sans text-sm font-normal text-white'
              >
                {row.label}
              </th>
              <td className='border-b border-dashed border-[#303030] px-3 py-4 text-left'>
                <CellContent cell={row.google} />
              </td>
              <td className='border-b border-dashed border-[#303030] px-3 py-4 text-left'>
                <CellContent cell={row.sdr} />
              </td>
              <td className='border-b border-dashed border-[#303030] border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 py-4 text-left'>
                <CellContent cell={row.inbound} />
              </td>
            </tr>
          ))}
          <tr>
            <td className='p-0' colSpan={3} />
            <td className='border-l border-[#303030] bg-[color:var(--Neutral-100,#171717)] px-4 pb-1 pt-6 text-center'>
              <Link
                href={APP_GET_STARTED_URL}
                className='inline-flex w-full items-center justify-center gap-1 bg-white px-4 py-3 font-mono text-sm font-normal leading-[1.4] tracking-[-0.02em] text-black transition-opacity hover:opacity-90'
              >
                TRY INBOUNDIQ
                <ChevronRight className='size-4 shrink-0' strokeWidth={2} aria-hidden />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
  )
}
