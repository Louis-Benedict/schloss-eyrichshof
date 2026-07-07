'use client'

import { useState, type SyntheticEvent } from 'react'
import Link from 'next/link'
import { pushDataLayerEvent } from '@/lib/gtm'

export default function NewsletterInlineForm() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, consent }),
      })
      if (!res.ok) throw new Error()
      pushDataLayerEvent('newsletter_signup')
      setStatus('success')
      setEmail('')
      setConsent(false)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-warm-100 text-sm">
        Vielen Dank! Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir Ihnen soeben zugeschickt
        haben.
      </p>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-warm-100 placeholder:text-warm-500 text-sm focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-accent text-white text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors shrink-0 disabled:opacity-60"
          >
            {status === 'loading' ? 'Wird gesendet…' : 'Anmelden'}
          </button>
        </div>
        <label className="flex items-start gap-2 text-left text-xs text-warm-100 leading-relaxed">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 accent-accent"
          />
          <span>
            Ich bin mit der Verarbeitung meiner Daten gemäß der{' '}
            <Link href="/datenschutz" className="underline hover:text-warm-100 transition-colors">
              Datenschutzerklärung
            </Link>{' '}
            einverstanden.
          </span>
        </label>
      </form>
      {status === 'error' && (
        <p className="text-warm-100 text-xs mt-3">Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</p>
      )}
    </div>
  )
}
