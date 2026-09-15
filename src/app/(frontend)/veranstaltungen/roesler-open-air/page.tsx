import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import { ORGANIZATION_PLACE, ORGANIZATION_REF } from '@/lib/organization'

export const metadata: Metadata = { title: 'Rösler Open Air' }

const roeslerOpenAirJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  name: 'Rösler Open Air 2027',
  url: `${SITE_URL}/veranstaltungen/roesler-open-air`,
  description: 'Live Musik in einzigartiger Kulisse im Schlosspark Eyrichshof — das Line-up 2027 wird in Kürze bekanntgegeben.',
  startDate: '2027-07-29',
  endDate: '2027-08-03',
  eventStatus: 'https://schema.org/EventScheduled',
  location: ORGANIZATION_PLACE,
  organizer: ORGANIZATION_REF,
}

const galleryImages = Array.from({ length: 37 }, (_, i) => ({
  src: `/images/roesler-open-air/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Rösler Open Air – Impression ${i + 1}`,
}))

const sidebarLinks = [
  { label: 'Programm', href: '#programm' },
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
]

export default function RoeslerOpenAirPage() {
  return (
    <>
      <JsonLd data={roeslerOpenAirJsonLd} />
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-roesler-open-air.jpg"
          alt="Rösler Open Air auf Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            29. Juli – 3. August 2027
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Rösler Open Air
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            Live Musik in einzigartiger Kulisse — Line-up wird in Kürze bekanntgegeben
          </p>
        </div>
      </div>

      {/* Mobile quick-nav */}
      <nav className="lg:hidden sticky top-[80px] z-20 bg-white border-b border-warm-200 overflow-x-auto">
        <div className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {sidebarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.14em] font-medium px-3 py-1.5 text-warm-600 hover:text-accent hover:bg-warm-100 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Programm + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:gap-14">

          <main className="flex-1 min-w-0">
            <div id="programm">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Rösler Open Air</p>
              <h2 className="font-heading text-3xl font-normal text-brand mb-8">Programm</h2>
              <p className="text-warm-600 leading-relaxed text-base max-w-2xl">
                Das Line-up für den 29. Juli – 3. August 2027 wird in Kürze bekanntgegeben. Melden Sie
                sich für unseren{' '}
                <Link href="/kontakt/newsletter" className="text-accent hover:text-accent-hover transition-colors">
                  Newsletter
                </Link>{' '}
                an, um als Erste informiert zu werden, sobald die Künstler feststehen.
              </p>
            </div>
          </main>

          {/* Desktop sidebar — sticky stops when this flex container ends */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-warm-100 p-6">
              {/* Ticket box */}
              <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-1">Sommer 2027</p>
              <p className="font-heading text-xl text-brand mb-5">29. Juli – 3. August 2027</p>

              <span className="block w-full text-center py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed mb-3">
                In Kürze
              </span>
              <p className="text-xs text-warm-500 text-center mb-6">
                Line-up und Ticketverkauf werden rechtzeitig bekanntgegeben.
              </p>

              {/* Navigation */}
              <div className="border-t border-warm-200 pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-4">Auf dieser Seite</p>
                <nav className="flex flex-col gap-3 mb-5">
                  <a href="#programm" className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug">
                    Programm
                  </a>
                  <a href="#impressionen" className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug">
                    Impressionen
                  </a>
                </nav>
                <Link
                  href="/kontakt/anfahrt"
                  className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                >
                  Anfahrt & Parken
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Impressionen — outside the flex container so the sidebar stops here */}
      <section id="impressionen" className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Rösler Open Air</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen von 2026</h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/roesler-open-air" />
    </>
  )
}
