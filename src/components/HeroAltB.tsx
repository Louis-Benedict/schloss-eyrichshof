'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import { BLUR_PLACEHOLDER } from '@/lib/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/images/hero-roesler-open-air.jpg',
    eyebrow: 'Sommer 2026 · Schloss Eyrichshof',
    heading: 'Rösler Open Air',
    subheading: 'Sechs Abende unter freiem Himmel',
    body: 'Klassik, Jazz und Weltmusik — ein musikalisches Highlight im Schlosspark Eyrichshof mit Künstlern aus aller Welt.',
    primaryCta: { label: 'Tickets buchen', href: 'https://www.kartenkiosk-bamberg.de' },
    secondaryCta: { label: 'Mehr erfahren', href: '/veranstaltungen/roesler-open-air' },
  },
  {
    image: '/images/hero-schloss.jpg',
    eyebrow: 'Seit über 700 Jahren',
    heading: 'Unvergessliche Momente',
    subheading: 'auf Schloss Eyrichshof',
    body: 'Ein fränkisches Landschloss mit Geschichte, Gastfreundschaft und Atmosphäre — mitten in der Natur Unterfrankens.',
    primaryCta: { label: 'Veranstaltungen', href: '/veranstaltungen' },
    secondaryCta: { label: 'Das Schloss', href: '/landschloss' },
  },
  {
    image: '/images/hero-gartenfest.jpg',
    eyebrow: 'Pfingstwochenende · Schloss Eyrichshof',
    heading: 'Gartenfest',
    subheading: 'Kunst, Natur und fränkische Gastlichkeit',
    body: 'Über 150 Aussteller, tägliche Livemusik und ein vielfältiges Rahmenprogramm — das beliebteste Open-Air-Erlebnis auf dem Schlossgelände.',
    primaryCta: { label: 'Tickets buchen', href: 'https://www.kartenkiosk-bamberg.de' },
    secondaryCta: { label: 'Mehr erfahren', href: '/veranstaltungen/gartenfest' },
  },
  {
    image: '/images/hero-winterszeit.jpg',
    eyebrow: '5.–8. November 2026',
    heading: 'Winterszeit',
    subheading: 'auf Schloss Eyrichshof',
    body: 'Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre im historischen Ambiente des Landschloss Eyrichshof.',
    primaryCta: { label: 'Tickets buchen', href: 'https://www.kartenkiosk-bamberg.de' },
    secondaryCta: { label: 'Mehr erfahren', href: '/veranstaltungen/winterszeit' },
  },
]

export default function HeroAltB() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{ nextEl: '.alt-b-next', prevEl: '.alt-b-prev' }}
        pagination={{ clickable: true, el: '.alt-b-pagination' }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative"
              style={{ height: 'min(800px, 100svh)' }}
            >
              {/* Image — full bleed, no overlay */}
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  priority={i === 0}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  sizes="100vw"
                />
              )}

              {/* Minimal top gradient so nav stays readable */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />

              {/* Solid card — brand-dark, anchored bottom-left */}
              <div className="absolute bottom-0 left-0 w-full lg:w-[480px] bg-brand-dark px-8 lg:px-12 py-8 lg:py-10">
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
                  {slide.eyebrow}
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-normal text-white leading-snug mb-2">
                  {slide.heading}
                </h2>
                <p className="font-heading text-lg font-light italic text-warm-400 mb-5">
                  {slide.subheading}
                </p>
                <p className="text-warm-400 text-sm leading-relaxed mb-7">
                  {slide.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={slide.primaryCta.href}
                    className="px-7 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-semibold transition-colors"
                  >
                    {slide.primaryCta.label}
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="px-7 py-3 border border-warm-600 text-warm-300 hover:border-white hover:text-white text-xs uppercase tracking-widest transition-colors"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="alt-b-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-2xl border border-white/30 text-white bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>
      <button
        className="alt-b-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-2xl border border-white/30 text-white bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Nächstes Bild"
      >
        ›
      </button>

      <div className="alt-b-pagination absolute bottom-4 right-6 z-20 flex justify-end gap-2" />
    </div>
  )
}
