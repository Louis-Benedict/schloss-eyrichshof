import type { Metadata } from 'next'
import { Playfair_Display, Rubik } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Schloss Eyrichshof',
    default: 'Schloss Eyrichshof — Landschloss in Unterfranken',
  },
  description:
    'Erleben Sie einzigartige Veranstaltungen, historische Ferienwohnungen und unvergessliche Momente auf Schloss Eyrichshof in Unterfranken.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  )
}
