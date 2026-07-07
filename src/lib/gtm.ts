declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

/** Pushes an event to the GTM dataLayer. Safe to call even if GTM hasn't loaded yet (e.g. no cookie consent) — the array just accumulates until/unless GTM picks it up. */
export function pushDataLayerEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...data })
}
