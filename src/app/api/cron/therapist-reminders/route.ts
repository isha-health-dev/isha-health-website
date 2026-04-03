import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

const DAYS_BEFORE_REMINDER = 90;
const DAYS_BETWEEN_REMINDERS = 30;
const BASE_URL = 'https://isha.health';

function generateToken(id: string): string {
  return Buffer.from(
    `${id}:${process.env.CRON_SECRET}`
  ).toString('base64url').slice(0, 32);
}

function buildEmail(therapist: {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}): { subject: string; html: string } {
  const token = generateToken(therapist.id);
  const verifyUrl = `${BASE_URL}/api/therapist/verify?id=${therapist.id}&token=${token}`;
  const loginUrl = 'https://findyourkaptherapist.isha.health/login';

  return {
    subject: `${therapist.first_name}, is your Isha Health directory profile up to date?`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 2rem;">
    <img src="https://isha.health/images/isha_logo.webp" alt="Isha Health" style="height: 40px;" />
  </div>

  <p>Hi ${therapist.first_name},</p>

  <p>We want to make sure patients searching our
  <a href="${BASE_URL}/ketamine-therapist-directory" style="color: #0d9488;">therapist directory</a>
  can find accurate information about your practice.</p>

  <p>Could you take a moment to confirm your profile is up to date?</p>

  <div style="text-align: center; margin: 2rem 0;">
    <a href="${verifyUrl}" style="display: inline-block; background-color: #0d9488; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
      Yes, my info is up to date
    </a>
  </div>

  <p>If you need to make changes, you can
  <a href="${loginUrl}" style="color: #0d9488;">log in to update your profile</a>.</p>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0;" />

  <p style="font-size: 13px; color: #9ca3af;">
    This email was sent by Isha Health to keep our therapist directory accurate.
    You're receiving this because you have a profile on our directory.
  </p>
</body>
</html>`,
  };
}

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  const cronSecret = request.nextUrl.searchParams.get('secret');

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}` && cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - DAYS_BEFORE_REMINDER);

  const reminderCutoff = new Date();
  reminderCutoff.setDate(reminderCutoff.getDate() - DAYS_BETWEEN_REMINDERS);

  // Find therapists who:
  // 1. Have never verified, OR verified more than 90 days ago
  // 2. Haven't been sent a reminder in the last 30 days
  const { data: therapists, error } = await supabase
    .from('therapist')
    .select('id, first_name, last_name, email, last_verified_at, verification_reminder_sent_at')
    .or(`last_verified_at.is.null,last_verified_at.lt.${cutoffDate.toISOString()}`)
    .or(`verification_reminder_sent_at.is.null,verification_reminder_sent_at.lt.${reminderCutoff.toISOString()}`);

  if (error) {
    return NextResponse.json({ error: 'Query failed', details: error }, { status: 500 });
  }

  if (!therapists || therapists.length === 0) {
    return NextResponse.json({ message: 'No reminders needed', sent: 0 });
  }

  let sent = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const therapist of therapists) {
    if (!therapist.email) continue;

    const { subject, html } = buildEmail(therapist);

    try {
      await resend.emails.send({
        from: 'Isha Health <onboarding@resend.dev>',
        to: therapist.email,
        subject,
        html,
      });

      // Update reminder sent timestamp
      await supabase
        .from('therapist')
        .update({ verification_reminder_sent_at: new Date().toISOString() })
        .eq('id', therapist.id);

      sent++;
    } catch (err) {
      failed++;
      errors.push(`${therapist.email}: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }

  return NextResponse.json({
    message: `Sent ${sent} reminders, ${failed} failed`,
    sent,
    failed,
    total_eligible: therapists.length,
    errors: errors.slice(0, 10),
  });
}
