import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Anspruch' }

export default function AnspruchPage() {
  return (
    <>
      <PageHeader eyebrow="Landschloss Eyrichshof" title="Anspruch" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
    </>
  )
}
