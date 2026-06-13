import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Ferienwohnungen' }

const apartments = [
  {
    name: 'Dekanshaus',
    size: '~80 m²',
    guests: 'bis 6 Personen',
    description: 'Barockes Dekanshaus mit 2 Doppelzimmern, 2 Bädern und wunderschöner Wohnküche. Gestaltet von der serbischen Innenarchitektin Ozarija Markovic.',
  },
  {
    name: 'Zum Brunnen',
    size: '~65 m²',
    guests: 'bis 4 Personen',
    description: 'Gemütliche Wohnung mit 1 Doppelzimmer, 1 Zimmer mit Stockbett und 1 Bad/WC. Haustiere willkommen.',
    petFriendly: true,
  },
  {
    name: 'Brennmeister',
    size: '~65 m²',
    guests: '2–4 Personen',
    description: 'Stilvolle Wohnung mit Schlafzimmer, Wohnzimmer mit Ausziehsofa und modernem Bad.',
  },
  {
    name: 'Turm',
    size: '~26 m²',
    guests: '2 Personen',
    description: 'Romantisches Turmzimmer für Paare mit Doppelschlafzimmer und mittelalterlichem Mosaikbad.',
  },
]

export default function FerienwohnungenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-light mb-4">Ferienwohnungen</h1>
      <p className="text-warm-600 text-lg mb-12 max-w-2xl">
        Moderne Tradition mitten in der Natur: Vier exklusive Ferienwohnungen im historischen
        Ensemble von Schloss Eyrichshof.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {apartments.map((apt) => (
          <div key={apt.name} className="border border-warm-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold">{apt.name}</h2>
              {apt.petFriendly && (
                <span className="text-xs bg-warm-100 text-warm-600 px-2 py-1 rounded">
                  Haustiere ✓
                </span>
              )}
            </div>
            <div className="flex gap-4 text-sm text-warm-500 mb-3">
              <span>{apt.size}</span>
              <span>·</span>
              <span>{apt.guests}</span>
            </div>
            <p className="text-warm-600 text-sm leading-relaxed">{apt.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-warm-100 p-8 text-center">
        <h2 className="text-2xl font-light mb-4">Jetzt reservieren</h2>
        <p className="text-warm-600 mb-6">
          Buchen Sie Ihren Aufenthalt direkt online oder kontaktieren Sie uns für eine
          individuelle Anfrage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt/fewo-reservierung"
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium uppercase tracking-wide transition-colors"
          >
            Online buchen
          </Link>
          <Link
            href="/kontakt/formular"
            className="px-6 py-3 border border-brand hover:bg-brand hover:text-white text-brand uppercase tracking-wide transition-colors"
          >
            Anfrage stellen
          </Link>
        </div>
      </div>
    </div>
  )
}
