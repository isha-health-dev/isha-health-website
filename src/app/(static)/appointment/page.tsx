import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Make an Appointment - Online Ketamine Therapy for Depression & Anxiety",
  description: "Ready to start your journey towards better mental health with online ketamine therapy? Book an appointment with ISHA Health today to learn more about our services and how we can support you. Our experienced team is dedicated to helping you achieve optimal mental health and wellbeing from the comfort of your own home.",
  alternates: {
    canonical: "https://isha.health/appointment",
  },
  openGraph: {
    title: "Make an Appointment - Online Ketamine Therapy for Depression & Anxiety",
    description: "Ready to start your journey towards better mental health with online ketamine therapy? Book an appointment with ISHA Health today to learn more about our services and how we can support you. Our experienced team is dedicated to helping you achieve optimal mental health and wellbeing from the comfort of your own home.",
    type: "website",
    url: "https://isha.health/appointment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make an Appointment - Online Ketamine Therapy for Depression & Anxiety",
    description: "Ready to start your journey towards better mental health with online ketamine therapy? Book an appointment with ISHA Health today to learn more about our services and how we can support you. Our experienced team is dedicated to helping you achieve optimal mental health and wellbeing from the comfort of your own home.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">SCHEDULE YOUR INITIAL&nbsp;CONSULTATION</h1></div><div class=\"section-wrapper static-page-wrapper\"><p class=\"square-space-description\">Please note that this appointment scheduler is for patients who are new to Isha Health. If you are a patient currently receiving treatment with us, please make an appointment on <a target=\"_blank\" href=\"https://isha-health.webflow.io/current-patients/scheduling\">Current Patients page</a>.<br><br>Isha Health does not accept any insurance, including Medicaid and Medicare. Payment is due at the time of service.<br><br>Please remember to mind the time zone and avoid any scheduling surprises.<br><strong><br>A late cancellation fee of $120 will be charged</strong> if the cancellation or rescheduling occurs less than 48 hours before the scheduled appointment. In the case of a no-show without any notice, <strong>a charge of $350 will be applied.</strong>‍<br>Please review <a href=\"/cancellation-policy-isha-health\"><strong>our cancellation policy</strong></a> prior to making an appointment.<br><br>If there are no immediate appointments available, please don't hesitate to contact us directly at <a href=\"/appointment#\">info@isha.health</a>. We may be able to accommodate you at an earlier time.<br><br>If you'd like to make any changes, please email <a target=\"_blank\" href=\"mailto:info@isha.health\">info@isha.health</a>.<br></p><div class=\"c-accordion-item-a how-it-works\"><div class=\"_w-accordion-item-a\"><div id=\"all-states-booking\" class=\"c-accordion-item\"><div class=\"_w-accordion-item\"><div class=\"c-accordion-item-q\"><div class=\"_w-accordion-item-q\"><div class=\"c-accordion-item-q-text\"><div class=\"_w-accordion-item-q-text\"><h3 class=\"heading-11\">If YOU&nbsp;ARE&nbsp;IN&nbsp;AZ, CA, CO, FL, TX, NY, OR, GA or WA</h3></div></div><div class=\"c-accordion-item-q-icon\"><div class=\"_w-accordion-item-q-icon\"><div class=\"accordion-item-q-icon-stripe-1\"></div><div class=\"accordion-item-q-icon-stripe-2\"></div></div></div></div></div><div class=\"c-accordion-item-a\"><div class=\"_w-accordion-item-a\"><div class=\"w-embed w-iframe w-script\"><iframe src=\"https://app.acuityscheduling.com/schedule.php?owner=26756408&amp;owner=26756408&amp;appointmentType=38092182\" width=\"100%\" height=\"800\" frameborder=\"0\"></iframe>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div></div></div></div></div></div></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
