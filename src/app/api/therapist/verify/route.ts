import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  const token = request.nextUrl.searchParams.get('token');

  if (!id || !token) {
    return NextResponse.json({ error: 'Missing id or token' }, { status: 400 });
  }

  // Verify token matches a simple hash of the therapist ID + secret
  const expectedToken = Buffer.from(
    `${id}:${process.env.CRON_SECRET}`
  ).toString('base64url').slice(0, 32);

  if (token !== expectedToken) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  // Update last_verified_at
  const { error } = await supabase
    .from('therapist')
    .update({ last_verified_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }

  // Redirect to a thank you page or the profile
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profile Verified - Isha Health</title>
  <style>
    body { font-family: 'Poppins', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f0fdfa; }
    .card { background: white; padding: 3rem; border-radius: 12px; text-align: center; max-width: 500px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    h1 { color: #0f766e; font-size: 1.5rem; margin-bottom: 0.5rem; }
    p { color: #4b5563; line-height: 1.6; }
    a { color: #0d9488; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Profile Verified!</h1>
    <p>Thank you for confirming your information is up to date. Your profile now shows a verified badge on the <a href="https://isha.health/ketamine-therapist-directory">Isha Health directory</a>.</p>
    <p style="margin-top: 1.5rem;">Want to update your profile? <a href="https://findyourkaptherapist.isha.health/login">Log in here</a>.</p>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' },
  });
}
