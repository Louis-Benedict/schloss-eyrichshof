import { NextResponse } from 'next/server'
import { createPendingMarketingConsent, WixApiError } from '@/lib/wix'
import { createConfirmationToken } from '@/lib/newsletterToken'
import { sendConfirmationEmail } from '@/lib/email'
import { SITE_URL } from '@/lib/site'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { email?: string; name?: string; company?: string; consent?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 })
  }

  // Honeypot field — hidden from real visitors, bots tend to fill every input.
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 400 })
  }

  const email = body.email?.trim()
  const name = body.name?.trim() || undefined

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }

  try {
    const { id: consentId } = await createPendingMarketingConsent(email)
    const token = createConfirmationToken({ consentId, email, name })
    const confirmUrl = `${SITE_URL}/api/newsletter/confirm?token=${encodeURIComponent(token)}`
    await sendConfirmationEmail(email, confirmUrl)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Newsletter signup failed:', error)
    const status = error instanceof WixApiError ? error.status : 500
    return NextResponse.json({ ok: false, error: 'subscription_failed' }, { status })
  }
}
