'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { IconChevronRight, IconX } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import type { ScheduleDay, ScheduleEntry } from '@/components/GartenfestSchedule'

// Winterszeit "Programm" section (dark background): one tab per day, entries in chronological order.

const noopSubscribe = () => () => {}

// "15:00, 17:00 Uhr" -> ["15:00 Uhr", "17:00 Uhr"], one per line
function Times({ time, onLight = false }: { time?: string; onLight?: boolean }) {
  if (!time) return null
  return (
    <div
      className={`shrink-0 w-20 sm:w-24 border-l-2 border-accent pl-2.5 text-sm font-medium leading-snug ${onLight ? 'text-brand' : 'text-warm-50'}`}
    >
      {time
        .replace(/\s*Uhr$/, '')
        .split(/,\s*/)
        .map((t) => (
          <p key={t}>{t} Uhr</p>
        ))}
    </div>
  )
}

function startMinutes(time?: string) {
  const m = time?.match(/(\d{1,2}):(\d{2})/)
  return m ? Number(m[1]) * 60 + Number(m[2]) : 0
}

// Entries without a location are notices (e.g. "Die Winterszeit öffnet ihre Tore.").
function split(day: ScheduleDay) {
  const notices = day.entries.filter((e) => !e.location && !/schließt/.test(e.title))
  const closing = day.entries.filter((e) => !e.location && /schließt/.test(e.title))
  const timed = day.entries.filter((e) => !!e.location).sort((a, b) => startMinutes(a.time) - startMinutes(b.time))
  return { notices, closing, timed }
}

function Thumb({ entry }: { entry: ScheduleEntry }) {
  if (!entry.image) return null
  return (
    <div className="relative shrink-0 w-14 h-14 overflow-hidden">
      <Image
        src={entry.image}
        alt={entry.title}
        fill
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className="object-cover"
        sizes="56px"
      />
    </div>
  )
}

function TabRow({
  entry,
  onSelect,
  light,
}: {
  entry: ScheduleEntry
  onSelect: (e: ScheduleEntry) => void
  light: boolean
}) {
  const content = (
    <>
      <Times time={entry.time} onLight={light} />
      <div className="flex-1 min-w-0">
        <p className={`font-body text-base font-normal leading-snug ${light ? 'text-brand' : 'text-warm-50'}`}>
          {entry.title}
        </p>
        <p className={`text-xs leading-snug mt-0.5 ${light ? 'text-warm-500' : 'text-warm-200'}`}>{entry.location}</p>
      </div>
      <Thumb entry={entry} />
      {entry.description && (
        <IconChevronRight size={16} className={`shrink-0 mt-0.5 ${light ? 'text-warm-400' : 'text-warm-200'}`} />
      )}
    </>
  )

  return (
    <li className={`break-inside-avoid border-b ${light ? 'border-warm-200' : 'border-white/10'}`}>
      {entry.description ? (
        <button
          onClick={() => onSelect(entry)}
          aria-haspopup="dialog"
          className={`w-full text-left flex items-start gap-4 py-3 cursor-pointer transition-colors ${light ? 'hover:bg-warm-100' : 'hover:bg-white/5'}`}
        >
          {content}
        </button>
      ) : (
        <div className="flex items-start gap-4 py-3">{content}</div>
      )}
    </li>
  )
}

// Highlighted opening / closing time
function NoticeRow({ entry, light }: { entry: ScheduleEntry; light: boolean }) {
  return (
    <li
      className={`break-inside-avoid -mx-3 px-3 py-3 my-2 flex items-start gap-4 ${light ? 'bg-warm-100' : 'bg-white/10'}`}
    >
      <Times time={entry.time} onLight={light} />
      <p
        className={`flex-1 min-w-0 font-body text-base font-normal leading-snug ${light ? 'text-brand' : 'text-warm-50'}`}
      >
        {entry.title}
      </p>
    </li>
  )
}

