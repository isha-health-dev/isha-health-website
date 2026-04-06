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
        __html: "<div class=\"hero-isha\"><h1 class=\"heading static-heading\">ISHA HEALTH PATIENT REFERRAL PROCESS</h1></div><div class=\"section-wrapper\"><div class=\"horizontal\"><div class=\"w-richtext\"><p>If you are a clinician and have a patient who you would like to refer to Isha Health for ketamine treatment, please fill out the forms, upload them here through our secure HIPAA-compliant uploader, and direct your patient to our website to book their initial evaluation.<br>Upon confirmation of the booking of the initial evaluation, we will reach out to you to coordinate a time to discuss the care of your patient.<br><br>Please note at this time we are only treating patients who live in AZ, CA, CO, FL, GA, OR, NY and WA.</p><h3>‍</h3></div><div class=\"_40\"></div><img src=\"/images/fbe17e2d_651de3a6b528c95cab226747_refer_a_patient2.webp\" loading=\"lazy\" alt=\"Refer a patient2\"></div><div></div></div><div class=\"section-base center\"><div class=\"vertical\"><h2 class=\"heading-26\">How It Works</h2><div class=\"inner-how-it-works\"><div class=\"outer-referral-step\"><h3 class=\"heading-6\">Step 1</h3><div class=\"vertical _30 qualified-referral-letter-steps\"><div class=\"w-richtext\"><p>Please download this referral form and fill it out.</p></div><a href=\"/images/a5d1388c_640863d49396515dcb6f34cc_Referral_Letter_fillable.pdf\" target=\"_blank\" class=\"button-primary learn-more _100 w-button\">DOWNLOAD THE REFERRAL FORM</a></div></div><div class=\"outer-referral-step\"><h3 class=\"heading-6\">Step 2</h3><div class=\"vertical _30 qualified-referral-letter-steps\"><div class=\"w-richtext\"><p>Please download this release of information form and have your patient complete it.</p></div><a href=\"/images/13a2db25_66157572f25adeb18612e8d5_Authorization_for_Release_of_Health_Information_to_Isha_Health.pdf\" target=\"_blank\" class=\"button-primary learn-more _100 w-button\">DOWNLOAD THE RELEASE FORM</a></div></div><div class=\"outer-referral-step\"><h3 class=\"heading-6\">Step 3</h3><div class=\"vertical _30 qualified-referral-letter-steps\"><div class=\"w-richtext\"><p>Please email both completed forms to info@isha.health. All patient information is kept secure and HIPAA-compliant.</p></div><a href=\"mailto:info@isha.health\" class=\"button-primary learn-more _100 w-button\">SEND VIA EMAIL</a></div></div><div class=\"outer-referral-step\"><h3 class=\"heading-6\">Step 4</h3><div class=\"vertical _30 qualified-referral-letter-steps\"><div class=\"w-richtext\"><p>Direct your patient to our website(<a target=\"_blank\" href=\"https://www.isha.health/\">https://www.isha.health</a>) to book the initial evaluation with us.</p></div></div></div><div class=\"outer-referral-step\"><h3 class=\"heading-6\">Step 5</h3><div class=\"vertical _30 qualified-referral-letter-steps\"><div class=\"w-richtext\"><p>Upon confirmation of the booking of the initial evaluation, we will get in touch with you to arrange a time to discuss the treatment plan for the patient.</p></div></div></div></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
