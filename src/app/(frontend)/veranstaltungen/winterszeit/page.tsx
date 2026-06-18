import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = { title: 'Winterszeit' }

export default function WinterzeitPage() {
  return (
    <>
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
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            5.–8. November 2026
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Winterszeit
          </h1>
          <p className="mt-3 text-lg text-warm-200 font-light leading-snug">
            Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-warm-600 leading-relaxed mb-5 text-base">
          Die Winterszeit auf Schloss Eyrichshof ist ein Highlight im Herbstkalender:
          Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre in historischem Ambiente.
        </p>
        <p className="text-warm-600 leading-relaxed mb-10 text-base">
          Weitere Informationen folgen in Kürze.
        </p>
        <Link
          href="https://www.kartenkiosk-bamberg.de"
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Tickets buchen
        </Link>
      </div>

      {/* Impressionen */}
      <section className="border-t border-warm-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <AnfahrtBanner />
    </>
  )
}
