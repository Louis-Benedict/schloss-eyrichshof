import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'

export const metadata: Metadata = { title: 'Hochzeiten & Feste' }

export default function HochzeitenFestePage() {
  return (
    <>
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-hochzeiten.jpg"
          alt="Hochzeiten & Feste auf Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover object-[center_20%]"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Ganzjährig verfügbar
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Hochzeiten & Feste
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            Feiern Sie Ihren besonderen Tag in einzigartiger historischer Kulisse
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-warm-600 leading-relaxed text-base">
              Planen Sie Ihre Hochzeit oder eine andere Feier mit Familie und Freunden? Ganz gleich,
              ob es um die großen oder kleinen Momente geht: Ein Fest auf Schloss Eyrichshof wird
              garantiert immer in schöner Erinnerung bleiben.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wir haben die passenden Räumlichkeiten und ein Partnernetzwerk, das Ihnen bei der
              Planung und Umsetzung Ihres Events mit Rat und Tat zur Seite steht — erfahrene
              Dienstleister, z.&nbsp;B. für Catering, Fotografie und Licht, mit denen wir seit vielen
              Jahren zusammenarbeiten. Brautpaare können sich bei uns frei oder kirchlich trauen lassen.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne.
            </p>
            <div className="pt-2">
              <Link
                href="/kontakt"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
              >
                Anfrage stellen
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/hochzeiten/saal.jpg"
              alt="Festlich gedeckter Saal auf Schloss Eyrichshof"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Impressionen */}
      <section className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Hochzeiten & Feste</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery
            images={Array.from({ length: 18 }, (_, i) => ({
              src: `/images/hochzeiten/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
              alt: `Hochzeiten & Feste Impression ${i + 1}`,
            }))}
          />
        </div>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/hochzeiten-feste" />
    </>
  )
}
