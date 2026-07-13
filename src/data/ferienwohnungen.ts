export type Apartment = {
  id: string
  name: string
  tag: string
  size: string
  guests: string
  guestsNote?: string
  rooms: string
  description: string
  mainImage: string
  gallery: string[]
  bookingUrl: string
}

export const apartments: Apartment[] = [
  {
    id: 'dekanshaus',
    name: 'Dekanshaus',
    tag: 'Ideal für Gruppen',
    size: 'ca. 80 m²',
    guests: 'bis 4 Personen',
    guestsNote: 'bis 6 Personen mit Apartment Turm',
    rooms: '2 Doppelzimmer, 2 Bäder/WC, Wohnküche',
    description:
      'Designer-Ferienwohnung, gestaltet von der serbischen Innenarchitektin Ozarija Markovic, im barocken Dekanshaus — mit wunderschöner offener Wohnküche und Esstisch für acht Personen.',
    mainImage: '/images/ferienwohnungen/dekanshaus/main.jpg',
    gallery: [
      '/images/ferienwohnungen/dekanshaus/01.jpg',
      '/images/ferienwohnungen/dekanshaus/02.jpg',
      '/images/ferienwohnungen/dekanshaus/03.jpg',
      '/images/ferienwohnungen/dekanshaus/04.jpg',
      '/images/ferienwohnungen/dekanshaus/05.jpg',
      '/images/ferienwohnungen/dekanshaus/06.jpg',
    ],
    bookingUrl:
      'https://tbooking.toubiz.de/GER00020061453866293/tbooking?globalReset=1&serviceIDs%5b%5d=GER00020061462802875',
  },
  /* {
    id: 'zum-brunnen',
    name: 'Zum Brunnen',
    tag: 'Ideal für Familien mit Kindern',
    size: 'ca. 65 m²',
    guests: 'bis 4 Personen',
    guestsNote: 'Hunde herzlich willkommen',
    rooms: '1 Doppelzimmer, 1 Zimmer mit Stockbett, 1 Bad/WC, Wohnküche',
    description:
      'Gemütliche Ferienwohnung mit Wohnküche und Esstisch für vier Personen — ideal für Familien mit Kindern oder einen Kurzurlaub zu zweit mit Hund.',
    mainImage: '/images/ferienwohnungen/zum-brunnen/main.jpg',
    gallery: [
      '/images/ferienwohnungen/zum-brunnen/01.jpg',
      '/images/ferienwohnungen/zum-brunnen/02.jpg',
      '/images/ferienwohnungen/zum-brunnen/03.jpg',
    ],
    bookingUrl:
      'https://tbooking.toubiz.de/GER00020061453866293/tbooking?globalReset=1&serviceIDs%5b%5d=GER00020062018604205',
  }, */
  {
    id: 'brennmeister',
    name: 'Brennmeister',
    tag: 'Ideal für Paare & kleine Familien',
    size: 'ca. 65 m²',
    guests: 'bis 4 Personen',
    rooms: '1 Doppelzimmer, Wohnzimmer mit Ausziehsofa, 1 Bad/WC, Küche',
    description:
      'Stilvolle Wohnung im historischen Brennmeisterhaus mit modernisiertem Bad und einer hellen Küche — ideal für Paare oder kleine Familien, die Ruhe und Schlossatmosphäre suchen.',
    mainImage: '/images/ferienwohnungen/brennmeister/main.jpg',
    gallery: [
      '/images/ferienwohnungen/brennmeister/01.jpg',
      '/images/ferienwohnungen/brennmeister/02.jpg',
      '/images/ferienwohnungen/brennmeister/03.jpg',
      '/images/ferienwohnungen/brennmeister/04.jpg',
      '/images/ferienwohnungen/brennmeister/05.jpg',
      '/images/ferienwohnungen/brennmeister/06.jpg',
    ],
    bookingUrl:
      'https://tbooking.toubiz.de/GER00020061453866293/tbooking?globalReset=1&serviceIDs%5b%5d=GER00020062018606071',
  },
  {
    id: 'turm',
    name: 'Turm',
    tag: 'Ideal für Paare',
    size: 'ca. 26 m²',
    guests: '2 Personen',
    guestsNote: 'Kombinierbar mit Apartment Dekanshaus für bis zu 6 Personen',
    rooms: '1 romantisches Doppelzimmer, 1 Bad/WC mit mittelalterlichem Mosaik',
    description:
      'Romantisches Turmzimmer für zwei — mit einem einzigartigen Bad aus mittelalterlichem Mosaik und dem Charme eines Schlossturms. Kombinierbar mit dem Dekanshaus für Gruppen bis 6 Personen.',
    mainImage: '/images/ferienwohnungen/turm/main.jpg',
    gallery: [
      '/images/ferienwohnungen/turm/01.jpg',
      '/images/ferienwohnungen/turm/02.jpg',
      '/images/ferienwohnungen/turm/03.jpg',
    ],
    bookingUrl:
      'https://tbooking.toubiz.de/GER00020061453866293/tbooking?globalReset=1&serviceIDs%5b%5d=GER00020061462798801',
  },
]
