import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Anfahrt & Parken' }

export default function AnfahrtPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-accent text-sm uppercase tracking-widest mb-3">Kontakt</p>
      <h1 className="text-4xl font-light mb-8">Anfahrt & Parken</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="font-semibold mb-3">Adresse</h2>
          <address className="not-italic text-warm-600">
            Schloss Eyrichshof
            <br />
            96126 Eyrichshof
            <br />
            Unterfranken, Bayern
          </address>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Mit dem Auto</h2>
          <p className="text-warm-600 text-sm leading-relaxed">
            Von der A70 Ausfahrt Ebern / Maroldsweisach folgen Sie den Hinweisschildern
            nach Eyrichshof. Parkplätze stehen auf dem Schlossgelände zur Verfügung.
          </p>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-warm-200 h-64 flex items-center justify-center text-warm-500">
        Kartenansicht (Google Maps Integration)
      </div>
    </div>
  )
}
