import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Newsletter' }

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Newsletter"
        description="Bleiben Sie über Veranstaltungen, Neuigkeiten und besondere Angebote auf Schloss Eyrichshof informiert."
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="email">
              E-Mail-Adresse
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-medium uppercase tracking-wide transition-colors"
          >
            Anmelden
          </button>
        </form>
      </div>
    </>
  )
}
