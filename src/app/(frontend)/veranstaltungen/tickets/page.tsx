import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Tickets buchen' }

export default function TicketsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-accent text-sm uppercase tracking-widest mb-3">Veranstaltungen</p>
      <h1 className="text-4xl font-light mb-8">Tickets buchen</h1>
      <p className="text-warm-600 leading-relaxed mb-8">
        Tickets für alle Veranstaltungen auf Schloss Eyrichshof können Sie direkt über unseren
        Online-Shop buchen.
      </p>
      <a
        href="/shop"
        className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium uppercase tracking-wide transition-colors"
      >
        Zum Shop
      </a>
    </div>
  )
}
