import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { IconDownload } from '@tabler/icons-react'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import AnfahrtBanner from '@/components/AnfahrtBanner'
import ImageGallery from '@/components/ImageGallery'
import VeranstaltungenNav from '@/components/VeranstaltungenNav'
import GartenfestSchedule, { ScheduleRow, type ScheduleEntry, type ScheduleDay } from '@/components/GartenfestSchedule'

export const metadata: Metadata = { title: 'Gartenfest' }

const ganztags: ScheduleEntry[] = [
  {
    title: 'Schmied Jörg Nuffer',
    location: 'Schmiede des Schlosses',
    image: '/images/gartenfest/schmiedearbeiten.jpg',
    description: 'Feuerfunken und Hammerschläge: Schmied Jörg Nuffer demonstriert in der historischen Schmiede des Schlosses die alte Kunst der Metallverarbeitung. Beobachten Sie live, wie aus glühendem Eisen kunstvolle Objekte entstehen.',
  },
  {
    title: 'Greifvogelschutz Palmenhorst e.V.',
    location: 'Falknerei mit Uhus, Adlern, etc. | Westhof',
    image: '/images/gartenfest/greifvogelschutz.jpg',
    description: 'Uhus, Adler, Falken und mehr: Der Greifvogelschutz Palmenhorst e.V. präsentiert beeindruckende Greifvögel hautnah. Informieren Sie sich über Artenschutz, Haltung und die faszinierende Biologie dieser Tiere.',
  },
  {
    title: 'Schnitzen mit der Motorsäge',
    location: 'Bernd Schmidt & Team, Schlosspark',
    image: '/images/gartenfest/schnitzen-motorsaege.jpg',
    description: 'Aus dem Holzstamm entsteht Kunst: Bernd Schmidt und sein Team verwandeln mit der Motorsäge rohe Blöcke in beeindruckende Skulpturen. Ein kraftvolles Spektakel, das Handwerk und Kreativität verbindet.',
  },
  {
    title: 'Bogenschiessen',
    location: 'Rosengarten, kostenpflichtig',
    image: '/images/gartenfest/bogenschiessen.jpg',
    description: 'Präzision und Konzentration: Versuchen Sie sich am Bogenschiessen im Rosengarten. Für Anfänger und Geübte gleichermaßen geeignet — ein ruhiger Gegenpol zum bunten Treiben des Festes.',
  },
  {
    title: 'Historische Kostüme',
    location: 'auf dem Schlossgelände',
    image: '/images/gartenfest/historische-kostueme.jpg',
    description: 'Zeitreise durch die Jahrhunderte: Darsteller in prachtvollen historischen Gewändern bevölkern das Schlossgelände und entführen Besucher in vergangene Epochen der Schlossgeschichte.',
  },
  {
    title: 'ErdBunt – Mitmachworkshop',
    location: 'Lehmfarben mit Anna Horn & Harald Schneider, Westhof',
    description: 'Natürliche Farben, lebendige Kreativität: Anna Horn und Harald Schneider laden zum Mitmachen ein. Mit Lehmfarben entstehen individuelle Kunstwerke — ein sinnliches Erlebnis für alle, die gerne selbst gestalten.',
  },
  {
    title: 'Kinderkarussell',
    image: '/images/gartenfest/kinderkarussel.jpg',
    description: 'Nostalgischer Fahrspaß für die Kleinsten: Das klassische Karussell dreht seine fröhlichen Runden und zaubert strahlende Kindergesichter.',
  },
  {
    title: 'Kinder-Mini-Express',
    location: 'Kinderzug für die Kleinen',
    image: '/images/gartenfest/kinder-mini-express.jpg',
    description: 'Auf kleinen Schienen durch den Schlosspark: Der Kinder-Mini-Express nimmt seine kleinen Fahrgäste mit auf eine entspannte Rundfahrt über das festliche Gelände.',
  },
]

