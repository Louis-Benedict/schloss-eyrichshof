import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'AGB Gartenfest' }

export default function AgbGartenfestPage() {
  return (
    <>
      <PageHeader eyebrow="Gartenfest 2026" title="AGB Gartenfest" description="Allgemeine Geschäftsbedingungen Gartenfest (AGB GA)" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Veranstalter</p>
          <p className="text-warm-700 leading-relaxed mb-4">Kontakt/Organisation: von Rotenhan&apos;sche Gutsverwaltung und Veranstaltungen</p>
          <address className="not-italic text-warm-700 leading-relaxed mb-4">
            Hermann Freiherr von Rotenhan<br />
            Schlosshof 7<br />
            96106 Ebern
          </address>
          <address className="not-italic text-warm-700 leading-relaxed mb-4">
            von Rotenhan&apos;sche Gutsverwaltung und Veranstaltungen<br />
            C/O Angela von Willich<br />
            Habsburgerstraße 3<br />
            80801 München
          </address>
          <div className="space-y-1 text-warm-700 text-sm">
            <p>E-Mail: <a href="mailto:a.vonwillich@schlosseyrichshof.de" className="text-accent hover:text-accent-hover transition-colors">a.vonwillich@schlosseyrichshof.de</a></p>
            <p>Telefon: +49 173 3614868</p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Veranstaltungsort</p>
          <address className="not-italic text-warm-700 leading-relaxed">
            Schloss Eyrichshof<br />
            Schlosshof 7<br />
            96106 Ebern
          </address>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Öffnungstermine</p>
          <p className="text-warm-700 leading-relaxed">
            Samstag, 23. Mai 2026, 10.00 – 19.00 Uhr<br />
            Sonntag, 24. Mai 2026, 10.00 – 19.00 Uhr<br />
            Montag, 25. Mai 2026, 10.00 – 18.00 Uhr
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Allgemeine Hinweise</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Der Veranstalter behält sich die Entscheidung vor, ob, bzw. wo ein Aussteller einen Stand
              erhält. Ein wirksames Vertragsverhältnis zwischen Veranstalter und Aussteller kommt mit der
              Rechnung – gleichzeitig Standbestätigung - durch den Veranstalter zustande. Sämtliche Preise
              sind zzgl. gesetzlicher MwSt.
            </p>
            <p>
              Unteraussteller am Stand sind nur mit vorigem, schriftlichem Einverständnis des Veranstalters
              zugelassen.
            </p>
            <p>Konkurrenzausschluss wird nicht gewährt.</p>
            <p>
              Jeder Aussteller und Gastronom ist verpflichtet, eigenen Müll und Verpackung selbst zu
              entsorgen. Die &bdquo;Gartenfest&rdquo;-Mülleimer und -Container stehen hierfür nicht zur Verfügung. Bei
              trotzdem hinterlassenem Müll müssen wir eine Entsorgungsgebühr von 80,- € berechnen.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Zahlungsbedingungen</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Einen Frühbucherrabatt von 10% gewähren wir Ihnen bei Anmeldung bis zum 15.01.2026 und einem
              Zahlungseingang bis zum 15.03.2026.
            </p>
            <p>
              Andernfalls ist die Standmiete in voller Höhe ohne Abzug fällig. Aufbauen dürfen nur
              Aussteller, deren Standgebühr vor dem 24.04.2026 auf dem Betriebskonto eingegangen ist.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Rücktritt von der Anmeldung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Ein Rücktritt von der Anmeldung kann nur schriftlich erfolgen. Bei Rücktritt ist eine
            Bearbeitungsgebühr von 50% der Standmiete zu entrichten. Erfolgt ein Rücktritt später als 8
            Wochen vor Beginn der Ausstellung oder wird der Stand nicht bezogen, ist die Standmiete in
            voller Höhe zu entrichten. Bei Nichtzahlung wird das gerichtliche Mahnverfahren eingeleitet.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Stand</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Die Standfläche muss während der gesamten Dauer der Veranstaltung zu den Öffnungszeiten
            ordnungsgemäß ausgestattet und mit fachkundigem Personal besetzt sein. Der Aufbau muss bis
            spätestens Samstag, 23.05.2026, 09:00 Uhr abgeschlossen sein.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Standgestaltung-Werbung</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Firmenname und Sitz des Ausstellers dürfen durch eine &bdquo;dezente&rdquo; Standbeschriftung deutlich
              gemacht werden. Pro Stand ist ein Werbeschild/Roll-up in der Größe von max. 50 x 80 cm
              erlaubt.
            </p>
            <p>
              Werbung ist nur innerhalb des vom Aussteller gemieteten Standes für die eigene Firma des
              Ausstellers und nur für selbst hergestellte oder vertriebene Erzeugnisse erlaubt, soweit
              angemeldet und zugelassen. Überdeutliche, grelle Aufschriften wie &bdquo;Messerabatt&rdquo;,
              &bdquo;Sonderverkauf&rdquo; etc. sowie große Firmenplakate, Banner u.ä. sind nicht gestattet.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Ausstellerausweise/Einlassbänder</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Für die Durchführungszeit der Veranstaltung erhalten die Aussteller an der Info pro Stand 2
            Einlassbänder. Alle weiteren Einlassbänder sind kostenpflichtig (Kosten 9,00 €/ je
            Einlassband). Die Einlassbänder sind personengebunden, nicht übertragbar und stets zu tragen.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Gutscheine für Ehrenkarten</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Mit den Gutscheinen für Ehrenkarten kann jeder Aussteller seine besten Kunden zum Gartenfest
            einladen. Gutscheine sind nur mit dem Firmenstempel der jeweiligen Aussteller gültig. Die
            eingelösten Gutscheine stellen wir nach der Veranstaltung zum vergünstigten Preis von 9,00€
            zzgl. MwSt. pro eingelösten Gutschein/Ehrenkarte dem Aussteller in Rechnung.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Lebensmittelsicherheit</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Jeder Aussteller muss selbst sicherstellen, dass sein Stand und seine Waren alle Vorschriften
            der Lebensmittelsicherheit, des Arbeitsschutzes und andere erfüllt. Jeder muss sich vor dem
            Gartenfest Schloss Eyrichshof über die von ihm zu erfüllenden Rechtsvorschriften und
            Anforderungen kundig machen, auch durch Kontaktaufnahme mit dem Gewerbeaufsichtsamt beim LRA
            Hassberge (Tel. 09521 – 270). Der Veranstalter ist nicht verantwortlich für Zustand und
            Beschaffenheit der Ausstellerstände.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Versicherung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Der Aussteller muss seine Waren und Ausstellungsgegenstände gegen Diebstahl oder jegliche
            Beschädigung auf eigene Kosten versichern. Eine Haftung und/oder der Versicherungsschutz durch
            den Veranstalter ist ausgeschlossen.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Höhere Gewalt</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Fällt die Veranstaltung aufgrund Höherer Gewalt (insbesondere Pandemie) komplett aus, werden
              die Parteien von ihren gegenseitigen vertraglichen Verpflichtungen entbunden. Jede Partei
              trägt Ihre Aufwendungen bis zum Ausfall und danach selbst. Bereits gezahlte Standmiete wird
              im Falle des Komplettausfalls zurückerstattet. Ein Aufwendungsersatzanspruch oder ein
              Anspruch auf entgangenen Gewinn gegen den Veranstalter besteht in keinem Fall. Die
              Geltendmachung von Schadensersatz ist in diesem Fall ausgeschlossen.
            </p>
            <p>
              Muss der Veranstalter aufgrund Höherer Gewalt (insbesondere Pandemie) eine bereits begonnene
              Veranstaltung verkürzen oder abbrechen, so haben die Aussteller keinen Anspruch auf
              Rückzahlung oder Erlass der Standmiete. Ein Aufwendungsersatzanspruch oder ein Anspruch auf
              entgangenen Gewinn gegen den Veranstalter besteht dann nicht. Die Geltendmachung von
              Schadensersatz ist in diesem Fall ausgeschlossen.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Bewachung</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Die allgemeine Bewachung des Ausstellungsgeländes geschieht durch Beauftragte des
              Veranstalters in den Nächten vom Freitag auf Samstag, Samstag auf Sonntag und Sonntag auf
              Montag. Jedem Aussteller wird trotzdem nahegelegt, für die Beaufsichtigung seines Standes und
              seiner Ausstellungsgegenstände selbst zu sorgen und Schäden durch geeigneten
              Versicherungsschutz abzuwenden. Zur Nachtzeit müssen wertvolle, leicht zu entfernende
              Gegenstände unter Verschluss genommen werden.
            </p>
            <p>Der Veranstalter haftet nicht bei Diebstahl, Beschädigung oder Verlust des Ausstellungsgutes.</p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Aufbau</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              ab Mittwoch, 20. Mai 2026 (nach Absprache eventuell früher möglich)<br />
              bis Samstag, 23. Mai 2026, 9.00 Uhr!<br />
              Fahrzeuge sind bis dann vom Gelände zu entfernen.
            </p>
            <p>
              Die obigen Teilnahmebedingungen werden anerkannt und sind Teil des Vertrages zwischen
              Veranstalter und Ausstellenden. Gleichzeitig erkläre/n ich/wir mich/uns mit der Unterschrift
              damit einverstanden, dass die von mir/uns mitgeteilten personen- und firmenbezogenen Daten
              sowie die während der Veranstaltung gemachten Fotos/Videos etc., gemäß DSGVO von Rotenhan&apos;sche
              Gutsverwaltung und Veranstaltungen sowohl für Print-Werbung als auch Online-Werbung (z.B.
              Social Media, Homepage, Ausstellerliste etc.) verarbeitet werden. Meine / unsere Rechte, die
              sich aus Artikel 15 bis 18 DSGVO ergeben, bleiben davon unberührt.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Gerichtsstand</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Für beide Teile gilt der Gerichtsstand Amtsgericht Haßfurt.
          </p>
        </section>

      </div>
    </>
  )
}
