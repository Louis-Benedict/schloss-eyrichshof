export const THEMA_OPTIONS = [
  { value: 'gartenfest', label: 'Gartenfest' },
  { value: 'roesler-open-air', label: 'Rösler Open Air' },
  { value: 'winterszeit', label: 'Winterszeit' },
  { value: 'hochzeiten-feste', label: 'Hochzeiten & Feste' },
  { value: 'firmenevents', label: 'Firmenevents' },
  { value: 'ferienwohnungen', label: 'Ferienwohnungen' },
  { value: 'shop', label: 'Shop' },
  { value: 'weitere-anliegen', label: 'Weitere Anliegen' },
] as const

export type Thema = (typeof THEMA_OPTIONS)[number]['value']

export type TeamMember = {
  name: string
  role: string
  src: string
  email: string
  thema?: Thema
}

export const team: TeamMember[] = [
  {
    name: 'Hermann von Rotenhan',
    role: 'Eigentümer und Veranstalter',
    src: '/images/kontakt/01.jpg',
    email: 'h.vonrotenhan@schlosseyrichshof.de',
  },
  {
    name: 'Waltraud Boseckert',
    role: 'Hochzeiten und Feiern',
    src: '/images/kontakt/02.jpg',
    email: 'w.boseckert@schlosseyrichshof.de',
    thema: 'hochzeiten-feste',
  },
  {
    name: 'Aino Bender',
    role: 'Winterszeit',
    src: '/images/kontakt/03.jpg',
    email: 'a.bender@schlosseyrichshof.de',
    thema: 'winterszeit',
  },
  {
    name: 'Angela von Willich',
    role: 'Gartenfest',
    src: '/images/kontakt/04.jpg',
    email: 'a.vonwillich@schlosseyrichshof.de',
    thema: 'gartenfest',
  },
  {
    name: 'Nadja Ortlauf',
    role: 'Marketing',
    src: '/images/kontakt/05.jpg',
    email: 'n.ortlauf@schlosseyrichshof.de',
  },
  {
    name: 'Christiane Gründel',
    role: 'Ferienwohnungen',
    src: '/images/kontakt/06.jpg',
    email: 'c.gruendel@schlosseyrichshof.de',
    thema: 'ferienwohnungen',
  },
]

/** Themen ohne fest zugeordnete Person (z.B. Shop, Firmenevents) landen hier. */
export const FALLBACK_CONTACT_EMAIL = 'info@schlosseyrichshof.de'

export function recipientForThema(thema?: string): string {
  return team.find((person) => person.thema === thema)?.email ?? FALLBACK_CONTACT_EMAIL
}
