import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Impressionen' }

export default function ImpressionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Landschloss Eyrichshof"
        title="Impressionen"
        description="Bilder und Eindrücke vom Schloss, den Veranstaltungen und der Umgebung."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Gallery — images managed via PayloadCMS Media collection */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-warm-200 flex items-center justify-center text-warm-400 text-sm"
            >
              Bild {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
