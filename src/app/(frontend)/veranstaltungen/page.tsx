import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { events } from '@/data/events'

export const metadata: Metadata = { title: 'Veranstaltungen' }

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schloss Eyrichshof"
        title="Veranstaltungen"
        description="Von Pfingstfest bis Winterzeit — das ganze Jahr Anlass für einen Besuch."
      />

      {/* Tickets CTA bar */}
      <div className="bg-warm-100 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <p className="text-sm text-warm-600">Tickets für alle Veranstaltungen</p>
          <Link
            href="/veranstaltungen/tickets"
            className="shrink-0 px-5 py-2 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Tickets buchen
          </Link>
        </div>
      </div>

      {/* Event list */}
      <div className="divide-y divide-warm-200">
        {events.map((event, i) => (
          <Link
            key={event.slug}
            href={event.href}
            className="group grid grid-cols-1 lg:grid-cols-2 min-h-[420px]"
          >
            {/* Image */}
            <div className={`relative overflow-hidden min-h-[280px] lg:min-h-0 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className={`flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16 bg-warm-50 group-hover:bg-warm-100 transition-colors ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">
                  {event.dates}
                </span>
                {event.tag && (
                  <span className="text-[10px] uppercase tracking-[0.16em] border border-warm-300 text-warm-600 px-2.5 py-1">
                    {event.tag}
                  </span>
                )}
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-normal text-brand mb-5 leading-tight">
                {event.title}
              </h2>
              <p className="text-warm-600 leading-relaxed mb-8 max-w-md">
                {event.description}
              </p>
              <span className="text-xs uppercase tracking-widest font-semibold text-accent group-hover:text-accent-hover transition-colors">
                Mehr erfahren →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
