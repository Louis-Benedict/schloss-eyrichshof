import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Veranstaltungen' }

const events = [
  {
    slug: 'gartenfest',
    title: 'Gartenfest',
    dates: '23.–25. Mai 2026',
    description: 'Ein Fest für den Garten und die ganze Familie — die 21. Auflage des beliebten Pfingstfestes.',
  },
  {
    slug: 'roesler-open-air',
    title: 'Rösler Open Air',
    dates: '6 Abende im Sommer 2026',
    description: 'Open-Air-Konzerte in einzigartiger Atmosphäre unter freiem Himmel.',
  },
  {
    slug: 'hochzeiten-feste',
    title: 'Hochzeiten & Feste',
    dates: 'Ganzjährig',
    description: 'Historische Säle voller Geschichte und Atmosphäre für Ihre Feier.',
  },
  {
    slug: 'winterszeit',
    title: 'Winterszeit',
    dates: '5.–8. November 2026',
    description: 'Premium-Aussteller, Kulinarik und winterliche Stimmung auf Schloss Eyrichshof.',
  },
  {
    slug: 'firmenevents',
    title: 'Firmenevents',
    dates: 'Ganzjährig',
    description: 'Workshops, Teamfeiern und Großveranstaltungen — flexibel und unvergesslich.',
  },
]

export default function VeranstaltungenPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-light mb-4">Veranstaltungen</h1>
      <p className="text-warm-600 text-lg mb-4">
        Von Pfingstfest bis Winterzeit — Schloss Eyrichshof bietet das ganze Jahr über
        einzigartige Veranstaltungen.
      </p>
      <Link
        href="/veranstaltungen/tickets"
        className="inline-block mb-12 px-6 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium uppercase tracking-wide transition-colors"
      >
        Tickets buchen
      </Link>

      <div className="space-y-6">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/veranstaltungen/${event.slug}`}
            className="block border border-warm-200 p-6 hover:border-accent hover:bg-accent/10 transition-colors group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {event.title}
              </h2>
              <span className="text-sm text-warm-500 shrink-0">{event.dates}</span>
            </div>
            <p className="text-warm-600 text-sm mt-2">{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
