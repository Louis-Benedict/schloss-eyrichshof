'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import { IconBuildingCastle, IconChevronRight, IconX } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import type { ScheduleDay, ScheduleEntry } from '@/components/GartenfestSchedule'

// Winterszeit "Programm" section (dark background): one tab per day, table Zeit | Programm | Ort,
// click on a row opens a modal with image and description.

const noopSubscribe = () => () => {}

// Time(s) in the modal: "15:00, 17:00 Uhr" -> one per line
function Times({ time }: { time?: string }) {
  if (!time) return null
  return (
    <div className="border-l-2 border-accent pl-2.5 text-sm font-medium leading-snug text-brand">
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
      className="hidden md:grid md:grid-cols-[15rem_minmax(0,1fr)_11rem_1.25rem] md:gap-x-6 px-4 pb-3 border-b-2 border-white/20 text-[11px] uppercase tracking-[0.16em] text-warm-200"
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

// Opening / closing time: centered divider with accent rules on both sides and a castle gate icon
function TableNotice({ entry }: { entry: ScheduleEntry }) {
  return (
    <div role="row" className="flex items-center gap-4 my-4 px-4">
      <span aria-hidden className="h-px flex-1 bg-accent/70" />
      <p role="cell" className="flex items-center gap-2.5 text-center text-sm uppercase tracking-[0.18em] text-warm-50">
        <IconBuildingCastle size={20} stroke={1.75} className="shrink-0 text-accent" />
        <span className="font-medium">{entry.time?.replace(/\s*Uhr$/, '')} Uhr</span>
        <span aria-hidden className="text-accent">
          ·
        </span>
        <span>{entry.title.replace(/\.$/, '')}</span>
      </p>
      <span aria-hidden className="h-px flex-1 bg-accent/70" />
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
              <Times time={entry.time} />
            </div>
            <p className="font-body text-2xl font-normal text-brand leading-snug">{entry.title}</p>
            {entry.location && <p className="text-xs text-warm-500 leading-snug mt-1">{entry.location}</p>}
            {entry.description && (
              <p className="text-warm-600 text-sm leading-relaxed mt-4 whitespace-pre-line">{entry.description}</p>
            )}
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

export default function ProgrammTabs({ days }: { days: ScheduleDay[] }) {
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

  return (
    <div>
      <div role="tablist" aria-label="Tag wählen" className="grid grid-cols-4 gap-2 mb-10">
        {days.map((d, i) => (
          <button
            key={d.datum}
            role="tab"
            id={`programm-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`programm-panel-${i}`}
            onClick={() => setPicked(i)}
            className={`py-3 px-2 text-center border cursor-pointer transition-colors ${
              i === active
                ? 'bg-accent border-accent text-white'
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
              id={`programm-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`programm-tab-${i}`}
              inert={!isActive}
              className={`col-start-1 row-start-1 p-6 sm:p-8 bg-brand-dark ${isActive ? '' : 'invisible'}`}
            >
              {d.notes.map((note, k) => (
                <p key={k} className="text-xs italic mb-1 text-warm-200">
                  {note}
                </p>
              ))}

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
            </div>
          )
        })}
      </div>

      <EntryModal entry={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
