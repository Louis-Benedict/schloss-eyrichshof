import Image from 'next/image'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import NewsletterInlineForm from '@/components/NewsletterInlineForm'
import ContactForm from '@/components/ContactForm'
import { team, THEMA_OPTIONS } from '@/lib/team'

export const metadata: Metadata = { title: 'Kontakt' }

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ thema?: string }>
}) {
  const { thema } = await searchParams
  const defaultThema = THEMA_OPTIONS.find((option) => option.value === thema)?.value

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
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent mb-4">Schloss Eyrichshof</p>
          <h1 className="font-heading text-5xl font-normal text-white leading-tight">
            Das Schloss Eyrichshof<br />heißt Sie herzlich willkommen
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
                    <p className="text-[11px] uppercase tracking-[0.18em] text-warm-500 mt-1">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm defaultThema={defaultThema} />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-brand)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">Immer informiert</p>
          <h2 className="font-heading text-4xl font-normal text-warm-50 mb-4">Newsletter</h2>
          <p className="text-warm-100 text-base mb-8 leading-relaxed">
            Erhalten Sie als Erste Informationen zu kommenden Veranstaltungen, exklusiven Angeboten
            und Neuigkeiten vom Schloss.
          </p>
          <NewsletterInlineForm />
        </div>
      </section>
    </>
  )
}
