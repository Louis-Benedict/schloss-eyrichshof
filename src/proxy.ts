import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Stashes the requested pathname on a header so that src/app/not-found.tsx
// can forward it to the shop domain when nothing on this site matches.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
