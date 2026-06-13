import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-body bg-warm-50 text-warm-900">
      <Navigation />
      {/* pt-[116px] = TopBar (36px) + nav bar (80px) */}
      <main className="flex-1 pt-[116px]">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
