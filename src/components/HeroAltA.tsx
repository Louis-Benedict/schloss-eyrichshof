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

export default function HeroAltA() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{ nextEl: '.alt-a-next', prevEl: '.alt-a-prev' }}
        pagination={{ clickable: true, el: '.alt-a-pagination' }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="flex flex-col lg:flex-row"
              style={{ height: 'min(800px, 100svh)' }}
            >
              {/* Text panel */}
              <div className="order-2 lg:order-1 lg:w-[42%] shrink-0 bg-cream flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-20">
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent mb-5">
                  {slide.eyebrow}
                </p>
                <h2 className="font-heading text-4xl lg:text-5xl font-normal text-brand leading-[1.1] mb-3">
                  {slide.heading}
                </h2>
                <p className="font-heading text-xl lg:text-2xl font-light italic text-warm-500 mb-6">
                  {slide.subheading}
                </p>
                <p className="text-warm-600 text-sm leading-relaxed mb-8 max-w-sm">
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
                    className="px-7 py-3 border border-brand text-brand hover:bg-brand hover:text-white text-xs uppercase tracking-widest transition-colors"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>

              {/* Image — no overlay */}
              <div className="order-1 lg:order-2 flex-1 relative min-h-[260px]">
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
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="alt-a-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-xl border border-brand/30 text-brand bg-cream/80 hover:bg-cream transition-colors"
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>
      <button
        className="alt-a-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-xl border border-white/30 text-white bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Nächstes Bild"
      >
        ›
      </button>

      <div className="alt-a-pagination absolute bottom-4 left-0 right-0 lg:left-[42%] z-20 flex justify-center gap-2" />
    </div>
  )
}
