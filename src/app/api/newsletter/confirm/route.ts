import { NextResponse } from 'next/server'
import { confirmMarketingConsent, subscribeToNewsletter } from '@/lib/wix'
import { verifyConfirmationToken } from '@/lib/newsletterToken'
import { SITE_URL } from '@/lib/site'

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')
  const payload = token ? verifyConfirmationToken(token) : null

  if (!payload) {
    return NextResponse.redirect(`${SITE_URL}/kontakt/newsletter?confirmed=invalid`)
  }

  try {
    await confirmMarketingConsent(payload.consentId, payload.email)
    await subscribeToNewsletter(payload.email, payload.name)
    return NextResponse.redirect(`${SITE_URL}/kontakt/newsletter?confirmed=success`)
  } catch (error) {
    console.error('Newsletter confirmation failed:', error)
    return NextResponse.redirect(`${SITE_URL}/kontakt/newsletter?confirmed=error`)
  }
}
