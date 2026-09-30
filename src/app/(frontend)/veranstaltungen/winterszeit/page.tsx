import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { IconDownload } from '@tabler/icons-react'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import ImageGallery from '@/components/ImageGallery'
import ProgrammTabs from '@/components/WinterszeitProgramm'
import { ScheduleRow, type ScheduleEntry, type ScheduleDay } from '@/components/GartenfestSchedule'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, WINTERSZEIT_TICKET_URL } from '@/lib/site'
import { ORGANIZATION_PLACE, ORGANIZATION_REF } from '@/lib/organization'

export const metadata: Metadata = {
  title: 'Winterszeit',
  description:
    'Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre im historischen Ambiente des Schloss Eyrichshof.',
}

const winterszeitJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Winterszeit 2026',
  startDate: '2026-11-05',
  endDate: '2026-11-08',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: ORGANIZATION_PLACE,
  organizer: ORGANIZATION_REF,
  image: [`${SITE_URL}/images/hero-winterszeit.jpg`],
  description:
    'Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre im historischen Ambiente des Schloss Eyrichshof.',
  offers: {
    '@type': 'Offer',
    url: WINTERSZEIT_TICKET_URL,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
  },
}

// Descriptions reused from the Gartenfest programme; facts specific to the Gartenfest (prices, meeting points, durations) left out.
const beschreibung = {
  gespensterjagd:
    'Auf den Spuren der Schlossbewohner von einst: Eine humorvolle Führung für Kinder und Erwachsene auf dem Dachboden des Schlosses.',
  basteln:
    'Kreatives Gestalten für kleine Hände: Kinder basteln unter Anleitung jahreszeitliche Motive und Dekorationen zum Mitnehmen.',
  fuehrung:
    'Erfahren Sie die bewegte Geschichte von Schloss Eyrichshof: von der mittelalterlichen Gründung bis in die Gegenwart, eine Reise durch Jahrhunderte fränkischer Geschichte.',
  greifvogelschutz:
    'Uhus, Adler, Falken und mehr: Der Greifvogelschutz Palmenhorst e.V. präsentiert beeindruckende Greifvögel hautnah. Informieren Sie sich über Artenschutz, Haltung und die faszinierende Biologie dieser Tiere.',
  karussell:
    'Nostalgischer Fahrspaß für die Kleinsten: Das klassische Karussell dreht seine fröhlichen Runden und zaubert strahlende Kindergesichter.',
}

const ganztags: ScheduleEntry[] = [
  { title: 'Suchspiel für Kinder', location: 'Schlosshof' },
  { title: 'Greifvogelschutz Palmenhorst e.V.', location: 'Tennisplatz', image: '/images/gartenfest/greifvogelschutz.jpg', description: beschreibung.greifvogelschutz },
  { title: 'Karussell', location: 'Tennisplatz', image: '/images/gartenfest/kinderkarussel.jpg', description: beschreibung.karussell },
  {
    title: 'Kunstausstellung im Nordflügel',
    image: '/images/gartenfest/kunst-im-schloss.jpg',
    location: '„Masterpieces" – Portraits von Alice Kiehn | „Photos mit viel Phon" von Helmut Ölschlegel',
  },
]

const gespensterjagd = (time: string): ScheduleEntry => ({ time, title: 'Gespensterjagd', location: 'Dachboden', image: '/images/gartenfest/gespenster-fuehrung.jpg', description: beschreibung.gespensterjagd })
const lichterzug = (time: string): ScheduleEntry => ({ time, title: 'Lichterzug', location: 'Schlosshof' })
const feuershow = (time: string): ScheduleEntry => ({
  time,
  title: 'Feuershow „Schloss in Flammen"',
  location: 'Außengelände',
})
const basteln = (time: string): ScheduleEntry => ({
  time,
  title: 'Basteln für Kinder',
  location: '3. Stock',
  image: '/images/gartenfest/basteln-kinder.jpg',
  description: beschreibung.basteln,
})

