import Image from 'next/image'
import type { Metadata } from 'next'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ConcertEventList from '@/components/ConcertEventList'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = { title: 'Rösler Open Air' }

const concertEvents = [
  {
    date: 'Do, 30. Juli 2026, 20:00 Uhr',
    title: 'NENA – LIVE',
    description:
      'Nach wie vor ist NENA eine der authentischsten Sängerinnen unserer Zeit und ein großes Stück Popkultur made in Germany. NENA muss man einfach live erlebt haben! Ihre energiegeladene Bühnenpräsenz ist ebenso unverwechselbar und mitreißend wie ihre Stimme. Das Publikum darf sich auf eine mehr als zweistündige Live-Show mit Hits und Perlen aus dem riesigen NENA-Repertoire freuen. Musik aus über vier Jahrzehnten, die sie mit ihrer 10-köpfigen Band auf die Bühne bringt. Jedes Live-Konzert: ein einzigartiges Rock\'n\'Roll-Erlebnis mit viel Gefühl und Herz.',
    image: '/images/roesler-open-air/artists/nena.jpg',
    ticketUrl:
      'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16639&site=kartenkiosk',
  },
  {
    date: 'Fr, 31. Juli 2026, 20:00 Uhr',
    title: 'IN EXTREMO – Carpe Noctem – Burgentour',
    description:
      'In Extremo zählen zu den großen Innovatoren der modernen Musikgeschichte: Als erste Band, die mittelalterliche Instrumente, archaische Kraft und wuchtige Rockenergie miteinander verschmolz, haben sie ein eigenes Genre erschaffen – kompromisslos, unverwechselbar und seit Jahrzehnten stilprägend. Und wer In Extremo live erlebt hat, weiß: Diese Band baut nicht einfach Bühnen, sie erschafft Welten. Mit ihrer legendären BURGENTOUR haben In Extremo schon früh ein Open-Air-Erlebnis definiert, das weit über ein Konzert hinausgeht: ein Spektakel aus Feuer, Geschichte und Klanggewalt.',
    image: '/images/roesler-open-air/artists/in-extremo.jpg',
    ticketUrl:
      'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16658&site=kartenkiosk',
  },
  {
    date: 'Sa, 01. August 2026, 20:00 Uhr',
    title: 'SCHMIDBAUER, KÄLBERER, RINGLSTETTER',
    description:
      '„DIE NEUE SUPERGROUP!" – so titelte die SZ im Sommer 2023 nach dem umjubelten und ausverkauften Konzert von Werner Schmidbauer, Martin Kälberer & Hannes Ringlstetter am Münchner Tollwood. Nachdem das sofort anberaumte Zusatzkonzert am Tollwood im Sommer 2024 ebenfalls nach kurzer Zeit ausverkauft war, nahmen\'s die drei Herren als Aufforderung, noch ein paar weitere Konzerte zu spielen… Überzeugen Sie sich von der urigen Heimeligkeit von Schmidbauer, Kälberer und Ringlstetter. Lassen Sie sich einhüllen von der bayerischen Leichtigkeit ihrer Stimmen.',
    image: '/images/roesler-open-air/artists/schmidbauer-kaelberer-ringlstetter.jpg',
    ticketUrl: 'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16641',
  },
  {
    date: 'So, 02. August 2026, 20:00 Uhr',
    title: 'NINO DE ANGELO',
    description:
      'Nino de Angelo kündigt für den Sommer 2026 eine ausgedehnte Open Air Tour auf den schönsten Freilichtbühnen Deutschlands an. Im Zentrum der Open Airs steht das Album „Un Momento Italiano" von 2004. Seine Fans dürfen sich auf neue Live-Interpretationen und den Klassiker „Tornerò" freuen. Natürlich wird Nino de Angelo auch seine legendären Songs performen – von „Jenseits bis Eden" bis zu aktuellen Stücken. Ein Set, das Vergangenheit und Gegenwart musikalisch verbindet.',
    image: '/images/roesler-open-air/artists/nino-de-angelo.jpg',
    ticketUrl: 'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16642',
  },
  {
    date: 'Mo, 03. August 2026, 20:00 Uhr',
    title: 'MARTIN FRANK – Grüße aus Allegro Süd',
    description:
      'Sie sehnen sich nach einem Kurzurlaub aus dem Wahnsinn der Welt? Dann kommen Sie für einen zweistündigen Comedyabend nach Allegro Süd. Der 33-jährige Comedian hat alles im Gepäck, was der Name „Allegro Süd" verspricht: authentische Gags, mitreißendes Tempo, genussvolle Musik und einen unvergleichlichen bayerischen Charme. In seinem fünften Soloprogramm redet sich Martin Frank in seiner unverwechselbaren Art alles von der Seele, was ihn gerade so bewegt.',
    image: '/images/roesler-open-air/artists/martin-frank.jpg',
    ticketUrl: 'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16644',
  },
  {
    date: 'Di, 04. August 2026, 20:00 Uhr',
    title: 'GERHARD POLT & DIE WELL-BRÜDER – Apropos / Noch EINMAL in Unterfranken',
    description:
      'Im Zusammenspiel von Gerhard Polt und den Wellbrüdern entsteht ein unterhaltsamer „Bairischer Abend" der besonderen Art, fernab von weiß-blauer Weißwurstidylle und Bierseligkeit. Der Menschenkenner Polt bespiegelt in seinem Panoptikum Bavaricum die Abgründe des „Bayern an sich". Die drei Brüder Stofferl, Michael und Karl Well besingen Bayern und den Rest der Welt – mit virtuos bespielten Instrumenten, bairischem Rap, herzergreifendem Jodler und satirisch-scharfen Texten im heimatlichen Dialekt.',
    image: '/images/roesler-open-air/artists/gerhard-polt.jpg',
    ticketUrl: 'https://www.kartenkiosk-bamberg.de/event_info.cfm?id=16645',
  },
]

