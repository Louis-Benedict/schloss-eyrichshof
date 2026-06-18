'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { BLUR_PLACEHOLDER } from '@/lib/image'

interface GalleryImage {
  src: string
  alt?: string
}

function Lightbox({
  images,
  index,
  onClose,
}: {
  images: GalleryImage[]
  index: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(index)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white/70 hover:text-white text-3xl leading-none"
        aria-label="Schließen"
      >
        ×
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 text-white/70 hover:text-white text-4xl leading-none px-2 py-1"
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>

      <div
        className="relative w-full max-w-4xl max-h-[85vh] mx-16"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: '1/1' }}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt ?? ''}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 text-white/70 hover:text-white text-4xl leading-none px-2 py-1"
        aria-label="Nächstes Bild"
      >
        ›
      </button>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs tabular-nums">
        {current + 1} / {images.length}
      </p>
    </div>
  )
}

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{ aspectRatio: '1/1' }}
            aria-label={`Bild ${i + 1} vergrößern`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ''}
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 17vw"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