const tage: ScheduleDay[] = [
  {
    wochentag: 'Donnerstag',
    datum: '5. November 2026',
    entries: [
      { time: '14:00 Uhr', title: 'Ladies Day: Die Winterszeit öffnet ihre Tore.' },
      { time: '13:30 Uhr', title: 'Sektempfang', location: 'Schlosshof' },
      {
        time: '14:00, 15:00 Uhr',
        title: 'Schottische Weisen – Dudelsack mit Detlef Purucker',
        location: 'Außengelände',
      },
      { time: '15:00 Uhr', title: 'Spasskoffer: Walking Act', location: 'Schlosshof' },
      { time: '15:00 Uhr', title: 'Führung Schlossensemble', location: 'Treffpunkt Kirche', image: '/images/gartenfest/fuehrung-geschichte.jpg', description: beschreibung.fuehrung },
      gespensterjagd('15:00, 17:00, 19:00 Uhr'),
      {
        time: '16:00 Uhr',
        title: 'Chor La Musica – Lieder zum Mitsingen',
        location: 'Außengelände, ca. 30 Min., bei gutem Wetter (Alternative: Kirche)',
      },
      basteln('16:00 Uhr'),
      { time: '16:30 Uhr', title: 'Spasskoffer: Comedy Jonglage', location: 'Schlosshof' },
      { time: '17:00 Uhr', title: 'Bruder-Duo – Klassik', location: 'Hausern' },
      lichterzug('17:00 Uhr'),
      { time: '18:00 Uhr', title: 'Spasskoffer: LED-Feuershow', location: 'Schlosshof' },
      { time: '19:00, 20:00, 21:00 Uhr', title: 'M & M – Best of Rock & Pop', location: 'Schlosshof' },
      feuershow('20:00 Uhr'),
      { time: '21:00 Uhr', title: 'Die Winterszeit schließt ihre Tore.' },
    ],
    ganztags,
    notes: ['Ladies Day: Ermäßigter Eintritt für alle Damen.'],
  },
  {
    wochentag: 'Freitag',
    datum: '6. November 2026',
    entries: [
      { time: '14:00 Uhr', title: 'Die Winterszeit öffnet ihre Tore.' },
      gespensterjagd('12:00, 15:00, 17:00, 19:00 Uhr'),
      {
        time: '14:00, 16:00 Uhr',
        title: 'Schottische Weisen – Dudelsack mit Detlef Purucker',
        location: 'Außengelände',
      },
      { time: '14:30 Uhr', title: 'Spasskoffer: Comedy Jonglage', location: 'Schlosshof' },
      { time: '15:00 Uhr', title: 'Führung Schlossensemble (außen)', location: 'Außengelände', image: '/images/gartenfest/fuehrung-geschichte.jpg', description: beschreibung.fuehrung },
      { time: '15:30 Uhr', title: 'Spasskoffer: Walking Act', location: 'Schlosshof' },
      basteln('16:00 Uhr'),
      { time: '16:00 Uhr', title: 'Bruder-Duo – Klassik', location: 'Hausern' },
      lichterzug('17:00 Uhr'),
      { time: '17:45 Uhr', title: 'Spasskoffer: LED-Feuershow', location: 'Schlosshof' },
      { time: '18:30 Uhr', title: 'Jagdhornbläser Ebern', location: 'Schlosshof' },
      {
        time: '19:00, 20:00 Uhr',
        title: 'Baker & Lüddicke – accoustic unlimitated',
        location: 'Schlosshof',
      },
      feuershow('20:00 Uhr'),
      { time: '21:00 Uhr', title: 'Die Winterszeit schließt ihre Tore.' },
    ],
    ganztags,
    notes: [],
  },
  {
    wochentag: 'Samstag',
    datum: '7. November 2026',
    entries: [
      { time: '11:00 Uhr', title: 'Die Winterszeit öffnet ihre Tore.' },
      gespensterjagd('12:00, 14:00, 16:00, 18:00 Uhr'),
      { time: '13:00, 15:00 Uhr', title: 'Führung Schlossensemble (außen)', location: 'Außengelände', image: '/images/gartenfest/fuehrung-geschichte.jpg', description: beschreibung.fuehrung },
      {
        time: '14:00 Uhr',
        title: 'Alphornbläser Hassberge: Polkas, Märsche und Modernes',
        location: 'Schlosshof',
      },
      basteln('15:00 Uhr'),
      {
        time: '16:00 Uhr',
        title: 'Bettina Meiners – Opernarien und klassische Lieder',
        location: 'Hausern',
      },
      lichterzug('17:00 Uhr'),
      { time: '17:45 Uhr', title: 'Fabian Rieger: Fire & Light Show', location: 'Schlosshof' },
      { time: '18:30, 20:00 Uhr', title: 'Droptune: Pop & Rock', location: 'Schlosshof' },
      feuershow('20:00 Uhr'),
      { time: '21:00 Uhr', title: 'Die Winterszeit schließt ihre Tore.' },
    ],
    ganztags,
    notes: [],
  },
  {
    wochentag: 'Sonntag',
    datum: '8. November 2026',
    entries: [
      { time: '11:00 Uhr', title: 'Die Winterszeit öffnet ihre Tore.' },
      gespensterjagd('11:00, 13:00, 15:00 Uhr'),
      { time: '13:00, 15:00 Uhr', title: 'Führung Schlossensemble (außen)', location: 'Außengelände', image: '/images/gartenfest/fuehrung-geschichte.jpg', description: beschreibung.fuehrung },
      {
        time: '13:00 Uhr',
        title: 'Alphornbläser Musikverein Stadtkapelle Baunach – „Winterklänge & Alphornzauber"',
        location: 'Schlosshof',
      },
      basteln('15:00 Uhr'),
      {
        time: '15:00 Uhr',
        title: 'Bettina Meiners – Opernarien und klassische Lieder',
        location: 'Hausern',
      },
      { time: '16:00, 18:30 Uhr', title: 'Pop und Rock mit Mac Daniel’s', location: 'Schlosshof' },
      lichterzug('16:45 Uhr'),
      { time: '17:30 Uhr', title: 'Fabian Rieger: Fire & Light Show', location: 'Schlosshof' },
      feuershow('18:30 Uhr'),
      { time: '19:00 Uhr', title: 'Die Winterszeit schließt ihre Tore.' },
    ],
    ganztags,
    notes: [],
  },
]

