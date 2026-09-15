import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { SHOP_ROOT_URL } from '@/lib/site'

// Anything that doesn't match a route on this site is assumed to be an old
// shop/product URL and sent to the same path on the shop domain instead of
// showing our own 404. Deliberately the shop root, not SHOP_URL (/shop) —
// that path is for ticket sales specifically, not a generic landing point.
// The requested pathname is forwarded via a header set in src/proxy.ts,
// since not-found.tsx doesn't receive the path as a prop.
export default async function NotFound() {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? ''
  redirect(`${SHOP_ROOT_URL}${pathname}`)
}
