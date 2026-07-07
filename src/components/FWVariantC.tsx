'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import FWLightbox from '@/components/FWLightbox'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import type { Apartment } from '@/data/ferienwohnungen'

export default function FWVariantC({ apartments }: { apartments: Apartment[] }) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null), [])
  const next = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null), [])
  const select = useCallback((i: number) => setLightbox(lb => lb ? { ...lb, index: i } : null), [])

  return (
    <>
      {/* ── Card overview ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {apartments.map(apt => (
            <a
              key={apt.id}
              href={`#fw-${apt.id}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={apt.mainImage}
                alt={apt.name}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="block text-[9px] uppercase tracking-[0.16em] text-accent mb-1.5">{apt.tag}</span>
                <span className="block font-heading text-2xl text-white leading-snug">{apt.name}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Detailed sections ── */}
      {apartments.map((apt, ai) => {
        const allImages = [apt.mainImage, ...apt.gallery]
        return (
          <section
            key={apt.id}
            id={`fw-${apt.id}`}
            className={`border-t border-warm-200 scroll-mt-28 ${ai % 2 === 1 ? 'bg-warm-50' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">

                {/* Large single image — no thumbnail grid */}
                <button
                  type="button"
                  onClick={() => setLightbox({ images: allImages, index: 0 })}
                  className="relative w-full group cursor-zoom-in focus:outline-none"
                  style={{ aspectRatio: '16/10' }}
                >
                  <Image
                    src={apt.mainImage}
                    alt={apt.name}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, calc(100vw - 380px)"
                    priority={ai === 0}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <span className="absolute bottom-5 right-5 text-[11px] uppercase tracking-widest text-white bg-black/50 px-3 py-1.5 font-medium">
                    {allImages.length} Fotos ansehen
                  </span>
                </button>

                {/* Info */}
                <div className="lg:sticky lg:top-32">
                  <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
                    {apt.tag}
                  </span>
                  <h2 className="font-heading text-4xl font-normal text-brand mb-8 leading-tight">{apt.name}</h2>
                  <dl className="divide-y divide-warm-200 mb-8 text-sm">
                    <div className="flex gap-4 py-3">
                      <dt className="text-[11px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Größe</dt>
                      <dd className="text-warm-700">{apt.size}</dd>
                    </div>
                    <div className="flex gap-4 py-3">
                      <dt className="text-[11px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Gäste</dt>
                      <dd className="text-warm-700">
                        {apt.guests}
                        {apt.guestsNote && <span className="block text-warm-500 text-xs mt-0.5 leading-snug">{apt.guestsNote}</span>}
                      </dd>
                    </div>
                    <div className="flex gap-4 py-3">
                      <dt className="text-[11px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Zimmer</dt>
                      <dd className="text-warm-700">{apt.rooms}</dd>
                    </div>
                  </dl>
                  <p className="text-warm-600 leading-relaxed text-sm mb-10">{apt.description}</p>
                  <Link
                    href="/kontakt/fewo-reservierung"
                    className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
                  >
                    Jetzt buchen
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {lightbox && (
        <FWLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={close}
          onPrev={prev}
          onNext={next}
          onSelect={select}
        />
      )}
    </>
  )
}
