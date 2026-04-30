import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

const description =
  'Request a superbill from Isha Health or submit an out-of-network insurance claim via Reimbursify to seek reimbursement for ketamine therapy.';

export const metadata: Metadata = {
  title: 'Request Your Superbill',
  description,
  robots: { index: true, follow: true },
  openGraph: buildOpenGraph({
    title: 'Request Your Superbill | Isha Health',
    description,
    path: '/current-patients/superbill',
  }),
};

export default function SuperbillPage() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="padding:0 0 2rem;">
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">Request Your Superbill</h1>
  </div>
  <div style="max-width:800px;margin:0 auto;padding:1.5rem;" style="max-width:700px;margin:0 auto;padding:2rem 1.5rem;">

    <p style="font-family:'Poppins',sans-serif;font-size:1rem;color:#4b5563;line-height:1.7;text-align:center;margin-bottom:2.5rem;text-wrap:pretty;">
      Use the options below to request a superbill or submit an insurance claim for reimbursement.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:1.5rem;justify-content:center;margin-bottom:2.5rem;">

      <!-- Reimbursify claim -->
      <a href="https://reimbursify.com/" target="_blank" rel="noopener noreferrer" style="flex:1 1 280px;max-width:320px;padding:2rem;border:2px solid #0d9488;border-radius:12px;text-decoration:none;text-align:center;background:#f0fdfa;">
        <p style="font-family:'Libre Baskerville',serif;font-size:1.15rem;font-weight:700;color:#0f766e;margin-bottom:0.5rem;">Submit a Claim</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Upload your superbill and insurance card via Reimbursify to file an out-of-network claim electronically.</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#0d9488;font-weight:600;margin-top:1rem;">Go to Reimbursify →</p>
      </a>

      <!-- Email request -->
      <a href="mailto:info@isha.health?subject=Superbill%20Request&body=Hi%2C%20I'd%20like%20to%20request%20a%20superbill.%0A%0APatient%20name%3A%20%0ADate%20of%20birth%3A%20%0AVisit%20date(s)%3A%20%0AClinician%20name%3A%20" style="flex:1 1 280px;max-width:320px;padding:2rem;border:1px solid #e5e7eb;border-radius:12px;text-decoration:none;text-align:center;background:#fff;">
        <p style="font-family:'Libre Baskerville',serif;font-size:1.15rem;font-weight:700;color:#111827;margin-bottom:0.5rem;">Request via Email</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#4b5563;line-height:1.5;">Email info@isha.health with your name, date of birth, visit dates, and clinician name. We'll send your superbill within 1-2 business days.</p>
        <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#0d9488;font-weight:600;margin-top:1rem;">Send email →</p>
      </a>

    </div>

    <!-- Learn more -->
    <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;text-align:center;border:1px solid #e5e7eb;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.6;">
        <strong>New to superbills?</strong> Read our complete guide on
        <a href="/post/ketamine-therapy-insurance-superbill" style="color:#0d9488;text-decoration:underline;">how to get reimbursed for ketamine therapy</a>
        — including what insurance covers, how much you can expect back, and how to appeal a denial.
      </p>
    </div>

    <!-- HSA/FSA note -->
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#9ca3af;text-align:center;margin-top:1.5rem;">
      HSA and FSA cards are accepted for all Isha Health services. No superbill needed for HSA/FSA payments.
    </p>

  </div>
</div>`,
      }}
    />
  );
}
