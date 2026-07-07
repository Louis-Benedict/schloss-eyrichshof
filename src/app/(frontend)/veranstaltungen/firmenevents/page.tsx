import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'

const impressionen = [
  '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg',
  '06.jpg','07.jpg','08.jpg','09.png',
].map((file) => ({
  src: `/images/firmenevents/impressionen/${file}`,
  alt: `Firmenevents Impression`,
}))

export const metadata: Metadata = { title: 'Firmenevents' }

export default function FirmeneventsPage() {
  return (
    <>
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-firmenevents.jpg"
          alt="Firmenevents auf Schloss Eyrichshof"
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
            Ganzjährig verfügbar
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Firmenevents
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            Unvergessliche Events in historischem Rahmen — ganzjährig buchbar
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5">
        <p className="text-warm-600 leading-relaxed text-base">
          Große und kleine Räume, umgeben von wunderschöner Natur: Unser Schloss ist ideal für
          konzentriertes Arbeiten im Workshop, Team-Building in Kombination mit Wanderungen und
          Ausflügen, die besondere Firmenfeier oder einen Workation-Aufenthalt. Wir bieten mit
          unseren Ferienwohnungen modern ausgestattete Übernachtungsmöglichkeiten, die mit Hotels
          und Gutshöfen im Umkreis gut erweitert werden können.
        </p>
        <p className="text-warm-600 leading-relaxed text-base">
          Entdecken Sie im Folgenden unser Angebot und kontaktieren Sie uns jederzeit, damit wir
          über Ihre Planung sprechen können — wir beraten Sie gerne.
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

      {/* Impressionen */}
      <section className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Firmenevents</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery images={impressionen} />
        </div>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/firmenevents" />
    </>
  )
}
