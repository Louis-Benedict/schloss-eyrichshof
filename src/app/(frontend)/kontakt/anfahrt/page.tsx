import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import SchlossMapWrapper from '@/components/SchlossMapWrapper'

export const metadata: Metadata = { title: 'Anfahrt & Parken' }

export default function AnfahrtPage() {
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Anfahrt & Parken" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Adresse */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Adresse</p>
          <address className="not-italic font-heading text-2xl font-normal text-brand leading-snug mb-4">
            Schloss Eyrichshof
          </address>
          <p className="text-warm-600 text-base leading-relaxed">
            Schlosshof 7<br />
            96106 Ebern
          </p>
        </div>

        <div className="border border-warm-200 overflow-hidden">
          <SchlossMapWrapper />
        </div>

        <div className="border-t border-warm-200" />

        {/* Mit dem Auto */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Anreise</p>
          <h2 className="font-heading text-2xl font-normal text-brand mb-6">Mit dem Auto</h2>
          <div className="space-y-4 text-warm-600 text-base leading-relaxed">
            <p>
              Schloss Eyrichshof liegt verkehrsgünstig an der Landstraße B 279 zwischen Bamberg
              und Bad Königshofen im Grabfeld (ca. 30 km von Bamberg und Coburg).
            </p>
            <p>
              Von der Autobahn A 73 kommend, verlassen Sie die Autobahn bei der Abfahrt
              Breitengüßbach in Richtung Ebern auf die B 279.
            </p>
            <p>
              Nach ca. 15 Minuten erreichen Sie Ebern. Verlassen Sie die B 279 bei der Abfahrt
              Ebern/Eyrichshof. Nach ca. 500 Metern erreichen Sie das Schloss.
            </p>
            <p>
              Außerhalb von Veranstaltungen finden Sie auf dem Schlossgelände ausreichend viele
              Parkplätze. Während den Veranstaltungen folgen Sie bitte den ausgeschilderten
              Parkhinweisen.
            </p>
          </div>
        </div>

        <div className="border-t border-warm-200" />

        {/* Bahn, Flugzeug, Bus */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Anreise</p>
          <h2 className="font-heading text-2xl font-normal text-brand mb-6">Per Bahn, Flugzeug oder Bus</h2>
          <div className="space-y-4 text-warm-600 text-base leading-relaxed">
            <p>
              Sie erreichen Schloss Eyrichshof am einfachsten über den ICE-Bahnhof Bamberg,
              Umsteigemöglichkeit zum Bahnhof Ebern.
            </p>
            <p>
              Bamberg ist direkt an die ICE-Hauptlinien nach München, Berlin, Hamburg und
              Frankfurt angebunden.
            </p>
            <p>
              Am Bahnhof Ebern angekommen sind es ca. 10 Gehminuten bis zum Schloss.
            </p>
            <p>
              Die nächsten Flughäfen sind Nürnberg (ca. 85 km), München (ca. 250 km) oder
              Frankfurt (ca. 215 km).
            </p>
            <p>
              Die nächstgelegene Bushaltestelle ist der Busbahnhof Ebern.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
