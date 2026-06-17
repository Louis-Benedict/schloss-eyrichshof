'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface ApartmentGalleryProps {
  mainImage: string
  mainAlt: string
  gallery: string[]
  apartmentName: string
}

export default function ApartmentGallery({
  mainImage,
  mainAlt,
  gallery,
  apartmentName,
}: ApartmentGalleryProps) {
  const allImages = [mainImage, ...gallery]
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive(i => (i === null ? null : (i - 1 + allImages.length) % allImages.length)),
    [allImages.length],
  )
  const next = useCallback(
    () => setActive(i => (i === null ? null : (i + 1) % allImages.length)),
    [allImages.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  return (
    <>
      {/* Inline gallery grid */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setActive(0)}
          className="relative w-full overflow-hidden group cursor-zoom-in focus:outline-none"
          style={{ aspectRatio: '4/3' }}
        >
          <Image
            src={mainImage}
            alt={mainAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, calc(100vw - 420px)"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </button>

        <div className="grid grid-cols-3 gap-2">
          {gallery.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i + 1)}
              className="relative overflow-hidden group cursor-zoom-in focus:outline-none"
              style={{ aspectRatio: '3/2' }}
            >
              <Image
                src={src}
                alt={`${apartmentName} Interieur ${i + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={close}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3 shrink-0"
            onClick={e => e.stopPropagation()}
          >
            <span className="text-white/50 text-xs uppercase tracking-widest font-mono">
              {active + 1} / {allImages.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Schließen"
              className="text-white/50 hover:text-white transition-colors p-2 -mr-2"
            >
              <IconX size={22} />
            </button>
          </div>

          {/* Main image + nav arrows */}
          <div
            className="relative flex-1 mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <Image
              key={active}
              src={allImages[active]}
              alt={active === 0 ? mainAlt : `${apartmentName} ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            <button
              type="button"
              onClick={prev}
              aria-label="Vorheriges Bild"
              className="absolute left-0 top-0 h-full px-4 flex items-center text-white/40 hover:text-white transition-colors"
            >
              <IconChevronLeft size={40} stroke={1.25} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nächstes Bild"
              className="absolute right-0 top-0 h-full px-4 flex items-center text-white/40 hover:text-white transition-colors"
            >
              <IconChevronRight size={40} stroke={1.25} />
            </button>
          </div>

          {/* Scrollable thumbnail strip */}
          <div
            className="shrink-0 px-4 pb-4 pt-3 flex gap-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
            onClick={e => e.stopPropagation()}
          >
            {allImages.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`relative shrink-0 overflow-hidden transition-opacity focus:outline-none ${
                  i === active
                    ? 'opacity-100 ring-2 ring-accent ring-offset-2 ring-offset-black'
                    : 'opacity-40 hover:opacity-70'
                }`}
                style={{ width: 72, height: 48 }}
                aria-label={`Bild ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
