import Link from 'next/link'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'
import { SHOP_URL } from '@/lib/site'

const socialLinks = [
  { icon: IconBrandInstagram, label: 'Instagram', href: 'https://www.instagram.com/schlosseyrichshof' },
  { icon: IconBrandFacebook, label: 'Facebook', href: 'https://www.facebook.com/eyrichshof' },
]

export default function TopBar() {
  return (
    <div className="w-full text-white" style={{ backgroundColor: 'var(--color-accent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        {/* Left — announcement */}
        <p className="text-xs uppercase tracking-wider font-medium hidden sm:block truncate whitespace-nowrap min-w-0 flex-1 mr-4">
          Wir freuen uns auf die 10. Winterzeit. Kommen Sie uns besuchen!{' '}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white/70 transition-colors"
          >
            Zum Shop
          </a>
        </p>

        {/* Right — quick links + social */}
        <div className="flex items-center gap-5 ml-auto shrink-0">
          <Link
            href="/kontakt/newsletter"
            className="text-[11px] uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            Newsletter
          </Link>

          <span className="w-px h-3 bg-white/30" />

          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-widest hover:text-white/70 transition-colors"
          >
            Shop
          </a>

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
