import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import HeroSwiper from '@/components/HeroSwiper'
import HeroAltA from '@/components/HeroAltA'
import HeroAltC from '@/components/HeroAltC'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import { events as allEvents } from '@/data/events'

export const metadata: Metadata = {
  title: 'Schloss Eyrichshof — Landschloss in Unterfranken',
}

// Homepage features 3 seasonal events in a specific visual order
const homepageSlugs = ['roesler-open-air', 'winterszeit', 'gartenfest']
const events = homepageSlugs.map(slug => allEvents.find(e => e.slug === slug)!)


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="-mt-[116px]">
        <HeroSwiper />
      </div>

      {/* ── Hero alternatives (for client review) ───────────────────── */}
      <div className="border-t-4 border-accent-yellow bg-brand-dark px-6 py-3">
        <p className="text-xs uppercase tracking-widest text-accent-yellow font-semibold">Variante A — Geteiltes Layout: Textpanel links, Bild rechts ohne Overlay</p>
      </div>
      <HeroAltA />

<div className="border-t-4 border-accent-yellow bg-brand-dark px-6 py-3">
        <p className="text-xs uppercase tracking-widest text-accent-yellow font-semibold">Variante C — Vollbild ohne Overlay, zentrierte schwebende Karte mit weißem Hintergrund</p>
      </div>
      <HeroAltC />

      {/* ── Statement ───────────────────────────────────────────────── */}
      <section className="border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-0 items-stretch">

            {/* Left — quote */}
            <div className="flex flex-col justify-center pr-0 lg:pr-16 pb-12 lg:pb-0">
              <Image
                src="/images/wappen.png"
                alt="Wappen derer von Rotenhan"
                width={40}
                height={52}
                className="mb-8 opacity-60"
              />
              <blockquote className="font-heading text-3xl lg:text-4xl font-normal text-brand leading-snug">
                Eine Destination für inspirierende Momente — die kleinen und großen, an die Sie
                sich gerne erinnern.
              </blockquote>
            </div>

            {/* Divider */}
            <div className="hidden lg:block bg-warm-200 mx-0" />

            {/* Right — text */}
            <div className="flex flex-col justify-center pl-0 lg:pl-16 pt-12 lg:pt-0 border-t border-warm-200 lg:border-t-0">
              <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-6">
                Landschloss in Familienbesitz · Seit dem 14. Jahrhundert
              </p>
              <div className="space-y-4 text-warm-600 leading-relaxed text-base">
                <p>
                  Eyrichshof liegt im Herzen Frankens. Schon seit mehr als 700 Jahren empfängt man
                  hier gerne Gäste — heute führt Hermann Freiherr von Rotenhan diese Tradition mit
                  seinem Team zeitgemäß fort.
                </p>
                <p>
                  Ob Gartenfest, Winterszeit oder Rösler Open-Air, ob Hochzeitsfeier, Firmenevent
                  oder ein stiller Aufenthalt in den Ferienwohnungen: Gäste sind hier stets herzlich
                  willkommen.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/landschloss/geschichte"
                  className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Geschichte entdecken →
                </Link>
                <Link
                  href="/landschloss/impressionen"
                  className="text-xs uppercase tracking-widest font-semibold text-warm-500 hover:text-brand transition-colors"
                >
                  Impressionen →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Veranstaltungen ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Auf dem Schloss</p>
            <h2 className="font-heading text-4xl font-normal text-brand">Veranstaltungen</h2>
          </div>
          <Link
            href="/veranstaltungen"
            className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
          >
            Alle Veranstaltungen →
          </Link>
        </header>

        {/* Magazine grid: 1 large featured + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Featured card */}
          <Link
            href={events[0].href}
            className="group relative overflow-hidden lg:col-span-3 min-h-[420px] lg:min-h-[540px] flex"
          >
            <Image
              src={events[0].image}
              alt={events[0].title}
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent" />
            <div className="relative z-10 mt-auto p-8 lg:p-10 pb-16 lg:pb-18">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">{events[0].dates}</span>
                {events[0].tag && (
                  <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-white/20 text-white px-2.5 py-1 font-medium backdrop-blur-sm">{events[0].tag}</span>
                )}
              </div>
              <h3 className="font-heading text-4xl lg:text-5xl font-normal text-white mb-4 leading-snug">
                {events[0].title}
              </h3>
              <p className="text-warm-300 text-sm leading-relaxed max-w-sm">{events[0].description}</p>
            </div>
            <span className="absolute bottom-8 left-8 lg:left-10 z-10 text-xs uppercase tracking-widest font-semibold text-accent">
              Mehr erfahren →
            </span>
          </Link>

          {/* Two stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {events.slice(1).map((event) => (
              <Link
                key={event.href}
                href={event.href}
                className="group relative overflow-hidden flex-1 min-h-[220px] flex"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
                <div className="relative z-10 mt-auto p-6 pb-14">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium">{event.dates}</span>
                    {event.tag && (
                      <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-white/20 text-white px-2.5 py-1 font-medium backdrop-blur-sm">{event.tag}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-normal text-white leading-snug">
                    {event.title}
                  </h3>
                </div>
                <span className="absolute bottom-8 left-6 z-10 text-xs uppercase tracking-widest font-semibold text-accent">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── Hochzeiten & Feste · Ferienwohnungen · Landschloss ─────── */}
      <div className="max-w-7xl mx-auto py-20 space-y-4">

      {/* Hochzeiten & Feste */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 lg:py-24 bg-warm-100">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Unvergessliche Momente</p>
              <h2 className="font-heading text-4xl font-normal text-brand mb-6 leading-snug">
                Hochzeiten & Feste
              </h2>
              <p className="text-warm-600 leading-relaxed mb-8 text-base">
                Historische Säle, ein weitläufiger Schlosspark und jahrhundertealte Mauern — Schloss
                Eyrichshof bildet den perfekten Rahmen für Ihre Hochzeit, Ihr Jubiläum oder Ihren
                ganz persönlichen Festtag.
              </p>
              <Link
                href="/veranstaltungen/hochzeiten-feste"
                className="inline-block px-6 py-3 bg-accent text-white text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src="/images/hero-schloss.jpg"
              alt="Hochzeiten & Feste auf Schloss Eyrichshof"
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Ferienwohnungen */}
      <section className="relative min-h-[480px] flex items-end overflow-hidden">
        <Image
          src="/images/hero-ferienwohnungen.jpg"
          alt="Ferienwohnungen auf Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-16 xl:px-20 pb-16 lg:pb-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Übernachten im Schloss</p>
          <h2 className="font-heading text-4xl font-normal text-white mb-4 leading-snug">
            Ferienwohnungen
          </h2>
          <p className="text-warm-300 leading-relaxed mb-8 text-base max-w-lg">
            Vier exklusive Ferienwohnungen im historischen Ensemble — moderner Komfort eingebettet
            in 700 Jahre Geschichte. Erwachen Sie inmitten des Schlossparks und erleben Sie
            Unterfranken von seiner schönsten Seite.
          </p>
          <Link
            href="/ferienwohnungen"
            className="inline-block px-6 py-3 bg-accent text-white text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors"
          >
            Wohnungen ansehen
          </Link>
        </div>
      </section>

      {/* Das Landschloss */}
      <section className="bg-warm-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[580px]">
            <Image
              src="/images/schloss-exterior.jpg"
              alt="Das Landschloss Eyrichshof"
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center px-8 sm:px-14 lg:px-16 xl:px-20 py-16 lg:py-24">
            <div className="max-w-md">
              <Image
                src="/images/wappen.png"
                alt="Wappen derer von Rotenhan"
                width={56}
                height={72}
                className="mb-6 opacity-75"
              />
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">700 Jahre Geschichte</p>
              <h2 className="font-heading text-4xl font-normal text-brand mb-6 leading-snug">
                Das Landschloss Eyrichshof
              </h2>
              <p className="text-warm-600 leading-relaxed mb-8 text-base">
                Eingebettet in die sanfte Hügellandschaft Unterfrankens vereint Schloss Eyrichshof
                Jahrhunderte alter Geschichte mit der Lebendigkeit zeitgenössischer Kultur.
                Ein Ort, der bleibt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/landschloss/geschichte"
                  className="inline-block px-6 py-3 bg-brand text-warm-50 text-sm uppercase tracking-widest hover:bg-brand/80 transition-colors text-center"
                >
                  Geschichte entdecken
                </Link>
                <Link
                  href="/landschloss/impressionen"
                  className="inline-block px-6 py-3 border border-brand text-sm uppercase tracking-widest text-brand hover:bg-brand hover:text-warm-50 transition-colors text-center"
                >
                  Impressionen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>{/* end max-w-5xl wrapper */}

      {/* ── Newsletter CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-brand)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Immer informiert</p>
          <h2 className="font-heading text-4xl font-normal text-warm-50 mb-4">Newsletter</h2>
          <p className="text-warm-300 text-base mb-8 leading-relaxed">
            Erhalten Sie als Erste Informationen zu kommenden Veranstaltungen, exklusiven Angeboten
            und Neuigkeiten vom Schloss.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-warm-100 placeholder:text-warm-500 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors shrink-0"
            >
              Anmelden
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