const eintrittspreise = [
  { label: 'Tageskarte', price: '15,00 €', primary: true },
  { label: 'Dauerkarte', price: '28,00 €' },
  { label: 'Ermäßigt (Schwerbehinderung)', price: '13,00 €' },
  { label: 'Ladies Day', price: '12,00 €', hint: 'Donnerstag, 5. November' },
]

const oeffnungszeiten = [
  { tag: 'Donnerstag', datum: '05.11.2026', zeit: '14:00 – 21:00 Uhr' },
  { tag: 'Freitag', datum: '06.11.2026', zeit: '14:00 – 21:00 Uhr' },
  { tag: 'Samstag', datum: '07.11.2026', zeit: '11:00 – 21:00 Uhr' },
  { tag: 'Sonntag', datum: '08.11.2026', zeit: '11:00 – 19:00 Uhr' },
]

const programmHintergruende = [
  { key: 'programm', label: 'Original: Hero-Bild', src: '/images/hero-winterszeit.jpg' },
  { key: 'programm-a', label: 'Bild A: YMP_9403', src: '/images/winterszeit/programm-hintergrund-9403.jpg' },
  { key: 'programm-b', label: 'Bild B: YMP_9555', src: '/images/winterszeit/programm-hintergrund-9555.jpg' },
  { key: 'programm-c', label: 'Bild C: YMP_9653', src: '/images/winterszeit/programm-hintergrund-9653.jpg' },
  { key: 'programm-d', label: 'Variante D: einfarbig, ohne Bild', src: null, light: false },
  {
    key: 'programm-e',
    label: 'Variante E: weiße Panels und Buttons (Bild A)',
    src: '/images/winterszeit/programm-hintergrund-9403.jpg',
    light: true,
  },
  {
    key: 'programm-g',
    label: 'Variante G: Tabelle (Bild A)',
    src: '/images/winterszeit/programm-hintergrund-9403.jpg',
    table: true,
  },
]

const quickLinks = [
  { label: 'Programm', href: '#programm' },
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
  { label: 'Hinweise für Reisegruppen', href: '#reisegruppen' },
]

