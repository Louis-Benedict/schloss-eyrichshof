'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import FWLightbox from '@/components/FWLightbox'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import type { Apartment } from '@/data/ferienwohnungen'

function AptSpecs({ apt }: { apt: Apartment }) {
  return (
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
  )
}

export default function FWVariantA({ apartments }: { apartments: Apartment[] }) {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : null), [])
  const next = useCallback(() => setLightbox(lb => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : null), [])
  const select = useCallback((i: number) => setLightbox(lb => lb ? { ...lb, index: i } : null), [])

  return (
    <>
      {apartments.map((apt, ai) => {
        const allImages = [apt.mainImage, ...apt.gallery]
        const imgLeft = ai % 2 === 0
        return (
          <div
            key={apt.id}
            className={`flex flex-col lg:flex-row ${!imgLeft ? 'lg:flex-row-reverse' : ''} ${ai % 2 === 1 ? 'bg-warm-50' : 'bg-white'}`}
          >
            {/* Image half */}
            <div className="relative w-full lg:w-1/2 min-h-[60vw] lg:min-h-[80vh]">
              <button
                type="button"
                onClick={() => setLightbox({ images: allImages, index: 0 })}
                className="absolute inset-0 w-full h-full group cursor-zoom-in focus:outline-none"
              >
                <Image
                  src={apt.mainImage}
                  alt={apt.name}
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={ai === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <span className="absolute bottom-5 right-5 text-[11px] uppercase tracking-widest text-white bg-black/50 px-3 py-1.5 font-medium">
                  {allImages.length} Fotos
                </span>
              </button>
            </div>

            {/* Info half */}
            <div className="w-full lg:w-1/2 flex items-center py-16 px-8 lg:px-14 xl:px-20">
              <div className="w-full max-w-sm mx-auto lg:mx-0">
                <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
                  {apt.tag}
                </span>
                <h2 className="font-heading text-5xl font-normal text-brand mb-8 leading-tight">{apt.name}</h2>
                <AptSpecs apt={apt} />
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
