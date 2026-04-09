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
    images: ["/images/isha_logo.webp"],
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
        __html: "<div style=\"padding:0 0 2rem;\"><div style=\"text-align:center;padding:3rem 1.5rem 1.5rem;\"><h1 style=\"font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0;\">Scheduling</h1></div><div style=\"max-width:800px;margin:0 auto;padding:1.5rem;\"><div class=\"square-space-description\"><p>Please note that this appointment scheduler is for patients who are currently receiving treatment with us.<br>If you are a new patient, please visit our <a href=\"/appointment\"><strong>Make an Appointment page</strong></a>.</p></div></div><div class=\"w-embed w-iframe w-script\"><iframe src=\"https://app.squarespacescheduling.com/schedule.php?owner=26756408\" title=\"Schedule Appointment\" width=\"100%\" height=\"800\" frameborder=\"0\"></iframe></div></div>",
      }}
    />
  );
}
