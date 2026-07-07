'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IconChevronDown, IconTicket } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'

interface ConcertEvent {
  date: string
  title: string
  description: string
  image: string
  ticketUrl: string
}

function ConcertEventRow({ event }: { event: ConcertEvent }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="py-8 flex gap-6 sm:gap-10">
      <div className="shrink-0 flex flex-col items-center gap-2">
        <div className="relative w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover"
            sizes="130px"
          />
        </div>
        <Link
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-accent hover:bg-accent-hover text-white text-[11px] uppercase tracking-widest transition-colors"
        >
          <IconTicket size={13} stroke={1.75} />
          Tickets
        </Link>
      </div>

      <div className="flex-1 min-w-0">
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="w-full text-left flex items-start justify-between gap-4 mb-2"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-accent font-medium mb-1">
              {event.date}
            </p>
            <h2 className="font-heading text-xl sm:text-2xl font-normal text-brand leading-snug">
              {event.title}
            </h2>
          </div>
          <IconChevronDown
            size={20}
            className={`shrink-0 mt-2 text-warm-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        <p className={`text-warm-600 text-sm leading-relaxed ${expanded ? 'mb-5' : 'line-clamp-3'}`}>
          {event.description}
        </p>

      </div>
    </div>
  )
}

export default function ConcertEventList({ events }: { events: ConcertEvent[] }) {
  return (
    <div className="flex flex-col divide-y divide-warm-200">
      {events.map((event) => (
        <ConcertEventRow key={event.title} event={event} />
      ))}
    </div>
  )
}
