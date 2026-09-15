import { Resend } from 'resend'

/**
 * No transactional email provider is wired up yet. Replace this implementation
 * (e.g. with Resend, Postmark, etc.) once one is chosen — nothing else in the
 * newsletter flow needs to change.
 */
export async function sendConfirmationEmail(email: string, confirmUrl: string): Promise<void> {
  console.log(`[newsletter] TODO: send confirmation email to ${email}: ${confirmUrl}`)
}

const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Schloss Eyrichshof <kontakt@schlosseyrichshof.de>'

/** Sends a contact-form submission to the responsible team member via Resend. */
export async function sendContactFormEmail(params: {
  to: string
  replyTo: string
  subject: string
  text: string
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: params.to,
    replyTo: params.replyTo,
    subject: params.subject,
    text: params.text,
  })

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`)
  }
}
