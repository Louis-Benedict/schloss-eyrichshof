import Link from 'next/link'
import Image from 'next/image'
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react'
import { events } from '@/data/events'
import { SHOP_URL } from '@/lib/site'

const socialLinks = [
  { icon: IconBrandInstagram, label: 'Instagram', href: '#' },
  { icon: IconBrandFacebook, label: 'Facebook', href: '#' },
  { icon: IconBrandYoutube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-dark)' }} className="text-warm-400 mt-auto font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="Eyrichshof — Landschloss der Inspiration"
                width={160}
                height={82}
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <div className="flex items-center gap-4 mb-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-warm-400 hover:text-accent transition-colors"
                >
                  <Icon size={28} stroke={1.5} />
                </a>
              ))}
            </div>
            <address className="not-italic text-sm leading-relaxed text-warm-400">
              96126 Eyrichshof
              <br />
              Unterfranken, Bayern
            </address>
          </div>

          <div>
            <h3 className="text-warm-200 text-xs uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Veranstaltungen', href: '/veranstaltungen' },
                { label: 'Ferienwohnungen', href: '/ferienwohnungen' },
                { label: 'Shop', href: SHOP_URL, external: true },
                { label: 'Kontakt', href: '/kontakt' },
              ].map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-accent transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-200 text-xs uppercase tracking-widest mb-4">Veranstaltungen</h3>
            <ul className="space-y-2 text-sm">
              {events.map(({ title, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-200 text-xs uppercase tracking-widest mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
                { label: 'Cookie-Richtlinien', href: '/cookie-richtlinien' },
                { label: 'AGB', href: '/agb' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-warm-500 text-center sm:text-left">
            © {new Date().getFullYear()} Schloss Eyrichshof. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