const galleryImages = Array.from({ length: 37 }, (_, i) => ({
  src: `/images/roesler-open-air/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Rösler Open Air – Impression ${i + 1}`,
}))

const sidebarLinks = [
  { label: 'Programm', href: '#programm' },
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Tickets', href: 'https://www.kartenkiosk-bamberg.de' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
]

export default function RoeslerOpenAirPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-roesler-open-air.jpg"
          alt="Rösler Open Air auf Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            6 Abende im Sommer 2026
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Rösler Open Air
          </h1>
          <p className="mt-3 text-lg text-warm-200 font-light leading-snug">
            Live Musik in einzigartiger Kulisse — sechs Abende im Sommer 2026
          </p>
        </div>
      </div>

      {/* Mobile quick-nav */}
      <nav className="lg:hidden sticky top-[80px] z-20 bg-white border-b border-warm-200 overflow-x-auto">
        <div className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {sidebarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.14em] font-medium px-3 py-1.5 text-warm-600 hover:text-accent hover:bg-warm-100 rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Programm + sidebar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:gap-14">

          <main className="flex-1 min-w-0">
            <div id="programm">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Rösler Open Air</p>
              <h2 className="font-heading text-3xl font-normal text-brand mb-8">Programm</h2>
              <ConcertEventList events={concertEvents} />
            </div>
          </main>

          {/* Desktop sidebar — sticky stops when this flex container ends */}
          <aside className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-24 border-l-2 border-warm-200 pl-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-5">
                Auf dieser Seite
              </p>
              <nav className="flex flex-col gap-3">
                {sidebarLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

        </div>
      </div>

      {/* Impressionen — outside the flex container so the sidebar stops here */}
      <section id="impressionen" className="border-t border-warm-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Rösler Open Air</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      <AnfahrtBanner />
    </>
  )
}
