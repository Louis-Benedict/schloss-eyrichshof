import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Unser Team' }

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Unser Team"
        description="Die Menschen hinter Schloss Eyrichshof — mit Leidenschaft und Herzblut."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Team members managed via PayloadCMS TeamMembers collection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 rounded-full bg-warm-200 mx-auto mb-4 flex items-center justify-center text-warm-400 text-sm">
                Foto
              </div>
              <h3 className="font-semibold">Name des Teammitglieds</h3>
              <p className="text-warm-500 text-sm">Position</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
