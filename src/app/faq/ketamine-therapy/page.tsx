import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ketamine Therapy FAQ: 50+ Questions Answered | Isha Health",
  description: "Get answers to 55 frequently asked questions about ketamine therapy, including how it works, safety, cost, side effects, types of ketamine, conditions treated, and what to expect during treatment.",
  alternates: { canonical: "https://isha.health/faq/ketamine-therapy" },
  openGraph: {
    title: "Ketamine Therapy FAQ: 50+ Questions Answered | Isha Health",
    description: "Get answers to 55 frequently asked questions about ketamine therapy, including how it works, safety, cost, side effects, types of ketamine, conditions treated, and what to expect during treatment.",
    type: "website",
    url: "https://isha.health/faq/ketamine-therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketamine Therapy FAQ: 50+ Questions Answered | Isha Health",
    description: "Get answers to 55 frequently asked questions about ketamine therapy, including how it works, safety, cost, side effects, types of ketamine, conditions treated, and what to expect during treatment.",
  },
};

const faqData = [
  {
    question: "How does ketamine treat depression?",
    answer: "Ketamine is believed to work by blocking NMDA receptors in the brain, which triggers a cascade of effects on the glutamate system and may promote the formation of new neural connections. Unlike traditional antidepressants that target serotonin or norepinephrine, ketamine appears to act on different pathways, which is one reason it may help patients who have not responded to other medications. Research into its precise mechanisms is ongoing."
  },
  {
    question: "How fast does ketamine work for depression?",
    answer: "Some patients report noticeable improvements in mood within hours to days after their first session, which is considerably faster than traditional antidepressants that typically require four to six weeks. However, individual responses vary significantly, and a full course of treatment is generally recommended to assess effectiveness."
  },
  {
    question: "What is neuroplasticity and how does ketamine promote it?",
    answer: "Neuroplasticity refers to the brain's ability to form new neural connections and reorganize existing ones throughout life. Preclinical research suggests that ketamine may promote neuroplasticity by increasing levels of brain-derived neurotrophic factor (BDNF) and stimulating synaptogenesis, potentially helping to restore neural pathways that may be impaired in depression. You can learn more in our article on <a href=\"/post/ketamine-bdnf-neuroplasticity\" style=\"color:#0d9488;text-decoration:underline;\">ketamine, BDNF, and neuroplasticity</a>."
  },
  {
    question: "What is the difference between ketamine and traditional antidepressants?",
    answer: "Traditional antidepressants such as SSRIs and SNRIs primarily modulate serotonin and norepinephrine systems and typically take weeks to produce effects. Ketamine acts on the glutamate system via NMDA receptor blockade and has been observed to produce more rapid mood improvements in some patients. For a detailed comparison, see our page on <a href=\"/compare/ketamine-vs-antidepressants\" style=\"color:#0d9488;text-decoration:underline;\">ketamine vs. antidepressants</a>."
  },
  {
    question: "Does ketamine work for treatment-resistant depression?",
    answer: "A growing body of clinical evidence suggests that ketamine may be effective for individuals with <a href=\"/conditions/treatment-resistant-depression\" style=\"color:#0d9488;text-decoration:underline;\">treatment-resistant depression</a>, defined as depression that has not responded adequately to two or more standard antidepressant trials. Many patients in research studies have shown meaningful improvement, though responses vary and not all patients benefit equally."
  },
  {
    question: "How does ketamine affect the brain long-term?",
    answer: "Long-term effects of therapeutic ketamine use are still being studied. Current evidence suggests that at the low doses used in clinical settings, ketamine may support lasting improvements in neural connectivity and mood regulation. However, comprehensive long-term safety data is still emerging, and ongoing monitoring by a qualified provider is recommended. Read more about <a href=\"/post/how-long-does-ketamine-neuroplasticity-last\" style=\"color:#0d9488;text-decoration:underline;\">how long ketamine-induced neuroplasticity lasts</a>."
  },
  {
    question: "What is BDNF and why does it matter for ketamine therapy?",
    answer: "Brain-derived neurotrophic factor (BDNF) is a protein that supports the growth, survival, and differentiation of neurons. Research indicates that BDNF levels may be reduced in individuals with depression, and preclinical studies suggest that ketamine can increase BDNF expression, which may contribute to its antidepressant effects. Learn more in our post on <a href=\"/post/ketamine-bdnf-neuroplasticity\" style=\"color:#0d9488;text-decoration:underline;\">ketamine and BDNF</a>."
  },
  {
    question: "Does ketamine cure depression or just manage symptoms?",
    answer: "Ketamine is not considered a cure for depression. Rather, it appears to provide symptom relief that can be meaningful and, in some cases, rapid. Most treatment protocols involve a series of sessions followed by maintenance treatments as needed, often in combination with psychotherapy and other interventions to support sustained improvement."
  },
  {
    question: "What are the different types of ketamine?",
    answer: "Ketamine therapy is available in several forms including intravenous (IV) infusions, intramuscular injections, oral tablets, sublingual troches, and intranasal spray. Each route of administration differs in onset time, bioavailability, duration of effects, cost, and clinical setting requirements. Your provider can help determine which form may be most appropriate for your situation."
  },
  {
    question: "What is racemic ketamine vs S-ketamine vs R-ketamine?",
    answer: "Racemic ketamine contains equal parts of two mirror-image molecules: S-ketamine (esketamine) and R-ketamine (arketamine). S-ketamine has higher affinity for the NMDA receptor and is the basis of the FDA-approved nasal spray Spravato. R-ketamine is currently under investigation and has shown promising results in early-stage research, though it is not yet clinically available."
  },
  {
    question: "What are ketamine troches and how do you use them?",
    answer: "Ketamine troches are sublingual lozenges that dissolve under the tongue or between the cheek and gum, allowing the medication to be absorbed through the oral mucosa. They are typically used in at-home treatment programs under physician supervision and are held in the mouth for a specified period before any remaining material is spit out. Troches generally have lower bioavailability than IV ketamine but offer greater convenience and accessibility."
  },
  {
    question: "What is Spravato and how is it different from generic ketamine?",
    answer: "Spravato (esketamine) is an FDA-approved intranasal spray specifically indicated for treatment-resistant depression and major depressive disorder with suicidal ideation. Unlike generic ketamine, which is prescribed off-label, Spravato must be administered in a certified healthcare setting under medical observation. For a full comparison, visit our page on <a href=\"/compare/spravato-vs-generic-ketamine\" style=\"color:#0d9488;text-decoration:underline;\">Spravato vs. generic ketamine</a>."
  },
  {
    question: "What is the difference between IV ketamine and oral ketamine?",
    answer: "IV ketamine is administered intravenously in a clinical setting and has nearly 100% bioavailability with rapid onset. Oral ketamine, including sublingual troches, has lower bioavailability (roughly 20-30%) but can be taken at home under telehealth supervision, offering greater convenience at a typically lower cost. See our detailed comparison of <a href=\"/compare/oral-ketamine-vs-iv-infusion\" style=\"color:#0d9488;text-decoration:underline;\">oral ketamine vs. IV infusion</a>."
  },
  {
    question: "Which form of ketamine is most effective?",
    answer: "There is no definitive answer, as effectiveness can depend on the individual patient, their condition, dosing, and other factors. IV ketamine has the most robust research base for rapid antidepressant effects, while oral and sublingual forms offer practical advantages for ongoing maintenance. Your clinician can help determine the most appropriate form based on your clinical needs and treatment goals."
  },
  {
    question: "What is esketamine?",
    answer: "Esketamine is the S-enantiomer of ketamine and is the active ingredient in Spravato, an FDA-approved intranasal spray for treatment-resistant depression. It has a stronger binding affinity to NMDA receptors compared to R-ketamine and is administered under medical supervision in certified healthcare facilities. It is distinct from generic racemic ketamine used in off-label treatments."
  },
  {
    question: "Does ketamine help with anxiety?",
    answer: "Preliminary research and clinical observations suggest that ketamine may help reduce symptoms of anxiety in some patients, particularly when anxiety co-occurs with depression. However, ketamine is not FDA-approved for anxiety, and the evidence base is still developing. Learn more on our <a href=\"/ketamine-therapy-for-anxiety\" style=\"color:#0d9488;text-decoration:underline;\">ketamine therapy for anxiety</a> page."
  },
  {
    question: "Can ketamine treat PTSD?",
    answer: "Emerging evidence suggests that ketamine may be beneficial for some individuals with <a href=\"/conditions/ptsd\" style=\"color:#0d9488;text-decoration:underline;\">PTSD</a>, potentially by promoting neuroplasticity and disrupting maladaptive neural patterns. Several clinical studies have reported reductions in PTSD symptom severity following ketamine treatment. However, it is used off-label for this indication and more research is needed."
  },
  {
    question: "Is ketamine effective for OCD?",
    answer: "Some early research suggests that ketamine may provide rapid, short-term relief from <a href=\"/conditions/ocd\" style=\"color:#0d9488;text-decoration:underline;\">OCD</a> symptoms, possibly through its effects on the glutamate system. However, the evidence is limited and the effects may be transient. Ketamine for OCD is considered experimental, and patients should discuss potential risks and benefits with their provider."
  },
  {
    question: "Can ketamine help with bipolar depression?",
    answer: "Research has explored ketamine for the depressive episodes associated with <a href=\"/conditions/bipolar-depression\" style=\"color:#0d9488;text-decoration:underline;\">bipolar disorder</a>, and some studies have shown promising results. However, treatment requires careful medical oversight due to the potential risk of triggering manic episodes. Ketamine is not FDA-approved for bipolar depression and should only be considered under close psychiatric supervision."
  },
  {
    question: "Does ketamine work for chronic pain?",
    answer: "Ketamine has a long history of use in pain management due to its NMDA receptor-blocking properties, and it may be helpful for certain <a href=\"/conditions/chronic-pain\" style=\"color:#0d9488;text-decoration:underline;\">chronic pain</a> conditions, including neuropathic pain and complex regional pain syndrome (CRPS). Dosing and protocols for pain management may differ from those used in mental health treatment. Patients with chronic pain should consult with a provider experienced in both applications."
  },
  {
    question: "Can ketamine help with suicidal thoughts?",
    answer: "One of the most studied applications of ketamine is its potential to rapidly reduce <a href=\"/conditions/suicidal-ideation\" style=\"color:#0d9488;text-decoration:underline;\">suicidal ideation</a>. Several clinical trials have demonstrated significant reductions in suicidal thinking within hours of ketamine administration. Esketamine (Spravato) has received FDA approval specifically for major depressive disorder with suicidal ideation, reflecting the strength of evidence in this area."
  },
  {
    question: "Is ketamine used for postpartum depression?",
    answer: "There is growing interest in ketamine as a potential treatment for <a href=\"/conditions/postpartum-depression\" style=\"color:#0d9488;text-decoration:underline;\">postpartum depression</a>, and some providers do prescribe it off-label for this condition. However, research specific to postpartum depression is limited, and special considerations apply for breastfeeding mothers. Patients should discuss the potential risks and benefits thoroughly with their healthcare provider."
  },
  {
    question: "Can ketamine help with alcohol addiction?",
    answer: "Early research has explored ketamine as a potential tool for treating <a href=\"/conditions/alcohol-addiction\" style=\"color:#0d9488;text-decoration:underline;\">alcohol use disorder</a>, with some studies suggesting it may help reduce cravings and support abstinence when combined with psychotherapy. This is an active area of investigation, and ketamine is not FDA-approved for addiction treatment. Patients interested in this application should seek providers with specific expertise in addiction medicine."
  },
  {
    question: "Is ketamine safe?",
    answer: "When administered at therapeutic doses under medical supervision, ketamine has a well-established safety profile based on decades of use as an anesthetic. Common side effects at therapeutic doses are generally mild and temporary. However, as with any medication, there are risks, and treatment should always be overseen by a qualified healthcare provider. Visit our <a href=\"/safety-information-for-ketamine-treatment\" style=\"color:#0d9488;text-decoration:underline;\">safety information page</a> for more details."
  },
  {
    question: "What are the side effects of ketamine therapy?",
    answer: "Common side effects may include temporary dissociation, dizziness, nausea, increased blood pressure, and drowsiness. These effects are typically short-lived, resolving within a few hours after the session. Less common side effects can include headache, blurred vision, and anxiety, and your provider will monitor you to ensure safety throughout treatment."
  },
  {
    question: "Is ketamine addictive?",
    answer: "At the low, medically supervised doses used in therapeutic settings, the risk of developing dependence appears to be low based on available evidence. However, ketamine does have abuse potential at higher recreational doses, and a history of substance use disorder is an important consideration when evaluating candidacy. Working with a qualified provider who monitors treatment closely is essential for minimizing risk."
  },
  {
    question: "Does ketamine cause memory loss?",
    answer: "At the sub-anesthetic doses used in therapy, significant memory impairment is uncommon. Some patients may experience mild short-term memory effects during or immediately after a session, which typically resolve quickly. Chronic, heavy recreational use of ketamine has been associated with cognitive effects, but this pattern differs substantially from medically supervised therapeutic use."
  },
  {
    question: "Does ketamine affect fertility?",
    answer: "There is currently limited research on the effects of therapeutic ketamine doses on human fertility. Patients who are pregnant, planning to become pregnant, or breastfeeding should discuss the potential risks with their healthcare provider before starting treatment. As a precaution, most providers recommend avoiding ketamine therapy during pregnancy."
  },
  {
    question: "Can you drive after ketamine therapy?",
    answer: "No. Patients should not drive, operate heavy machinery, or make important decisions for at least several hours after a ketamine session due to its dissociative and sedating effects. Most providers recommend arranging transportation in advance and resting for the remainder of the day following treatment."
  },
  {
    question: "Does ketamine show up on a drug test?",
    answer: "Standard workplace drug panels typically do not test for ketamine. However, some expanded or specialized drug tests can detect ketamine and its metabolites. If drug testing is a concern, patients should inform their provider and may wish to carry documentation of their prescribed treatment."
  },
  {
    question: "Is ketamine a horse tranquilizer?",
    answer: "While ketamine is used in veterinary medicine, including for horses, it was originally developed for and is widely used in human medicine as an anesthetic. It is on the World Health Organization's List of Essential Medicines and is used in hospitals and emergency departments worldwide. Characterizing it solely as a veterinary drug is inaccurate and does not reflect its extensive history in human healthcare."
  },
  {
    question: "Can you take ketamine with antidepressants?",
    answer: "Many patients take ketamine alongside their existing antidepressant medications, and in most cases this can be done safely under medical supervision. However, certain medication interactions should be evaluated by your provider, particularly with MAOIs or medications that affect the same neural pathways. Always disclose all medications and supplements to your prescribing clinician before starting ketamine therapy."
  },
  {
    question: "What are the long-term risks of ketamine therapy?",
    answer: "Long-term safety data for therapeutic ketamine use is still being gathered. The most well-documented risk from chronic heavy use (primarily in recreational contexts) involves potential bladder and urinary tract damage. At the lower doses and frequencies used in clinical treatment, these risks appear to be substantially reduced, but regular monitoring by a healthcare provider remains important."
  },
  {
    question: "What happens during a ketamine therapy session?",
    answer: "During a typical at-home ketamine session, you take a prescribed sublingual troche in a comfortable setting while a support person is nearby. The experience generally includes a period of relaxation and mild dissociation lasting 45 to 60 minutes, followed by a gradual return to baseline. Your provider will give you specific instructions for your session, including preparation, dosing, and aftercare. For detailed instructions, see our <a href=\"/current-patients/session-instruction\" style=\"color:#0d9488;text-decoration:underline;\">session instruction page</a>."
  },
  {
    question: "How should I prepare for a ketamine session?",
    answer: "Preparation typically includes fasting for a few hours before the session, arranging a comfortable and safe environment, ensuring a support person is available, and setting an intention for the experience. You should avoid alcohol and certain medications as directed by your provider. Being well-rested and hydrated can also contribute to a more comfortable session."
  },
  {
    question: "How many ketamine sessions do I need?",
    answer: "Treatment protocols vary, but a common initial course involves six sessions over two to three weeks, followed by maintenance sessions as needed. The number of sessions depends on your individual response, the severity of your condition, and your provider's clinical judgment. Some patients benefit from ongoing monthly maintenance sessions to sustain improvement."
  },
  {
    question: "How long does a ketamine session last?",
    answer: "The acute effects of a sublingual ketamine session typically last 45 to 60 minutes, with the entire appointment including preparation and observation taking approximately 90 minutes to two hours. IV infusions usually last about 40 minutes with an additional observation period. Patients should plan to rest and avoid demanding activities for the remainder of the day."
  },
  {
    question: "How long do the effects of ketamine therapy last?",
    answer: "The antidepressant effects from a single ketamine session may last anywhere from a few days to a few weeks, depending on the individual. A full course of treatment may produce more sustained benefits, and periodic maintenance sessions can help extend the duration of improvement. Combining ketamine therapy with psychotherapy and lifestyle modifications may also support longer-lasting results."
  },
  {
    question: "What does ketamine feel like?",
    answer: "At therapeutic doses, patients commonly report feelings of relaxation, floating, mild dissociation, and altered perception of time and space. Some describe the experience as dreamlike or introspective. Effects vary considerably between individuals and sessions, and your provider can adjust dosing to help you find a comfortable therapeutic level."
  },
  {
    question: "Do I need a therapist for ketamine treatment?",
    answer: "While ketamine can be prescribed by a physician without concurrent psychotherapy, many providers and researchers recommend combining ketamine treatment with therapy to maximize and sustain its benefits. <a href=\"/what-is-ketamine-assisted-therapy\" style=\"color:#0d9488;text-decoration:underline;\">Ketamine-assisted psychotherapy</a> (KAP) integrates therapeutic support before, during, or after sessions. Isha Health's treatment approach includes integration support to help patients process their experiences."
  },
  {
    question: "Can I do ketamine therapy at home?",
    answer: "Yes. Oral and sublingual ketamine can be prescribed by a licensed physician and taken at home as part of a structured telehealth program. At-home therapy requires a designated support person to be present during sessions and adherence to safety protocols. Isha Health provides <a href=\"/post/at-home-ketamine-therapy-for-depression\" style=\"color:#0d9488;text-decoration:underline;\">at-home ketamine therapy</a> with ongoing physician oversight and medication delivery."
  },
  {
    question: "What is ketamine-assisted psychotherapy (KAP)?",
    answer: "KAP is a therapeutic approach that combines ketamine administration with structured psychotherapy sessions. The ketamine experience may help patients access difficult emotions and thought patterns more readily, while the therapy component provides a framework for processing insights and building coping strategies. Learn more on our page about <a href=\"/what-is-ketamine-assisted-therapy\" style=\"color:#0d9488;text-decoration:underline;\">what is ketamine-assisted therapy</a>."
  },
  {
    question: "What should I do after a ketamine session?",
    answer: "After a session, plan to rest in a comfortable environment, stay hydrated, and avoid driving or strenuous activity for the remainder of the day. Many providers encourage journaling or quiet reflection to help integrate the experience. A follow-up with your provider or therapist in the days after the session can help you process any insights and track your progress."
  },
  {
    question: "How much does ketamine therapy cost?",
    answer: "Costs vary depending on the route of administration and provider. IV ketamine infusions typically range from $400 to $800 per session. At-home oral ketamine programs like Isha Health start at around $350 per appointment plus $50 to $150 per month for medication. Visit our <a href=\"/pricing\" style=\"color:#0d9488;text-decoration:underline;\">pricing page</a> for current rates and package options."
  },
  {
    question: "Does insurance cover ketamine therapy?",
    answer: "Most insurance plans do not cover generic ketamine when prescribed off-label for mental health conditions. However, Spravato (esketamine) may be covered by some insurance plans for treatment-resistant depression. Some patients are able to obtain partial reimbursement through out-of-network benefits using a superbill provided by their clinician."
  },
  {
    question: "What is a superbill?",
    answer: "A superbill is an itemized receipt provided by your healthcare provider that includes diagnosis codes, procedure codes, and charges for services rendered. You can submit a superbill to your insurance company to request out-of-network reimbursement. Isha Health provides superbills to patients who wish to seek reimbursement. Learn more on our <a href=\"/current-patients/superbill\" style=\"color:#0d9488;text-decoration:underline;\">superbill page</a>."
  },
  {
    question: "Can I use HSA or FSA for ketamine therapy?",
    answer: "In many cases, yes. Ketamine therapy prescribed by a licensed physician for a medical condition typically qualifies as an eligible expense under Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). However, eligibility can depend on your specific plan, so it is advisable to verify with your plan administrator before treatment."
  },
  {
    question: "Is Spravato covered by insurance?",
    answer: "Spravato (esketamine) is more commonly covered by insurance than generic ketamine because it is FDA-approved for specific indications. Many major insurance plans cover Spravato for treatment-resistant depression, though prior authorization and step therapy requirements may apply. Contact your insurance provider to confirm your specific coverage details."
  },
  {
    question: "Why is ketamine therapy expensive?",
    answer: "The cost of ketamine therapy reflects the need for medical evaluation, physician oversight, medication compounding or procurement, ongoing monitoring, and integration support. IV infusions additionally require clinical facility costs and nursing staff. At-home telehealth programs like Isha Health help reduce costs by eliminating clinic overhead while maintaining medical supervision."
  },
  {
    question: "How can I make ketamine therapy more affordable?",
    answer: "Options for reducing costs include choosing at-home oral ketamine programs over IV infusions, using HSA or FSA funds, submitting superbills for out-of-network reimbursement, and asking about package pricing. Isha Health offers structured treatment packages designed to make therapy more accessible. Visit our <a href=\"/pricing\" style=\"color:#0d9488;text-decoration:underline;\">pricing page</a> to explore options."
  },
  {
    question: "Is ketamine legal?",
    answer: "Yes, ketamine is a legal, FDA-approved medication classified as a Schedule III controlled substance in the United States. It can be prescribed by licensed physicians for both its approved indications (anesthesia) and off-label uses, including mental health treatment. Possession without a valid prescription is illegal."
  },
  {
    question: "Is ketamine FDA-approved for depression?",
    answer: "Generic ketamine is FDA-approved as an anesthetic, not specifically for depression. It is prescribed off-label by licensed physicians for depression and other mental health conditions based on growing clinical evidence. Esketamine (Spravato), a derivative of ketamine, is FDA-approved specifically for treatment-resistant depression and major depressive disorder with suicidal ideation."
  },
  {
    question: "Can ketamine be prescribed via telehealth?",
    answer: "Yes. Licensed physicians can evaluate patients via telehealth and prescribe oral or sublingual ketamine for at-home use in states where they are licensed to practice. Telehealth ketamine therapy has made treatment more accessible for patients who do not live near a ketamine clinic. Isha Health provides telehealth-based ketamine therapy in multiple states."
  },
  {
    question: "What states offer online ketamine therapy?",
    answer: "Availability of online ketamine therapy varies by provider and state licensing. Isha Health currently offers telehealth ketamine therapy in <a href=\"/locations/online-at-home-ketamine-therapy-in-california\" style=\"color:#0d9488;text-decoration:underline;\">California</a>, <a href=\"/locations/online-at-home-ketamine-therapy-in-new-york\" style=\"color:#0d9488;text-decoration:underline;\">New York</a>, <a href=\"/locations/online-at-home-ketamine-therapy-in-texas\" style=\"color:#0d9488;text-decoration:underline;\">Texas</a>, <a href=\"/locations/online-at-home-ketamine-therapy-in-florida\" style=\"color:#0d9488;text-decoration:underline;\">Florida</a>, <a href=\"/locations/online-at-home-ketamine-therapy-in-colorado\" style=\"color:#0d9488;text-decoration:underline;\">Colorado</a>, and several other states. Regulations regarding telehealth prescribing of controlled substances may vary, so check with your provider for current availability in your state."
  },
  {
    question: "How do I know if I'm a good candidate for ketamine therapy?",
    answer: "Good candidates for ketamine therapy generally include adults who have not responded adequately to two or more standard antidepressant treatments, have a diagnosis that may benefit from ketamine, and do not have certain contraindications such as uncontrolled hypertension or active psychosis. The best way to determine candidacy is through a comprehensive evaluation with a qualified provider. You can start with our <a href=\"/am-i-a-candidate\" style=\"color:#0d9488;text-decoration:underline;\">am I a candidate</a> screening or <a href=\"/appointment\" style=\"color:#0d9488;text-decoration:underline;\">book an appointment</a> for a full assessment."
  }
];

