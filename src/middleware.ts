import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // If there's a Supabase auth code in the URL, redirect to the dashboard
  // But not if we're already on the dashboard (prevents redirect loop)
  if (
    searchParams.has('code') &&
    !request.nextUrl.pathname.startsWith('/auth/') &&
    !request.nextUrl.pathname.startsWith('/ketamine-therapist-directory/dashboard')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/ketamine-therapist-directory/dashboard';
    url.searchParams.delete('code');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|images|css|js|favicon|api).*)'],
};
