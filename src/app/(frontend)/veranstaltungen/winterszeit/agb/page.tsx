import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'AGB Winterszeit' }

export default function AgbWinterszeitPage() {
  return (
    <>
      <PageHeader eyebrow="Winterszeit 2026" title="AGB Winterszeit" description="Allgemeine Geschäftsbedingungen Winterszeit (AGB WZ)" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Veranstalter</p>
          <p className="text-warm-700 leading-relaxed mb-4">Kontakt/Organisation: von Rotenhan&apos;sche Gutsverwaltung und Veranstaltungen</p>
          <address className="not-italic text-warm-700 leading-relaxed mb-4">
            Hermann Freiherr von Rotenhan<br />
            Schlosshof 7<br />
            96106 Ebern
          </address>
          <p className="text-warm-700 leading-relaxed mb-4">Aino Bender</p>
          <div className="space-y-1 text-warm-700 text-sm">
            <p>E-Mail: <a href="mailto:a.bender@schlosseyrichshof.de" className="text-accent hover:text-accent-hover transition-colors">a.bender@schlosseyrichshof.de</a></p>
            <p>Tel: 0172-841 6160</p>
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
            Donnerstag, 05.11.2026, 14.00 – 21.00 Uhr<br />
            Freitag, 06.11.2026, 14.00 – 21.00 Uhr<br />
            Samstag, 07.11.2026, 11.00 – 21.00 Uhr<br />
            Sonntag, 08.11.2026, 11.00 – 19.00 Uhr
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
              sind zzgl. gesetzlicher MwSt. Unteraussteller am Stand sind nur mit vorigem, schriftlichem
              Einverständnis des Veranstalters zugelassen.
            </p>
            <p>Konkurrenzausschluss wird nicht gewährt.</p>
            <p>
              Jeder Aussteller und Gastronom ist verpflichtet eigenen Müll und Verpackung selbst zu
              entsorgen. Die &bdquo;Winterszeit&rdquo;-Mülleimer und -Container stehen hierfür nicht zur Verfügung. Bei
              trotzdem hinterlassenem Müll müssen wir eine Entsorgungsgebühr von 80,00 € berechnen. Große
              Firmenplakate mit Firmennamen und Logo sind nicht gestattet.
            </p>
            <p>
              Das vorliegende Standbuchungsformular sowie die Teilnahmebedingungen werden als
              rechtsverbindlich anerkannt. Das vorliegende Dokument ist eine einseitige Buchungsanfrage
              durch einen Aussteller. Die Annahme der Buchungsanfrage erfolgt mit der Zusendung der
              Rechnung (gleichzeitig die Standbestätigung) durch die von Rotenhan&apos;sche Gutsverwaltung und
              Veranstaltung.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Anmeldeschluss</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Anmeldungen werden nur bis zum 01.09.2026 entgegengenommen.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Zahlungsbedingungen</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Die Standmiete wird entweder mit Anspruch auf Frühbucherrabatt oder in voller Höhe nach
              Rechnungsstellung ohne Abzug fällig.
            </p>
            <p>
              Aufbauen dürfen nur Aussteller, deren Standgebühr vor dem 20.10.2026 in voller Höhe auf dem
              Betriebskonto eingegangen ist.
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
            spätestens Donnerstag, 08.11.2026, 13.00 Uhr abgeschlossen sein.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Standgestaltung-Werbung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Firmenname und Sitz des Ausstellers dürfen durch eine &bdquo;dezente&rdquo; Standbeschriftung deutlich
            gemacht werden. Pro Stand ist ein Werbeschild/Roll-up in der Größe von max. 1 x 2 m erlaubt.
            Werbung ist nur innerhalb des vom Aussteller gemieteten Standes für die eigene Firma des
            Ausstellers und nur für selbst hergestellte oder vertriebene Erzeugnisse erlaubt, soweit
            angemeldet und zugelassen. Überdeutliche, grelle Aufschriften wie &bdquo;Messerabatt&rdquo;, &bdquo;Sonderverkauf&rdquo;
            etc. sowie große Firmenplakate, Banner u.ä. sind nicht gestattet.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Ausstellerausweise/Einlassbänder</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Für die Durchführungszeit der Veranstaltung erhalten die Aussteller an der Info pro Stand 2
            Einlassbänder. Alle weiteren Einlassbänder sind kostenpflichtig (Kosten 10 € / je Einlassband).
            Die Einlassbänder sind personengebunden, nicht übertragbar und stets zu tragen.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Gutscheine für Ehrenkarten</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Mit den Gutscheinen für Ehrenkarten kann jeder Aussteller eigene Kunden zur Winterszeit
            einladen. Gutscheine sind nur mit dem Firmenstempel der jeweiligen Aussteller gültig. Die
            eingelösten Gutscheine stellen wir nach der Veranstaltung zum vergünstigten Preis von 12,00 €
            inkl. MwSt. pro eingelöster Ehrenkarte dem Aussteller in Rechnung (anstelle von 15,00 € inkl.
            MwSt.).
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Lebensmittelsicherheit</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Jeder Aussteller muss selbst sicherstellen, dass sein Stand und seine Waren alle Vorschriften
            der Lebensmittelsicherheit, des Arbeitsschutzes und allen anderen relevanten Gesetzesvorgaben
            erfüllen. Jeder muss sich vor der Winterszeit Schloss Eyrichshof über die von ihm zu
            erfüllenden Rechtsvorschriften und Anforderungen kundig machen, ggfs. auch durch
            Kontaktaufnahme mit dem Gewerbeaufsichtsamt beim LRA Hassberge (Tel. 09521 – 270). Der
            Veranstalter ist nicht verantwortlich für Zustand und Beschaffenheit der Ausstellerstände.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Versicherung</p>
          <p className="text-warm-600 text-sm leading-relaxed">
            Der Aussteller muss seine Waren und Ausstellungsgegenstände gegen Diebstahl oder jegliche
            Beschädigung auf eigene Kosten versichern. Eine Haftung des Veranstalters für entwendete Waren
            und Ausstellungsgegenstände der Aussteller ist ausgeschlossen.
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
              im Falle des Komplettausfalls vollständig zurückerstattet. Ein Aufwendungsersatzanspruch
              oder ein Anspruch auf entgangenen Gewinn gegen den Veranstalter besteht in keinem Fall. Die
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
          <p className="text-warm-600 text-sm leading-relaxed">
            Die allgemeine Bewachung des Ausstellungsgeländes geschieht durch Beauftragten des
            Veranstalters in den Nächten von Donnerstag bis einschließlich Samstagnacht. Jedem Aussteller
            wird trotzdem nahegelegt, für die Beaufsichtigung seines Standes und seiner
            Ausstellungsgegenstände selbst zu sorgen und Schäden durch Versicherungsschutz und geeigneten
            Maßnahmen abzuwenden. Zur Nachtzeit müssen wertvolle, leicht zu entfernende Gegenstände unter
            Verschluss genommen werden. Der Veranstalter haftet nicht bei Diebstahl, Beschädigung oder
            Verlust des Ausstellungsgutes.
          </p>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Aufbau</p>
          <div className="text-warm-600 text-sm leading-relaxed space-y-3">
            <p>
              Frühestens möglich ab Dienstag, 03.11.2026, nach individueller Absprache mit der
              Organisationsleitung auch eventuell früher.<br />
              Spätestens: bis Donnerstag, 05.11.2026, 13.00 Uhr!<br />
              Fahrzeuge sind bis Donnerstag, 05.11.2026, 12.30 Uhr, vom Veranstaltungsgelände zu entfernen.
            </p>
            <p>
              Obige Teilnahmebedingungen werden anerkannt und sind Teil des Vertrages zwischen Veranstalter
              und Ausstellenden. Gleichzeitig erkläre/n ich/wir mich/uns mit der Unterschrift damit
              einverstanden, dass die von mir/uns mitgeteilten personen- und firmenbezogenen Daten sowie
              die während der Veranstaltung gemachten Fotos/Videos etc., gemäß DSGVO von Rotenhan&apos;sche
              Gutsverwaltung und Veranstaltungen sowohl für Print-Werbung als auch Online-Werbung (z.B.
              Social Media, Homepage, Ausstellerliste etc.) verarbeitet werden. Meine / unsere Rechte, die
              sich aus Artikel 15 bis 18 DSGVO ergeben, bleiben davon unberührt.
            </p>
          </div>
        </section>

        <div className="border-t border-warm-200" />

        <section>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Postanschrift</p>
          <address className="not-italic text-warm-700 leading-relaxed">
            von Rotenhan&apos;sche Gutsverwaltung und Veranstaltungen<br />
            c/o Aino Bender<br />
            Landwehrstr. 27<br />
            80336 München
          </address>
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
