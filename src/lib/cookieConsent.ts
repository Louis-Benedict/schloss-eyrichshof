export const COOKIE_CONSENT_KEY = 'cookie-consent'
export const COOKIE_CONSENT_EVENT = 'cookie-consent-changed'

export function hasCookieConsent(): boolean {
  return typeof window !== 'undefined' && localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted'
}

export function setCookieConsent(value: 'accepted' | 'declined') {
  localStorage.setItem(COOKIE_CONSENT_KEY, value)
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}
