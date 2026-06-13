import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Anspruch' }

export default function AnspruchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-accent text-sm uppercase tracking-widest mb-3">Landschloss Eyrichshof</p>
      <h1 className="text-4xl font-light mb-8">Anspruch</h1>
      <div className="prose prose-stone max-w-none">
        <p className="text-warm-600 leading-relaxed">
          Unser Anspruch ist es, inspirierende Momente zu schaffen — für Gäste, Partner und die
          Region. Wir verbinden historisches Erbe mit zeitgemäßem Denken und aufrichtigem
          Engagement.
        </p>
        <p className="text-warm-600 leading-relaxed mt-4">
          {/* Content will be managed via PayloadCMS */}
          Dieser Inhalt wird über das CMS verwaltet.
        </p>
      </div>
    </div>
  )
}
