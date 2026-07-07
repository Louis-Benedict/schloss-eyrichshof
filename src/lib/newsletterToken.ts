import { createHmac, timingSafeEqual } from 'crypto'

const SECRET = process.env.NEWSLETTER_TOKEN_SECRET || 'schloss-eyrichshof-newsletter-secret'
const TOKEN_TTL_MS = 1000 * 60 * 60 * 48 // 48h to click the confirmation link

type ConfirmationPayload = {
  consentId: string
  email: string
  name?: string
  exp: number
}

function sign(data: string): string {
  return createHmac('sha256', SECRET).update(data).digest('base64url')
}

/** Signed, stateless confirmation token — no database needed to track pending signups. */
export function createConfirmationToken(data: { consentId: string; email: string; name?: string }): string {
  const payload: ConfirmationPayload = { ...data, exp: Date.now() + TOKEN_TTL_MS }
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url')
  return `${encoded}.${sign(encoded)}`
}

export function verifyConfirmationToken(token: string): ConfirmationPayload | null {
  const [encoded, signature] = token.split('.')
  if (!encoded || !signature) return null

  const expected = sign(encoded)
  const actual = Buffer.from(signature)
  const expectedBuf = Buffer.from(expected)
  if (actual.length !== expectedBuf.length || !timingSafeEqual(actual, expectedBuf)) return null

  try {
    const payload: ConfirmationPayload = JSON.parse(Buffer.from(encoded, 'base64url').toString())
    if (Date.now() > payload.exp) return null
    return payload
  } catch {
    return null
  }
}