const tage: ScheduleDay[] = [
  {
    wochentag: 'Samstag',
    datum: '23. Mai 2026',
    entries: [
      {
        time: '10:00 Uhr',
        title: 'Das Gartenfest öffnet seine Tore.',
      },
      {
        time: '10:00 Uhr',
        title: 'Eröffnung der Ausstellung „Kunst im Nordflügel"',
        location: 'mit Künstlern der Galerie im Saal, Eschenau',
        image: '/images/gartenfest/kunst-im-schloss.jpg',
        description: 'Begrüßen Sie die neue Kunstausstellung gemeinsam mit den Künstlerinnen und Künstlern der Galerie im Saal, Eschenau. Im ersten Stockwerk des Nordflügels werden Werke zeitgenössischer Malerei und Skulptur präsentiert.',
      },
      {
        time: '11:00 Uhr',
        title: 'Vortrag: „Neue Rosen – reichblühend, robust und resistent"',
        location: 'Gärtnerei Reichert, Stand im Schlosshof',
        image: '/images/gartenfest/vortrag-rosen.jpg',
        description: 'Welche Rosen begeistern heute die Gärtner? Gärtnerei Reichert stellt die schönsten neuen Züchtungen vor: reichblühende, robuste Sorten, die auch ohne Pestizide gesund bleiben. Mit praktischen Tipps zu Standort, Pflanzung und Schnitt sowie anschließender Beratung am Stand.',
      },
      {
        time: '12:00, 14:00, 16:00 Uhr',
        title: 'Gespensterführung',
        location: 'Treffpunkt: 15 Min. vor Beginn vor dem Schloss',
        note: 'Tickets 3,00 € | Infostand',
        image: '/images/gartenfest/gespenster-fuehrung.jpg',
        description: 'Auf den Spuren der Schlossbewohner von einst: Eine humorvolle Führung übers historische Schlossgelände für Kinder und Erwachsene. Die Dauer beträgt ca. 30 Minuten. Tickets (3,00 €) sind am Infostand erhältlich.',
      },
      {
        time: '12:30, 16:00 Uhr',
        title: 'Führung „Schloss Eyrichshof entdecken – Geschichte hautnah"',
        location: 'Treffpunkt vor der Kirche',
        image: '/images/gartenfest/fuehrung-geschichte.jpg',
        description: 'Erfahren Sie die bewegte Geschichte von Schloss Eyrichshof: von der mittelalterlichen Gründung bis in die Gegenwart. Die ca. 45-minütige Führung startet vor der Kirche und nimmt Sie mit auf eine Reise durch Jahrhunderte fränkischer Geschichte.',
      },
      {
        time: '13:00, 15:00, 17:00 Uhr',
        title: 'Basteln für Kinder',
        location: 'Treffpunkt: 15 Min. vor Beginn vor dem Schloss',
        note: 'Tickets 3,00 € | Infostand',
        image: '/images/gartenfest/basteln-kinder.jpg',
        description: 'Kreatives Gestalten für kleine Hände: Kinder basteln unter Anleitung jahreszeitliche Motive und Dekorationen zum Mitnehmen. Die Dauer beträgt ca. 30 Minuten. Tickets (3,00 €) am Infostand.',
      },
      {
        time: '14:00 Uhr',
        title: 'Vortrag: „Richtiger Standort und Pflege der Küchenkräuter"',
        location: 'Gartenbau Pressel, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-kraeuter.jpg',
        description: 'Basilikum, Rosmarin, Minze & Co. — Gartenbau Pressel erklärt, welche Kräuter welche Bedingungen brauchen und wie man sie richtig pflegt, erntet und lagert. Mit anschließender persönlicher Beratung am Stand im Schlosspark.',
      },
      {
        time: '15:00, 16:00 Uhr',
        title: 'Jongleur PERUJO – Riese mit Riesenseifenblasen',
        location: 'vor dem Schloss',
        image: '/images/gartenfest/perujo-riesenseifenblasen.jpg',
        description: 'Auf Stelzen und in voller Größe begeistert der Stimmungsmacher PERUJO mit schwebenden Riesenseifenblasen. Ein farbenprächtiges Spektakel für Groß und Klein, das garantiert für strahlende Augen sorgt.',
      },
      {
        time: '16:00 Uhr',
        title: 'Live-Musik mit „Fussissimo" (Gipsy | Ethno | Jazz)',
        location: 'Bühne im Schlosspark',
        image: '/images/gartenfest/taegliche-livemusik.jpg',
        description: 'Mitreißende Klänge aus aller Welt: Das Ensemble Fussissimo verbindet Gipsy-Swing, ethnische Rhythmen und Jazz zu einem stimmungsvollen Konzert auf der Bühne im Schlosspark.',
      },
      {
        time: '17:00 Uhr',
        title: 'Vortrag: „Hauswurz Sempervivum – die 2500 Jahre alte Schutz- und Heilpflanze"',
        location: 'Zum Edengarten, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-hauswurz.jpg',
        description: 'Eine der ältesten Kulturpflanzen Europas im Portrait: Zum Edengarten stellt die faszinierende Welt der Hauswurz vor — ihre Geschichte als Schutz- und Heilpflanze, die erstaunliche Artenvielfalt und ihre Verwendung im modernen Garten.',
      },
    ],
    ganztags,
    notes: [
      'Kunst im Schloss! Ständige Kunstausstellung im Nordflügel, 1. Stock, ab Samstag 10:00 Uhr mit Künstlern der Galerie im Saal, Eschenau.',
      'Buchstaben-Suchspiel für Kinder (Auskunft am Info-Stand)',
    ],
  },
  {
    wochentag: 'Sonntag',
    datum: '24. Mai 2026',
    entries: [
      {
        time: '10:00 Uhr',
        title: 'Das Gartenfest öffnet seine Tore.',
      },
      {
        time: '11:00 Uhr',
        title: 'Vortrag: „Neue Rosen – reichblühend, robust und resistent"',
        location: 'Gärtnerei Reichert, Stand im Schlosshof',
        image: '/images/gartenfest/vortrag-rosen.jpg',
        description: 'Welche Rosen begeistern heute die Gärtner? Gärtnerei Reichert stellt die schönsten neuen Züchtungen vor: reichblühende, robuste Sorten, die auch ohne Pestizide gesund bleiben. Mit praktischen Tipps zu Standort, Pflanzung und Schnitt sowie anschließender Beratung am Stand.',
      },
      {
        time: '11:00, 12:30, 14:00, 16:00 Uhr',
        title: 'Gespensterführung',
        location: 'Treffpunkt: 15 Min. vor Beginn vor dem Schloss',
        note: 'Tickets 3,00 € | Infostand',
        image: '/images/gartenfest/gespenster-fuehrung.jpg',
        description: 'Auf den Spuren der Schlossbewohner von einst: Eine humorvolle Führung übers historische Schlossgelände für Kinder und Erwachsene. Die Dauer beträgt ca. 30 Minuten. Tickets (3,00 €) sind am Infostand erhältlich.',
      },
      {
        time: '12:00, 15:00 Uhr',
        title: 'Vertikaler Pferdehof Eichelberg – Pferde Quadrille',
        location: '„Die Amazonen der vertikalen Reiter der Oliveira Stables"',
        image: '/images/gartenfest/pferde-quadrille.jpg',
        description: 'Die Amazonen der Oliveira Stables zeigen Pferde- und Reitkunst auf höchstem Niveau: Eine choreografierte Quadrille, die die besondere Verbindung zwischen Mensch und Pferd feiert. Ein beeindruckendes Spektakel für alle Pferdefreunde.',
      },
      {
        time: '12:00, 15:00, 17:00 Uhr',
        title: 'Basteln für Kinder',
        location: 'Treffpunkt: 15 Min. vor Beginn vor dem Schloss',
        note: 'Tickets 3,00 € | Infostand',
        image: '/images/gartenfest/basteln-kinder.jpg',
        description: 'Kreatives Gestalten für kleine Hände: Kinder basteln unter Anleitung jahreszeitliche Motive und Dekorationen zum Mitnehmen. Die Dauer beträgt ca. 30 Minuten. Tickets (3,00 €) am Infostand.',
      },
      {
        time: '12:30, 16:00 Uhr',
        title: 'Führung „Schloss Eyrichshof entdecken – Geschichte hautnah"',
        location: 'Treffpunkt vor der Kirche',
        image: '/images/gartenfest/fuehrung-geschichte.jpg',
        description: 'Erfahren Sie die bewegte Geschichte von Schloss Eyrichshof: von der mittelalterlichen Gründung bis in die Gegenwart. Die ca. 45-minütige Führung startet vor der Kirche und nimmt Sie mit auf eine Reise durch Jahrhunderte fränkischer Geschichte.',
      },
      {
        time: '14:00, 16:30 Uhr',
        title: 'Stelzen Walk Act',
        location: 'auf dem Schlossgelände',
        image: '/images/gartenfest/perujo-jonglage.jpg',
        description: 'Hoch über dem Festgeschehen wandelt der Stelzenkünstler übers Schlossgelände und begeistert mit spielerischen Einlagen, charmanten Interaktionen und unvermuteten Überraschungen für Groß und Klein.',
      },
      {
        time: '14:00 Uhr',
        title: 'Vortrag: „Richtiger Standort und Pflege der Küchenkräuter"',
        location: 'Gartenbau Pressel, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-kraeuter.jpg',
        description: 'Basilikum, Rosmarin, Minze & Co. — Gartenbau Pressel erklärt, welche Kräuter welche Bedingungen brauchen und wie man sie richtig pflegt, erntet und lagert. Mit anschließender persönlicher Beratung am Stand im Schlosspark.',
      },
      {
        time: '15:30, 18:00 Uhr',
        title: 'Comedy Jonglage',
        location: 'vor dem Schloss',
        image: '/images/gartenfest/perujo-jonglage.jpg',
        description: 'Jonglage trifft Comedy: Mit artistischer Meisterschaft und jeder Menge Witz begeistert PERUJO das Publikum. Timing, Humor und Können in bester Showman-Tradition — ein Auftritt, der nachhallt.',
      },
      {
        time: '16:00 Uhr',
        title: 'Live-Musik mit „Goller & Götz" (Finest Acoustic Music)',
        location: 'Bühne im Schlosspark',
        image: '/images/gartenfest/taegliche-livemusik.jpg',
        description: 'Zwei außergewöhnliche Musiker, ein unvergesslicher Abend: Goller & Götz verbinden akustische Gitarren mit feinen Harmonien zu einem intimen, atmosphärischen Konzert unter freiem Himmel.',
      },
      {
        time: '17:00 Uhr',
        title: 'Vortrag: „Hauswurz Sempervivum – die 2500 Jahre alte Schutz- und Heilpflanze"',
        location: 'Zum Edengarten, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-hauswurz.jpg',
        description: 'Eine der ältesten Kulturpflanzen Europas im Portrait: Zum Edengarten stellt die faszinierende Welt der Hauswurz vor — ihre Geschichte als Schutz- und Heilpflanze, die erstaunliche Artenvielfalt und ihre Verwendung im modernen Garten.',
      },
    ],
    ganztags,
    notes: [
      'Kunst im Schloss! Ständige Kunstausstellung im Nordflügel, 1. Stock, mit Künstlern der Galerie im Saal, Eschenau.',
      'Buchstaben-Suchspiel für Kinder (Auskunft am Info-Stand).',
    ],
  },
  {
    wochentag: 'Montag',
    datum: '25. Mai 2026',
    entries: [
      {
        time: '10:00 Uhr',
        title: 'Das Gartenfest öffnet seine Tore.',
      },
      {
        time: '11:00 Uhr',
        title: 'Vortrag: „Neue Rosen – reichblühend, robust und resistent"',
        location: 'Gärtnerei Reichert, Stand im Schlosshof',
        image: '/images/gartenfest/vortrag-rosen.jpg',
        description: 'Welche Rosen begeistern heute die Gärtner? Gärtnerei Reichert stellt die schönsten neuen Züchtungen vor: reichblühende, robuste Sorten, die auch ohne Pestizide gesund bleiben. Mit praktischen Tipps zu Standort, Pflanzung und Schnitt sowie anschließender Beratung am Stand.',
      },
      {
        time: '11:00, 13:30 Uhr',
        title: 'Stelzen Walk Act',
        location: 'auf dem Schlossgelände',
        image: '/images/gartenfest/perujo-jonglage.jpg',
        description: 'Hoch über dem Festgeschehen wandelt der Stelzenkünstler übers Schlossgelände und begeistert mit spielerischen Einlagen, charmanten Interaktionen und unvermuteten Überraschungen für Groß und Klein.',
      },
      {
        time: '11:00, 12:30, 14:00, 16:00 Uhr',
        title: 'Gespensterführung',
        location: 'Treffpunkt: 15 Min. vor Beginn vor dem Schloss',
        note: 'Tickets 3,00 € | Infostand',
        image: '/images/gartenfest/gespenster-fuehrung.jpg',
        description: 'Auf den Spuren der Schlossbewohner von einst: Eine humorvolle Führung übers historische Schlossgelände für Kinder und Erwachsene. Die Dauer beträgt ca. 30 Minuten. Tickets (3,00 €) sind am Infostand erhältlich.',
      },
      {
        time: '12:00, 15:00 Uhr',
        title: 'Vertikaler Pferdehof Eichelberg – Pferde Quadrille',
        location: '„Die Amazonen der vertikalen Reiter der Oliveira Stables"',
        image: '/images/gartenfest/pferde-quadrille.jpg',
        description: 'Die Amazonen der Oliveira Stables zeigen Pferde- und Reitkunst auf höchstem Niveau: Eine choreografierte Quadrille, die die besondere Verbindung zwischen Mensch und Pferd feiert. Ein beeindruckendes Spektakel für alle Pferdefreunde.',
      },
      {
        time: '12:30, 16:00 Uhr',
        title: 'Führung „Schloss Eyrichshof entdecken – Geschichte hautnah"',
        location: 'Treffpunkt vor der Kirche',
        image: '/images/gartenfest/fuehrung-geschichte.jpg',
        description: 'Erfahren Sie die bewegte Geschichte von Schloss Eyrichshof: von der mittelalterlichen Gründung bis in die Gegenwart. Die ca. 45-minütige Führung startet vor der Kirche und nimmt Sie mit auf eine Reise durch Jahrhunderte fränkischer Geschichte.',
      },
      {
        time: '12:30, 15:00 Uhr',
        title: 'Comedy Jonglage',
        location: 'vor dem Schloss',
        image: '/images/gartenfest/perujo-jonglage.jpg',
        description: 'Jonglage trifft Comedy: Mit artistischer Meisterschaft und jeder Menge Witz begeistert PERUJO das Publikum. Timing, Humor und Können in bester Showman-Tradition — ein Auftritt, der nachhallt.',
      },
      {
        time: '14:00 Uhr',
        title: 'Modenschau mit Nina Halbig',
        location: 'Freitreppe des Schlosses',
        image: '/images/gartenfest/modenschau-nina-halbig.jpg',
        description: 'Eleganz auf der historischen Freitreppe: Designerin Nina Halbig präsentiert ihre Kollektion in einzigartiger Kulisse. Handverlesene Stücke, die Qualität und zeitlosen Stil vereinen — ein besonderer Moment für Modebegeisterte.',
      },
      {
        time: '14:00 Uhr',
        title: 'Vortrag: „Richtiger Standort und Pflege der Küchenkräuter"',
        location: 'Gartenbau Pressel, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-kraeuter.jpg',
        description: 'Basilikum, Rosmarin, Minze & Co. — Gartenbau Pressel erklärt, welche Kräuter welche Bedingungen brauchen und wie man sie richtig pflegt, erntet und lagert. Mit anschließender persönlicher Beratung am Stand im Schlosspark.',
      },
      {
        time: '16:00 Uhr',
        title: 'Live-Musik mit Duo „Droptune", Peter Hahner & Vanessa Chase (Rock | Pop)',
        location: 'Bühne im Schlosspark',
        image: '/images/gartenfest/taegliche-livemusik.jpg',
        description: 'Energiegeladener Abschluss des Gartenfestes: Das Duo Droptune bringt mit Peter Hahner & Vanessa Chase einen packenden Mix aus Rock und Pop auf die Schlossbühne — der perfekte Ausklang eines wunderbaren Pfingstwochenendes.',
      },
      {
        time: '17:00 Uhr',
        title: 'Vortrag: „Hauswurz Sempervivum – die 2500 Jahre alte Schutz- und Heilpflanze"',
        location: 'Zum Edengarten, Stand im Schlosspark',
        image: '/images/gartenfest/vortrag-hauswurz.jpg',
        description: 'Eine der ältesten Kulturpflanzen Europas im Portrait: Zum Edengarten stellt die faszinierende Welt der Hauswurz vor — ihre Geschichte als Schutz- und Heilpflanze, die erstaunliche Artenvielfalt und ihre Verwendung im modernen Garten.',
      },
    ],
    ganztags,
    notes: [
      'Kunst im Schloss! Ständige Kunstausstellung im Nordflügel, 1. Stock, mit Künstlern der Galerie im Saal, Eschenau.',
      'Buchstaben-Suchspiel für Kinder (Auskunft am Info-Stand).',
    ],
  },
]

