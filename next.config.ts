import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/*': ['node_modules/sharp/**/*'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
  },
  async redirects() {
    return [
      {
        source: '/landschloss/:path*',
        destination: '/schloss/:path*',
        permanent: true,
      },
      // --- Alt-URLs von der Wix-Seite (www.schlosseyrichshof.de) ---
      { source: '/cookies', destination: '/cookie-richtlinien', permanent: true },
      { source: '/hochzeiten-feste', destination: '/veranstaltungen/hochzeiten-feste', permanent: true },
      { source: '/veranstaltungen/hochzeiten-und-feste', destination: '/veranstaltungen/hochzeiten-feste', permanent: true },
      { source: '/umgebung', destination: '/schloss/umgebung', permanent: true },
      { source: '/impressionen', destination: '/schloss/impressionen', permanent: true },
      { source: '/anspruch', destination: '/schloss/anspruch', permanent: true },
      { source: '/geschichte-1', destination: '/schloss/geschichte', permanent: true },
      { source: '/firmenevents-1', destination: '/veranstaltungen/firmenevents', permanent: true },
      { source: '/veranstaltungen-1', destination: '/veranstaltungen', permanent: true },
      { source: '/winterszeit', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/gartenfest', destination: '/veranstaltungen/gartenfest', permanent: true },
      { source: '/rösler-open-air', destination: '/veranstaltungen/roesler-open-air', permanent: true },
      { source: '/r%C3%B6sler-open-air', destination: '/veranstaltungen/roesler-open-air', permanent: true },
      { source: '/agb-gartenfest', destination: '/veranstaltungen/gartenfest/agb', permanent: true },
      { source: '/agb-winterszeit', destination: '/veranstaltungen/winterszeit/agb', permanent: true },
      { source: '/fewo-reservierung-brennmeister', destination: '/ferienwohnungen/brennmeister/buchen', permanent: true },
      { source: '/fewo-reservierung-turmzimmer', destination: '/ferienwohnungen/turm/buchen', permanent: true },
      { source: '/fewo-reservierung-dekanshaus', destination: '/ferienwohnungen/dekanshaus/buchen', permanent: true },
      // Shop läuft künftig auf einer eigenen Subdomain, nicht mehr unter /shop auf dieser Domain
      { source: '/shop', destination: 'https://www.shop.schlosseyrichshof.de/shop', permanent: true },
      { source: '/shop/:path*', destination: 'https://www.shop.schlosseyrichshof.de/shop/:path*', permanent: true },
      // Alte Jahres-/Formular-/Kopie-Duplikate auf die aktuelle Übersichtsseite
      { source: '/gartenfest-formular2024', destination: '/veranstaltungen/gartenfest', permanent: true },
      { source: '/gartenfest-formular2025', destination: '/veranstaltungen/gartenfest', permanent: true },
      { source: '/gartenfest-formular2026', destination: '/veranstaltungen/gartenfest', permanent: true },
      { source: '/winterszeit-formular2024', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/winterszeit-formular2025', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/winterszeit-formular2026', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/copy-of-winterszeit', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/kopie-von-kopie-von-winterszeit', destination: '/veranstaltungen/winterszeit', permanent: true },
      // Alte Einzel-Event-Seiten (kein Äquivalent auf der neuen Seite) auf die passende Übersichtsseite
      { source: '/event-details/:slug(winterszeit.*)', destination: '/veranstaltungen/winterszeit', permanent: true },
      { source: '/event-details/:slug(gartenfest.*)', destination: '/veranstaltungen/gartenfest', permanent: true },
      { source: '/event-details/:slug(roesler-open-air.*)', destination: '/veranstaltungen/roesler-open-air', permanent: true },
    ]
  },
}

export default nextConfig
