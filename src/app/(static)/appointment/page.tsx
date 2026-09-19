import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

const TITLE = "New Patient Referrals - Isha Health";
const DESCRIPTION = "Isha Health accepts new patients by referral from a collaborating therapist. Current patients can continue to schedule online as usual.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isha.health/appointment",
  },
  openGraph: buildOpenGraph({
    title: TITLE,
    description: DESCRIPTION,
    path: '/appointment',
  }),
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="max-width:1100px;margin:0 auto;padding:2rem 1.5rem 4rem;">

  <div style="text-align:center;padding:2rem 0;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">New Patients Are Seen by Referral</h1>
    <p style="font-family:'Poppins',sans-serif;font-size:1rem;color:#6b7280;max-width:640px;margin:0 auto;line-height:1.7;">Isha Health accepts new patients through a referral from a collaborating therapist. Ketamine treatment works best alongside ongoing therapy, so we start by establishing that relationship.</p>
  </div>

  <div style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:10px;padding:1.25rem 1.5rem;margin-bottom:2.5rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#115e59;line-height:1.7;margin:0;">
      <strong>Already a patient at Isha Health?</strong> Continue to book follow-ups on the <a href="/current-patients/scheduling" style="color:#0d9488;text-decoration:underline;font-weight:600;">Current Patients scheduling page</a>.
    </p>
  </div>

  <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1.25rem;">Where You Are in the Process</h2>

  <div style="display:grid;gap:1.25rem;margin-bottom:2.5rem;">

    <div style="border:2px solid #0d9488;border-radius:10px;padding:1.5rem;background:#f0fdfa;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0d9488;margin-bottom:0.5rem;">If your therapist has already referred you</p>
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Book your consultation now</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:1rem;">
        Go straight to our scheduler and pick a time that works for you. Your first visit is a 60-minute consultation with a physician.
      </p>
      <a href="/appointment/schedule" style="display:inline-block;background:#0d9488;color:#fff;padding:10px 20px;border-radius:6px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none;">Book your consultation</a>
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.5rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0d9488;margin-bottom:0.5rem;">If you have a therapist but no referral yet</p>
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Ask them to reach out to us</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:1rem;">
        Any licensed therapist can collaborate with us. Send them to our <a href="/referral-patient-process" style="color:#0d9488;text-decoration:underline;">referral process page</a>, where they can submit your referral through our secure HIPAA-compliant uploader. Once we receive it, we contact you directly to schedule your consultation. Therapists new to us can also <a href="/collaborate-with-isha-health" style="color:#0d9488;text-decoration:underline;">introduce themselves here</a>.
      </p>
      <a href="/referral-patient-process" style="display:inline-block;background:#0d9488;color:#fff;padding:10px 20px;border-radius:6px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none;">Share the referral process page</a>
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:10px;padding:1.5rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0d9488;margin-bottom:0.5rem;">If you do not have a therapist yet</p>
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Find one in our clinician directory</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:1rem;">
        Our directory lists ketamine-informed therapists across the country, filterable by state, specialty, and visit type. Once you are working with one, they can refer you to us.
      </p>
      <a href="/ketamine-therapist-directory" style="display:inline-block;background:#0d9488;color:#fff;padding:10px 20px;border-radius:6px;font-family:'Poppins',sans-serif;font-size:0.875rem;font-weight:600;text-decoration:none;">Browse the clinician directory</a>
    </div>

  </div>

  <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:1.5rem;">
    <h2 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#111827;margin-bottom:1rem;">What to Expect Once You Are Referred</h2>
    <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:1rem;">
      Your first visit is a 60-minute consultation with a physician and costs $398. We treat patients in CA, CO, GA, OR, TX, and WA.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;margin-bottom:0.75rem;">
      Isha Health does not accept insurance, including Medicaid and Medicare. Payment is due at the time of service.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;margin-bottom:0.75rem;">
      <strong style="color:#374151;">Cancellation policy:</strong> A $140 fee applies for cancellations less than 48 hours before the appointment. No-shows are charged the full $398. <a href="/cancellation-policy-isha-health" style="color:#0d9488;text-decoration:underline;">View full policy</a>.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;margin:0;">
      Questions about whether a referral is possible in your situation? Email <a href="mailto:info@isha.health" style="color:#0d9488;text-decoration:underline;">info@isha.health</a>.
    </p>
  </div>

</div>`,
      }}
    />
  );
}
