import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Rösler Open Air' }

export default function RoeslerOpenAirPage() {
  return (
    <>
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-roesler-open-air.jpg"
          alt="Rösler Open Air auf Schloss Eyrichshof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            6 Abende im Sommer 2026
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Rösler Open Air
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-warm-600 leading-relaxed mb-5 text-base">
          Die Rösler Open Air Konzertreihe bringt live Musik in die einzigartige Kulisse von
          Schloss Eyrichshof. Das Programm 2026 umfasst sechs unvergessliche Abende.
        </p>
        <p className="text-warm-600 leading-relaxed mb-10 text-base">
          Das Programm wird in Kürze bekannt gegeben.
        </p>
        <Link
          href="/veranstaltungen/tickets"
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Tickets buchen
        </Link>
      </div>
    </>
  )
}
