import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Tickets buchen' }

export default function TicketsPage() {
  return (
    <>
      <PageHeader eyebrow="Veranstaltungen" title="Tickets buchen" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
    </>
  )
}
