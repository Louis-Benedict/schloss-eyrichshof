import type { Metadata } from 'next'
import ApartmentBookingFrame from '@/components/ApartmentBookingFrame'
import { apartments } from '@/data/ferienwohnungen'

const apartment = apartments.find((apt) => apt.id === 'zum-brunnen')!

export const metadata: Metadata = { title: `${apartment.name} buchen` }

export default function ZumBrunnenBuchenPage() {
  return (
    <ApartmentBookingFrame
      apartmentName={apartment.name}
      bookingUrl={apartment.bookingUrl}
      backHref="/ferienwohnungen#zum-brunnen"
    />
  )
}
