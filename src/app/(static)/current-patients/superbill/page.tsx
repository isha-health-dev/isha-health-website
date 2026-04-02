import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Superbill",
  description: "Learn what a Superbill is in the healthcare industry and how it can be used to obtain reimbursement from your insurance company. Find out what information is typically included in a Superbill and how it can help you understand the costs associated with your healthcare. Discover how much reimbursement you could receive from your insurance company and the factors that could affect the amount.",
  alternates: {
    canonical: "https://isha.health/current-patients/superbill",
  },
  openGraph: {
    title: "Superbill",
    description: "Learn what a Superbill is in the healthcare industry and how it can be used to obtain reimbursement from your insurance company. Find out what information is typically included in a Superbill and how it can help you understand the costs associated with your healthcare. Discover how much reimbursement you could receive from your insurance company and the factors that could affect the amount.",
    type: "website",
    url: "https://isha.health/current-patients/superbill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superbill",
    description: "Learn what a Superbill is in the healthcare industry and how it can be used to obtain reimbursement from your insurance company. Find out what information is typically included in a Superbill and how it can help you understand the costs associated with your healthcare. Discover how much reimbursement you could receive from your insurance company and the factors that could affect the amount.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page display-none\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">Superbill<br></h1></div><div class=\"section-wrapper static-page-wrapper\"><div class=\"horizontal\"></div><div class=\"horizontal\"></div></div><div class=\"section-wrapper\"><div class=\"horizontal\"><div class=\"left40\"><h2 class=\"heading heading-left\">What is Superbill?</h2></div><p class=\"right60\">A superbill is a document that shows a list of services you received from a healthcare provider.You may be able to receive some amount of reimbursement for medical services by submit a superbill to your insurance company. Isha Health is an out of network provider. We will issue Superbill upon your request.<br></p></div><div class=\"balck-divider\"></div><div class=\"horizontal\"><div class=\"left40\"><h2 class=\"heading heading-left\">How much would I get reimbursed?</h2></div><p class=\"right60\">Based on your insurance carrier’s policies and your plan, several factors determine how much you may be reimbursed. &nbsp;These factors include:The amount allowed for a therapy service based on what your insurance company would pay for an in-network providerYour out-of-network benefit levelWhether you have met your out-of-network provider deductible for the yearYour coinsurance rate for out-of-network providers (the percentage of charges your insurance company expects you to pay)<br></p></div><div class=\"balck-divider\"></div></div></div><div class=\"section-base display-none\"><div class=\"section-wrapper\"><div class=\"horizontal step\"><div class=\"superbill-step\"><div class=\"vertical _30\"><h3 class=\"heading-6\">Step 1</h3><p>Email info@isha.health to get your Superbill. Team Isha Health will send you your Superbill as soon as it is ready.</p></div><a href=\"mailto:info@isha.health\" class=\"button-primary learn-more _100 w-button\">Send an Email</a></div><div class=\"superbill-step\"><div class=\"vertical _30\"><h3>Step 2</h3><p>Submit your claims for out-of-newtork health insurance reimbursement. Your insurance company will process your reimbursement according to the details of your plan.</p></div><a href=\"superbill.html#\" target=\"_blank\" class=\"button-primary learn-more _100 w-button\">Submit Claim to Insurance</a></div><div class=\"superbill-step\"><div class=\"vertical _30\"><h3>Step 3</h3><p>Get your money back! Once your insurance company finishes processing your claim, you will get a reimbursement. The amount would vary depending on the carrier’s policies and your plan.</p></div></div></div></div><div class=\"section-base white-section static-page display-none\"><div class=\"section-wrapper static-page-wrapper\"><div class=\"horizontal\"></div><div class=\"horizontal\"></div></div><div class=\"section-wrapper\"><div class=\"horizontal\"><div class=\"left40\"><h2 class=\"heading heading-left\">Don't want to deal with the paperwork?</h2></div><p class=\"right60\">Let us handle it for you. We'll collect your superbill and file your insurance claim for $15 per visit — you keep the rest.<br><br><a href=\"https://claims.isha.health\"><strong>Learn more and get your money back </strong></a><br><br></p></div><div class=\"horizontal\"><div class=\"left40\"></div></div></div></div><div class=\"balck-divider\"></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
