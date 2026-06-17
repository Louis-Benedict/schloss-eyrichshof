import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ApartmentGallery from '@/components/ApartmentGallery'

export const metadata: Metadata = { title: 'Ferienwohnungen' }

// ── Dekanshaus ────────────────────────────────────────────────────────────────
const DEKANSHAUS_MAIN =
  'https://static.wixstatic.com/media/690192_ac08757274874f70b7f1eba491a73deb~mv2.jpg'

const DEKANSHAUS_GALLERY = [
  'https://static.wixstatic.com/media/690192_09370981bebb499281eaaefeba8c2c00~mv2.jpg',
  'https://static.wixstatic.com/media/690192_9a9165e7e0dc41d5b830e6abf9bb4605~mv2.jpg',
  'https://static.wixstatic.com/media/690192_b6ce7cd2c45942229d01288a759d4b40~mv2.jpg',
  'https://static.wixstatic.com/media/690192_cecb564e2ade4f34abaefa4385ba4ba9~mv2.jpg',
  'https://static.wixstatic.com/media/690192_dcfdb675047043a8b04b78f6b2bd3fa9~mv2.jpg',
  'https://static.wixstatic.com/media/690192_15a396a12cb4417c86c60a37a69be41f~mv2.jpg',
]

// ── Zum Brunnen ───────────────────────────────────────────────────────────────
const ZUM_BRUNNEN_MAIN =
  'https://static.wixstatic.com/media/690192_8a3e69e3180141cda2d9448756042948~mv2.jpg'

const ZUM_BRUNNEN_GALLERY = [
  'https://static.wixstatic.com/media/690192_d767e0015e184229b8cabb952d062188~mv2.jpg',
  'https://static.wixstatic.com/media/fa0fbb_ff96eed91567451e84c3f5c6a05a48d7~mv2.jpg',
  'https://static.wixstatic.com/media/690192_17366d05b09540b08e4bf3ab28428429~mv2.jpg',
]

// ── Turm ──────────────────────────────────────────────────────────────────────
const TURM_MAIN =
  'https://static.wixstatic.com/media/690192_33c531f93e914ed0997f6a456c08cf48~mv2.jpg'

const TURM_GALLERY = [
  'https://static.wixstatic.com/media/690192_de316774ed4d4512be6d874561593c28~mv2.jpg',
  'https://static.wixstatic.com/media/690192_0547e0fb9820463a9781e60f5edf5001~mv2.jpg',
  'https://static.wixstatic.com/media/690192_7cdd458f62db460c939f657ecf4e2e1e~mv2.jpg',
]

// ── Brennmeister ──────────────────────────────────────────────────────────────
const BRENNMEISTER_MAIN =
  'https://static.wixstatic.com/media/690192_6db3f95368004003b5883485cd3cdf06~mv2.jpg'

const BRENNMEISTER_GALLERY = [
  'https://static.wixstatic.com/media/690192_877e07c54be8454cbc64e38326e15c6e~mv2.jpg',
  'https://static.wixstatic.com/media/690192_8be6c5ac173448cb82ec7436c62b4c7a~mv2.jpg',
  'https://static.wixstatic.com/media/690192_4d82e9b5cac8439687dc340abcfc91f1~mv2.jpg',
  'https://static.wixstatic.com/media/690192_ee2aa537d8e34911a6b2faed0fc07670~mv2.jpg',
  'https://static.wixstatic.com/media/690192_51b26e1c42524902a3386bbc551f1baa~mv2.jpg',
  'https://static.wixstatic.com/media/690192_905738f24780492bbaab07dcd357c76f~mv2.jpg',
]


