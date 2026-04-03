import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing",
  description: "ISHA Health offers online ketamine therapy for depression and anxiety. Our services include personalized treatment plans, virtual therapy sessions, and ongoing support from our experienced team. Book your first appoinement to start your journey towards better mental health.",
  alternates: {
    canonical: "https://isha.health/pricing",
  },
  openGraph: {
    title: "Pricing",
    description: "ISHA Health offers online ketamine therapy for depression and anxiety. Our services include personalized treatment plans, virtual therapy sessions, and ongoing support from our experienced team. Book your first appoinement to start your journey towards better mental health.",
    type: "website",
    url: "https://isha.health/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing",
    description: "ISHA Health offers online ketamine therapy for depression and anxiety. Our services include personalized treatment plans, virtual therapy sessions, and ongoing support from our experienced team. Book your first appoinement to start your journey towards better mental health.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "<div class=\"section-base white-section static-page\"><div class=\"hero-isha\"><h1 class=\"heading static-heading\">FEES&nbsp;AND&nbsp;POLICIES</h1></div><div class=\"horizontal pricing-wrapper\"><div class=\"pricing-main-pic-wrapper\"><img src=\"/images/d657594d_635322cf63bfeddb7937b87a_pricing-main2.jpg\" loading=\"lazy\" sizes=\"(max-width: 991px) 100vw, 853.328125px\" height=\"1280\" alt=\"Pricing main2\" srcset=\"/images/f1f52164_635322cf63bfeddb7937b87a_pricing-main2-p-500.jpg 500w, /images/6ef12321_635322cf63bfeddb7937b87a_pricing-main2.jpg 640w\" class=\"image-11\"></div><div class=\"pricing-main-text-wrapper\"><div class=\"vertical\"><div class=\"horizontal left-align pricing-outer\"><div class=\"w-richtext\"><h3 class=\"pricing\">Initial Consultation (60mins): <br></h3></div><div class=\"horizontal pricing-inner\"><div class=\"w-richtext\"><h3 class=\"pricing\">$350</h3></div></div></div><h3 class=\"heading-25\">Follow-up Appointment(30mins):&nbsp;$350</h3></div><div class=\"pricing-main-included-product\"><img src=\"/images/acba7070_635332566e708a87664f93da_pricing-main-slider1.png\" loading=\"lazy\" alt=\"Pricing main slider1\" class=\"pricing-slider-pic\"><img src=\"/images/713ab0b5_635332561bb1a24e5cc6191b_pricing-main-slider2.png\" loading=\"lazy\" alt=\"Pricing main slider2\" class=\"pricing-slider-pic\"><img src=\"/images/b64ac855_635332565ee93e8052829b13_pricing-main-slider3.png\" loading=\"lazy\" alt=\"Pricing main slider3\" class=\"pricing-slider-pic\"><img src=\"/images/85563a14_635332565ee93eb359829b12_pricing-main-slider4.png\" loading=\"lazy\" alt=\"Pricing main slider4\" class=\"pricing-slider-pic\"></div><div class=\"captions\"><div class=\"w-richtext\"><h3>FAQ</h3><p>‍</p><p><strong>Do you offer your service in my state?</strong></p><p>We offer our treatment in California, Colorado, Florida, Texas, Arizona, Oregon, New York, Georgia, and Washington.</p><p>‍</p><p class=\"paragraph-37\"><strong>Can I use HSA/FSA?</strong></p><p class=\"paragraph-38\">Yes, you can use your HSA/FSA at Isha Health.</p><p>‍</p><p><strong>What pharmacy should I use?&nbsp;</strong></p><p>You typically pay $50-150 for a 30 day supply of the medication depending on where you live. If you have a preferred pharmacy, we can send the prescription to the pharmacy as well.</p><p>‍</p></div></div><div class=\"div-block-44\"><a href=\"/appointment\" class=\"button-primary learn-more pricing w-button\">CHECK&nbsp;APPOINTMENT&nbsp;AVAILABILITY</a></div></div></div></div><div class=\"div-block-40\"><div class=\"horizontal static-page top-align\"><div class=\"div-block-52\"><div class=\"rich-text w-richtext\"><h3>Insurance</h3><p>‍</p><p>At Isha Health, we do not accept insurance plans, including Medicaid and Medicare. Payment is due at the time of service. We prioritize patient care, ensuring immediate availability and privacy. This allows us to build strong relationships and invest in our patients' well-being. Please understand that because we have opted out of Medicaid or Medicare, neither Isha Health nor you will be reimbursed for these services by these programs.</p><p>‍</p><p>‍</p></div></div><div class=\"div-block-52\"><div class=\"rich-text w-richtext\"><h3>Cancellation Policy</h3><p>‍</p><p>If you need to cancel or reschedule your appointment, please ensure you provide at least 48 hours advance notice. Failure to do so will result in a cancellation fee of $120. For no-shows, the full appointment fee of $350 will be charged.</p><p>For further details, please refer to <a href=\"/cancellation-policy-isha-health\">Our Cancellation Policy page</a>.</p></div></div></div></div><!-- Google Tag Manager (noscript) -->\n\n<!-- End Google Tag Manager (noscript) -->\n\n",
      }}
    />
  );
}
