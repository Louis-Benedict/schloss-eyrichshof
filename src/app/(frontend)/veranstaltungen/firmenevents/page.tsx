import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Firmenevents' }

export default function FirmeneventsPage() {
  return (
    <>
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-schloss.jpg"
          alt="Firmenevents auf Schloss Eyrichshof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Ganzjährig verfügbar
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Firmenevents
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-warm-600 leading-relaxed mb-5 text-base">
          Von kleinen Workshops bis hin zu großen Firmenveranstaltungen — Schloss Eyrichshof
          bietet flexible Räumlichkeiten und ein engagiertes Team für Ihren Firmenevent.
        </p>
        <p className="text-warm-600 leading-relaxed mb-10 text-base">
          Teambuilding, Sommerfest, Jahrestagung oder Produktpräsentation: Wir schaffen den
          passenden Rahmen.
        </p>
        <Link
          href="/kontakt/formular"
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Anfrage stellen
        </Link>
      </div>
    </>
  )
}
