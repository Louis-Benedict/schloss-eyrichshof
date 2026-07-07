const WIX_API_BASE = 'https://www.wixapis.com'

export class WixApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

function wixHeaders(): Record<string, string> {
  const apiKey = process.env.WIX_API_KEY
  const siteId = process.env.WIX_SITE_ID

  if (!apiKey || !siteId) {
    throw new WixApiError('Wix credentials are not configured (WIX_API_KEY / WIX_SITE_ID)', 500)
  }

  return {
    Authorization: apiKey,
    'wix-site-id': siteId,
    'Content-Type': 'application/json',
  }
}

/**
 * Creates a PENDING double-confirmation marketing consent for an email address.
 * See: https://dev.wix.com/docs/api-reference/business-management/marketing/marketing-consent/introduction
 * Wix only tracks the consent state here — it does not send the confirmation
 * email itself. We own sending that email and calling confirmMarketingConsent
 * once the visitor clicks through.
 */
export async function createPendingMarketingConsent(email: string): Promise<{ id: string }> {
  const headers = wixHeaders()

  const res = await fetch(`${WIX_API_BASE}/marketing-consent/v1/marketing-consent/upsert`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      details: { type: 'EMAIL', email },
      state: 'PENDING',
      lastConfirmationActivity: {
        source: 'FORM',
        optInLevel: 'DOUBLE_CONFIRMATION',
      },
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new WixApiError(`Wix marketing consent creation failed: ${res.status} ${body}`, res.status)
  }

  const { marketingConsent } = await res.json()
  return { id: marketingConsent.id }
}

/** Transitions a marketing consent from PENDING to CONFIRMED after the visitor clicks the confirmation link. */
export async function confirmMarketingConsent(consentId: string, email: string): Promise<void> {
  const headers = wixHeaders()

  const getRes = await fetch(`${WIX_API_BASE}/marketing-consent/v1/marketing-consent/${consentId}`, {
    headers,
  })
  if (!getRes.ok) {
    const body = await getRes.text()
    throw new WixApiError(`Wix marketing consent lookup failed: ${getRes.status} ${body}`, getRes.status)
  }
  const { marketingConsent } = await getRes.json()

  // Already confirmed (e.g. link clicked twice) — nothing left to do.
  if (marketingConsent.state === 'CONFIRMED') return

  const patchRes = await fetch(`${WIX_API_BASE}/marketing-consent/v1/marketing-consent/${consentId}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      marketingConsent: {
        id: consentId,
        details: { type: 'EMAIL', email },
        state: 'CONFIRMED',
        revision: marketingConsent.revision,
        lastConfirmationActivity: { source: 'LINK_CONFIRMATION' },
      },
      mask: { paths: ['state', 'lastConfirmationActivity.source'] },
    }),
  })

  if (!patchRes.ok) {
    const body = await patchRes.text()
    throw new WixApiError(`Wix marketing consent confirmation failed: ${patchRes.status} ${body}`, patchRes.status)
  }
}

/** Creates (or finds) the Wix Contact for a confirmed subscriber and optionally labels them. */
export async function subscribeToNewsletter(email: string, name?: string): Promise<void> {
  const headers = wixHeaders()

  const createRes = await fetch(`${WIX_API_BASE}/contacts/v4/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      info: {
        name: name ? { first: name } : undefined,
        emails: { items: [{ tag: 'MAIN', email }] },
      },
    }),
  })

  // Wix returns a conflict when the email is already a known contact — that's a success case for us.
  if (createRes.status === 409) return

  if (!createRes.ok) {
    const body = await createRes.text()
    throw new WixApiError(`Wix contact creation failed: ${createRes.status} ${body}`, createRes.status)
  }

  const labelId = process.env.WIX_NEWSLETTER_LABEL_ID
  if (!labelId) return

  const { contact } = await createRes.json()
  if (!contact?.id) return

  // Best-effort: tag the contact as a newsletter subscriber. Not fatal if this fails.
  await fetch(`${WIX_API_BASE}/contacts/v4/contacts/${contact.id}/labels`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ labels: [labelId] }),
  }).catch((error) => {
    console.error('Failed to label Wix contact as newsletter subscriber:', error)
  })
}
