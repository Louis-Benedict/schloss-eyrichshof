import { NextResponse } from 'next/server'
import { recipientForThema } from '@/lib/team'
import { sendContactFormEmail } from '@/lib/email'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: {
    vorname?: string
    nachname?: string
    email?: string
    thema?: string
    betreff?: string
    nachricht?: string
    consent?: boolean
    company?: string
  }
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
  const vorname = body.vorname?.trim()
  const nachname = body.nachname?.trim()
  const nachricht = body.nachricht?.trim()

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }
  if (!vorname || !nachname || !nachricht) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  const betreff = body.betreff?.trim() || '(kein Betreff)'
  const to = recipientForThema(body.thema)

  try {
    await sendContactFormEmail({
      to,
      replyTo: email,
      subject: `Kontaktformular: ${betreff}`,
      text: [
        `Von: ${vorname} ${nachname} <${email}>`,
        `Thema: ${body.thema || '–'}`,
        `Betreff: ${betreff}`,
        '',
        nachricht,
      ].join('\n'),
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 })
  }
}
