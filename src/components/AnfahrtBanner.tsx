import Link from 'next/link'

export default function AnfahrtBanner() {
  return (
    <section className="border-t border-warm-200 bg-warm-50 py-12 px-4 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Schloss Eyrichshof · 96126 Eyrichshof</p>
      <h2 className="font-heading text-2xl font-normal text-brand mb-4">Anfahrt & Parken</h2>
      <p className="text-warm-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
        Parkplätze stehen auf dem Schlossgelände zur Verfügung. Alle Informationen zur Anreise
        finden Sie auf unserer Anfahrtsseite.
      </p>
      <Link
        href="/kontakt/anfahrt"
        className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
      >
        Zur Anfahrt
      </Link>
    </section>
  )
}
