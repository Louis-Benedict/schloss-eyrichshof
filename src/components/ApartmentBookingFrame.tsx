import Link from 'next/link'

export default function ApartmentBookingFrame({
  apartmentName,
  bookingUrl,
  backHref,
}: {
  apartmentName: string
  bookingUrl: string
  backHref: string
}) {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-warm-200 bg-warm-50 shrink-0">
        <Link
          href={backHref}
          className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          ← Zurück zu {apartmentName}
        </Link>
        <span className="text-xs uppercase tracking-widest text-warm-500 truncate">
          {apartmentName} — Online buchen
        </span>
      </div>
      <iframe src={bookingUrl} title={`Online-Buchung ${apartmentName}`} className="flex-1 w-full border-0" />
    </div>
  )
}