export default function FerienwohnungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schloss Eyrichshof"
        title="Ferienwohnungen"
        description="Moderner Komfort trifft Jahrhunderte alte Geschichte — exklusive Apartments im historischen Ensemble."
      />

      {/* ── Dekanshaus ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

          {/* Info panel */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
              Ideal für Gruppen
            </span>
            <h2 className="font-heading text-4xl font-normal text-brand mb-8 leading-tight">
              Dekanshaus
            </h2>

            <dl className="divide-y divide-warm-200 mb-8 text-sm">
              <div className="flex gap-4 py-3">
                <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Größe</dt>
                <dd className="text-warm-700">ca. 80 m²</dd>
              </div>
              <div className="flex gap-4 py-3">
                <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Gäste</dt>
                <dd className="text-warm-700">
                  bis 4 Personen
                  <span className="block text-warm-500 text-xs mt-0.5 leading-snug">
                    bis 6 Personen mit Apartment <em>Turm</em>
                  </span>
                </dd>
              </div>
              <div className="flex gap-4 py-3">
                <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Zimmer</dt>
                <dd className="text-warm-700">2 Doppelzimmer, 2 Bäder/WC, Wohnküche</dd>
              </div>
            </dl>

            <p className="text-warm-600 leading-relaxed text-sm mb-10">
              Designer-Ferienwohnung, gestaltet von der serbischen Innenarchitektin Ozarija Markovic,
              im barocken Dekanshaus — mit wunderschöner offener Wohnküche und Esstisch für
              acht Personen.
            </p>

            <Link
              href="/kontakt/fewo-reservierung"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Jetzt buchen
            </Link>
          </div>

          <ApartmentGallery
            mainImage={DEKANSHAUS_MAIN}
            mainAlt="Dekanshaus — Schloss Eyrichshof"
            gallery={DEKANSHAUS_GALLERY}
            apartmentName="Dekanshaus"
          />
        </div>
      </section>

      {/* ── Zum Brunnen ─────────────────────────────────────────────────── */}
      <section className="border-t border-warm-200 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-start">

            {/* Gallery — left on desktop */}
            <ApartmentGallery
              mainImage={ZUM_BRUNNEN_MAIN}
              mainAlt="Zum Brunnen — Schloss Eyrichshof"
              gallery={ZUM_BRUNNEN_GALLERY}
              apartmentName="Zum Brunnen"
            />

            {/* Info panel — right on desktop */}
            <div className="lg:sticky lg:top-32 lg:order-last">
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
                Ideal für Familien mit Kindern
              </span>
              <h2 className="font-heading text-4xl font-normal text-brand mb-8 leading-tight">
                Zum Brunnen
              </h2>

              <dl className="divide-y divide-warm-200 mb-8 text-sm">
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Größe</dt>
                  <dd className="text-warm-700">ca. 65 m²</dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Gäste</dt>
                  <dd className="text-warm-700">
                    bis 4 Personen
                    <span className="block text-warm-500 text-xs mt-0.5 leading-snug">
                      Hunde herzlich willkommen
                    </span>
                  </dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Zimmer</dt>
                  <dd className="text-warm-700">1 Doppelzimmer, 1 Zimmer mit Stockbett, 1 Bad/WC, Wohnküche</dd>
                </div>
              </dl>

              <p className="text-warm-600 leading-relaxed text-sm mb-10">
                Gemütliche Ferienwohnung mit Wohnküche und Esstisch für vier Personen —
                ideal für Familien mit Kindern oder einen Kurzurlaub zu zweit mit Hund.
              </p>

              <Link
                href="/kontakt/fewo-reservierung"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Jetzt buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brennmeister ────────────────────────────────────────────────── */}
      <section className="border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

            {/* Info panel */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
                Ideal für Paare &amp; kleine Familien
              </span>
              <h2 className="font-heading text-4xl font-normal text-brand mb-8 leading-tight">
                Brennmeister
              </h2>

              <dl className="divide-y divide-warm-200 mb-8 text-sm">
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Größe</dt>
                  <dd className="text-warm-700">ca. 65 m²</dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Gäste</dt>
                  <dd className="text-warm-700">bis 4 Personen</dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Zimmer</dt>
                  <dd className="text-warm-700">1 Doppelzimmer, Wohnzimmer mit Ausziehsofa, 1 Bad/WC, Küche</dd>
                </div>
              </dl>

              <p className="text-warm-600 leading-relaxed text-sm mb-10">
                Stilvolle Wohnung im historischen Brennmeisterhaus mit modernisiertem Bad und
                einer hellen Küche — ideal für Paare oder kleine Familien, die Ruhe und
                Schlossatmosphäre suchen.
              </p>

              <Link
                href="/kontakt/fewo-reservierung"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Jetzt buchen
              </Link>
            </div>

            <ApartmentGallery
              mainImage={BRENNMEISTER_MAIN}
              mainAlt="Brennmeister — Schloss Eyrichshof"
              gallery={BRENNMEISTER_GALLERY}
              apartmentName="Brennmeister"
            />
          </div>
        </div>
      </section>

      {/* ── Turm ────────────────────────────────────────────────────────── */}
      <section className="border-t border-warm-200 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-start">

            {/* Gallery — left on desktop */}
            <ApartmentGallery
              mainImage={TURM_MAIN}
              mainAlt="Turm — Schloss Eyrichshof"
              gallery={TURM_GALLERY}
              apartmentName="Turm"
            />

            {/* Info panel — right on desktop */}
            <div className="lg:sticky lg:top-32 lg:order-last">
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-6">
                Ideal für Paare
              </span>
              <h2 className="font-heading text-4xl font-normal text-brand mb-8 leading-tight">
                Turm
              </h2>

              <dl className="divide-y divide-warm-200 mb-8 text-sm">
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Größe</dt>
                  <dd className="text-warm-700">ca. 26 m²</dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Gäste</dt>
                  <dd className="text-warm-700">
                    2 Personen
                    <span className="block text-warm-500 text-xs mt-0.5 leading-snug">
                      Kombinierbar mit Apartment <em>Dekanshaus</em> für bis zu 6 Personen
                    </span>
                  </dd>
                </div>
                <div className="flex gap-4 py-3">
                  <dt className="text-[10px] uppercase tracking-widest text-warm-400 w-24 shrink-0 pt-px">Zimmer</dt>
                  <dd className="text-warm-700">1 romantisches Doppelzimmer, 1 Bad/WC mit mittelalterlichem Mosaik</dd>
                </div>
              </dl>

              <p className="text-warm-600 leading-relaxed text-sm mb-10">
                Romantisches Turmzimmer für zwei — mit einem einzigartigen Bad aus mittelalterlichem
                Mosaik und dem Charme eines Schlossturms. Kombinierbar mit dem Dekanshaus für
                Gruppen bis 6 Personen.
              </p>

              <Link
                href="/kontakt/fewo-reservierung"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Jetzt buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking CTA ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-10 lg:p-14"
          style={{ backgroundColor: '#4C4440' }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-3">
              Jetzt reservieren
            </p>
            <h2 className="font-heading text-3xl font-normal text-white leading-snug">
              Buchen Sie Ihren Aufenthalt auf Schloss Eyrichshof
            </h2>
            <p className="text-warm-300 mt-3 text-sm max-w-md leading-relaxed">
              Direkt online oder über unser Kontaktformular — wir freuen uns auf Ihren Besuch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/kontakt/fewo-reservierung"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs uppercase tracking-widest font-medium transition-colors text-center"
            >
              Online buchen
            </Link>
            <Link
              href="/kontakt/formular"
              className="px-6 py-3 border border-white/30 hover:border-white text-white text-xs uppercase tracking-widest font-medium transition-colors text-center"
            >
              Anfrage stellen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