const sidebarDownloads = [
  {
    label: 'Flyer Winterszeit',
    href: 'https://fa0fbbbc-fafb-462b-82ef-c729955a50b4.usrfiles.com/ugd/fa0fbb_b89bbba776d8484cb4b62b6b0375cec7.pdf',
    disabled: false,
  },
  { label: 'Programm Winterszeit', href: null, disabled: true },
  { label: 'Ausstellerliste Winterszeit', href: null, disabled: true },
  {
    label: 'Allgemeine Geschäftsbedingungen',
    href: '/veranstaltungen/winterszeit/agb',
    disabled: false,
  },
]

export default function WinterzeitPage() {
  return (
    <>
      <JsonLd data={winterszeitJsonLd} />
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-winterszeit.jpg"
          alt="Winterszeit auf Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            5.–8. November 2026
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Winterszeit
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            Den Winter mit allen Sinnen genießen
          </p>
          <a
            href={WINTERSZEIT_TICKET_URL}
            target="_blank"
            rel="noopener"
            className="lg:hidden mt-6 inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
          >
            Tickets kaufen
          </a>
        </div>
      </div>

      {/* Mobile quick-nav */}
      <nav className="lg:hidden sticky top-[80px] z-20 bg-white border-b border-warm-200 overflow-x-auto">
        <div className="flex gap-1 px-4 py-2 whitespace-nowrap">
          {quickLinks.map((link) => (
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

      {/* Intro + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:flex lg:gap-14">
          <div className="flex-1 min-w-0 space-y-5">
            <p className="text-warm-600 leading-relaxed text-base">
              Stimmungsvolles Ambiente, Genuss und Glücksmomente – das alles erwartete unsere Besucher
              auch zur diesjährigen Winterszeit vom 05. – 08. November 2026 auf Schloss Eyrichshof.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              In vorweihnachtlicher Atmosphäre kann man durch die historischen Hallen und das zauberhaft
              illuminierte Gelände des Schlosses flanieren und sich vom hochwertigen Angebot an Mode,
              Schmuck und Wohnaccessoires inspirieren lassen.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Unseren Besuchern wird ein erlesenes Sortiment rund um Lifestyle, Handwerk und Kulinarik
              geboten.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wie auch im letzten Jahr, starten wir die Winterszeit am Donnerstag, den 05. November mit
              einem „Ladies Day“. Auf alle Damen wartet ermäßigter Eintritt und viele Überraschungen
              (Männer sind natürlich ebenso herzlich Willkommen!).
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein Rahmenprogramm voller Kunst, Musik und Kultur rundet die Veranstaltung ab und auch auf
              unsere kleinen Besucher warten wieder Gespensterführungen auf dem Dachboden des Schlosses,
              Laternenbasteln und ein märchenhaftes Suchspiel auf dem Schlossgelände.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Wir freuen uns jetzt schon auf diese vorweihnachtliche Zeit – heuer nochmal ganz
              besonders – denn dies ist die <strong className="text-brand font-medium">10. Winterszeit!</strong>
            </p>

            <div className="pt-6">
              <h2 className="font-heading text-xl font-normal text-brand mb-4">Öffnungszeiten der Winterszeit</h2>
              <p className="text-warm-600 leading-relaxed text-base">
                {oeffnungszeiten.map((o) => (
                  <span key={o.tag} className="block">
                    {o.tag}, {o.datum}: <span className="text-brand font-medium">{o.zeit}</span>
                  </span>
                ))}
              </p>
            </div>
          </div>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto bg-warm-100 p-5">
              {/* Ticket box */}
              <p className="font-heading text-xl text-brand mb-4">5.–8. November 2026</p>

              <a
                href={WINTERSZEIT_TICKET_URL}
                target="_blank"
                rel="noopener"
                className="block w-full text-center py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors mb-4"
              >
                Tickets kaufen
              </a>

              {/* Eintrittspreise */}
              <ul className="mb-4">
                {eintrittspreise.map((e) => (
                  <li key={e.label} className="flex items-baseline justify-between gap-3 py-1.5">
                    <span className="text-xs text-warm-600 leading-snug">{e.label}</span>
                    <span className="shrink-0 font-heading text-base text-brand">{e.price}</span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between gap-3 py-1.5">
                  <span className="text-xs text-warm-600 leading-snug">Kinder bis 15 Jahre</span>
                  <span className="shrink-0 font-heading text-base text-brand">frei</span>
                </li>
              </ul>

              {/* Navigation */}
              <div className="border-t border-warm-200 pt-4 mb-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-3">Auf dieser Seite</p>
                <nav className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Downloads */}
              <div className="border-t border-warm-200 pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-warm-400 mb-3">Downloads</p>
                <div className="flex flex-col gap-2">
                  {sidebarDownloads.map((item) =>
                    item.disabled ? (
                      <span
                        key={item.label}
                        className="flex items-center gap-2 text-sm text-warm-300 cursor-not-allowed leading-snug"
                      >
                        <IconDownload size={13} className="shrink-0" />
                        {item.label}
                      </span>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href!}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-2 text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                      >
                        <IconDownload size={13} className="shrink-0" />
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Programm — one copy per background image (temporary, for comparison) */}
      {programmHintergruende.map((v, i) => (
        <section
          key={v.key}
          id={i === 0 ? 'programm' : undefined}
          className="relative overflow-hidden py-20 lg:py-24"
          style={v.src ? undefined : { backgroundColor: 'var(--color-brand)' }}
        >
          {v.src && (
            <Image
              src={v.src}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover brightness-60"
              sizes="100vw"
            />
          )}
          <span className="absolute top-3 left-3 z-10 bg-white text-brand text-xs px-2 py-1">{v.label}</span>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-12">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Winterszeit 2026</p>
              <h2 className="font-heading text-4xl font-normal text-warm-50">Programm</h2>
            </div>
            <ProgrammTabs days={tage} idPrefix={v.key} light={v.light} table={v.table} />
          </div>
        </section>
      ))}

      {/* Ganztags */}
      <section id="ganztags" className="bg-warm-100 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">An allen vier Tagen</p>
            <h2 className="font-heading text-4xl font-normal text-brand">Ganztags</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {ganztags.map((entry, i) => (
              <ScheduleRow key={i} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* Impressionen */}
      <section id="impressionen" className="border-t border-warm-200 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Winterszeit 2026</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-10">Impressionen</h2>
          <ImageGallery
            images={Array.from({ length: 15 }, (_, i) => ({
              src: `/images/winterszeit/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
              alt: `Winterszeit Impression ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-4 text-center" style={{ backgroundColor: 'var(--color-brand)' }}>
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Dabei sein</p>
        <h2 className="font-heading text-3xl font-normal text-warm-50 mb-6">Tickets sichern</h2>
        <p className="text-warm-100 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Tagestickets sind im Vorverkauf erhältlich. Kinder bis 15 Jahre haben gratis Eintritt.
        </p>
        <a
          href={WINTERSZEIT_TICKET_URL}
          target="_blank"
          rel="noopener"
          className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white text-sm uppercase tracking-widest transition-colors"
        >
          Tickets kaufen
        </a>
      </section>

      <AnfahrtBanner />

      {/* Reisegruppen */}
      <section id="reisegruppen" className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Winterszeit 2026</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-10">
            Hinweise für Reisegruppen &amp; Busunternehmen
          </h2>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14 text-warm-600 text-sm leading-relaxed">
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-400 mb-2">Anfahrt</p>
              <p className="mb-3">
                Busse können für den Ein- und Ausstieg der Gäste bis zum Eingang „Gutshof“ am Schloss
                vorfahren.
              </p>
              <p className="mb-3">
                Parken ist auf dem Parkplatz des Schlachthofes in Eyrichshof-Specke möglich.
              </p>
              <p>
                Aufgrund des sehr hohen Andrangs am Samstag können wir leider keine Parkmöglichkeiten
                an diesem Tag für Busse garantieren.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-warm-400 mb-2">Tickets</p>
              <p className="mb-3">
                Eine Anmeldung für Gruppen ist nicht erforderlich. Sie können Ihre Eintrittskarten
                ohne Anstehen bequem an den Kassen in bar oder mit EC-Karte kaufen.
              </p>
              <p className="mb-3">
                Selbstverständlich können Sie die Eintrittskarten auch online erwerben. Bei Bedarf
                erhalten Sie gegen Nachweis eine Quittung für die Online-Tickets an unseren Kassen.
              </p>
              <p>Gruppenermäßigungen werden nicht gewährt.</p>
            </div>
          </div>
        </div>
      </section>

      <VeranstaltungenNav currentHref="/veranstaltungen/winterszeit" />
    </>
  )
}
