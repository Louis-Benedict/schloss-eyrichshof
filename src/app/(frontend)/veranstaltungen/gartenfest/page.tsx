import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { IconDownload } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/site'
import { ORGANIZATION_PLACE, ORGANIZATION_REF } from '@/lib/organization'

export const metadata: Metadata = { title: 'Gartenfest' }

const gartenfestJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Gartenfest 2027',
  startDate: '2027-05-15',
  endDate: '2027-05-17',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: ORGANIZATION_PLACE,
  organizer: ORGANIZATION_REF,
  image: [`${SITE_URL}/images/hero-gartenfest.jpg`],
  description:
    'Kunst, Handwerk und fränkische Gastlichkeit — das beliebteste Open-Air-Erlebnis auf dem Schlossgelände.',
}

const quickLinks = [
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
]

const sidebarDownloads = [
  { label: 'Ausstellerliste', href: '/downloads/ausstellerliste-gartenfest-2026.pdf' },
  { label: 'Allgemeine Geschäftsbedingungen', href: '/veranstaltungen/gartenfest/agb' },
]

export default function GartenfestPage() {
  return (
    <>
      <JsonLd data={gartenfestJsonLd} />
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-gartenfest.jpg"
          alt="Gartenfest auf Schloss Eyrichshof"
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
            15.–17. Mai 2027 · Pfingstwochenende
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Gartenfest
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            Über 150 Aussteller, tägliche Livemusik und ein vielfältiges Rahmenprogramm
          </p>
          <span className="lg:hidden mt-6 inline-block px-8 py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed">
            In Kürze
          </span>
        </div>
      </div>

      {/* Mobile quick-nav */}
      <nav className="lg:hidden sticky top-[80px] z-20 bg-white border-b border-warm-200 overflow-x-auto">
        <div className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {quickLinks.map((link) => (
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

      {/* Intro + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:gap-14">
          <div className="flex-1 min-w-0 space-y-5">
            <p className="text-warm-600 leading-relaxed text-base">
              Am Pfingstwochenende, vom 23.–25. Mai 2026 feierten wir im Schlossgarten bereits zum 21. Mal unser Gartenfest!
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein Lifestyle-Fest für die ganze Familie: Mehr als 150 Aussteller präsentierten tolle Mode, ausgefallenen Schmuck und Accessoires, begeisternde Kunst, alles rund um Haus und Garten sowie erlesene Delikatessen und Kulinarik. Das vielfältige Warenangebot bot etwas für jeden Geschmack: hochwertige, edle Waren bis hin zu originellen und erschwinglichen Besonderheiten.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Auch für unsere kleinen Besucher war so Einiges im Programm — ob Gespensterjagd, gemeinsames Basteln, Suchspiel über&apos;s Gelände, Nostalgiekarussell und Kinder-Mini-Express und in diesem Jahr neu: Workshop mit Lehmfarben&nbsp;…
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein tolles Rahmenprogramm und tägliche Livemusik rundeten diese Gartenveranstaltung ab.
            </p>
          </div>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-warm-100 p-6">
              {/* Ticket box */}
              <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-1">Pfingstwochenende 2027</p>
              <p className="font-heading text-xl text-brand mb-5">15.–17. Mai 2027</p>

              <span className="block w-full text-center py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed mb-3">
                In Kürze
              </span>
              <p className="text-xs text-warm-500 text-center mb-6">
                Tickets werden rechtzeitig bekanntgegeben.
              </p>

              {/* Navigation */}
              <div className="border-t border-warm-200 pt-5 mb-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-4">Auf dieser Seite</p>
                <nav className="flex flex-col gap-3">
                  <a href="#impressionen" className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug">
                    Impressionen
                  </a>
                  <Link
                    href="/kontakt/anfahrt"
                    className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                  >
                    Anfahrt & Parken
                  </Link>
                </nav>
              </div>

              {/* Downloads */}
              <div className="border-t border-warm-200 pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-4">Downloads</p>
                <div className="flex flex-col gap-3">
                  {sidebarDownloads.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                    >
                      <IconDownload size={13} stroke={1.75} className="shrink-0 text-warm-400" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Impressionen */}
      <section id="impressionen" className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Gartenfest 2026</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery
            images={Array.from({ length: 18 }, (_, i) => ({
              src: `/images/gartenfest/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
              alt: `Gartenfest Impression ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: 'var(--color-brand)' }}>
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Gartenfest 2027</p>
        <h2 className="font-heading text-3xl font-normal text-warm-50 mb-6">Nächstes Jahr wieder dabei sein</h2>
        <p className="text-warm-100 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Das nächste Gartenfest findet vom 15.–17. Mai 2027 statt. Tickets werden rechtzeitig
          verfügbar sein, melden Sie sich für unseren Newsletter an, um als Erste informiert zu werden.
        </p>
        <span className="inline-block px-8 py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed">
          In Kürze
        </span>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/gartenfest" />
    </>
  )
}