// ── Table layout (dark only): Zeit | Programm | Ort ─────────────────────────
const TABLE_GRID =
  'grid grid-cols-[minmax(0,1fr)_1.25rem] md:grid-cols-[15rem_minmax(0,1fr)_11rem_1.25rem] md:gap-x-6 px-4'

function TimesInline({ time }: { time?: string }) {
  if (!time) return null
  const times = time.replace(/\s*Uhr$/, '').split(/,\s*/)
  return (
    <p className="border-l-2 border-accent pl-2.5 text-sm font-medium leading-snug text-warm-50">
      {times.join(' · ')} Uhr
    </p>
  )
}

function TableHeader() {
  return (
    <div
      role="row"
      className={`hidden md:grid md:grid-cols-[15rem_minmax(0,1fr)_11rem_1.25rem] md:gap-x-6 px-4 pb-3 border-b-2 border-white/20 text-[11px] uppercase tracking-[0.16em] text-warm-200`}
    >
      <span role="columnheader">Zeit</span>
      <span role="columnheader">Programm</span>
      <span role="columnheader">Ort</span>
      <span role="columnheader" className="sr-only">
        Details
      </span>
    </div>
  )
}

// Highlighted opening / closing time, spans the full table width
function TableNotice({ entry }: { entry: ScheduleEntry }) {
  return (
    <div
      role="row"
      className="grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-x-6 items-center px-4 py-3 md:min-h-14 my-2 bg-white/10"
    >
      <div role="cell">
        <TimesInline time={entry.time} />
      </div>
      <p role="cell" className="font-body text-base font-normal text-warm-50 leading-snug">
        {entry.title}
      </p>
    </div>
  )
}

function TableRow({ entry, onSelect }: { entry: ScheduleEntry; onSelect: (e: ScheduleEntry) => void }) {
  return (
    <div
      role="row"
      className={`group relative ${TABLE_GRID} gap-y-0.5 items-center py-3 md:min-h-14 border-b border-white/10 odd:bg-white/5 ${
        entry.description ? 'hover:bg-white/10 transition-colors' : ''
      }`}
    >
      <div role="cell" className="col-start-1 md:col-start-auto">
        <TimesInline time={entry.time} />
      </div>
      <div role="cell" className="col-start-1 md:col-start-auto min-w-0">
        {entry.description ? (
          // Stretched button: the whole row is clickable
          <button
            onClick={() => onSelect(entry)}
            aria-haspopup="dialog"
            className="text-left cursor-pointer font-body text-base font-normal text-warm-50 leading-snug after:absolute after:inset-0"
          >
            {entry.title}
          </button>
        ) : (
          <p className="font-body text-base font-normal text-warm-50 leading-snug">{entry.title}</p>
        )}
      </div>
      <p role="cell" className="col-start-1 md:col-start-auto text-xs md:text-sm text-warm-200 leading-snug">
        {entry.location}
      </p>
      <div
        role="cell"
        className="col-start-2 row-start-1 row-span-3 md:col-start-auto md:row-start-auto md:row-span-1 self-center"
      >
        {entry.description && <IconChevronRight size={16} className="text-warm-200" />}
      </div>
    </div>
  )
}

function EntryModal({ entry, onClose }: { entry: ScheduleEntry | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (entry && !dialog.open) dialog.showModal()
    if (!entry && dialog.open) dialog.close()
  }, [entry])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      className="m-auto w-[min(92vw,30rem)] max-h-[90vh] overflow-y-auto p-0 bg-warm-50 text-brand backdrop:bg-black/60"
    >
      {entry && (
        <div>
          {entry.image && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={entry.image}
                alt={entry.title}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover"
                sizes="480px"
              />
            </div>
          )}
          <div className="p-6">
            <div className="mb-2">
              <Times time={entry.time} onLight />
            </div>
            <p className="font-body text-2xl font-normal text-brand leading-snug">{entry.title}</p>
            {entry.location && <p className="text-xs text-warm-500 leading-snug mt-1">{entry.location}</p>}
            {entry.description && <p className="text-warm-600 text-sm leading-relaxed mt-4">{entry.description}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="absolute top-3 right-3 p-1.5 cursor-pointer bg-white/90 text-brand hover:bg-white transition-colors"
          >
            <IconX size={18} />
          </button>
        </div>
      )}
    </dialog>
  )
}

