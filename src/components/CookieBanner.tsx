'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10"
      style={{ backgroundColor: 'var(--color-brand)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-warm-300 text-xs leading-relaxed flex-1">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" className="text-warm-100 underline underline-offset-2 hover:text-accent transition-colors">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[11px] uppercase tracking-widest text-warm-400 hover:text-warm-200 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-accent hover:bg-accent-hover text-white text-[11px] uppercase tracking-widest font-medium transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
