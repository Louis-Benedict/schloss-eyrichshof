'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface Slide {
  image?: string
  fallbackColor?: string
  overlayColor: string
  eyebrow: string
  heading: string
  subheading: string
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

const slides: Slide[] = [
  {
    image: '/images/hero-schloss.jpg',
    overlayColor: 'rgba(44, 30, 28, 0.55)',
    eyebrow: 'Seit über 700 Jahren',
    heading: 'Unvergessliche Momente',
    subheading: 'auf Schloss Eyrichshof',
    body: 'Ein fränkisches Landschloss mit Geschichte, Gastfreundschaft und Atmosphäre — mitten in der Natur Unterfrankens.',
    primaryCta: { label: 'Veranstaltungen', href: '/veranstaltungen' },
    secondaryCta: { label: 'Das Schloss', href: '/landschloss' },
  },
  {
    image: '/images/hero-winterszeit.jpg',
    overlayColor: 'rgba(10, 14, 30, 0.55)',
    eyebrow: '5.–8. November 2026',
    heading: 'Winterszeit',
    subheading: 'auf Schloss Eyrichshof',
    body: 'Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre im historischen Ambiente des Landschloss Eyrichshof.',
    primaryCta: { label: 'Tickets buchen', href: '/veranstaltungen/tickets' },
    secondaryCta: { label: 'Mehr erfahren', href: '/veranstaltungen/winterszeit' },
  },
]

export default function HeroSwiper() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative flex items-center justify-center text-center px-4 py-16"
              style={{
                height: '800px',
                backgroundImage: slide.image ? `url(${slide.image})` : undefined,
                backgroundColor: slide.image ? undefined : slide.fallbackColor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Tinted overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: slide.overlayColor }} />

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-xs uppercase tracking-[0.22em] mb-5" style={{ color: '#EF5A2A' }}>
                  {slide.eyebrow}
                </p>
                <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] mb-2 text-white">
                  {slide.heading}
                </h2>
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light italic text-warm-200 mb-7">
                  {slide.subheading}
                </p>
                <p className="text-warm-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                  {slide.body}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={slide.primaryCta.href}
                    className="px-8 py-3 text-sm uppercase tracking-widest font-semibold text-white bg-accent hover:bg-accent-hover transition-colors"
                  >
                    {slide.primaryCta.label}
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="px-8 py-3 text-sm uppercase tracking-widest border border-warm-300 text-warm-200 hover:border-white hover:text-white transition-colors"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrow buttons */}
      <button
        className="hero-prev absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-2xl border border-white/30 text-white hover:border-white bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Vorheriges Bild"
      >
        ‹
      </button>
      <button
        className="hero-next absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-2xl border border-white/30 text-white hover:border-white bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Nächstes Bild"
      >
        ›
      </button>

      {/* Pagination */}
      <div className="hero-pagination absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2" />
    </div>
  )
}
