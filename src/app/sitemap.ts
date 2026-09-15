import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Static routes only — this site has no dynamic (CMS-driven) detail pages yet.
// /shop isn't listed here: it's an external link (see SHOP_URL), not a page on this site.
const routes = [
  '',
  '/ferienwohnungen',
  '/ferienwohnungen/dekanshaus/buchen',
  // '/ferienwohnungen/zum-brunnen/buchen',
  '/ferienwohnungen/brennmeister/buchen',
  '/ferienwohnungen/turm/buchen',
  '/kontakt',
  '/kontakt/anfahrt',
  '/kontakt/newsletter',
  '/schloss',
  '/schloss/anspruch',
  '/schloss/geschichte',
  '/schloss/impressionen',
  '/schloss/umgebung',
  '/veranstaltungen',
  '/veranstaltungen/firmenevents',
  '/veranstaltungen/gartenfest',
  '/veranstaltungen/gartenfest/agb',
  '/veranstaltungen/hochzeiten-feste',
  '/veranstaltungen/roesler-open-air',
  '/veranstaltungen/winterszeit',
  '/veranstaltungen/winterszeit/agb',
  '/impressum',
  '/datenschutz',
  '/cookie-richtlinien',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }))
}
