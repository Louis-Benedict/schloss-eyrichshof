export interface Event {
  slug: string
  title: string
  dates: string
  tag?: string | null
  description: string
  image: string
  href: string
}

export const events: Event[] = [
  {
    slug: 'gartenfest',
    title: 'Gartenfest',
    dates: 'Juni 2027',
    tag: null,
    description:
      'Kunst, Handwerk und fränkische Gastlichkeit — das beliebteste Open-Air-Erlebnis auf dem Schlossgelände.',
    image: '/images/hero-gartenfest.jpg',
    href: '/veranstaltungen/gartenfest',
  },
  {
    slug: 'roesler-open-air',
    title: 'Rösler Open Air',
    dates: 'Juli 2027',
    tag: 'Vorverkauf',
    description:
      'Klassik, Jazz und Weltmusik unter freiem Himmel — ein musikalisches Highlight im Schlosspark Eyrichshof.',
    image: '/images/hero-roesler-open-air.jpg',
    href: '/veranstaltungen/roesler-open-air',
  },
  {
    slug: 'winterszeit',
    title: 'Winterszeit',
    dates: '5.–8. November 2026',
    tag: null,
    description:
      'Premium-Aussteller, feine Kulinarik und winterliche Atmosphäre im historischen Ambiente des Landschloss Eyrichshof.',
    image: '/images/hero-winterszeit.jpg',
    href: '/veranstaltungen/winterszeit',
  },
  {
    slug: 'hochzeiten-feste',
    title: 'Hochzeiten & Feste',
    dates: 'Ganzjährig',
    tag: null,
    description:
      'Historische Säle voller Geschichte und Atmosphäre — für den schönsten Tag Ihres Lebens.',
    image: '/images/hero-schloss.jpg',
    href: '/veranstaltungen/hochzeiten-feste',
  },
  {
    slug: 'firmenevents',
    title: 'Firmenevents',
    dates: 'Ganzjährig',
    tag: null,
    description:
      'Workshops, Teamfeiern und Großveranstaltungen im historischen Schlossambiente — flexibel und unvergesslich.',
    image: '/images/hero-schloss.jpg',
    href: '/veranstaltungen/firmenevents',
  },
]
