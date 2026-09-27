import type { Metadata } from 'next'
import ApartmentBookingFrame from '@/components/ApartmentBookingFrame'
import { apartments } from '@/data/ferienwohnungen'

const apartment = apartments.find((apt) => apt.id === 'dekanshaus')!

export const metadata: Metadata = { title: `${apartment.name} buchen`, robots: { index: false, follow: true } }

export default function DekanshausBuchenPage() {
  return (
    <ApartmentBookingFrame
      apartmentName={apartment.name}
      bookingUrl={apartment.bookingUrl}
      backHref="/ferienwohnungen#dekanshaus"
    />
  )
}
