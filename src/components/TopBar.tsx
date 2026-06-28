import Link from 'next/link'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'

const socialLinks = [
  { icon: IconBrandInstagram, label: 'Instagram', href: '#' },
  { icon: IconBrandFacebook, label: 'Facebook', href: '#' },
]

export default function TopBar() {
  return (
    <div className="w-full text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        {/* Left — announcement */}
        <p className="text-[11px] tracking-wider hidden sm:block">
          Wunderbare Tage liegen hinter uns. Vielen Dank für Ihren Besuch auf dem Gartenfest.
        </p>

        {/* Right — quick links + social */}
        <div className="flex items-center gap-5 ml-auto">
          <Link
            href="/kontakt/newsletter"
            className="text-[11px] uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            Newsletter
          </Link>

          <span className="w-px h-3 bg-white/30" />

          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-white/70 transition-colors"
            >
              <Icon size={16} stroke={1.75} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
