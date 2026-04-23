import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Appointment Scheduling for Current Patients",
  description: "For current patients: Schedule your follow-up appointments quickly and easily with Isha Health. Manage your healthcare online in just a few clicks.",
  alternates: {
    canonical: "https://isha.health/current-patients/scheduling",
  },
  openGraph: buildOpenGraph({
    title: "Appointment Scheduling for Current Patients",
    description: "For current patients: Schedule your follow-up appointments quickly and easily with Isha Health. Manage your healthcare online in just a few clicks.",
    path: '/current-patients/scheduling',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Appointment Scheduling for Current Patients",
    description: "For current patients: Schedule your follow-up appointments quickly and easily with Isha Health. Manage your healthcare online in just a few clicks.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 3rem;">

  <div style="text-align:center;margin-bottom:2rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0 0 0.5rem;">Scheduling</h1>
    <div style="width:60px;height:3px;background:#0d9488;margin:0 auto;border-radius:2px;"></div>
  </div>

  <div style="background:#f0fdfa;border-left:4px solid #0d9488;padding:1.25rem 1.5rem;margin-bottom:2rem;border-radius:0 8px 8px 0;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin:0;">Please note that this appointment scheduler is for patients who are currently receiving treatment with us.<br>If you are a new patient, please visit our <a href="/appointment" style="color:#0d9488;font-weight:600;text-decoration:underline;">Make an Appointment page</a>.</p>
  </div>

  <div style="border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <iframe src="https://app.squarespacescheduling.com/schedule.php?owner=26756408" title="Schedule Appointment" width="100%" height="800" frameborder="0" style="display:block;border:none;"></iframe>
  </div>

</div>
`,
      }}
    />
  );
}
