import CookieBanner from '@/components/CookieBanner'
import GoogleTagManager from '@/components/GoogleTagManager'

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-body bg-warm-50 text-warm-900">
      <GoogleTagManager />
      {children}
      <CookieBanner />
    </div>
  )
}
