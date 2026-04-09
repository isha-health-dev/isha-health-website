import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get a Referral for Ketamine Therapy",
  description: "If you're interested in ketamine therapy, learn how to get a referral from your doctor to our online clinic for at-home treatment.",
  alternates: {
    canonical: "https://isha.health/current-patients/referral-from-your-primary-doctor",
  },
  openGraph: {
    title: "Get a Referral for Ketamine Therapy",
    description: "If you're interested in ketamine therapy, learn how to get a referral from your doctor to our online clinic for at-home treatment.",
    type: "website",
    url: "https://isha.health/current-patients/referral-from-your-primary-doctor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Referral for Ketamine Therapy",
    description: "If you're interested in ketamine therapy, learn how to get a referral from your doctor to our online clinic for at-home treatment.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div style=\"padding:0 0 2rem;\"><div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">Qualified Telemedicine Referral Letter</h1></div></div><div class=\"section-wrapper referral-letter\"><div style=\"margin:1rem 0;\"><div class=\"w-embed\"><a href=\"https://www.dropbox.com/request/nDpRrdK7rWit60juaGnZ\" class=\"dropbox-embed\" data-height=\"300px\" data-width=\"600px\"></a></div></div><div style=\"margin-bottom:1.5rem;\"><div style=\"flex:0 0 35%;min-width:200px;\"><h2 style=\"font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:0.75rem;\">Who needs a qualified telemedicine referral?</h2></div><p style=\"flex:1 1 60%;font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\">Under the proposed DEA rule, you need to have a qualified telemedicine referral from a DEA registered provider who examined you in person to receive ketamine treatment after the initial first 30 days if you started treatmetn with an online provider such as Isha Health after May 11, 2023. If you are a patient who started your treatment before that date, you need to have such a referral before November to be able to continue the treatment with us.<br></p></div><div style=\"border-top:1px solid #e5e7eb;margin:2rem 0;\"></div><div style=\"margin-bottom:1.5rem;\"><div style=\"flex:0 0 35%;min-width:200px;\"><h2 style=\"font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:0.75rem;\">Why do I need to get a qualified telemedicine referral letter?</h2></div><p style=\"flex:1 1 60%;font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\">Before the COVID-19 Public Health Emergency, a doctor had to perform at least one in-person examination of a patient to prescribe a controlled substance including Ketamine. During the PHE, this rule was lifted making it possible for a doctor to prescribe ketamine based solely on a telemedicine evaluation. As the PHE expires on May 11, 2023, the telemedicine prescribing rules around controlled substances will generally be back to what they were before the pandemic except for a few special occasions. According to the rules proposed by the DEA in Februrary, 2023, one of the ways for a patient to be able to continue treatment with controlled sustances online is to get a qualified referral.<br><br>If you are a patient receiving a controlled substance from a provider who you have never met in person, you will need to get a qualified telemedicine referral. If your first appointment with your online provider was before May 11, 2023, you need to get such a referral by November to continue your treatment. If you started seeing your online provider after May 11, 2023, you can only receive a 30-day supply of meditation from the initial online doctor visit, beyond which you will need to get a qualified telemedicine referral to continue your treatment.<br></p></div><div style=\"border-top:1px solid #e5e7eb;margin:2rem 0;\"></div><div style=\"margin-bottom:1.5rem;\"><div style=\"flex:0 0 35%;min-width:200px;\"><h2 style=\"font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:0.75rem;\">How can I get a qualified telemedicine referral?</h2></div><p style=\"flex:1 1 60%;font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;\">In order for your referral to be considered a qualified telemedicine referral, it needs to in a written form and contain certain information. We created a prefilled for our patients to make the process easier. Please use the form in the link below(step 1), ask your DEA registered provider to fill it out, and upload the document from the secured uploader below (step 2).<br></p></div></div><div class=\"section-base\"><div style=\"max-width:800px;margin:0 auto;padding:1.5rem;\"><div class=\"horizontal step\"><div class=\"qualified-referral-letter-steps\"><div class=\"vertical _30\"><h3 class=\"heading-6\">Step 1</h3><p>Please have your doctor write a referral letter to Isha Health. Click the button below to download the referral letter template.</p></div><a href=\"/images/a5d1388c_640863d49396515dcb6f34cc_Referral_Letter_fillable.pdf\" target=\"_blank\" class=\"button-primary learn-more _100 w-button\">Download the Referral Letter Template</a></div><div class=\"qualified-referral-letter-steps\"><div class=\"vertical _30\"><h3>Step 2</h3><p>Once you have completed the referral letter, please send it as an attachment to <strong>info@isha.health</strong>.</p></div><a href=\"mailto:info@isha.health\" class=\"button-primary learn-more _100 w-button\">EMAIL YOUR REFERRAL LETTER</a></div></div></div></div>",
      }}
    />
  );
}
