'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IconChevronDown } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'

export type ScheduleEntry = {
  time?: string
  title: string
  location?: string
  note?: string
  image?: string
  description?: string
}

export type ScheduleDay = {
  wochentag: string
  datum: string
  entries: ScheduleEntry[]
  ganztags: ScheduleEntry[]
  notes: string[]
}

export function ScheduleRow({ entry }: { entry: ScheduleEntry }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="py-5 flex gap-5 sm:gap-6 border-b border-warm-100 last:border-0">
      {entry.image && (
        <div className="shrink-0">
          <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] overflow-hidden">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover"
              sizes="110px"
            />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        {entry.time && (
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent font-medium mb-1">
            {entry.time}
          </p>
        )}

        {entry.description ? (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="w-full text-left flex items-start justify-between gap-3 mb-2"
          >
            <h3 className="font-heading text-base font-normal text-brand leading-snug">
              {entry.title}
            </h3>
            <IconChevronDown
              size={16}
              className={`shrink-0 mt-0.5 text-warm-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <h3 className="font-heading text-base font-normal text-brand leading-snug mb-2">
            {entry.title}
          </h3>
        )}

        {entry.description && (
          <p className={`text-warm-600 text-sm leading-relaxed mb-2 ${expanded ? '' : 'line-clamp-1'}`}>
            {entry.description}
          </p>
        )}

        {entry.location && (
          <p className="text-xs text-warm-400 leading-snug">{entry.location}</p>
        )}
        {entry.note && (
          <p className="text-[11px] uppercase tracking-[0.12em] text-accent mt-1">{entry.note}</p>
        )}
      </div>
    </div>
  )
}


export default function GartenfestSchedule({ days }: { days: ScheduleDay[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
        {days.map((day) => (
          <div key={day.datum}>
            <div className="mb-4 pb-4 border-b border-warm-200">
              <p className="font-heading text-2xl font-normal text-brand leading-tight">{day.wochentag}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-warm-400 mt-0.5">{day.datum}</p>
            </div>

            {/* Notices (no image) */}
            {day.entries.filter((e) => !e.image).map((entry, i) => (
              <div key={i} className="flex items-baseline gap-3 py-3 border-b border-warm-100">
                {entry.time && (
                  <span className="text-[11px] uppercase tracking-[0.16em] text-accent font-medium shrink-0">
                    {entry.time}
                  </span>
                )}
                <span className="font-heading text-base text-brand leading-snug">{entry.title}</span>
              </div>
            ))}

            {/* Timed entries — image left */}
            {day.entries.filter((e) => !!e.image).map((entry, i) => (
              <ScheduleRow key={i} entry={entry} />
            ))}

            {/* Per-day notes */}
            {day.notes.length > 0 && (
              <div className="mt-4 space-y-1 pt-4 border-t border-warm-100">
                {day.notes.map((note, i) => (
                  <p key={i} className="text-xs text-warm-400 leading-relaxed italic">{note}</p>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  )
}