const sections = [
  { title: "How Ketamine Works", startIndex: 0, count: 8 },
  { title: "Types of Ketamine", startIndex: 8, count: 7 },
  { title: "Conditions Treated", startIndex: 15, count: 8 },
  { title: "Safety and Side Effects", startIndex: 23, count: 10 },
  { title: "Treatment Process", startIndex: 33, count: 10 },
  { title: "Cost and Insurance", startIndex: 43, count: 7 },
  { title: "Legal and Practical", startIndex: 50, count: 5 },
];

function buildHtml() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<[^>]*>/g, '')
      }
    }))
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://isha.health" },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://isha.health/faq" },
      { "@type": "ListItem", "position": 3, "name": "Ketamine Therapy", "item": "https://isha.health/faq/ketamine-therapy" }
    ]
  };

  let sectionsHtml = '';
  for (const section of sections) {
    const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
    sectionsHtml += `
    <h2 id="${sectionId}" style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:1.5rem;margin-top:3rem;padding-bottom:0.5rem;border-bottom:2px solid #0d9488;">${section.title}</h2>`;

    for (let i = section.startIndex; i < section.startIndex + section.count; i++) {
      const faq = faqData[i];
      sectionsHtml += `
    <div style="margin-bottom:1.75rem;">
      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#0d9488;margin-bottom:0.5rem;">${faq.question}</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:1.8;color:#374151;margin:0;text-wrap:pretty;">${faq.answer}</p>
    </div>`;
    }
  }

  return `<div class="section-base white-section static-page">
  <script type="application/ld+json">${JSON.stringify(jsonLdFaq)}</script>
  <script type="application/ld+json">${JSON.stringify(jsonLdBreadcrumb)}</script>
  <div class="hero-isha">
    <h1 class="heading static-heading">Ketamine Therapy FAQ: 50+ Questions Answered</h1>
  </div>
  <div class="section-wrapper" style="max-width:800px;margin:0 auto;padding:2rem 1.5rem;">
    <nav aria-label="Breadcrumb" style="font-size:0.8rem;color:#6b7280;margin-bottom:1.5rem;font-family:'Poppins',sans-serif;">
      <a href="/" style="color:#0d9488;text-decoration:none;">Home</a> /
      <a href="/faq" style="color:#0d9488;text-decoration:none;">FAQ</a> /
      <span style="color:#9ca3af;">Ketamine Therapy</span>
    </nav>

    <p style="font-family:'Poppins',sans-serif;font-size:1.05rem;line-height:1.8;color:#374151;margin-bottom:2rem;text-wrap:pretty;">
      Below you will find answers to 55 of the most commonly asked questions about ketamine therapy. Whether you are exploring ketamine for <a href="/conditions/treatment-resistant-depression" style="color:#0d9488;text-decoration:underline;">treatment-resistant depression</a>, anxiety, PTSD, or other conditions, this page covers how ketamine works, what to expect, safety considerations, costs, and more. For a broader overview, see our <a href="/guide/ketamine-therapy" style="color:#0d9488;text-decoration:underline;">complete guide to ketamine therapy</a>.
    </p>

    <!-- Table of Contents -->
    <div style="background-color:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;padding:1.5rem 2rem;margin-bottom:2.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.1rem;font-weight:700;color:#0d9488;margin-bottom:1rem;">Table of Contents</h2>
      <ol style="font-family:'Poppins',sans-serif;font-size:0.95rem;line-height:2;color:#374151;padding-left:1.25rem;margin:0;">
        <li><a href="#how-ketamine-works" style="color:#0d9488;text-decoration:none;">How Ketamine Works</a></li>
        <li><a href="#types-of-ketamine" style="color:#0d9488;text-decoration:none;">Types of Ketamine</a></li>
        <li><a href="#conditions-treated" style="color:#0d9488;text-decoration:none;">Conditions Treated</a></li>
        <li><a href="#safety-and-side-effects" style="color:#0d9488;text-decoration:none;">Safety and Side Effects</a></li>
        <li><a href="#treatment-process" style="color:#0d9488;text-decoration:none;">Treatment Process</a></li>
        <li><a href="#cost-and-insurance" style="color:#0d9488;text-decoration:none;">Cost and Insurance</a></li>
        <li><a href="#legal-and-practical" style="color:#0d9488;text-decoration:none;">Legal and Practical</a></li>
      </ol>
    </div>
${sectionsHtml}

    <!-- CTA Section -->
    <div style="background-color:#f0fdfa;border:2px solid #0d9488;border-radius:12px;padding:2.5rem;margin-top:3rem;text-align:center;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#111827;margin-bottom:0.75rem;">Ready to explore ketamine therapy?</h2>
      <p style="font-family:'Poppins',sans-serif;font-size:1rem;line-height:1.8;color:#374151;margin-bottom:1.5rem;text-wrap:pretty;">
        Take the first step toward finding relief. Our team of experienced clinicians can help determine whether ketamine therapy may be right for you.
      </p>
      <a href="/appointment" style="display:inline-block;background-color:#0d9488;color:#ffffff;font-family:'Poppins',sans-serif;font-size:1rem;font-weight:600;padding:0.85rem 2.5rem;border-radius:8px;text-decoration:none;">Book an Appointment</a>
    </div>
  </div>
</div>`;
}

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: buildHtml(),
      }}
    />
  );
}