const quickLinks = [
  { label: 'Programm', href: '#programm' },
  { label: 'Ganztags', href: '#ganztags' },
  { label: 'Impressionen', href: '#impressionen' },
  { label: 'Anfahrt & Parken', href: '/kontakt/anfahrt' },
]

const sidebarDownloads = [
  { label: 'Ausstellerliste', href: '/downloads/ausstellerliste-gartenfest-2026.pdf' },
  { label: 'Programm', href: '/downloads/programm-gartenfest-2026.pdf' },
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
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            23.–25. Mai 2026 · Pfingstwochenende
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Gartenfest
          </h1>
          <p className="mt-3 text-lg text-warm-200 font-light leading-snug">
            Über 150 Aussteller, tägliche Livemusik und ein vielfältiges Rahmenprogramm
          </p>
          <span className="lg:hidden mt-6 inline-block px-8 py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed">
            Vorverkauf beendet
          </span>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:gap-14">
          <div className="flex-1 min-w-0 space-y-5">
            <p className="text-warm-600 leading-relaxed text-base">
              Am Pfingstwochenende, vom 23.–25. Mai 2026 feierten wir im Schlossgarten bereits zum 21. Mal unser Gartenfest!
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein Lifestyle-Fest für die ganze Familie: Mehr als 150 Aussteller präsentierten tolle Mode, ausgefallenen Schmuck und Accessoires, begeisternde Kunst, alles rund um Haus und Garten sowie erlesene Delikatessen und Kulinarik. Das vielfältige Warenangebot bot etwas für jeden Geschmack: hochwertige, edle Waren bis hin zu originellen und erschwinglichen Besonderheiten.
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Auch für unsere kleinen Besucher war so Einiges im Programm — ob Gespensterjagd, gemeinsames Basteln, Suchspiel über&apos;s Gelände, Nostalgiekarussell und Kinder-Mini-Express und in diesem Jahr neu: Workshop mit Lehmfarben&nbsp;…
            </p>
            <p className="text-warm-600 leading-relaxed text-base">
              Ein tolles Rahmenprogramm und tägliche Livemusik rundeten diese Gartenveranstaltung ab.
            </p>
          </div>

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-warm-100 p-6">
              {/* Ticket box */}
              <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-1">Pfingstwochenende 2026</p>
              <p className="font-heading text-xl text-brand mb-5">23.–25. Mai 2026</p>

              <span className="block w-full text-center py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed mb-3">
                Vorverkauf beendet
              </span>
              <p className="text-xs text-warm-500 text-center mb-6">Tickets für das Gartenfest 2027 folgen in Kürze.</p>

              {/* Navigation */}
              <div className="border-t border-warm-200 pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-400 mb-4">Auf dieser Seite</p>
                <nav className="flex flex-col gap-3 mb-5">
                  {quickLinks.slice(0, 3).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col gap-3">
                  {sidebarDownloads.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                    >
                      <IconDownload size={13} stroke={1.75} className="shrink-0 text-warm-400" />
                      {item.label}
                    </a>
                  ))}
                  <Link
                    href="/kontakt/anfahrt"
                    className="text-sm text-warm-600 hover:text-accent transition-colors leading-snug"
                  >
                    Anfahrt & Parken
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Programm */}
      <section id="programm" className="border-t border-warm-200 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Gartenfest 2026</p>
            <h2 className="font-heading text-4xl font-normal text-brand">Programm</h2>
          </div>
          <GartenfestSchedule days={tage} />
        </div>
      </section>

      {/* Ganztags */}
      <section id="ganztags" className="bg-warm-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">An allen drei Tagen</p>
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
      <section id="impressionen" className="border-t border-warm-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Gartenfest 2026</p>
          <h2 className="font-heading text-3xl font-normal text-brand mb-8">Impressionen</h2>
          <ImageGallery
            images={Array.from({ length: 18 }, (_, i) => ({
              src: `/images/gartenfest/impressionen/${String(i + 1).padStart(2, '0')}.jpg`,
              alt: `Gartenfest Impression ${i + 1}`,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-100 py-16 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Gartenfest 2027</p>
        <h2 className="font-heading text-3xl font-normal text-brand mb-6">Nächstes Jahr wieder dabei sein</h2>
        <p className="text-warm-600 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Das Gartenfest 2026 ist beendet. Tickets für 2027 werden rechtzeitig verfügbar sein —
          melden Sie sich für unseren Newsletter an, um als Erste informiert zu werden.
        </p>
        <span className="inline-block px-8 py-3 bg-warm-400 text-white text-sm uppercase tracking-widest cursor-not-allowed">
          Vorverkauf beendet
        </span>
      </section>

      <AnfahrtBanner />
      <VeranstaltungenNav currentHref="/veranstaltungen/gartenfest" />
    </>
  )
}
