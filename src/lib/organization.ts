import { SITE_URL } from '@/lib/site'

export const ORGANIZATION_NAME = 'Schloss Eyrichshof'

export const ORGANIZATION_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Schlosshof 7',
  postalCode: '96106',
  addressLocality: 'Ebern',
  addressCountry: 'DE',
}

export const ORGANIZATION_PLACE = {
  '@type': 'Place',
  name: ORGANIZATION_NAME,
  address: ORGANIZATION_ADDRESS,
}

export const ORGANIZATION_REF = {
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: SITE_URL,
}

export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/schloss-exterior.jpg`,
  description:
    'Landschloss in Familienbesitz im Herzen Frankens — Ferienwohnungen, Veranstaltungen und Hochzeiten auf Schloss Eyrichshof.',
  email: 'info@schlosseyrichshof.de',
  faxNumber: '+49 9531 5736',
  address: ORGANIZATION_ADDRESS,
}
