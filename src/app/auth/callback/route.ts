import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (code) {
    // Code exchange happens client-side, just redirect to dashboard
    return NextResponse.redirect(
      new URL('/ketamine-therapist-directory/dashboard', request.url)
    );
  }

  return NextResponse.redirect(
    new URL('/ketamine-therapist-directory/login', request.url)
  );
}
