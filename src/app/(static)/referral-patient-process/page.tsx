import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Referral Patient Process | Isha Health",
  description: "Learn how to refer patients to Isha Health for ketamine treatment. Our step-by-step guide for therapists ensures a smooth referral process.",
  alternates: {
    canonical: "https://isha.health/referral-patient-process",
  },
  openGraph: {
    title: "Referral Patient Process | Isha Health",
    description: "Learn how to refer patients to Isha Health for ketamine treatment. Our step-by-step guide for therapists ensures a smooth referral process.",
    type: "website",
    url: "https://isha.health/referral-patient-process",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Patient Process | Isha Health",
    description: "Learn how to refer patients to Isha Health for ketamine treatment. Our step-by-step guide for therapists ensures a smooth referral process.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="padding:0 0 3rem;">
  <div style="text-align:center;padding:3rem 1.5rem 1.5rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;">
      Isha Health Patient Referral Process
    </h1>
  </div>

  <div style="max-width:800px;margin:0 auto;padding:0 1.5rem;">
    <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">

      <p style="margin:0 0 1.5rem;">
        If you are a clinician and have a patient who you would like to refer to Isha Health for ketamine treatment, please fill out the forms, upload them here through our secure HIPAA-compliant uploader, and direct your patient to our website to book their initial evaluation.
      </p>
      <p style="margin:0 0 1.5rem;">
        Upon confirmation of the booking of the initial evaluation, we will reach out to you to coordinate a time to discuss the care of your patient.
      </p>
      <p style="margin:0 0 2rem;font-weight:600;color:#0d9488;">
        Please note at this time we are only treating patients who live in AZ, CA, CO, FL, GA, OR, NY and WA.
      </p>

      <div style="text-align:center;margin-bottom:2.5rem;">
        <img
          src="/images/fbe17e2d_651de3a6b528c95cab226747_refer_a_patient2.webp"
          loading="lazy"
          alt="Refer a patient"
          style="max-width:100%;height:auto;border-radius:8px;"
        >
      </div>

      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;text-align:center;margin:0 0 2rem;">
        How It Works
      </h2>

      <div style="display:flex;flex-direction:column;gap:2rem;">

        <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;border-left:4px solid #0d9488;">
          <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin:0 0 0.5rem;">
            Step 1
          </h3>
          <p style="margin:0 0 1rem;">
            Please download this referral form and fill it out.
          </p>
          <a href="/images/a5d1388c_640863d49396515dcb6f34cc_Referral_Letter_fillable.pdf" target="_blank" style="display:inline-block;background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;text-align:center;width:100%;box-sizing:border-box;">
            DOWNLOAD THE REFERRAL FORM
          </a>
        </div>

        <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;border-left:4px solid #0d9488;">
          <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin:0 0 0.5rem;">
            Step 2
          </h3>
          <p style="margin:0 0 1rem;">
            Please download this release of information form and have your patient complete it.
          </p>
          <a href="/images/13a2db25_66157572f25adeb18612e8d5_Authorization_for_Release_of_Health_Information_to_Isha_Health.pdf" target="_blank" style="display:inline-block;background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;text-align:center;width:100%;box-sizing:border-box;">
            DOWNLOAD THE RELEASE FORM
          </a>
        </div>

        <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;border-left:4px solid #0d9488;">
          <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin:0 0 0.5rem;">
            Step 3
          </h3>
          <p style="margin:0 0 1rem;">
            Please email both completed forms to info@isha.health. All patient information is kept secure and HIPAA-compliant.
          </p>
          <a href="mailto:info@isha.health" style="display:inline-block;background:#0d9488;color:#fff;font-family:'Poppins',sans-serif;font-size:0.9rem;font-weight:600;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;text-align:center;width:100%;box-sizing:border-box;">
            SEND VIA EMAIL
          </a>
        </div>

        <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;border-left:4px solid #0d9488;">
          <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin:0 0 0.5rem;">
            Step 4
          </h3>
          <p style="margin:0;">
            Direct your patient to our website (<a href="https://www.isha.health/" target="_blank" style="color:#0d9488;text-decoration:underline;">https://www.isha.health</a>) to book the initial evaluation with us.
          </p>
        </div>

        <div style="background:#f9fafb;border-radius:10px;padding:1.5rem;border-left:4px solid #0d9488;">
          <h3 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin:0 0 0.5rem;">
            Step 5
          </h3>
          <p style="margin:0;">
            Upon confirmation of the booking of the initial evaluation, we will get in touch with you to arrange a time to discuss the treatment plan for the patient.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
`,
      }}
    />
  );
}
