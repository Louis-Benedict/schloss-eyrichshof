import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'AGB Hochzeiten & Feste' }

export default function AgbHochzeitenFestePage() {
  return (
    <>
      <PageHeader eyebrow="Schloss Eyrichshof" title="AGB Hochzeiten & Feste" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 1 Mietvertrag</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-4">
            <div>
              <p className="mb-2">Im vereinbarten Mietzins sind enthalten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Die Anmietung der gebuchten Räumlichkeiten und Grundstücke nebst Wiese Gutshof und WC&apos;s auf dem Gelände von Schloss Eyrichshof</li>
                <li>Die exklusive Nutzung der o.g. Räumlichkeiten zum Feiern einer Hochzeit oder eines Festes in der Mietzeit</li>
                <li>Die Zurverfügungstellung von max. 15 Tischen (Eiche, massiv) und 130 Bankettstühlen (Idealmaße für Hussen), runden Tischen oder Holzstühlen</li>
                <li>Die gereinigten Räume und WCs</li>
                <li>Sämtliche Nebenkosten wie Strom, Wasser, WC-Papier, Papierhandtücher etc.</li>
                <li>Fotos im Park / auf der Freitreppe / um das Schloss</li>
                <li>Nutzung der Parkplätze</li>
              </ul>
            </div>
            <div>
              <p className="mb-2">Im vereinbarten Mietzins sind nicht enthalten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Die Leihe von Tischdecken</li>
                <li>
                  Diverse Zusatzleistungen (siehe Hochzeits-Booklet) wie Nutzung weiterer Innenräume,
                  längere Nutzung der Räumlichkeiten in der Nacht, notwendige Extra-Reinigung, Nutzung
                  von Bierbänken, Sonnenschirmen, Tischen, Hussen, Feuerkörben und mobilem Öl-Gebläse u.a.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 2 Übergabe</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Der Kuhstall und die Toiletten werden dem vom Mieter benannten verantwortlichen
              Ansprechpartner vom Vermieter oder einem seiner Mitarbeiter vor der Veranstaltung
              übergeben. Der Zugang erfolgt über ein Schloss mittels eines Zugangscodes.
            </p>
            <p>
              Der Mieter ist verpflichtet, den Zugangscode vertraulich zu behandeln und nur an
              Personen weiterzugeben, die im Zusammenhang mit der angemieteten Veranstaltung zum
              Betreten der Räumlichkeiten berechtigt sind.
            </p>
            <p>
              Bei dem Übergabetermin erklärt der Mieter, welche Person dafür verantwortlich ist, dass
              die Mieträume während der ganzen Veranstaltung pfleglich behandelt werden und keinen
              Schaden nehmen.
            </p>
            <p>
              Diese Person übergibt die Räumlichkeiten inkl. Toiletten am Ende der Mietzeit (i. d. R.
              am Sonntag, 14 Uhr) wieder an den Vermieter oder einem seiner Mitarbeiter.
            </p>
            <p>
              Die Verantwortlichkeit dieser Person beinhaltet die Aufgabe, sicherzustellen, dass am
              Ende der Feier alle Elektrogeräte und die Beleuchtung abgeschaltet sind, keine
              Wasserleitungen geöffnet sind und dass keine Störungen und Schäden an den
              Räumlichkeiten, Tischen, Stühlen und Mobiliar entstehen.
            </p>
            <p>
              Für den Fall, dass Schäden entstehen, werden Fotos gemacht und der Mieter bzw. seine
              Haftpflichtversicherung erstattet dem Vermieter die Schäden.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 3 Benutzung der Mieträume</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Im Innenbereich des Kuhstalls darf nicht geraucht werden. Der Mieter oder der Caterer
              haben für ausreichend Aschenbecher im Außenbereich zu sorgen. Es dürfen kein Konfetti,
              Rosenblätter u.a. ausgeworfen und verwendet werden.
            </p>
            <p>
              Der Mieter haftet in vollem Umfang für alle Schäden an Inventar und Mobiliar, z.B. bei
              erheblicher Verschmutzung (z.B. Konfetti, Rosenblätter u.a.) oder sonstiger, nicht
              vertragsgemäßer Behandlung der Räume, die durch ihn selbst, seine Erfüllungsgehilfen,
              seine Gäste oder den beauftragten Catering Service verursacht werden.
            </p>
            <p>
              Die Überlassung des Mieters an Dritte bedarf der schriftlichen Zustimmung des
              Vermieters. Hat der Mieter den Gebrauch der Mietsache unberechtigt einem Dritten
              überlassen, so ist der Vermieter berechtigt, fristlos vom Vertrag zurückzutreten.
            </p>
            <p>Entschädigungsansprüche stehen dem Mieter in Fällen außerordentlicher Kündigung nicht zu.</p>
            <p>
              Der Mieter ist verpflichtet, sämtlichen eigenen Abfall und Müll mitzunehmen und auf
              eigene Kosten zu entsorgen. Getränkeausschank und Ausgabe von Speisen während der
              Veranstaltung werden nicht durch den Vermieter übernommen.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 4 Zahlung des Mietzinses</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>Die Miete ist in zwei Raten zu entrichten:</p>
            <p>
              a. 50 Prozent des vereinbarten Mietzinses sowie 800,00 € Kaution umgehend. Mit Eingang
              der ersten Rate wird die Buchung der Räumlichkeiten für Vermieter und Mieter verbindlich.
            </p>
            <p>b. 50 Prozent des vereinbarten Mietzinses 8 Wochen vor Mietbeginn</p>
            <address className="not-italic">
              Vermieter Konto-Nr. Sparkasse Ostunterfranken<br />
              IBAN: DE12 7935 0101 0009 0330 10<br />
              BIC: BYLADEM1KSW
            </address>
            <p>
              Die Kaution dient der Absicherung sämtlicher Ansprüche des Vermieters aus dem
              Mietverhältnis. Nach der Veranstaltung wird sie zurückgezahlt, sofern keine Schäden oder
              sonstigen Ansprüche des Vermieters bestehen.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 5 Rücktritt durch den Vermieter</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Gerät der Mieter mit einer fälligen Zahlung in Verzug, ist der Vermieter berechtigt, dem
              Mieter schriftlich eine angemessene Nachfrist zur vollständigen Zahlung zu setzen. Nach
              erfolglosem Ablauf dieser Nachfrist ist der Vermieter berechtigt, vom Mietvertrag
              zurückzutreten. In diesem Fall verbleibt die erste Rate des Mietzinses als Entschädigung
              für unterbliebene Weitervermietung beim Vermieter.
            </p>
            <div>
              <p className="mb-2">Überdies kann der Vermieter vom Vertrag zurücktreten bei:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Falschen Angaben bei Vertragsabschluss</li>
                <li>Erheblichen Vertragsverletzungen des Mieters</li>
                <li>Unzulässiger Nutzung der Location</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 6 Stornierung durch das Brautpaar</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Kündigt oder storniert der Mieter den Vertrag, ist dies dem Vermieter schriftlich
            mitzuteilen. Im Falle einer Stornierung verbleibt die erste Rate des Mietzinses als
            Entschädigung für unterbliebene Weitervermietung beim Vermieter.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 7 Servicepauschale für Catering</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Das Team Schloss Eyrichshof konnte sich langjährig und nachhaltig von der Qualität und
              Professionalität einiger Caterer in der Region überzeugen. Diese Caterer (siehe
              Auflistung im Hochzeitsangebot von Schloss Eyrichshof) kochen exklusiv bei Hochzeiten
              auf Schloss Eyrichshof.
            </p>
            <p>
              Zahlreiche Leistungen und Investitionen waren in der Vergangenheit nötig, um ein
              optimales Zusammenspiel zwischen den Caterern und der Location vor Ort hinsichtlich
              Infrastruktur, Abstimmung, Logistik, Organisation und Abläufe sicherzustellen, damit für
              jeden Mieter am Veranstaltungstag eine reibungslose Zusammenarbeit und ein optimales
              Ergebnis erreicht wird.
            </p>
            <p>
              Vor diesem Hintergrund fällt für jede auf dem Gelände bzw. in den Räumlichkeiten des
              Vermieters durchgeführte Hochzeit bzw. Fest eine pauschale Servicegebühr in Höhe von
              700,00 € plus Mehrwertsteuer an.
            </p>
            <p>
              Die Servicegebühr fällt unabhängig von der Höhe des vom Mieter beauftragten Caterings an
              und ist bei jeder Hochzeit / jedem Fest in voller Höhe zu entrichten.
            </p>
            <p>
              Die Servicegebühr ist zusätzlich zur vereinbarten Miete und zu sonstigen im Mietvertrag
              genannten Leistungen zu zahlen.
            </p>
            <p>
              Die Servicegebühr wird von dem beauftragten Caterer in seiner Kalkulation berücksichtigt
              und an die Mieter weitergegeben.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">§ 8 Sonstige Regelungen</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Der Vermieter hat dem Mieter deutlich gemacht, dass er auf das Ruhebedürfnis der
              langjährigen Mieter der Wohnungen im Schlosshof, Schloss und Orangerie Rücksicht nehmen
              muss. Vor diesem Hintergrund sind das Tor des Kuhstalls zum Gutshof ab 22 Uhr
              geschlossen zu halten. Ebenso sind die Fenster im Kuhstall zu schließen.
            </p>
            <p>
              Der Mieter gilt als Veranstalter und ist verpflichtet, die öffentlich-rechtlichen
              Sicherheitsvorschriften und Auflagen, insbesondere die örtlichen
              Brandschutzvorschriften, einzuhalten. Die Verkehrssicherungspflicht für das Mietobjekt
              wird für den Zeitraum der Mietdauer auf den Mieter übertragen.
            </p>
            <p>
              Für den Fall, dass die Hochzeit aufgrund höherer Gewalt oder Krankheit nicht
              durchgeführt wird, verbleibt die erste Rate des Mietzinses als Entschädigung für
              unterbliebene Weitervermietung beim Vermieter.
            </p>
            <p>
              Eine Haftung des Vermieters, insbesondere bei Versagen von Einrichtungen, bei
              Betriebsstörungen oder sonstigen die Veranstaltung beeinträchtigenden Ereignissen,
              besteht nur bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p>Gerichtsstand ist Bamberg. Sonstige Vereinbarungen zwischen Vermieter und Mieter bedürfen der Schriftform.</p>
          </div>
        </section>

      </div>
    </>
  )
}
