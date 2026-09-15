'use client'

import { useState, type SyntheticEvent } from 'react'
import { THEMA_OPTIONS } from '@/lib/team'

export default function ContactForm({ defaultThema }: { defaultThema?: string }) {
  const [vorname, setVorname] = useState('')
  const [nachname, setNachname] = useState('')
  const [email, setEmail] = useState('')
  const [thema, setThema] = useState(defaultThema ?? '')
  const [betreff, setBetreff] = useState('')
  const [nachricht, setNachricht] = useState('')
  const [consent, setConsent] = useState(false)
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vorname, nachname, email, thema, betreff, nachricht, consent, company }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div>
        <h3 className="font-heading text-2xl font-normal text-brand mb-4">Vielen Dank!</h3>
        <p className="text-sm text-warm-600 leading-relaxed">
          Ihre Nachricht ist bei uns eingegangen. Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-heading text-2xl font-normal text-brand mb-4">Schreiben Sie uns</h3>
      <div className="space-y-3 text-sm text-warm-600 leading-relaxed mb-6">
        <p>
          Ob zu einer unserer Schlossveranstaltungen, einem Aufenthalt in einer unserer
          Ferienwohnungen, einer privaten Feier oder einfach nur mal so: Wir freuen uns immer
          über Ihren Besuch — und helfen Ihnen genauso gerne weiter, wenn Sie Fragen oder
          Feedback für uns haben.
        </p>
        <p>
          In dieser Rubrik finden Sie alle Informationen, um unkompliziert mit uns Kontakt
          aufzunehmen, uns in den sozialen Medien zu folgen, sich für den kostenlosen Newsletter
          anzumelden, oder nähere Details zu Anfahrt und Parkmöglichkeiten zu erfahren.
        </p>
      </div>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-vorname">Vorname</label>
          <input
            id="contact-vorname"
            type="text"
            required
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-nachname">Nachname</label>
          <input
            id="contact-nachname"
            type="text"
            required
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}
            className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-email">E-Mail</label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-thema">Thema</label>
        <select
          id="contact-thema"
          value={thema}
          onChange={(e) => setThema(e.target.value)}
          className="w-full border border-warm-300 px-3 py-2 text-sm text-warm-700 bg-warm-50 focus:outline-none focus:border-accent"
        >
          <option value="">Bitte wählen …</option>
          {THEMA_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-betreff">Betreff</label>
        <input
          id="contact-betreff"
          type="text"
          value={betreff}
          onChange={(e) => setBetreff(e.target.value)}
          className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor="contact-nachricht">Nachricht</label>
        <textarea
          id="contact-nachricht"
          rows={5}
          required
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
          className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="contact-datenschutz"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 shrink-0 accent-accent"
        />
        <label htmlFor="contact-datenschutz" className="text-xs text-warm-600 leading-relaxed">
          Ich habe die{' '}
          <a href="/datenschutz" className="underline underline-offset-2 hover:text-accent transition-colors">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-medium uppercase tracking-wide transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Wird gesendet …' : 'Nachricht senden'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-600">
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an{' '}
          <a href="mailto:info@schlosseyrichshof.de" className="underline">info@schlosseyrichshof.de</a>.
        </p>
      )}
    </form>
  )
}
