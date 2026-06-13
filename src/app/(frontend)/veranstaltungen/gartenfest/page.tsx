import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { IconArrowRight, IconDownload } from '@tabler/icons-react'

export const metadata: Metadata = { title: 'Gartenfest' }

const programm = [
  {
    category: 'Unterhaltung & Shows',
    items: [
      { title: 'Tägliche Livemusik', description: 'Stimmungsvolle Musik von lokalen und regionalen Künstlern — den ganzen Tag.', image: '/images/gartenfest/taegliche-livemusik.jpg' },
      { title: 'Pferde-Quadrille', description: 'Elegante Reitvorführungen im historischen Schlosshof.', image: '/images/gartenfest/pferde-quadrille.jpg' },
      { title: 'Modenschau Nina Halbig', description: 'Aktuelle Mode der Designerin Nina Halbig in atmosphärischer Kulisse.', image: '/images/gartenfest/modenschau-nina-halbig.jpg' },
      { title: 'Perujo — Jonglage & Stelzen', description: 'Comedyjonglage, Stelzenakrobatik und Walk-Acts durch das Gelände.', image: '/images/gartenfest/perujo-jonglage.jpg' },
      { title: 'Perujo — Riesenseifenblasen', description: 'Gigantische Seifenblasen begeistern Groß und Klein.', image: '/images/gartenfest/perujo-riesenseifenblasen.jpg' },
    ],
  },
  {
    category: 'Handwerk & Natur',
    items: [
      { title: 'Schmiedearbeiten', description: 'Fränkische Schmiede zeigen ihr Handwerk — live am offenen Feuer.', image: '/images/gartenfest/schmiedearbeiten.jpg' },
      { title: 'Schnitzen mit der Motorsäge', description: 'Aus dem Vollen: Holzschnitzer erschaffen in Minuten beeindruckende Skulpturen.', image: '/images/gartenfest/schnitzen-motorsaege.jpg' },
      { title: 'Bogenschießen', description: 'Traditionelles Bogenschießen für Anfänger und Geübte.', image: '/images/gartenfest/bogenschiessen.jpg' },
      { title: 'Greifvogelschutz Palmenhorst', description: 'Flugvorführungen mit Adlern, Falken und Eulen des Schutzvereins Palmenhorst e.V.', image: '/images/gartenfest/greifvogelschutz.jpg' },
    ],
  },
  {
    category: 'Vorträge',
    items: [
      { title: 'Vortrag: Rosen', description: 'Gärtnerei Reichert teilt Wissen rund um Pflege, Sorten und Standortfragen.', image: '/images/gartenfest/vortrag-rosen.jpg' },
      { title: 'Vortrag: Kräuter', description: 'Gärtnerei Pressel gibt Einblicke in Kräuteranbau, Ernte und Verwendung.', image: '/images/gartenfest/vortrag-kraeuter.jpg' },
      { title: 'Vortrag: Hauswurz & Sempervivum', description: 'Zum Garten Eden präsentiert die faszinierende Welt der Sukkulenten.', image: '/images/gartenfest/vortrag-hauswurz.jpg' },
    ],
  },
  {
    category: 'Geschichte & Kunst',
    items: [
      { title: 'Schlossführung: Geschichte hautnah', description: 'Tauchen Sie ein in 700 Jahre Schlossgeschichte mit kundigen Führern.', image: '/images/gartenfest/fuehrung-geschichte.jpg' },
      { title: 'Gespensterführung', description: 'Abendliche Gruselführung durch die dunklen Gänge und Säle des Schlosses.', image: '/images/gartenfest/gespenster-fuehrung.jpg' },
      { title: 'Historische Kostüme', description: 'Kostümierte Darsteller entführen ins Mittelalter und in die Barockzeit.', image: '/images/gartenfest/historische-kostueme.jpg' },
      { title: 'Kunst im Schloss', description: 'Zeitgenössische Kunst trifft historisches Gemäuer — Ausstellung in den Schlossräumen.', image: '/images/gartenfest/kunst-im-schloss.jpg' },
    ],
  },
  {
    category: 'Für Kinder',
    items: [
      { title: 'Basteln für Kinder', description: 'Kreativworkshops zum Mitmachen — für kleine Hände und große Ideen.', image: '/images/gartenfest/basteln-kinder.jpg' },
      { title: 'Kinderkarussell', description: 'Ein klassisches Karussell dreht seine Runden auf dem Festgelände.', image: '/images/gartenfest/kinderkarussel.jpg' },
      { title: 'Kinder-Mini-Express', description: 'Die kleine Bahn fährt Runde um Runde über das Schlossgelände.', image: '/images/gartenfest/kinder-mini-express.jpg' },
    ],
  },
]

