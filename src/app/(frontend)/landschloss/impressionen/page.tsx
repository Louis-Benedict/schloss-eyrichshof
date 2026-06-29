import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import ImageGallery from '@/components/ImageGallery'
import LandschlossNav from '@/components/LandschlossNav'

export const metadata: Metadata = { title: 'Impressionen' }

const sections = [
  {
    eyebrow: 'Rösler Open Air',
    title: 'Rösler Open Air',
    href: '/veranstaltungen/roesler-open-air',
    images: Array.from({ length: 37 }, (_, i) => ({
      src: `/images/roesler-open-air/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Rösler Open Air – Impression ${i + 1}`,
    })),
  },
  {
    eyebrow: 'Gartenfest 2026',
    title: 'Gartenfest',
    href: '/veranstaltungen/gartenfest',
    images: Array.from({ length: 18 }, (_, i) => ({
      src: `/images/gartenfest/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Gartenfest Impression ${i + 1}`,
    })),
  },
  {
    eyebrow: 'Winterszeit 2026',
    title: 'Winterszeit',
    href: '/veranstaltungen/winterszeit',
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `/images/winterszeit/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Winterszeit Impression ${i + 1}`,
    })),
  },
  {
    eyebrow: 'Hochzeiten & Feste',
    title: 'Hochzeiten & Feste',
    href: '/veranstaltungen/hochzeiten-feste',
    images: Array.from({ length: 18 }, (_, i) => ({
      src: `/images/hochzeiten/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
      alt: `Hochzeiten & Feste Impression ${i + 1}`,
    })),
  },
  {
    eyebrow: 'Firmenevents',
    title: 'Firmenevents',
    href: '/veranstaltungen/firmenevents',
    images: [
      '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
      '06.jpg', '07.jpg', '08.jpg', '09.png',
    ].map((file, i) => ({
      src: `/images/firmenevents/impressionen/${file}`,
      alt: `Firmenevents Impression ${i + 1}`,
    })),
  },
]

export default function ImpressionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schloss Eyrichshof"
        title="Impressionen"
        description="Bilder und Eindrücke vom Schloss, den Veranstaltungen und der Umgebung."
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5 text-warm-600 leading-relaxed">
        <p>
          Wir haben für Sie einige Galerien erstellt mit Fotos des Schlosses, Veranstaltungen,
          Hochzeitsfeiern und Firmenfesten, unseren modernen Ferienwohnungen und der wunderschönen
          Umgebung.
        </p>
        <p>Verschaffen Sie sich hier einen Überblick von Eyrichshof. Am besten aber, Sie kommen einfach mal vorbei.</p>
        <p>Wir freuen uns auf Ihren Besuch.</p>
      </section>

      <div className="divide-y divide-warm-200">
        {sections.map((section) => (
          <section key={section.title} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">{section.eyebrow}</p>
                  <h2 className="font-heading text-3xl font-normal text-brand">{section.title}</h2>
                </div>
                <Link
                  href={section.href}
                  className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors shrink-0"
                >
                  Zur Veranstaltung →
                </Link>
              </div>
              <ImageGallery images={section.images} />
            </div>
          </section>
        ))}
      </div>

      <LandschlossNav currentHref="/landschloss/impressionen" />
    </>
  )
}