export default function ProgrammTabs({
  days,
  idPrefix = 'programm',
  light = false,
  table = false,
}: {
  days: ScheduleDay[]
  idPrefix?: string
  light?: boolean
  table?: boolean
}) {
  // During the event the tab of the current day is preselected (client only, no hydration mismatch).
  const todayIndex = useSyncExternalStore(
    noopSubscribe,
    () => {
      const now = new Date()
      if (now.getFullYear() !== 2026 || now.getMonth() !== 10) return 0
      return Math.max(
        0,
        days.findIndex((d) => parseInt(d.datum) === now.getDate())
      )
    },
    () => 0
  )
  const [picked, setPicked] = useState<number | null>(null)
  const [selected, setSelected] = useState<ScheduleEntry | null>(null)
  const active = picked ?? todayIndex
  const setActive = setPicked

  return (
    <div>
      <div role="tablist" aria-label="Tag wählen" className="grid grid-cols-4 gap-2 mb-10">
        {days.map((d, i) => (
          <button
            key={d.datum}
            role="tab"
            id={`${idPrefix}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${idPrefix}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`py-3 px-2 text-center border cursor-pointer transition-colors ${
              i === active
                ? 'bg-accent border-accent text-white'
                : light
                  ? 'bg-white border-white text-brand hover:bg-warm-100'
                  : 'bg-brand-dark border-white/20 text-warm-100 hover:bg-brand hover:border-white/50'
            }`}
          >
            <span className="block font-heading text-lg leading-tight">
              <span className="sm:hidden">{d.wochentag.slice(0, 2)}</span>
              <span className="hidden sm:inline">{d.wochentag}</span>
            </span>
            <span className="block text-[11px] uppercase tracking-[0.14em] mt-0.5 opacity-80">
              {d.datum.replace(/ \d{4}$/, '')}
            </span>
          </button>
        ))}
      </div>

      {/* All days share one grid cell, so the section is always as tall as the longest day. */}
      <div className="grid">
        {days.map((d, i) => {
          const { notices, closing, timed } = split(d)
          const isActive = i === active
          return (
            <div
              key={d.datum}
              id={`${idPrefix}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${i}`}
              inert={!isActive}
              className={`col-start-1 row-start-1 p-6 sm:p-8 ${light ? 'bg-white' : 'bg-brand-dark'} ${isActive ? '' : 'invisible'}`}
            >
              {d.notes.map((note, k) => (
                <p key={k} className={`text-xs italic mb-1 ${light ? 'text-warm-500' : 'text-warm-200'}`}>
                  {note}
                </p>
              ))}

              {table ? (
                <div role="table" aria-label={`Programm ${d.wochentag}`} className="mt-6">
                  <TableHeader />
                  {notices.map((n, k) => (
                    <TableNotice key={k} entry={n} />
                  ))}
                  {timed.map((e, k) => (
                    <TableRow key={k} entry={e} onSelect={setSelected} />
                  ))}
                  {closing.map((n, k) => (
                    <TableNotice key={k} entry={n} />
                  ))}
                </div>
              ) : (
                <ul className="mt-6 lg:columns-2 lg:gap-x-14">
                  {notices.map((n, k) => (
                    <NoticeRow key={k} entry={n} light={light} />
                  ))}
                  {timed.map((e, k) => (
                    <TabRow key={k} entry={e} onSelect={setSelected} light={light} />
                  ))}
                  {closing.map((n, k) => (
                    <NoticeRow key={k} entry={n} light={light} />
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>

      <EntryModal entry={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
