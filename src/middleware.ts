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

  // Redirect old UUID therapist profile URLs to directory listing
  const uuidPattern = /^\/ketamine-therapist-directory\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  if (uuidPattern.test(request.nextUrl.pathname)) {
    return NextResponse.redirect(
      new URL('/ketamine-therapist-directory', request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|images|css|js|favicon|api).*)'],
};
