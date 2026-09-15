import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'AGB Ferienwohnungen' }

export default function AgbFerienwohnungenPage() {
  return (
    <>
      <PageHeader eyebrow="Schloss Eyrichshof" title="AGB Ferienwohnungen" description="Allgemeine Geschäftsbedingungen für die Vermietung der Ferienwohnungen" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Mindestaufenthalt und Rabatt</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>Die Mindestaufenthaltsdauer beträgt zwei Nächte.</p>
            <p>Bei einem Aufenthalt ab 3 Nächten wird ein Rabatt von 20% auf den Gesamtbetrag gewährt.</p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Stornierung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Stornierungen bis 14 Tage vor Anreise sind kostenfrei, Stornierungen zwischen 14 – 7 Tagen
            vor der Anreise werden mit 50% der Gesamtkosten berechnet, Stornierungen in den 7 Tagen
            vor der Anreise werden mit 100% der Gesamtkosten berechnet.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Zahlung</p>
          <p className="text-warm-600 text-sm leading-relaxed mb-4">
            Acht Tage vor Anreise muss der entsprechende Mietbetrag auf folgendes Konto eingegangen sein:
          </p>
          <address className="not-italic text-warm-700 leading-relaxed">
            Freiherr Hermann von Rotenhan<br />
            IBAN: DE10 7935 0101 0009 0755 32<br />
            BIC: BYLADEM1KSW
          </address>
        </section>

      </div>
    </>
  )
}
