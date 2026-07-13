import Link from 'next/link'
import SchlossMapWrapper from '@/components/SchlossMapWrapper'

export default function AnfahrtBanner() {
  return (
    <section className="bg-warm-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="lg:w-1/2 lg:pr-16 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
            Schloss Eyrichshof · 96106 Eyrichshof
          </p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-6">Anfahrt & Parken</h2>
          <div className="space-y-4 text-warm-600 text-sm leading-relaxed mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-400 mb-1">Adresse</p>
              <p>Schloss Eyrichshof<br />96106 Eyrichshof<br />Unterfranken, Bayern</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-400 mb-1">Parken</p>
              <p>Parkplätze stehen auf dem Schlossgelände kostenlos zur Verfügung.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontakt/anfahrt"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
            >
              Zur Anfahrt
            </Link>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=50.1083766,10.7830404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-brand text-brand hover:bg-brand hover:text-white text-sm uppercase tracking-widest transition-colors"
            >
              Route anzeigen
            </a>
          </div>
        </div>

        {/* Mobile map — in flow */}
        <div className="h-[320px] mt-12 lg:hidden overflow-hidden">
          <SchlossMapWrapper />
        </div>
      </div>

      {/* Desktop map — bleeds to right viewport edge, fills section height */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <SchlossMapWrapper />
      </div>
    </section>
  )
}
