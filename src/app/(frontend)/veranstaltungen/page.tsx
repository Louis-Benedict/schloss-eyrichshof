import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import { events } from '@/data/events'

export const metadata: Metadata = { title: 'Veranstaltungen' }

export default function VeranstaltungenPage() {
  const [hero, ...rest] = events

  return (
    <>
      <PageHeader
        eyebrow="Schloss Eyrichshof"
        title="Veranstaltungen"
        description="Von Pfingstfest bis Winterzeit — das ganze Jahr Anlass für einen Besuch."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-4">

        {/* Hero card */}
        <Link
          href={hero.href}
          className="group relative block overflow-hidden h-[420px] sm:h-[520px]"
        >
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/5" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">
                {hero.dates}
              </span>
              {hero.tag && (
                <span className="text-[10px] uppercase tracking-[0.16em] bg-white/20 text-white px-2.5 py-1 backdrop-blur-sm">
                  {hero.tag}
                </span>
              )}
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl font-normal text-white leading-tight mb-3">
              {hero.title}
            </h2>
            <p className="text-warm-300 text-base leading-relaxed mb-6 max-w-xl">
              {hero.description}
            </p>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent group-hover:text-accent-hover transition-colors">
              Mehr erfahren →
            </span>
          </div>
        </Link>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((event) => (
            <Link
              key={event.slug}
              href={event.href}
              className="group relative overflow-hidden h-[300px] sm:h-[360px]"
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 576px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/50 to-brand/10" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">
                    {event.dates}
                  </span>
                  {event.tag && (
                    <span className="text-[10px] uppercase tracking-[0.16em] bg-white/20 text-white px-2.5 py-1 backdrop-blur-sm">
                      {event.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-normal text-white leading-snug mb-2">
                  {event.title}
                </h3>
                <p className="text-warm-300 text-sm leading-relaxed mb-4 max-w-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {event.description}
                </p>
                <span className="text-xs uppercase tracking-widest font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}