const downloads = [
  {
    title: 'Ticketverkauf',
    label: 'Vorverkauf beendet',
    image: '/images/gartenfest/taegliche-livemusik.jpg',
    href: null,
    download: false,
  },
  {
    title: 'Ausstellerliste Gartenfest',
    label: 'PDF herunterladen',
    image: '/images/gartenfest/kunst-im-schloss.jpg',
    href: '/downloads/ausstellerliste-gartenfest-2026.pdf',
    download: true,
  },
  {
    title: 'Flyer Gartenfest',
    label: 'Momentan nicht verfügbar',
    image: '/images/gartenfest/modenschau-nina-halbig.jpg',
    href: null,
    download: false,
  },
  {
    title: 'Programm',
    label: 'PDF herunterladen',
    image: '/images/gartenfest/pferde-quadrille.jpg',
    href: '/downloads/programm-gartenfest-2026.pdf',
    download: true,
  },
  {
    title: 'Anfahrt & Parken',
    label: 'Information',
    image: '/images/gartenfest/bogenschiessen.jpg',
    href: '/kontakt',
    download: false,
  },
]

export default function GartenfestPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-gartenfest.jpg"
          alt="Gartenfest auf Schloss Eyrichshof"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            23.–25. Mai 2026 · Pfingstwochenende
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Gartenfest
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-warm-600 leading-relaxed text-base mb-5">
          Am Pfingstwochenende, vom 23.–25. Mai 2026 feierten wir im Schlossgarten bereits zum 21. Mal unser Gartenfest!
        </p>
        <p className="text-warm-600 leading-relaxed text-base mb-5">
          Ein Lifestyle-Fest für die ganze Familie: Mehr als 150 Aussteller präsentierten tolle Mode, ausgefallenen Schmuck und Accessoires, begeisternde Kunst, alles rund um Haus und Garten sowie erlesene Delikatessen und Kulinarik. Das vielfältige Warenangebot bot etwas für jeden Geschmack: hochwertige, edle Waren bis hin zu originellen und erschwinglichen Besonderheiten.
        </p>
        <p className="text-warm-600 leading-relaxed text-base mb-5">
          Auch für unsere kleinen Besucher war so Einiges im Programm — ob Gespensterjagd, gemeinsames Basteln, Suchspiel über&apos;s Gelände, Nostalgiekarussell und Kinder-Mini-Express und in diesem Jahr neu: Workshop mit Lehmfarben&nbsp;…
        </p>
        <p className="text-warm-600 leading-relaxed text-base">
          Ein tolles Rahmenprogramm und tägliche Livemusik rundeten diese Gartenveranstaltung ab.
        </p>
      </section>

      {/* Programm */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Gartenfest 2026</p>
          <h2 className="font-heading text-4xl font-normal text-brand">Programm</h2>
        </div>

        <div className="space-y-16">
          {programm.map((section) => (
            <div key={section.category}>
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-warm-500">
                  {section.category}
                </span>
                <div className="flex-1 h-px bg-warm-200" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {section.items.map((item) => (
                  <div key={item.title} className="group">
                    <div className="relative overflow-hidden mb-3" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                    <h3 className="font-heading text-base font-normal text-brand leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-warm-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads & Informationen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-warm-200">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Gartenfest 2026</p>
          <h2 className="font-heading text-4xl font-normal text-brand">Downloads & Informationen</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {downloads.map((item) => {
            const isDisabled = !item.href
            const inner = (
              <div
                className={`relative overflow-hidden${isDisabled ? ' grayscale' : ' group'}`}
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover${isDisabled ? '' : ' transition-transform duration-500 group-hover:scale-105'}`}
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className={`text-[9px] uppercase tracking-[0.14em] mb-0.5 ${isDisabled ? 'text-warm-500' : 'text-accent'}`}>
                    {item.label}
                  </p>
                  <h3 className={`font-heading text-sm font-normal leading-snug${isDisabled ? ' text-warm-400' : ' text-white mb-2'}`}>
                    {item.title}
                  </h3>
                  {!isDisabled && (
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
                      {item.download
                        ? <IconDownload size={11} stroke={2} className="text-white" />
                        : <IconArrowRight size={11} stroke={2} className="text-white" />
                      }
                    </div>
                  )}
                </div>
              </div>
            )

            if (isDisabled) {
              return <div key={item.title} className="opacity-50 cursor-not-allowed">{inner}</div>
            }
            if (item.download) {
              return (
                <a key={item.title} href={item.href!} target="_blank" rel="noopener" className="block">
                  {inner}
                </a>
              )
            }
            return <Link key={item.title} href={item.href!} className="block">{inner}</Link>
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-100 py-16 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Dabei sein</p>
        <h2 className="font-heading text-3xl font-normal text-brand mb-6">Tickets sichern</h2>
        <p className="text-warm-600 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Tagestickets und Wochenendpässe sind im Vorverkauf erhältlich. Kinder bis 12 Jahre
          haben freien Eintritt.
        </p>
        <Link
          href="/veranstaltungen/tickets"
          className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Tickets buchen
        </Link>
      </section>
    </>
  )
}
