import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { IconDownload } from '@tabler/icons-react'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'

export const metadata: Metadata = { title: 'Winterszeit' }

const quickLinks = [
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
]

const sidebarDownloads = [
  {
    label: 'Flyer Winterszeit',
    href: 'https://fa0fbbbc-fafb-462b-82ef-c729955a50b4.usrfiles.com/ugd/fa0fbb_b89bbba776d8484cb4b62b6b0375cec7.pdf',
    disabled: false,
  },
  { label: 'Programm Winterszeit', href: null, disabled: true },
  { label: 'Ausstellerliste Winterszeit', href: null, disabled: true },
]

export default function WinterzeitPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-winterszeit.jpg"
          alt="Winterszeit auf Schloss Eyrichshof"
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
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            5.–8. November 2026
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Winterszeit
          </h1>
          <p className="mt-3 text-lg text-warm-200 font-light leading-snug">
            Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre
          </p>
          <a
            href="https://www.kartenkiosk-bamberg.de"
            target="_blank"
            rel="noopener"
            className="lg:hidden mt-6 inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
          >
            Tickets kaufen
          </a>
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
              Stimmungsvolles Ambiente, Genuss und Glücksmomente – das alles erwartete unsere Besucher
              auch zur diesjährigen Winterszeit vom 05. – 08. November 2026 auf Schloss Eyrichshof.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              In vorweihnachtlicher Atmosphäre kann man durch die historischen Hallen und das zauberhaft
              illuminierte Gelände des Schlosses flanieren und sich vom hochwertigen Angebot an Mode,
              Schmuck und Wohnaccessoires inspirieren lassen. Unseren Besuchern wird ein erlesenes
              Sortiment rund um Lifestyle, Handwerk und Kulinarik geboten.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wie auch im letzten Jahr, starten wir die Winterszeit am Donnerstag, den 05. November mit
              einem „Ladies Day". Auf alle Damen wartet ermäßigter Eintritt und viele Überraschungen
              (Männer sind natürlich ebenso herzlich Willkommen!).
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein Rahmenprogramm voller Kunst, Musik und Kultur rundet die Veranstaltung ab. Und auch
              auf unsere kleinen Besucher warten wieder Gespensterführungen auf dem Dachboden des
              Schlosses, Laternenbasteln und ein märchenhaftes Suchspiel auf dem Schlossgelände.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wir freuen uns jetzt schon auf diese vorweihnachtliche Zeit – heuer nochmal ganz
              besonders – denn dies ist die <strong className="text-brand font-medium">10. Winterszeit!</strong>
            </p>
          </div>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-warm-100 p-6">
              {/* Ticket box */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-1">Herbst 2026</p>
              <p className="font-heading text-xl text-brand mb-5">5.–8. November 2026</p>

              <a
                href="https://www.kartenkiosk-bamberg.de"
                target="_blank"
                rel="noopener"
                className="block w-full text-center py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors mb-3"
              >
                Tickets kaufen
              </a>
              <p className="text-xs text-warm-500 text-center mb-6">Kinder bis 12 Jahre haben freien Eintritt.</p>

              {/* Downloads */}
              <div className="border-t border-warm-200 pt-5 mb-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-4">Downloads</p>
                <div className="flex flex-col gap-3">
                  {sidebarDownloads.map((item) =>
                    item.disabled ? (
                      <span
                        key={item.label}
                        className="flex items-center gap-2 text-sm text-warm-300 cursor-not-allowed leading-snug"
                      >
                        <IconDownload size={13} className="shrink-0" />
                        {item.label}
                      </span>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href!}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-2 text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                      >
                        <IconDownload size={13} className="shrink-0" />
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t border-warm-200 pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-4">Auf dieser Seite</p>
                <nav className="flex flex-col gap-3 mb-5">
                  <a
                    href="#impressionen"
                    className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                  >
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

      {/* Impressionen */}
      <section id="impressionen" className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Winterszeit 2026</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery
            images={Array.from({ length: 15 }, (_, i) => ({
              src: `/images/winterszeit/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
              alt: `Winterszeit Impression ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-100 py-16 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Dabei sein</p>
        <h2 className="font-heading text-3xl font-normal text-brand mb-6">Tickets sichern</h2>
        <p className="text-warm-600 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Tagestickets sind im Vorverkauf erhältlich. Kinder bis 12 Jahre haben freien Eintritt.
        </p>
        <a
          href="https://www.kartenkiosk-bamberg.de"
          target="_blank"
          rel="noopener"
          className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Tickets kaufen
        </a>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/winterszeit" />
    </>
  )
}
