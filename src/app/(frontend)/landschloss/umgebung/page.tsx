import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Umgebung' }

const destinations = [
  {
    name: 'Bamberg',
    description:
      'UNESCO-Weltkulturerbe mit mittelalterlichem Stadtbild, dem romanischen Dom und dem berühmten Alten Rathaus mitten im Fluss — eine der besterhaltenen Altstädte Deutschlands.',
    image: '/umgebung/bamberg.jpg',
    credit: 'BAMBERG Tourismus & Kongress Service, Sonja Krebs & Erich Weiss',
    distance: 'ca. 45 km',
  },
  {
    name: 'Würzburg',
    description:
      'Barocke Residenzstadt am Main mit der UNESCO-prämierten Fürstbischöflichen Residenz, der Alten Mainbrücke und dem Weinbau der Frankensüdseite.',
    image: '/umgebung/wuerzburg.jpg',
    credit: 'Congress-Tourismus-Würzburg, A. Bestle',
    distance: 'ca. 60 km',
  },
  {
    name: 'Bad Kissingen',
    description:
      'Eleganter Kurort mit dem historischen Arkadenbau und klassischen Parkanlagen — einst Lieblingsaufenthalt von Kaisern, Fürsten und dem europäischen Adel.',
    image: '/umgebung/bad-kissingen.jpg',
    credit: 'Bayer. Staatsbad Bad Kissingen GmbH, Dominik Marx',
    distance: 'ca. 25 km',
  },
  {
    name: 'Vierzehnheiligen',
    description:
      'Meisterhaftes Werk Balthasar Neumanns am Obermain: die barocke Wallfahrtsbasilika zieht Pilger und Architekturfreunde gleichermaßen an.',
    image: '/umgebung/vierzehnheiligen.jpg',
    credit: null,
    distance: 'ca. 30 km',
  },
  {
    name: 'Bayreuth',
    description:
      'Wagnerstadt mit dem Festspielhaus, der prachtvollen Eremitage mit Sonnentempel und Orangerie sowie dem Markgräflichen Opernhaus — UNESCO-Weltkulturerbe.',
    image: '/umgebung/bayreuth.jpg',
    credit: 'Bayreuth Marketing & Tourismus GmbH, Meike Kratzer',
    distance: 'ca. 75 km',
  },
  {
    name: 'Ebern',
    description:
      'Die mittelalterliche Kleinstadt mit ihrem gut erhaltenen Rathaus und den historischen Stadtmauern ist das lebendige Zentrum der unmittelbaren Umgebung.',
    image: '/umgebung/ebern.jpg',
    credit: null,
    distance: 'ca. 10 km',
  },
  {
    name: 'Coburg',
    description:
      'Die Veste Coburg, eine der mächtigsten Burganlagen Deutschlands, thront über der Residenzstadt. Martin Luther verbrachte hier ein Jahr seines Lebens.',
    image: '/umgebung/coburg.jpg',
    credit: 'Coburg Marketing',
    distance: 'ca. 55 km',
  },
  {
    name: 'Nürnberg',
    description:
      'Die fränkische Metropole mit Kaiserburg, verwinkelter Altstadt und dem Germanischen Nationalmuseum ist das kulturelle Herz der Region.',
    image: '/umgebung/nuernberg.jpg',
    credit: 'Uwe Niklas',
    distance: 'ca. 90 km',
  },
  {
    name: 'Schloss Weissenstein',
    description:
      'Das prächtige Barockschloss in Pommersfelden gilt als eine der schönsten Barockresidenz Frankens und beherbergt bedeutende Sammlungen und Kunstwerke.',
    image: '/umgebung/schloss-weissenstein.jpg',
    credit: 'Gemeinnützige Stiftung Schloss Weissenstein',
    distance: 'ca. 35 km',
  },
]

export default function UmgebungPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/umgebung/bamberg.jpg"
          alt="Bamberg — Blick auf das Alte Rathaus"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Landschloss Eyrichshof
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Umgebung
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-5 text-warm-600 leading-relaxed text-base max-w-2xl">
            <p>
              Schloss Eyrichshof liegt im Herzen Frankens — einer Region, die zu den kulturell
              reichsten Deutschlands zählt. Barocke Residenzstädte, romanische Dome, mittelalterliche
              Burgen und heilklimatische Kurorte liegen alle in bequemer Tagesausflugsentfernung.
            </p>
            <p>
              Gleich mehrere UNESCO-Welterbestätten befinden sich in der näheren Umgebung. Die
              Burgenstraße, die von Mannheim bis Prag führt, verläuft durch die Region und verbindet
              Coburg, Bamberg und Nürnberg auf einer historischen Route durch das deutsche Mittelalter.
            </p>
          </div>

          {/* Burgenstraße badge */}
          <div className="flex flex-col items-center gap-3 lg:sticky lg:top-32">
            <div className="relative w-36 h-24">
              <Image
                src="/umgebung/burgenstrasse-logo.jpg"
                alt="Burgenstraße"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-warm-500 text-center">
              Burgenstraße
            </p>
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-heading text-3xl font-normal text-warm-800 mb-10">Ausflugsziele</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.name} className="group flex flex-col bg-white border border-warm-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-heading text-xl font-normal text-warm-900">{dest.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-warm-400 whitespace-nowrap shrink-0">
                    {dest.distance}
                  </span>
                </div>
                <p className="text-warm-600 text-sm leading-relaxed flex-1">{dest.description}</p>
                {dest.credit && (
                  <p className="text-[10px] text-warm-400 leading-snug">© {dest.credit}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link
          href="/landschloss"
          className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          ← Zurück zum Landschloss
        </Link>
      </div>
    </>
  )
}
