import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Landschloss Eyrichshof' }

const subpages = [
  { label: 'Geschichte', href: '/landschloss/geschichte', description: '700 Jahre fränkische Adelsgeschichte' },
  { label: 'Anspruch', href: '/landschloss/anspruch', description: 'Unsere Werte und unser Verständnis von Gastfreundschaft' },
  { label: 'Umgebung', href: '/landschloss/umgebung', description: 'Natur, Ausflugsziele und die Region' },
  { label: 'Impressionen', href: '/landschloss/impressionen', description: 'Bilder und Eindrücke' },
]

export default function LandschlossPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-light mb-4">Landschloss Eyrichshof</h1>
      <p className="text-warm-600 text-lg mb-12 max-w-2xl">
        Entdecken Sie die Geschichte, die Werte und die einzigartige Atmosphäre des Landschloss Eyrichshof in Unterfranken.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subpages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="block p-6 border border-warm-200 hover:border-accent hover:bg-accent/10 transition-colors group"
          >
            <h2 className="font-semibold text-lg group-hover:text-accent mb-2">{page.label}</h2>
            <p className="text-warm-500 text-sm">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
