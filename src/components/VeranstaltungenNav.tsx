import Link from 'next/link'
import Image from 'next/image'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import { events } from '@/data/events'

export default function VeranstaltungenNav({ currentHref }: { currentHref: string }) {
  const others = events.filter((e) => e.href !== currentHref)

  return (
    <section className="border-t border-warm-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-8">Weitere Veranstaltungen</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((event) => (
            <Link
              key={event.href}
              href={event.href}
              className="group relative overflow-hidden min-h-[220px] flex flex-col justify-end"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/5" />
              <div className="relative z-10 p-5 lg:p-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-1">{event.dates}</p>
                <h3 className="font-heading text-xl lg:text-2xl font-normal text-white mb-2 leading-tight">
                  {event.title}
                </h3>
                <span className="text-xs uppercase tracking-widest font-semibold text-accent group-hover:text-accent-hover transition-colors">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
