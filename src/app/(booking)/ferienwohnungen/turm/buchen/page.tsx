import type { Metadata } from 'next'
import ApartmentBookingFrame from '@/components/ApartmentBookingFrame'
import { apartments } from '@/data/ferienwohnungen'

const apartment = apartments.find((apt) => apt.id === 'turm')!

export const metadata: Metadata = { title: `${apartment.name} buchen` }

export default function TurmBuchenPage() {
  return (
    <ApartmentBookingFrame
      apartmentName={apartment.name}
      bookingUrl={apartment.bookingUrl}
      backHref="/ferienwohnungen#turm"
    />
  )
}
