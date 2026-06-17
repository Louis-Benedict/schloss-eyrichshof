import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Shop' }

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schloss Eyrichshof"
        title="Shop"
        description="Tickets, Gutscheine und Produkte von Schloss Eyrichshof — direkt online bestellen."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Gartenfest Tickets', 'Rösler Open Air Tickets', 'Winterszeit Tickets', 'Ferienwohnung Gutschein', 'Eventgutschein'].map(
            (product) => (
              <div
                key={product}
                className="border border-warm-200 p-6 flex flex-col items-start"
              >
                <div className="w-full aspect-square bg-warm-100 mb-4 flex items-center justify-center text-warm-400 text-sm">
                  Produktbild
                </div>
                <h2 className="font-medium mb-2">{product}</h2>
                <p className="text-warm-500 text-sm mb-4 flex-1">
                  Hier wird die Produktbeschreibung angezeigt.
                </p>
                <button className="w-full py-2 bg-brand hover:bg-brand/80 text-white text-sm uppercase tracking-wide transition-colors">
                  In den Warenkorb
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}
