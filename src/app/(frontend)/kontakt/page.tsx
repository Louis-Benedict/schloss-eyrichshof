import Image from 'next/image'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'

export const metadata: Metadata = { title: 'Kontakt' }

const team: { name: string; role: string; src: string; email?: string }[] = [
  {
    name: 'Hermann von Rotenhan',
    role: 'Eigentümer und Veranstalter',
    src: '/images/kontakt/01.jpg',
  },
  {
    name: 'Waltraud Boseckert',
    role: 'Hochzeiten und Feiern',
    src: '/images/kontakt/02.jpg',
  },
  {
    name: 'Aino Bender',
    role: 'Winterszeit',
    src: '/images/kontakt/03.jpg',
  },
  {
    name: 'Angela von Willich',
    role: 'Gartenfest',
    src: '/images/kontakt/04.jpg',
  },
  {
    name: 'Nadja Ortlauf',
    role: 'Marketing',
    src: '/images/kontakt/05.jpg',
  },
  {
    name: 'Christiane Gründel',
    role: 'Ferienwohnungen',
    src: '/images/kontakt/06.jpg',
  },
]

function ContactForm({ prefix }: { prefix: string }) {
  return (
    <form className="space-y-4">
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-vorname`}>Vorname</label>
          <input id={`${prefix}-vorname`} type="text" className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-nachname`}>Nachname</label>
          <input id={`${prefix}-nachname`} type="text" className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-email`}>E-Mail</label>
        <input id={`${prefix}-email`} type="email" className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent" />
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-thema`}>Thema</label>
        <select id={`${prefix}-thema`} className="w-full border border-warm-300 px-3 py-2 text-sm text-warm-700 bg-warm-50 focus:outline-none focus:border-accent">
          <option value="">Bitte wählen …</option>
          <option value="gartenfest">Gartenfest</option>
          <option value="roesler-open-air">Rösler Open Air</option>
          <option value="winterszeit">Winterszeit</option>
          <option value="hochzeiten-feste">Hochzeiten &amp; Feste</option>
          <option value="firmenevents">Firmenevents</option>
          <option value="ferienwohnungen">Ferienwohnungen</option>
          <option value="shop">Shop</option>
          <option value="weitere-anliegen">Weitere Anliegen</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-betreff`}>Betreff</label>
        <input id={`${prefix}-betreff`} type="text" className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent" />
      </div>
      <div>
        <label className="block text-xs font-medium text-warm-700 mb-1.5" htmlFor={`${prefix}-nachricht`}>Nachricht</label>
        <textarea id={`${prefix}-nachricht`} rows={5} className="w-full border border-warm-300 px-3 py-2 text-sm focus:outline-none focus:border-accent" />
      </div>
      <div className="flex items-start gap-3">
        <input
          id={`${prefix}-datenschutz`}
          type="checkbox"
          required
          className="mt-0.5 shrink-0 accent-accent"
        />
        <label htmlFor={`${prefix}-datenschutz`} className="text-xs text-warm-600 leading-relaxed">
          Ich habe die{' '}
          <a href="/datenschutz" className="underline underline-offset-2 hover:text-accent transition-colors">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>
      <button type="submit" className="w-full py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-medium uppercase tracking-wide transition-colors">
        Nachricht senden
      </button>
    </form>
  )
}

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <div className="relative h-[520px] lg:h-[600px] -mt-[116px]">
        <Image
          src="/images/hero-kontakt.jpg"
          alt="Schloss Eyrichshof — Luftaufnahme"
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-4">Schloss Eyrichshof</p>
          <h1 className="font-heading text-5xl font-normal text-white leading-tight">
            Das Landschloss der Inspiration<br />heißt Sie herzlich willkommen
          </h1>
        </div>
      </div>

      {/* ── Contact ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="min-w-0">
            <div className="divide-y divide-warm-200">
              {team.map((person) => (
                <div key={person.name} className="group flex items-center gap-6 py-6 first:pt-0 last:pb-0">
                  <div className="relative flex-none w-20 h-20 overflow-hidden">
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-xl text-brand leading-snug">{person.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-warm-500 mt-1">{person.role}</p>
                    {person.email && (
                      <a href={`mailto:${person.email}`} className="inline-block mt-2 text-xs text-accent hover:text-accent-hover transition-colors truncate">
                        {person.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm prefix="b" />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-brand)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Immer informiert</p>
          <h2 className="font-heading text-4xl font-normal text-warm-50 mb-4">Newsletter</h2>
          <p className="text-warm-300 text-base mb-8 leading-relaxed">
            Erhalten Sie als Erste Informationen zu kommenden Veranstaltungen, exklusiven Angeboten
            und Neuigkeiten vom Schloss.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-warm-100 placeholder:text-warm-500 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors shrink-0"
            >
              Anmelden
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
