'use client'

import { useState, type SyntheticEvent } from 'react'
import Link from 'next/link'
import { pushDataLayerEvent } from '@/lib/gtm'

export default function NewsletterForm() {
  const [name, setName] = useState('')
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
        body: JSON.stringify({ name, email, company, consent }),
      })
      if (!res.ok) throw new Error()
      pushDataLayerEvent('newsletter_signup')
      setStatus('success')
      setName('')
      setEmail('')
      setConsent(false)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-warm-600">
        Vielen Dank für Ihre Anmeldung! Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir
        Ihnen soeben zugeschickt haben.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-2" htmlFor="email">
          E-Mail-Adresse
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-warm-300 px-4 py-2 focus:outline-none focus:border-accent"
        />
      </div>
      <label className="flex items-start gap-2 text-sm text-warm-600 leading-relaxed">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-accent"
        />
        <span>
          Ich bin mit der Verarbeitung meiner Daten gemäß der{' '}
          <Link href="/datenschutz" className="text-accent hover:text-accent-hover transition-colors underline">
            Datenschutzerklärung
          </Link>{' '}
          einverstanden.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-medium uppercase tracking-wide transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Anmelden'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</p>
      )}
    </form>
  )
}
