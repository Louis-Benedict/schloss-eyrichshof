'use client'

import Link from 'next/link'
import Image from 'next/image'

interface EventPanelItem {
  title: string
  eyebrow: string
  tag?: string | null
  description: string
  image: string
  href: string
}

export default function EventPanels({ events }: { events: EventPanelItem[] }) {
  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[520px] overflow-hidden">
      {events.map((event) => (
        <Link
          key={event.href}
          href={event.href}
          className="group relative overflow-hidden min-h-[260px] sm:min-h-0"
          style={{ flex: 1, transition: 'flex 600ms cubic-bezier(0.4, 0, 0.2, 1)' }}
          onMouseEnter={(e) => { e.currentTarget.style.flex = '2.4' }}
          onMouseLeave={(e) => { e.currentTarget.style.flex = '1' }}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/10" />

          {/* Vertical title shown at rest */}
          <div className="absolute inset-0 flex items-center justify-center sm:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none select-none">
            <p
              className="font-heading text-2xl font-normal text-white/60 tracking-widest hidden sm:block"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {event.title}
            </p>
          </div>

          {/* Bottom content revealed on expand */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">{event.eyebrow}</span>
              {event.tag && (
                <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-white/20 text-white px-2.5 py-1 font-medium backdrop-blur-sm">{event.tag}</span>
              )}
            </div>
            <h3 className="font-heading text-3xl lg:text-4xl font-normal text-white leading-snug mb-3">
              {event.title}
            </h3>
            <p className="text-warm-300 text-sm leading-relaxed mb-5 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {event.description}
            </p>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              Mehr erfahren →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
