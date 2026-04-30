import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Isha Health - Ketamine Clinic for Depression & Anxiety…",
  description: "Find answers to common questions about Isha Health, a San Francisco-based at-home ketamine clinic providing treatment for depression and anxiety. Learn more…",
  alternates: {
    canonical: "https://isha.health/faq",
  },
  openGraph: buildOpenGraph({
    title: "Isha Health - Ketamine Clinic for Depression & Anxiety…",
    description: "Find answers to common questions about Isha Health, a San Francisco-based at-home ketamine clinic providing treatment for depression and anxiety. Learn more…",
    path: '/faq',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Isha Health - Ketamine Clinic for Depression & Anxiety…",
    description: "Find answers to common questions about Isha Health, a San Francisco-based at-home ketamine clinic providing treatment for depression and anxiety. Learn more…",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem;">
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is ketamine a legal medication?","acceptedAnswer":{"@type":"Answer","text":"Yes, ketamine is legal when prescribed by a licensed provider. It is FDA-approved as an anesthetic and used off-label for mental health conditions like depression and PTSD. Spravato (esketamine) is an FDA-approved nasal spray for treatment-resistant depression. Recreational use is illegal.   Learn more →"}},{"@type":"Question","name":"How does ketamine work?","acceptedAnswer":{"@type":"Answer","text":"Ketamine blocks NMDA receptors, increases glutamate activity, and boosts neuroplasticity, allowing the brain to rewire. It reduces rigid thought patterns and promotes emotional flexibility, leading to rapid relief from depression and PTSD.   Learn more →"}},{"@type":"Question","name":"Is ketamine addictive?","acceptedAnswer":{"@type":"Answer","text":"Ketamine has a low risk of addiction when used in a medical setting under supervision. Unlike daily antidepressants, ketamine treatments are spaced out to prevent dependence. However, recreational misuse at high doses can lead to psychological dependence.   Learn more →   Please  review our ketamine consent form  for more information and disclosures."}},{"@type":"Question","name":"What is ketamine-assisted psychotherapy?","acceptedAnswer":{"@type":"Answer","text":"Ketamine-Assisted Psychotherapy (KAP) combines ketamine treatment with guided therapy to enhance mental health outcomes. The ketamine experience helps patients access deeper emotional insights, while therapy supports processing and integration for lasting change.  🔹 Used for depression, PTSD, and anxiety 🔹 Promotes neuroplasticity and emotional flexibility 🔹 Can provide rapid symptom relief   Learn more about KAP →"}},{"@type":"Question","name":"What can I expect from an at-home ketamine therapy session?","acceptedAnswer":{"@type":"Answer","text":"At Isha Health, we prescribe oral dose of ketamine for at-home therapy sessions. This approach lets ketamine work as a catalyst for unlocking deeper and more impactful therapy sessions. Unlike higher doses used for anesthesia, the low dose ketamine we prescribe will not cause full dissociation but will provide relaxation and an open-minded state of mind.&nbsp;"}},{"@type":"Question","name":"What does it feel like when I take ketamine for depression?","acceptedAnswer":{"@type":"Answer","text":"Ketamine creates a temporary altered state of consciousness, often described as:  🔹 Feeling detached from thoughts, emotions, or the body (dissociation) 🔹 A floating or dream-like sensation 🔹 Changes in perception, such as altered time or space awareness 🔹 Deep relaxation or emotional clarityMany patients report relief from depression within hours, along with increased mental flexibility and a shift in perspective. Effects typically last 30-60 minutes, with insights continuing to unfold in the d"}},{"@type":"Question","name":"What should I do if I have never taken ketamine before?","acceptedAnswer":{"@type":"Answer","text":"If you are new to ketamine therapy, please follow the instructions that you received carefully. This  session instruction page  can be very helpful. We recommend starting with a half of the troche, which is a small lozenge-like tablet that dissolves in your mouth. Keep the troche inside your mouth for 15 minutes, then spit it out. If you feel little effect after a few minutes, you may take the second half of the troche in the same manner. For your first two therapy sessions, we recommend that yo"}},{"@type":"Question","name":"How long do the effects of ketamine therapy last?","acceptedAnswer":{"@type":"Answer","text":"Ketamine therapy can lead to positive changes in mood and cognition during the treatment, as well as cumulatively over several weeks with repeated dosing. The optimal dosing for ketamine therapy varies for each individual, and some may require adjustments to find the optimal dose. The duration of the effects of ketamine therapy can also vary depending on the individual and the condition being treated."}},{"@type":"Question","name":"What are the risks of ketamine therapy?","acceptedAnswer":{"@type":"Answer","text":"While ketamine therapy is generally considered safe and effective, there are potential risks associated with the treatment. These may include impaired balance and coordination, blurred vision, slurred speech, confusion, excitability, anxiety, nausea, and vomiting. Ketamine can also cause a significant increase in blood pressure and heart rate. In rare cases, ketamine can worsen certain psychotic symptoms in individuals with serious mental disorders. During the treatment itself, some people may e"}},{"@type":"Question","name":"How much would the medication cost?","acceptedAnswer":{"@type":"Answer","text":"The cost of medication can vary depending on several factors such as the type of medication, dosage, and your location. In general, a 30-day supply of medication can cost anywhere from $50 to $100 or more, depending on where you live in the country."}}]}</script>

  <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;text-align:center;margin-bottom:0.5rem;">Frequently Asked Questions</h1>
  <p style="font-family:'Poppins',sans-serif;font-size:1rem;color:#6b7280;text-align:center;margin-bottom:3rem;">Everything you need to know about ketamine therapy at Isha Health</p>

  
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Is ketamine a legal medication?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Yes, ketamine is **legal** when prescribed by a licensed provider. It is **FDA-approved** as an anesthetic and used **off-label** for mental health conditions like **depression and PTSD**. **Spravato (esketamine)** is an **FDA-approved** nasal spray for treatment-resistant depression. Recreational use is illegal.<br/><br/><a href="https://isha.health/post/is-ketamine-legal" style="color:#0d9488;text-decoration:underline;">Learn more →</a></p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How does ketamine work?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Ketamine **blocks NMDA receptors**, increases **glutamate activity**, and boosts **neuroplasticity**, allowing the brain to **rewire**. It **reduces rigid thought patterns** and promotes **emotional flexibility**, leading to **rapid relief** from depression and PTSD.<br/><br/><a href="https://isha.health/post/how-does-ketamine-work#" style="color:#0d9488;text-decoration:underline;">Learn more →</a></p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Is ketamine addictive?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Ketamine has a **low risk of addiction** when used in a **medical setting** under supervision. Unlike daily antidepressants, ketamine treatments are spaced out to prevent dependence. However, **recreational misuse** at high doses can lead to **psychological dependence**.<br/><br/><a href="https://isha.health/post/is-ketamine-therapy-addictive" style="color:#0d9488;text-decoration:underline;">Learn more →</a><br/><br/>Please <a href="https://isha.health/consent-form" style="color:#0d9488;text-decoration:underline;">review our ketamine consent form</a> for more information and disclosures.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What is ketamine-assisted psychotherapy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Ketamine-Assisted Psychotherapy (KAP) combines **ketamine treatment** with **guided therapy** to enhance mental health outcomes. The ketamine experience helps patients access **deeper emotional insights**, while therapy supports **processing and integration** for lasting change.<br/><br/>🔹 Used for **depression, PTSD, and anxiety**<br/>🔹 Promotes **neuroplasticity and emotional flexibility**<br/>🔹 Can provide **rapid symptom relief<br/><br/>**<a href="https://isha.health/what-is-ketamine-assisted-therapy" style="color:#0d9488;text-decoration:underline;">Learn more about KAP →</a></p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What can I expect from an at-home ketamine therapy session?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">At Isha Health, we prescribe oral dose of ketamine for at-home therapy sessions. This approach lets ketamine work as a catalyst for unlocking deeper and more impactful therapy sessions. Unlike higher doses used for anesthesia, the low dose ketamine we prescribe will not cause full dissociation but will provide relaxation and an open-minded state of mind.&nbsp;</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What does it feel like when I take ketamine for depression?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Ketamine creates a **temporary altered state of consciousness**, often described as:<br/><br/>🔹 **Feeling detached** from thoughts, emotions, or the body (**dissociation**)<br/>🔹 **A floating or dream-like sensation**<br/>🔹 **Changes in perception**, such as altered time or space awareness<br/>🔹 **Deep relaxation or emotional clarity**Many patients report **relief from depression within hours**, along with **increased mental flexibility** and **a shift in perspective**. Effects typically last **30-60 minutes**, with insights continuing to unfold in the days after treatment.<br/><br/><a href="/faq#" style="color:#0d9488;text-decoration:underline;">Learn more →</a><br/></p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What should I do if I have never taken ketamine before?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">If you are new to ketamine therapy, please follow the instructions that you received carefully. This <a href="https://isha.health/current-patients/session-instruction" style="color:#0d9488;text-decoration:underline;">session instruction page</a> can be very helpful. We recommend starting with a half of the troche, which is a small lozenge-like tablet that dissolves in your mouth. Keep the troche inside your mouth for 15 minutes, then spit it out. If you feel little effect after a few minutes, you may take the second half of the troche in the same manner. For your first two therapy sessions, we recommend that you have a support person present who can assist you with simple tasks such as going to the bathroom or getting a glass of water. As you go deeper into the experience, the support person can help you stay grounded.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How long do the effects of ketamine therapy last?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Ketamine therapy can lead to positive changes in mood and cognition during the treatment, as well as cumulatively over several weeks with repeated dosing. The optimal dosing for ketamine therapy varies for each individual, and some may require adjustments to find the optimal dose. The duration of the effects of ketamine therapy can also vary depending on the individual and the condition being treated.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What are the risks of ketamine therapy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">While ketamine therapy is generally considered safe and effective, there are potential risks associated with the treatment. These may include impaired balance and coordination, blurred vision, slurred speech, confusion, excitability, anxiety, nausea, and vomiting. Ketamine can also cause a significant increase in blood pressure and heart rate. In rare cases, ketamine can worsen certain psychotic symptoms in individuals with serious mental disorders. During the treatment itself, some people may experience frightening or unusual experiences, which is part of the therapeutic process. It is important to receive psychotherapeutic help and ongoing guidance from your therapist during ketamine therapy.<br/><br/>Please <a href="https://isha.health/consent-form" style="color:#0d9488;text-decoration:underline;">review our ketamine consent form</a> for more information and disclosures.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How much would the medication cost?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">The cost of medication can vary depending on several factors such as the type of medication, dosage, and your location. In general, a 30-day supply of medication can cost anywhere from $50 to $100 or more, depending on where you live in the country.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Will I need to pick up my medication from the pharmacy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">No, you won't need to pick up your medication from the pharmacy. The compounding pharmacy will directly ship the medication to your home address for your convenience.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">What is the significance of set and setting in ketamine treatment?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Set and setting are important considerations for ketamine treatment as they can significantly impact the patient's experience and treatment outcomes. "Set" refers to the patient's mindset and expectations prior to treatment, including their mental and emotional state and beliefs about the treatment. "Setting" refers to the physical and social environment in which the treatment takes place, such as the physical space, lighting, temperature, and the presence of others.<br/><br/>Patients who have a positive mindset and realistic expectations are more likely to have a successful outcome. Similarly, a comfortable, calming, and supportive environment can help to reduce anxiety and improve the patient's overall experience. At Isha Health, our clinicians provide support and guidance to help patients prepare mentally and emotionally for their ketamine treatment. This approach can help to enhance the therapeutic effects of the drug and reduce the likelihood of adverse effects.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Is ketamine therapy a suitable treatment for me?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">If you are struggling with depression, anxiety, or PTSD and have not found relief from traditional treatments such as medication, psychotherapy, and self-care, ketamine therapy may be a suitable option for you. Many individuals who have not responded to these traditional treatments have found significant benefits from ketamine therapy. If you feel like your current treatments are not working, it may be worth exploring ketamine therapy as an alternative option.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How long is the medical evaluation appointment for ketamine therapy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">The initial medical evaluation appointment for ketamine therapy is scheduled for 60 minutes, while the follow-up appointment is for 30 minutes. You can communicate directly with doctors via our secure messaging app or email.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Can I eat or drink before my ketamine-assisted therapy (KAT) session?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">To minimize the risk of nausea or vomiting during the session, we recommend that you do not eat for at least four hours and do not drink for at least two hours before your ketamine dosing session. However, it is important to stay hydrated, so we encourage you to drink plenty of water in the hours leading up to your session.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Do I need to receive ketamine therapy through injections?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">No, at Isha Health we offer oral ketamine therapy. We send your prescription to reputable compounding pharmacies that ship the medication directly to your home, making it a convenient and accessible treatment option. If you prefer using your local compounding pharmacy, please let your doctor know of your preference during your appointment.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Can I continue taking my current medications during ketamine therapy?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">It is important to inform your ketamine therapy provider about all the medications you are currently taking, including over-the-counter medications and supplements, as they may interact with ketamine. In general, it is recommended that you continue taking your current medications as prescribed by your primary care provider or psychiatrist. Your ketamine therapy provider may work with your current treatment team to coordinate your care and adjust your medications as necessary. However, any changes to your medications should be made under the guidance and supervision of your primary care provider or psychiatrist.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How long does it take to feel the effects of ketamine?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">The onset of effects from a ketamine lozenge can vary, but typically it takes around 20-30 minutes to begin feeling the effects. However, the full effects may not be felt until up to 60-90 minutes after taking the lozenge. The effects can last for several hours after the peak effects are felt. It's important to note that the effects of ketamine can vary between individuals and the dosage administered.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Can I drive after a ketamine therapy session?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">No, you should not drive or operate heavy machinery for at least 12 hours after a ketamine therapy session. Ketamine may impair your coordination, reaction time, and cognitive function, and it is important to allow time for the effects of the medication to wear off before driving or engaging in any activities that require alertness and focus. It is recommended to have a support person to accompany you home after the session.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">I Took Tylenol/Motrin This Morning. Should I Be Concerned?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">No, taking **Tylenol (acetaminophen) or Motrin (ibuprofen)** earlier in the day **is not a concern** for ketamine therapy. These medications do not interfere with ketamine’s effects.<br/>🔹 **Avoid benzodiazepines or sedatives** before treatment, as they may reduce ketamine’s effectiveness.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">I Had Alcohol Last Night. Should I Be Concerned?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">If you had **a light drink** and feel normal, you can likely proceed with your session. However, if you **drank heavily** or are experiencing **a hangover**, it's best to **reschedule** as alcohol can affect ketamine’s safety and effectiveness.<br/>🔹 **Avoid alcohol for at least 24 hours (ideally 72 hours) before your session** for the best experience.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">I Didn’t Sleep Well Last Night. If I Fall Asleep, Will I Still Get Benefits?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Yes, but staying awake is ideal. **Even if you doze off, **<a href="https://isha.health/post/how-does-ketamine-work" style="color:#0d9488;text-decoration:underline;">**ketamine still works on a biological level**</a>, promoting **neuroplasticity and mood improvements**.<br/><br/>🔹 If you’re very sleep-deprived, consider **rescheduling** to stay more engaged in the experience.<br/>🔹 A **guided session** or **light music** can help keep you present.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">Should I Spit Out or Swallow the Medication?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">Holding the troche in your mouth for **15 minutes**, then **spitting it out **is generally a preferred method. Swallowing it leads to **slower, less predictable effects** and can cause **prolonged nausea and grogginess** due to gut absorption and metabolite conversion.<br/><br/>🔹 **Spitting out** ensures a **faster, more consistent effect** with fewer side effects.</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;padding-left:1rem;border-left:3px solid #0d9488;">How can I contact Isha Health?</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#4b5563;line-height:1.7;padding-left:1rem;">We believe it's beneficial for everyone to have a written record of questions and answers for future reference, so we currently do not provide phone support. Please reach out to us at <a href="mailto:info@isha.health" style="color:#0d9488;text-decoration:underline;">info@isha.health</a> for assistance.</p>
    </div>

  <div style="text-align:center;padding:2rem 0;margin-top:1rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#4b5563;margin-bottom:0.75rem;">Looking for more detailed answers?</p>
    <a href="/faq/ketamine-therapy" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.75rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">View Our Comprehensive 55-Question FAQ →</a>
  </div>

  <div style="background:#f0fdfa;border:1px solid #ccfbf1;border-radius:10px;padding:1.25rem 1.5rem;text-align:center;margin-top:2rem;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#0f766e;font-weight:600;margin-bottom:0.25rem;">88.8% of Isha Health patients with moderate-to-severe depression show measurable improvement</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;">Based on over 500 patients with validated assessments. <a href="/outcomes" style="color:#0d9488;text-decoration:underline;">See our clinical outcomes report →</a></p>
  </div>

  <div style="text-align:center;margin-top:2rem;">
    <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;font-size:0.95rem;font-family:'Poppins',sans-serif;">Book a Consultation</a>
    <p style="font-family:'Poppins',sans-serif;font-size:0.8rem;color:#6b7280;margin-top:0.75rem;">Questions? Email <a href="mailto:info@isha.health" style="color:#0d9488;">info@isha.health</a></p>
  </div>
</div>`,
      }}
    />
  );
}
