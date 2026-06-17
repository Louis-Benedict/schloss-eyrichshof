import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'FeWo-Reservierung' }

export default function FewoReservierungPage() {
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Ferienwohnung reservieren" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-warm-600 leading-relaxed mb-8">
          Buchen Sie Ihren Aufenthalt auf Schloss Eyrichshof bequem online. Wählen Sie Ihre
          Wunschunterkunft, das Datum und die Anzahl der Gäste.
        </p>
        {/* Booking widget / iframe to be integrated */}
        <div className="bg-warm-100 p-8 text-center text-warm-500 min-h-64 flex items-center justify-center">
          Buchungssystem wird hier integriert
        </div>
      </div>
    </>
  )
}
