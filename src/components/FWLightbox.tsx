'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface Props {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelect: (i: number) => void
}

export default function FWLightbox({ images, index, onClose, onPrev, onNext, onSelect }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={onClose}>
      <div className="flex items-center justify-between px-5 py-3 shrink-0" onClick={e => e.stopPropagation()}>
        <span className="text-white/50 text-xs uppercase tracking-widest font-mono">
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} aria-label="Schließen" className="text-white/50 hover:text-white transition-colors p-2 -mr-2">
          <IconX size={22} />
        </button>
      </div>
      <div className="relative flex-1 mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        <Image key={index} src={images[index]} alt="" fill className="object-contain" sizes="100vw" />
        <button type="button" onClick={onPrev} aria-label="Vorheriges Bild" className="absolute left-0 top-0 h-full px-4 flex items-center text-white/40 hover:text-white transition-colors">
          <IconChevronLeft size={40} stroke={1.25} />
        </button>
        <button type="button" onClick={onNext} aria-label="Nächstes Bild" className="absolute right-0 top-0 h-full px-4 flex items-center text-white/40 hover:text-white transition-colors">
          <IconChevronRight size={40} stroke={1.25} />
        </button>
      </div>
      <div
        className="shrink-0 px-4 pb-4 pt-3 flex gap-2 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
        onClick={e => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Bild ${i + 1}`}
            className={`relative shrink-0 overflow-hidden transition-opacity focus:outline-none ${
              i === index
                ? 'opacity-100 ring-2 ring-accent ring-offset-2 ring-offset-black'
                : 'opacity-40 hover:opacity-70'
            }`}
            style={{ width: 72, height: 48 }}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="72px" />
          </button>
        ))}
      </div>
    </div>
  )
}
