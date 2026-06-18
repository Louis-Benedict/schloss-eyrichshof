import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Impressum' }

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Angaben gemäß § 5 TMG, Abs. 1</p>
          <address className="not-italic text-warm-700 leading-relaxed">
            Hermann Freiherr von Rotenhan<br />
            Schlosshof 7<br />
            96106 Ebern
          </address>
          <div className="mt-4 space-y-1 text-warm-700 text-sm">
            <p>E-Mail: <a href="mailto:info@schlosseyrichshof.de" className="text-accent hover:text-accent-hover transition-colors">info@schlosseyrichshof.de</a></p>
            <p>Fax: (+49) 9531 / 5736</p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Umsatzsteuer-ID</p>
          <p className="text-warm-600 text-sm leading-relaxed mb-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p className="text-warm-700 font-medium">DE247495566</p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</p>
          <address className="not-italic text-warm-700 leading-relaxed">
            Hermann Freiherr von Rotenhan<br />
            Schlosshof 7<br />
            96106 Ebern
          </address>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">EU-Streitschlichtung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Verbraucherstreitbeilegung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Wir sind bemüht, eventuelle Meinungsverschiedenheiten aus unserem Vertrag mit dem Kunden
            einvernehmlich beizulegen. Darüber hinaus sind wir zu einer Teilnahme an einem
            Schlichtungsverfahren nicht verpflichtet und können unseren Kunden die Teilnahme an einem
            solchen Verfahren leider auch nicht anbieten.{' '}
            (<a
              href="https://www.verbraucher-schlichter.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              https://www.verbraucher-schlichter.de
            </a>)
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Haftung für Inhalte</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </section>

      </div>
    </>
  )
}
