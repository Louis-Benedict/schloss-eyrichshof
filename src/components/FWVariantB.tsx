'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import FWLightbox from '@/components/FWLightbox'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import type { Apartment } from '@/data/ferienwohnungen'

export default function FWVariantB({ apartments }: { apartments: Apartment[] }) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null), [])
  const next = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null), [])
  const select = useCallback((i: number) => setLightbox(lb => lb ? { ...lb, index: i } : null), [])

  return (
    <>
      {apartments.map((apt, ai) => {
        const allImages = [apt.mainImage, ...apt.gallery]
        return (
          <section key={apt.id} className={`border-t border-warm-200 ${ai % 2 === 1 ? 'bg-warm-50' : ''}`}>

            {/* Full-width cinematic hero */}
            <button
              type="button"
              onClick={() => setLightbox({ images: allImages, index: 0 })}
              className="relative w-full block group cursor-zoom-in focus:outline-none"
              style={{ height: 'clamp(320px, 58vh, 620px)' }}
            >
              <Image
                src={apt.mainImage}
                alt={apt.name}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="100vw"
                priority={ai === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/75 via-brand/20 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 sm:px-8 pb-10 text-left">
                <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
                  {apt.tag}
                </span>
                <h2 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">{apt.name}</h2>
              </div>
            </button>

            {/* Info + horizontal filmstrip */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
              <div>
                <dl className="divide-y divide-warm-200 mb-6 text-sm">
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
                <p className="text-warm-600 leading-relaxed text-sm mb-8">{apt.description}</p>
                <Link
                  href="/kontakt/fewo-reservierung"
                  className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Jetzt buchen
                </Link>
              </div>

              {/* Scrollable filmstrip */}
              <div
                className="flex gap-3 overflow-x-auto pb-1"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--color-warm-300, #d4c9be) transparent' }}
              >
                {apt.gallery.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightbox({ images: allImages, index: i + 1 })}
                    className="relative shrink-0 overflow-hidden group cursor-zoom-in focus:outline-none"
                    style={{ width: 240, height: 180 }}
                  >
                    <Image
                      src={src}
                      alt={`${apt.name} ${i + 2}`}
                      fill
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="240px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                ))}
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
