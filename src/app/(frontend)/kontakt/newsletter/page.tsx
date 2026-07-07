import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = { title: 'Newsletter' }

const CONFIRMATION_MESSAGES = {
  success: {
    tone: 'success' as const,
    text: 'Ihre Anmeldung ist bestätigt. Vielen Dank!',
  },
  invalid: {
    tone: 'error' as const,
    text: 'Dieser Bestätigungslink ist ungültig oder abgelaufen. Bitte melden Sie sich erneut an.',
  },
  error: {
    tone: 'error' as const,
    text: 'Bei der Bestätigung ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.',
  },
}

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: Promise<{ confirmed?: string }>
}) {
  const { confirmed } = await searchParams
  const message = confirmed && confirmed in CONFIRMATION_MESSAGES
    ? CONFIRMATION_MESSAGES[confirmed as keyof typeof CONFIRMATION_MESSAGES]
    : null

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Newsletter"
        description="Bleiben Sie über Veranstaltungen, Neuigkeiten und besondere Angebote auf Schloss Eyrichshof informiert."
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {message && (
          <p
            className={`mb-8 text-sm px-4 py-3 border ${
              message.tone === 'success'
                ? 'text-brand border-brand/30 bg-brand/5'
                : 'text-red-600 border-red-200 bg-red-50'
            }`}
          >
            {message.text}
          </p>
        )}
        <NewsletterForm />
      </div>
    </>
  )
}
