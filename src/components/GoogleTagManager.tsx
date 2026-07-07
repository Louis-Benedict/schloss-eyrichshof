'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { COOKIE_CONSENT_EVENT, hasCookieConsent } from '@/lib/cookieConsent'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

/**
 * Loads Google Tag Manager only once the visitor has accepted cookies.
 * GA4 is expected to be configured as a tag inside the GTM container itself —
 * this component only needs the container ID.
 */
export default function GoogleTagManager() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setConsented(hasCookieConsent())

    function onConsentChange() {
      setConsented(hasCookieConsent())
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange)
  }, [])

  if (!GTM_ID || !consented) return null

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
