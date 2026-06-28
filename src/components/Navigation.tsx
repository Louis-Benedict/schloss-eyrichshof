'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import TopBar from '@/components/TopBar'

const navItems = [
  {
    label: 'Landschloss Eyrichshof',
    href: '/landschloss',
    children: [
      { label: 'Geschichte', href: '/landschloss/geschichte' },
      { label: 'Anspruch', href: '/landschloss/anspruch' },
      { label: 'Umgebung', href: '/landschloss/umgebung' },
      { label: 'Impressionen', href: '/landschloss/impressionen' },
    ],
  },
  {
    label: 'Veranstaltungen',
    href: '/veranstaltungen',
    children: [
      { label: 'Winterszeit', href: '/veranstaltungen/winterszeit' },
      { label: 'Gartenfest', href: '/veranstaltungen/gartenfest' },
      { label: 'Rösler Open Air', href: '/veranstaltungen/roesler-open-air' },
      { label: 'Hochzeiten & Feste', href: '/veranstaltungen/hochzeiten-feste' },
      { label: 'Firmenevents', href: '/veranstaltungen/firmenevents' },
    ],
  },
  { label: 'Ferienwohnungen', href: '/ferienwohnungen' },
  { label: 'Shop', href: '/shop' },
  {
    label: 'Kontakt',
    href: '/kontakt',
    children: [
      { label: 'Newsletter', href: '/kontakt/newsletter' },
      { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
    ],
  },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: 'box-shadow 0.35s ease, background-color 0.35s ease',
        backgroundColor: mobileOpen ? 'var(--color-brand-dark)' : (scrolled ? 'var(--color-cream)' : 'transparent'),
        boxShadow: scrolled && !mobileOpen ? '0 1px 8px rgba(0,0,0,0.10)' : 'none',
      }}
    >
      {/* TopBar collapses its own height to 0 — no clipping artifact */}
      <div
        style={{
          maxHeight: scrolled || mobileOpen ? 0 : '36px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <TopBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Eyrichshof — Landschloss der Inspiration"
              width={210}
              height={108}
              className={`h-[60px] w-auto object-contain transition-all duration-350${scrolled && !mobileOpen ? '' : ' brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-xs tracking-widest uppercase hover:text-accent transition-colors py-2 ${scrolled ? 'text-brand' : 'text-warm-100 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]'}`}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div
                    className="absolute top-full left-0 min-w-52 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    style={{ backgroundColor: 'var(--color-white)', borderTop: '2px solid var(--color-accent)' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-xs tracking-wide text-warm-700 hover:text-accent transition-colors border-b border-warm-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <span className={`block w-6 h-0.5 mb-1.5 transition-colors ${scrolled && !mobileOpen ? 'bg-brand' : 'bg-warm-200'}`} />
            <span className={`block w-6 h-0.5 mb-1.5 transition-colors ${scrolled && !mobileOpen ? 'bg-brand' : 'bg-warm-200'}`} />
            <span className={`block w-6 h-0.5 transition-colors ${scrolled && !mobileOpen ? 'bg-brand' : 'bg-warm-200'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — grid trick for smooth height animation */}
      <div
        className="lg:hidden"
        style={{
          display: 'grid',
          gridTemplateRows: mobileOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <nav className="border-t border-white/10 pb-4">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-xs uppercase tracking-widest text-warm-200 hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 pr-4 py-2 text-xs text-warm-400 hover:text-accent transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
