import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Appointment Scheduling for Current Patients",
  description: "For current patients: Schedule your follow-up appointments quickly and easily with Isha Health. Manage your healthcare online in just a few clicks.",
  alternates: {
    canonical: "https://isha.health/current-patients/scheduling",
  },
  openGraph: {
    title: "Appointment Scheduling for Current Patients",
    description: "For current patients: Schedule your follow-up appointments quickly and easily with Isha Health. Manage your healthcare online in just a few clicks.",
    type: "website",
    url: "https://isha.health/current-patients/scheduling",
  },
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
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">Scheduling</h1></div><div class=\"section-wrapper\"><div class=\"square-space-description\"><p>Please note that this appointment scheduler is for patients who are currently receiving treatment with us.<br>If you are a new patient, please visit our <a href=\"/appointment\"><strong>Make an Appointment page</strong></a>.</p></div></div><div class=\"w-embed w-iframe w-script\"><iframe src=\"https://app.squarespacescheduling.com/schedule.php?owner=26756408\" title=\"Schedule Appointment\" width=\"100%\" height=\"800\" frameborder=\"0\"></iframe></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
