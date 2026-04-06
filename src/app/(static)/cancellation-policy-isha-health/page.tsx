import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cancellation Policy | Isha Health",
  description: "Review the cancellation policy at Isha Health. Understand the terms and conditions regarding appointment cancellations and rescheduling.",
  alternates: {
    canonical: "https://isha.health/cancellation-policy-isha-health",
  },
  openGraph: {
    title: "Cancellation Policy | Isha Health",
    description: "Review the cancellation policy at Isha Health. Understand the terms and conditions regarding appointment cancellations and rescheduling.",
    type: "website",
    url: "https://isha.health/cancellation-policy-isha-health",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy | Isha Health",
    description: "Review the cancellation policy at Isha Health. Understand the terms and conditions regarding appointment cancellations and rescheduling.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">Cancellation &amp; Rescheduling policy</h1></div><div class=\"section-wrapper static-page-wrapper\"><h2>Cancellation &amp; Rescheduling policy</h2><div class=\"rich-text w-richtext\"><p>At Isha Health, we understand that circumstances may arise where you need to cancel or reschedule your scheduled appointment. We have established the following cancellation &amp; rescheduling policy to ensure efficient management of our appointments and to provide fair opportunities for all patients.</p><p>‍</p><p>1. Cancellation &amp; Rescheduling Process:</p><p> &nbsp;a. Online Scheduler:</p><ul role=\"list\"><li>Find the confirmation email for your originally scheduled appointment</li><li>Click on the Change/Cancel Appointment button</li><li>Fow the prompts to make the necessary changes and save the confirmation email as proof, as we may request it in the future.</li></ul><p> &nbsp;&nbsp;b. Email:</p><ul role=\"list\"><li>If you prefer to cancel or reschedule your appointment via email, please write to info@isha.health at least 48 hours before your scheduled appointment.</li><li>Include your full name, appointment date, and time in the email to help us process your request promptly.</li></ul><p>‍</p><p>2. Notice Period:</p><ul role=\"list\"><li>&nbsp;We kindly request that you provide at least 48 hours' notice for cancellations or rescheduling.</li><li>This allows us to offer the appointment slot to another patient in need of treatment.</li></ul><p>‍</p><p>3. Cancellation Charges:</p><ul role=\"list\"><li><strong>A late cancellation fee of $120 will be charged</strong> if the cancellation or rescheduling occurs less than 48 hours before the scheduled appointment.</li><li>In the case of a no-show without any notice, <strong>a charge of $350 will be applied.</strong></li></ul><p>‍</p><p>4. Proof of Cancellation:</p><ul role=\"list\"><li>In certain cases, Isha Health reserves the right to request proof of cancellation.</li><li>If requested, you will be asked to present the confirmation email or any other relevant documentation to demonstrate the cancellation of your appointment.</li></ul><p>‍</p><p>5. Rescheduling Policy:</p><ul role=\"list\"><li>If you wish to reschedule your appointment, we encourage you to do so as early as possible, within the specified notice period.</li><li>Rescheduling is subject to availability, and we will make every effort to accommodate your request.</li></ul><p>‍</p><p>Please note that the cancellation &amp; rescheduling policy is in place to ensure optimal utilization of our resources and to provide timely care for all patients. By adhering to this policy, you allow us to offer available appointments to others in need.</p><p>We appreciate your understanding and cooperation with our cancellation policy. If you have any questions or require further clarification, please feel free to contact our clinic. Our team is here to assist you.</p><p>‍</p><p>Sincerely,</p><p>‍</p><p>Isha Health</p><p>‍</p></div><h2>Contact Us</h2><p>If you have any questions about this policy, please contact us at the below email address.<br>‍<a href=\"mailto:info@isha.health\">info@isha.health</a><br></p></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
