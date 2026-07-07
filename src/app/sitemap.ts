import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Static routes only — this site has no dynamic (CMS-driven) detail pages yet.
// /shop isn't listed here: it's an external link (see SHOP_URL), not a page on this site.
const routes = [
  '',
  '/ferienwohnungen',
  '/ferienwohnungen/dekanshaus/buchen',
  '/ferienwohnungen/zum-brunnen/buchen',
  '/ferienwohnungen/brennmeister/buchen',
  '/ferienwohnungen/turm/buchen',
  '/kontakt',
  '/kontakt/anfahrt',
  '/kontakt/newsletter',
  '/landschloss',
  '/landschloss/anspruch',
  '/landschloss/geschichte',
  '/landschloss/impressionen',
  '/landschloss/umgebung',
  '/veranstaltungen',
  '/veranstaltungen/firmenevents',
  '/veranstaltungen/gartenfest',
  '/veranstaltungen/hochzeiten-feste',
  '/veranstaltungen/roesler-open-air',
  '/veranstaltungen/winterszeit',
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
