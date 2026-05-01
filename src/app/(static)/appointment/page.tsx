import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Make an Appointment - Online Ketamine Therapy for…",
  description: "Book your online ketamine therapy consultation with a licensed clinician. Most patients notice improvement within days of starting treatment.",
  alternates: {
    canonical: "https://isha.health/appointment",
  },
  openGraph: buildOpenGraph({
    title: "Make an Appointment - Online Ketamine Therapy for…",
    description: "Book your online ketamine therapy consultation with a licensed clinician. Most patients notice improvement within days of starting treatment.",
    path: '/appointment',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Make an Appointment - Online Ketamine Therapy for…",
    description: "Book your online ketamine therapy consultation with a licensed clinician. Most patients notice improvement within days of starting treatment.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="max-width:1100px;margin:0 auto;padding:2rem 1.5rem 4rem;">

  <div style="text-align:center;padding:2rem 0;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Schedule Your Initial Consultation</h1>
    <p style="font-family:'Poppins',sans-serif;font-size:1rem;color:#6b7280;">60 minutes with a physician &middot; $398 &middot; Available in 8 states</p>
  </div>

  <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:1.5rem;margin-bottom:2rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;margin-bottom:1rem;">
      This scheduler is for <strong>new patients</strong>. If you are currently receiving treatment, please schedule on the <a href="/current-patients/scheduling" style="color:#0d9488;text-decoration:underline;">Current Patients page</a>.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;margin-bottom:0.75rem;">
      Isha Health does not accept insurance, including Medicaid and Medicare. Payment is due at the time of service. Please mind the time zone when booking.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;margin-bottom:0.75rem;">
      <strong style="color:#374151;">Cancellation policy:</strong> A $120 fee applies for cancellations less than 48 hours before the appointment. No-shows are charged the full $398. <a href="/cancellation-policy-isha-health" style="color:#0d9488;text-decoration:underline;">View full policy</a>.
    </p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;line-height:1.6;">
      No availability showing? Email <a href="mailto:info@isha.health" style="color:#0d9488;text-decoration:underline;">info@isha.health</a> — we may be able to accommodate you sooner.
    </p>
  </div>

  <div style="margin-bottom:1rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;font-weight:600;color:#111827;margin-bottom:0.5rem;">Available in: AZ, CA, CO, FL, GA, OR, TX, WA</p>
  </div>

  <div id="all-states-booking" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
    <iframe src="https://app.acuityscheduling.com/schedule.php?owner=26756408&amp;appointmentType=38092182&amp;numDays=5" width="100%" height="800" frameborder="0" style="display:block;"></iframe>
  </div>

  <div style="text-align:center;margin-top:2rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#9ca3af;">To reschedule or cancel, email <a href="mailto:info@isha.health" style="color:#0d9488;">info@isha.health</a></p>
  </div>

</div>`,
      }}
    />
  );
}
