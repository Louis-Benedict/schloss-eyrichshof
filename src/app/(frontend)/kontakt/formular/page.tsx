import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Kontaktformular' }

export default function FormularPage() {
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Kontaktformular" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="vorname">
                Vorname
              </label>
              <input
                id="vorname"
                type="text"
                className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="nachname">
                Nachname
              </label>
              <input
                id="nachname"
                type="text"
                className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="email">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="betreff">
              Betreff
            </label>
            <input
              id="betreff"
              type="text"
              className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="nachricht">
              Nachricht
            </label>
            <textarea
              id="nachricht"
              rows={6}
              className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-medium uppercase tracking-wide transition-colors"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </>
  )
}
