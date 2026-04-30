import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Session Instruction",
  description: "Step-by-step Isha Health guide for at-home ketamine dosing sessions: how to prepare, what to do during treatment, and what to expect afterward.",
  alternates: {
    canonical: "https://isha.health/current-patients/session-instruction",
  },
  openGraph: buildOpenGraph({
    title: "Session Instruction",
    description: "Learn how to safely self-administer ketamine with detailed instructions from Isha Health. Follow our guidelines to ensure effective and secure treatment at home. Please read and follow the Session Instruction page to prepare for your dosing sessions. Find out what you need to know before, during, and after your session.",
    path: '/current-patients/session-instruction',
  }),
  twitter: {
    card: "summary_large_image",
    title: "Session Instruction",
    description: "Learn how to safely self-administer ketamine with detailed instructions from Isha Health. Follow our guidelines to ensure effective and secure treatment at home. Please read and follow the Session Instruction page to prepare for your dosing sessions. Find out what you need to know before, during, and after your session.",
  },
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<div style="max-width:800px;margin:0 auto;padding:2rem 1.5rem 3rem;">

  <div style="text-align:center;margin-bottom:2rem;">
    <h1 style="font-family:'Libre Baskerville',serif;font-size:2rem;font-weight:700;color:#111827;margin:0 0 0.5rem;">Session Instruction</h1>
    <div style="width:60px;height:3px;background:#0d9488;margin:0 auto;border-radius:2px;"></div>
  </div>

  <div style="background:#f0fdfa;border-left:4px solid #0d9488;padding:1.25rem 1.5rem;margin-bottom:2rem;border-radius:0 8px 8px 0;">
    <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;font-weight:600;color:#0f766e;margin-bottom:0.5rem;">A note from Dr. Mai Shimada, MD</p>
    <p style="font-family:'Poppins',sans-serif;font-size:0.9rem;color:#374151;line-height:1.6;margin:0;">Ketamine sessions allow you to access contents in your mind that you typically don't have access to. What was stored recently can affect what you access during your session — so it's very important to plan thoroughly beforehand. For example, consumption of social media and gaming content in the hours before a session tends to be distracting and can reduce the therapeutic value of the experience. I recommend patients create a calm, intentional mental space in the day leading up to their session.</p>
  </div>

  <!-- Quick Links -->
  <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:2.5rem;padding:1.25rem;background:#f9fafb;border-radius:10px;">
    <a href="/support-person-overview" style="display:inline-flex;align-items:center;gap:0.4rem;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;color:#0d9488;text-decoration:none;padding:0.4rem 0.75rem;border:1px solid #d1d5db;border-radius:6px;background:#fff;">
      <img src="/images/c0d1370f_6424066490d78ca679855cf7_support.webp" loading="lazy" width="16" height="16" alt="Support"> Support Person Overview
    </a>
    <a href="/healing-music-playlist" style="display:inline-flex;align-items:center;gap:0.4rem;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;color:#0d9488;text-decoration:none;padding:0.4rem 0.75rem;border:1px solid #d1d5db;border-radius:6px;background:#fff;">
      <img src="/images/e6379c86_642406643241395c44e7a6a8_musical-note.webp" loading="lazy" width="16" height="16" alt="Musical note"> Healing Sound Playlist
    </a>
    <a href="https://isha.health/post/donation-based-online-integration-circles-for-people-receiving-ketamien-treatment" style="display:inline-flex;align-items:center;gap:0.4rem;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;color:#0d9488;text-decoration:none;padding:0.4rem 0.75rem;border:1px solid #d1d5db;border-radius:6px;background:#fff;">
      <img src="/images/183b0d86_642406653901acaa5c694427_rec.webp" loading="lazy" width="16" height="16" alt=""> Integration Circles
    </a>
    <a href="/faq" style="display:inline-flex;align-items:center;gap:0.4rem;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;color:#0d9488;text-decoration:none;padding:0.4rem 0.75rem;border:1px solid #d1d5db;border-radius:6px;background:#fff;">
      <img src="/images/5c86e7c3_6424066424468df6964e631a_information.webp" loading="lazy" width="16" height="16" alt="Information"> FAQ
    </a>
    <a href="/current-patients/scheduling" style="display:inline-flex;align-items:center;gap:0.4rem;font-family:'Poppins',sans-serif;font-size:0.8rem;font-weight:600;color:#0d9488;text-decoration:none;padding:0.4rem 0.75rem;border:1px solid #d1d5db;border-radius:6px;background:#fff;">
      <img src="/images/8ec269eb_642406644f8a9954ff8d2bcb_booking.webp" loading="lazy" width="16" height="16" alt="Booking"> Booking
    </a>
  </div>

  <!-- SESSION 1 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 1</h2>
    </div>
    <div style="padding:1.5rem;">

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Baseline Assessment</h3>
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">To get started, please make sure that you have finished the Baseline Assessment on <a href="https://app.osmind.org/start" style="color:#0d9488;text-decoration:underline;">Osmind App</a>. It's essential that you complete it before your session begins.</p>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 1</h3>
      <div style="position:relative;padding-top:56.17%;margin-bottom:1.25rem;border-radius:8px;overflow:hidden;">
        <iframe src="https://www.youtube.com/embed/9KCRmNtZnC0?rel=0&controls=1&autoplay=0&mute=0&start=0" frameborder="0" style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:auto;" allow="autoplay; encrypted-media" allowfullscreen="" title="Therapy Preparation Guide for Depression and Anxiety | Isha Health"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">One important aspect of ketamine therapy is setting intentions for the experience. By clarifying what you hope to achieve from the session, you can maximize the potential benefits of the medication and create a more focused and purposeful experience. Here are some tips for <a href="https://isha.health/post/intention-setting-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">setting intentions for a ketamine therapy session</a>.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Preparing Yourself &amp; Your Environment</h4>
        <p style="margin-bottom:1rem;">Expert practitioners developed these preparation best practices over many decades. Preparing fully and effectively for every session is crucial to creating the best possible conditions for safe, powerful, and effective experiences.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reviewing Support Person Overview</h4>
        <p style="margin-bottom:1rem;">Share <a href="https://isha.health/support-person-overview" style="color:#0d9488;text-decoration:underline;">this link</a> with your Support Person and ask them to review it before your session.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 1</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">Please split the troche in half.</li>
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p style="margin-bottom:1rem;">As your session comes to a close, we encourage you to take some time to reflect and write down any insights, questions, or feelings that came up during your experience. This will help solidify those memories and prevent them from fading away too quickly. We believe that powerful insights are worth capturing and revisiting later, and journaling is a great way to do so. So, take a few moments to jot down your thoughts and reflect on the transformative potential of this experience.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">For the Rest of the Day Following Treatment</h4>
        <p style="margin-bottom:0.75rem;">As you come down from your experience, we encourage you to be gentle with yourself and give yourself plenty of time and space to process your thoughts and feelings. Nourishing your body with healthy food, going for a walk, doing gentle stretches or yoga, and expressing yourself creatively can all be helpful ways to ground yourself.</p>
        <p style="margin-bottom:0.75rem;">Please keep in mind that you may feel more open than usual following treatment, so it's important to be mindful of the media you consume. If possible, avoid social media, the news, or anything else that may be highly suggestive or disturbing.</p>
        <p>Lastly, take time to celebrate yourself and the growth you've achieved through this experience. Recognize the effort you've put in and allow yourself to feel proud of your progress. Remember, self-care and self-love are essential to maintaining a positive and healthy mindset.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 1</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/233QHLsMhXceP8xharLmzI?utm_source=generator" width="100%" height="380" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this track</h4>
        <p>This playlist is filled with relaxing and calming tracks, perfect for those undergoing ketamine treatment. The songs are soft and dreamy, and they may help you to let go of any stress or anxiety that you may be feeling. You'll find a mix of genres here, including classical, ambient, and new age music, all of which have been carefully chosen to help you achieve a state of deep relaxation. So, sit back, relax, and let the music guide you on your journey.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 1</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">What Is Integration?</h4>
        <p style="margin-bottom:1rem;">Integration refers to the process of incorporating and making sense of the insights, emotions, and experiences that arise during the ketamine session. This process may involve reflecting on and discussing the experience with a therapist or trusted friend, journaling, or engaging in other forms of self-reflection. The goal of integration is to help individuals make meaning of their experience and integrate it into their lives in a way that promotes healing and growth. It can be an ongoing process that occurs over time and may involve changes in behavior, thought patterns, and relationships. Integration is considered an essential component of ketamine treatment as it can help individuals to optimize the benefits of the treatment and promote lasting change.</p>
        <p style="margin-bottom:1rem;">During the upcoming weeks of your ketamine treatment, your brain will be in a state of neuroplasticity, making it an opportune time to implement long-lasting positive changes in your life. Collaborating closely with your therapist can prove to be beneficial in fully utilizing this unique state. Each integration period provides the opportunity to work with your therapist to unpack the ketamine experience, extract personal meaning, set achievable goals aligned with your initial intentions, and establish actionable practices to help achieve these goals.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Maximize Your Experience</h4>
        <p>Taking the time to integrate your ketamine experience is crucial for maximizing its potential benefits. Regardless of the number of sessions you have in your treatment program, the more effort you put into integrating your experience, the more profound and long-lasting the effects are likely to be. Therefore, it is recommended that you prioritize the process of integration by reflecting on your experience, discussing it with a therapist or trusted individual, or engaging in other forms of self-reflection to fully incorporate the insights and emotions that arise during the session.</p>
      </div>
    </div>
  </div>

  <!-- SESSION 2 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 2</h2>
    </div>
    <div style="padding:1.5rem;">
      <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1rem;">Congratulations on completing your first session. Now you have some idea of what ketamine experience is like, let's optimize your environment for your sessions.</p>
      <div style="background:#f0fdfa;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reminders for Your Session:</h4>
        <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin:0;">
          <li>Set aside at least two hours for your uninterrupted treatment.</li>
          <li>Clear the rest of your day to reflect and relax.</li>
          <li>Plan for your Support Person to be present and prepared.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 2</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Creating an Optimal Environment</h4>
        <p style="margin-bottom:0.75rem;"><strong>1. Choose a Comfortable and Safe Space</strong></p>
        <p style="margin-bottom:0.75rem;">The first and most important aspect of an optimal ketamine experience is choosing a comfortable and safe space. This can be a bedroom, living room, or any other space where the person feels relaxed and at ease. It's important to remove any potential hazards or distractions from the space, such as sharp objects, loud noises, or bright lights. If possible, choose a space that is quiet and private, so that the person can fully immerse themselves in the experience without any interruptions.</p>
        <p style="margin-bottom:0.75rem;"><strong>2. Set the Mood with Music and Lighting</strong></p>
        <p style="margin-bottom:0.75rem;">The next step in creating an optimal environment for a ketamine experience is to set the mood with music and lighting. Many people find that music can greatly enhance the psychedelic effects of ketamine, and can help guide the journey in a positive direction. Choose music that is calming and soothing, and that resonates with the person's individual tastes and preferences. It's also important to adjust the lighting to create a relaxing and peaceful atmosphere. Dimming the lights or using candles can help create a more intimate and introspective setting.</p>
        <p style="margin-bottom:0.75rem;"><strong>3. Use Comfortable Seating or Bedding</strong></p>
        <p style="margin-bottom:0.75rem;">During a ketamine experience, it's important to have a comfortable place to sit or lie down. Many people prefer to use a bed or comfortable chair, and it's important to have pillows and blankets available to help the person feel at ease. It's also a good idea to have a glass of water nearby, as ketamine can cause dry mouth and dehydration.</p>
        <p style="margin-bottom:0.75rem;"><strong>4. Have a Support System in Place</strong></p>
        <p style="margin-bottom:1rem;">Finally, it's important to have a support system in place during a ketamine experience. This can be a trusted friend, family member, or healthcare professional who can provide emotional support and guidance throughout the journey. It's also important to have a plan in place in case of any unexpected or challenging experiences, such as a panic attack or overwhelming sensations.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">As always, take a minute to consider your intention for your upcoming session and write this down in-app or in your journal. If you are seeking to maintain a positive mindset, consider setting an intention to do so in your upcoming <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy session</a>. This intention can help you cultivate a more optimistic outlook, allowing you to approach life's challenges with greater resilience and strength. By focusing on staying in a positive mindset, you may be able to develop strategies for managing negative thoughts and emotions, helping you maintain a sense of calm and balance even in difficult situations. Additionally, this intention can help you develop a greater sense of self-confidence and self-acceptance, which can contribute to improved mental well-being and overall life satisfaction.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 2</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p>When the effect of medication wears off, you may take off your mask at this point and continue to listen to the music as you journal. Make sure to journal everything you recall that came up during your experience to solidify those memories. Powerful insights, questions, and feelings can quickly dissipate if you don't capture them immediately!</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 2</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/5vmeBxK341JO8oOJ6BUPjK?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this track</h4>
        <p>This playlist is filled with relaxing and calming tracks, perfect for those undergoing ketamine treatment. The songs are soft and dreamy, and they may help you to let go of any stress or anxiety that you may be feeling. You'll find a mix of genres here, including classical, ambient, and new age music, all of which have been carefully chosen to help you achieve a state of deep relaxation. So, sit back, relax, and let the music guide you on your journey.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 2</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Commit to an Integration Action</h4>
        <p style="margin-bottom:1rem;">Take some time to journal now that you have reflected on your experience. As you journal, focus on identifying a single, core action that you can take this week to make progress towards your goals. This is an opportunity to use your insights from your <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy session</a> to develop a tangible plan for personal growth. Write down your integration action in your journal and commit to taking action on it this week. By committing to taking action, you can translate your insights and intentions into real-world changes that can help you achieve greater well-being and fulfillment. Remember to give yourself permission to be patient and compassionate with yourself as you work towards your goals.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Circles</h4>
        <p>We highly encourage you to work with a ketamine psychotherapist for integration. You can reach out to a psychotherapy session with our experienced <a href="https://isha.health/post/why-do-i-need-a-therapist-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">ketamine therapist</a> from <a href="https://isha.health/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">here</a>. We also have a resource where you can find donation based <a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">integration circles</a> that may meet your needs.</p>
      </div>
    </div>
  </div>

  <!-- SESSION 3 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 3</h2>
    </div>
    <div style="padding:1.5rem;">
      <div style="background:#f0fdfa;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reminders for Your Session:</h4>
        <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin:0;">
          <li>Set aside at least two hours for your uninterrupted treatment.</li>
          <li>Clear the rest of your day to reflect and relax.</li>
          <li>Plan for your Support Person to be present and prepared.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 3</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Cultivating Your Mindset</h4>
        <p style="margin-bottom:0.75rem;">Cultivating the right mindset is important when preparing for <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy sessions</a>. Here are some tips for cultivating a positive mindset:</p>
        <ol style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">Set clear intentions: Take the time to identify your goals for your <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy sessions</a>. This will help you approach each session with a sense of purpose and focus.</li>
          <li style="margin-bottom:0.4rem;">Practice self-care: Prioritize self-care leading up to and after your <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy sessions</a>. This can include exercise, healthy eating, meditation, and other activities that help you feel calm and centered.</li>
          <li style="margin-bottom:0.4rem;">Stay open-minded: Ketamine therapy can be a transformative experience, but it can also be challenging at times. Approach each session with an open mind, and trust the process.</li>
          <li style="margin-bottom:0.4rem;">Build a support system: Having a support system in place can help you stay grounded and centered throughout the ketamine therapy process. This can include family, friends, therapists, and other healthcare professionals.</li>
          <li>Be patient: Ketamine therapy is not a quick fix, and results may not be immediate. Cultivate patience and trust in the process, and allow yourself time to fully integrate the insights and changes that arise from each session.</li>
        </ol>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">As always, take a minute to consider your intention for your upcoming session and write this down in-app or in your journal. For your upcoming <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy session</a>, you may want to consider holding an intention to find inner peace and tranquility. This intention can help you quiet your mind and cultivate a sense of calm and serenity within yourself. By focusing on finding inner peace, you may be able to gain insights into the sources of your stress or anxiety and develop strategies to manage them more effectively. This intention can also help you develop a greater sense of self-awareness and self-acceptance, which can contribute to a more positive outlook and improved mental well-being.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 3</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p>When the effect of medication wears off, you may take off your mask at this point and continue to listen to the music as you journal. Make sure to journal everything you recall that came up during your experience to solidify those memories. Powerful insights, questions, and feelings can quickly dissipate if you don't capture them immediately!</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 3</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/41FOMAZXEBVtzrYpeGsxZA?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this playlist</h4>
        <p>This playlist is perfect for those who want to immerse themselves in a world of sound during their ketamine treatment. The tracks are diverse, ranging from classical to ambient to experimental, and they all share a common thread of creating a sense of otherworldliness. The music is intended to help you feel more present and connected to your surroundings, and it may deepen your experience of the treatment. If you're looking for a musical journey that's both introspective and otherworldly, this playlist is definitely worth a listen.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 3</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <p style="margin-bottom:1rem;">We hope your third session helped reinforce and expand upon the progress you've made so far! Here's your personalized integration plan for the week.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Material</h4>
        <p style="margin-bottom:0.75rem;">As you've seen so far, journaling is an essential practice in psychedelic therapy. It allows you to record your thoughts, emotions, and experiences during the therapy and integration period.</p>
        <p style="margin-bottom:0.75rem;">Ketamine therapy can bring up a range of emotions, memories, and experiences that may be difficult to process. Journaling can provide an outlet to express these feelings and help you gain a better understanding of your experiences. It can also serve as a reference point for you to reflect on your progress and identify patterns in your thoughts and emotions.</p>
        <p style="margin-bottom:0.75rem;">Furthermore, journaling can help you track any changes in your mood or symptoms over time, which can be useful for both you and your healthcare provider. It can also help you set goals for your therapy and integration process and identify any barriers to achieving those goals.</p>
        <p style="margin-bottom:1rem;">Overall, journaling can be a valuable tool in the <a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">ketamine integration</a> process, helping you to process your experiences, gain insights, track progress, and set goals for continued growth and healing.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Commit to an Integration Action</h4>
        <p style="margin-bottom:1rem;">It's time to take action! While you're journaling, pay attention to any significant lessons that arise and pinpoint a fundamental action that you can take right now. Jot down this action in your journal and make a commitment to follow through on it during the upcoming week. Establishing a routine of taking action after each session is crucial in closing the gap between therapeutic insights and implementing positive changes in your daily life. The more you can connect your everyday activities to the personal insights you've gained, the more likely they are to become ingrained in your behavior and routine.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Circles</h4>
        <p>We highly encourage you to work with a ketamine psychotherapist for integration. You can book a psychotherapy session with our experienced <a href="https://isha.health/post/why-do-i-need-a-therapist-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">ketamine therapist</a> from <a href="https://isha.health/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">here</a>. We also have a resource where you can find donation based <a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">integration circles</a> that may meet your needs.</p>
      </div>
    </div>
  </div>

  <!-- SESSION 4 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 4</h2>
    </div>
    <div style="padding:1.5rem;">
      <div style="background:#f0fdfa;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reminders for Your Session:</h4>
        <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin:0;">
          <li>Set aside at least two hours for your uninterrupted treatment.</li>
          <li>Clear the rest of your day to reflect and relax.</li>
          <li>Plan for your Support Person to be present and prepared.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 4</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Inner Healing Intelligence</h4>
        <p style="margin-bottom:0.75rem;">Inner intelligence refers to the innate capacity of our mind and body to heal and regenerate themselves. It encompasses our mental, emotional, and physical abilities to adapt and respond to various challenges and changes in our environment. Inner intelligence is believed to be influenced by factors such as genetics, lifestyle, diet, and environment.</p>
        <p style="margin-bottom:0.75rem;">Ketamine treatment is relevant to inner intelligence as it has been shown to have a positive impact on various aspects of mental health, such as depression, anxiety, and PTSD. Ketamine works by modulating the levels of neurotransmitters in the brain, leading to a shift in neural connections and a temporary increase in brain plasticity. This shift may facilitate the reorganization and integration of neural networks, leading to a restoration of inner intelligence.</p>
        <p style="margin-bottom:1rem;">Additionally, ketamine treatment may help individuals access deeper levels of self-awareness, insight, and intuition. This increased awareness can aid in the development of one's inner intelligence, leading to improved mental and emotional well-being.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">As always, take a minute to consider your intention for your upcoming session and write this down in-app or in your journal. If you are seeking to explore your spirituality or connect with your higher purpose, consider setting an intention to do so in your upcoming <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy session</a>. This intention can help you gain a deeper understanding of your spiritual beliefs and develop a greater sense of connection with something larger than yourself. By focusing on your spirituality or higher purpose, you may be able to tap into a source of inner strength and wisdom that can guide you on your journey towards greater fulfillment and purpose. Additionally, connecting with your spirituality or higher purpose can help you cultivate a greater sense of inner peace and well-being, which can have positive effects on all aspects of your life.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 4</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p>When the effect of medication wears off, you may take off your mask at this point and continue to listen to the music as you journal. Make sure to journal everything you recall that came up during your experience to solidify those memories. Powerful insights, questions, and feelings can quickly dissipate if you don't capture them immediately!</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 4</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/4elYzxuJtMdIsZHB5Z5uTB?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this playlist</h4>
        <p>This playlist is perfect for those who want to immerse themselves in a world of sound during their ketamine treatment. The tracks are diverse, ranging from classical to ambient to experimental, and they all share a common thread of creating a sense of otherworldliness. The music is intended to help you feel more present and connected to your surroundings, and it may deepen your experience of the treatment. If you're looking for a musical journey that's both introspective and otherworldly, this playlist is definitely worth a listen.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 4</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Achieving Lasting Change</h4>
        <p style="margin-bottom:0.75rem;">We hope these experiences will have an enduring impact on your life. It is essential to combine ketamine treatment with other interventions that address the underlying causes of these conditions.</p>
        <p style="margin-bottom:0.75rem;">Some strategies that can help achieve lasting change with ketamine treatment include:</p>
        <ol style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">Therapy: Ketamine treatment can help individuals access deeper levels of self-awareness, making therapy more effective. Combining ketamine treatment with psychotherapy, cognitive-behavioral therapy, or other forms of talk therapy can help individuals address the root causes of their symptoms and develop coping strategies for the long-term.</li>
          <li style="margin-bottom:0.4rem;"><a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">Integration circle</a>: Integration circles provide a safe and supportive environment for individuals who have undergone ketamine treatment to process their experiences, emotions, and insights. These sessions are typically led by trained facilitators and can help individuals integrate their ketamine experiences into their daily lives and work towards achieving lasting change. Integration circles can also foster a sense of community and belonging, as individuals can share their experiences and connect with others who have undergone similar journeys.</li>
          <li style="margin-bottom:0.4rem;">Lifestyle Changes: Lifestyle factors such as exercise, diet, and sleep can significantly impact mental health. Combining ketamine treatment with lifestyle changes can help individuals maintain the benefits of treatment and improve their overall well-being.</li>
          <li>Mindfulness and Meditation: Mindfulness practices such as meditation and yoga can help individuals develop greater self-awareness and resilience. Incorporating mindfulness practices into daily life can help individuals maintain the benefits of ketamine treatment and achieve lasting change.</li>
        </ol>
        <p style="margin-bottom:1rem;">By incorporating the strategies above, you can maximize the benefits of ketamine treatment to achieve lasting change.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Commit to an Integration Action</h4>
        <p style="margin-bottom:1rem;">As you reflect on your experience, notice any desires or actions that present themselves. What can you do now to ensure that these experiences carry over into the rest of your life?</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Circles</h4>
        <p>We highly encourage you to work with a ketamine psychotherapist for integration. You can book a psychotherapy session with our experienced <a href="https://isha.health/post/why-do-i-need-a-therapist-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">ketamine therapist</a> from <a href="https://isha.health/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">here</a>. We also have a resource where you can find donation based <a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">integration circles</a> that may meet your needs.</p>
      </div>
    </div>
  </div>

  <!-- SESSION 5 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 5</h2>
    </div>
    <div style="padding:1.5rem;">
      <div style="background:#f0fdfa;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reminders for Your Session:</h4>
        <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin:0;">
          <li>Set aside at least two hours for your uninterrupted treatment.</li>
          <li>Clear the rest of your day to reflect and relax.</li>
          <li>Plan for your Support Person to be present and prepared.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 5</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Embracing Yourself</h4>
        <p style="margin-bottom:1rem;">This session aims to encourage individuals to embrace themselves and all that makes them unique, including their strengths, opportunities, and imperfections. While it is important to strive for personal growth and wholeness, it is equally important to accept and appreciate oneself in the present moment. Each person's history, commitments, relationships, successes, and challenges have contributed to the individual they are today. Therefore, it is essential to recognize and celebrate oneself in the here and now.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">As you prepare for your upcoming session, we encourage you to reflect on the intention of embracing yourself. Take time to appreciate and acknowledge the progress you have made in this process so far, as well as the potential and possibilities that await you on your journey. By focusing on self-appreciation and recognizing your accomplishments, you can continue to build on the positive momentum and strive towards achieving your personal goals.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 5</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p>When the effect of medication wears off, you may take off your mask at this point and continue to listen to the music as you journal. Make sure to journal everything you recall that came up during your experience to solidify those memories. Powerful insights, questions, and feelings can quickly dissipate if you don't capture them immediately!</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 5</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/album/3G6sgqTyhRddurUilNLJNR?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this playlist</h4>
        <p>This album is a collection of ambient tracks designed specifically for ketamine therapy. The music is created by a composer who has experience working with patients undergoing this treatment, and the tracks are intended to enhance the effects of ketamine. The music is calming and ethereal, and it may help to create a sense of timelessness during your treatment. If you're looking for a cohesive musical experience that's tailored to the effects of ketamine, this album is definitely worth a listen.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 5</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Gratitude &amp; Appreciation</h4>
        <p style="margin-bottom:1rem;">Hopefully you were able to take some time and embrace yourself, your unique path, and the beautiful future that lies ahead of you. During your upcoming neuroplastic window, you can assist this process by continuing to look for, and deeply feel, the beauty and power you have within you.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Activities</h4>
        <p style="margin-bottom:0.5rem;">For the next few days, consider taking up one of these activities:</p>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">Journal for 5-10 minutes daily about something you love about yourself</li>
          <li style="margin-bottom:0.4rem;">Write 5 things every morning you are grateful for</li>
          <li>Check out this <a href="https://www.youtube.com/watch?v=N6dEz2UNcOQ" style="color:#0d9488;text-decoration:underline;">5 minute gratitude meditation</a> or a <a href="https://www.youtube.com/watch?v=faTGTgid8Uc" style="color:#0d9488;text-decoration:underline;">15 minute overview of priming your state</a>.</li>
        </ul>
        <p>Starting to train your mind and body to look for and recognize the parts of yourself that are beautiful will be just as powerful as the healing work you have done so far.</p>
      </div>
    </div>
  </div>

  <!-- SESSION 6 -->
  <div style="margin-bottom:2.5rem;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background:#0d9488;padding:1rem 1.5rem;">
      <h2 style="font-family:'Libre Baskerville',serif;font-size:1.3rem;font-weight:700;color:#fff;margin:0;">Session 6</h2>
    </div>
    <div style="padding:1.5rem;">
      <div style="background:#f0fdfa;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Reminders for Your Session:</h4>
        <ul style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;padding-left:1.25rem;margin:0;">
          <li>Set aside at least two hours for your uninterrupted treatment.</li>
          <li>Clear the rest of your day to reflect and relax.</li>
          <li>Plan for your Support Person to be present and prepared.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Prepare for Session 6</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Wrapping Up</h4>
        <p style="margin-bottom:1rem;">Congratulations on your progress and for continuing to show up for your healing journey.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Setting Intentions</h4>
        <p style="margin-bottom:1rem;">As always, take a minute to consider your intention for your upcoming session and write this down in-app or in your journal. If you are seeking greater clarity and insight into your thoughts and emotions, consider setting an intention to do so in your upcoming <a href="https://isha.health/post/9-things-you-should-do-before-your-ketamine-dosing-sessions" style="color:#0d9488;text-decoration:underline;">ketamine therapy session</a>. This intention can help you explore the underlying causes of your thoughts and emotions, allowing you to gain a deeper understanding of your inner self. By focusing on clarity and insight, you may be able to gain a greater sense of control over your thoughts and emotions, allowing you to make more informed decisions and respond to challenging situations in a more productive manner. Additionally, this intention can help you develop a greater sense of self-awareness and self-acceptance, which can be beneficial in all aspects of your life. Remember to discuss your intention with your <a href="https://isha.health/post/why-do-i-need-a-therapist-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">ketamine therapist</a> to ensure that they can support you in achieving your desired outcomes.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Session Prep Checklist</h4>
        <ul style="padding-left:1.25rem;margin-bottom:0;">
          <li style="margin-bottom:0.4rem;">Approach this session as an opportunity to make a positive impact on your life.</li>
          <li style="margin-bottom:0.4rem;">To minimize the risk of discomfort, please avoid eating for 4 hours and drinking for 2 hours prior to treatment.</li>
          <li style="margin-bottom:0.4rem;">To ensure optimal results, please refrain from using benzodiazepines, stimulants, cannabis, and alcohol on the day of your session.</li>
          <li style="margin-bottom:0.4rem;">Prior to the session, take time to calm your body and mind through a brief meditation, short walk, or slow yoga.</li>
          <li style="margin-bottom:0.4rem;">To create a peaceful environment, please make sure that pets, family, and roommates are not in your session space.</li>
          <li style="margin-bottom:0.4rem;">Before starting the session, please use the restroom.</li>
          <li style="margin-bottom:0.4rem;">Wear comfortable clothing and have blankets and pillows nearby for added comfort.</li>
          <li style="margin-bottom:0.4rem;">To minimize distractions, please put your phone in Do Not Disturb mode.</li>
          <li style="margin-bottom:0.4rem;">Prepare a spit cup for medicine and keep a glass of water nearby.</li>
          <li style="margin-bottom:0.4rem;">To set the mood, use dim lighting such as lamps instead of overhead lights, if possible.</li>
          <li>Lastly, have your medicine, journal, pen, and eye mask with you.</li>
        </ul>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Instructions for Session 6</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Taking Your Medicine</h4>
        <ul style="padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.4rem;">If your clinician has prescribed anti-nausea medication, it's recommended that you take it 45 minutes before your session. Simply let the medication dissolve under your tongue.</li>
          <li style="margin-bottom:0.4rem;">To take your ketamine tablets, place them under your tongue and allow them to dissolve. However, do not swallow the tablets, as this may increase the risk of nausea and slow your return to your baseline physical and mental states. After 15 minutes, any accumulated saliva can be spit into your spit cup.</li>
          <li>If you experience any lingering bitterness, you may use a breath freshener, such as a mouthwash rinse, to alleviate it.</li>
        </ul>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Journaling After Your Session</h4>
        <p>When the effect of medication wears off, you may take off your mask at this point and continue to listen to the music as you journal. Make sure to journal everything you recall that came up during your experience to solidify those memories. Powerful insights, questions, and feelings can quickly dissipate if you don't capture them immediately!</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Audio for Session 6</h3>
      <div style="margin-bottom:1.25rem;border-radius:12px;overflow:hidden;">
        <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/2CBAwuuqP9ORwBl89Uvq39?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;margin-bottom:1.5rem;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">About this playlist</h4>
        <p>This playlist features a mix of ambient and experimental tracks that are designed to help you let go of any distractions and focus on your inner experience during ketamine therapy. The music is diverse and unique, with a focus on creating a sense of introspection and inner exploration. It's perfect for those who want to dive deep into their inner worlds during their treatment, and it may help to enhance your experience. So, sit back, relax, and let the music guide you on your journey of self-discovery.</p>
      </div>

      <h3 style="font-family:'Libre Baskerville',serif;font-size:1.05rem;font-weight:700;color:#111827;margin-bottom:0.75rem;border-bottom:2px solid #0d9488;padding-bottom:0.5rem;">Integration Session 6</h3>
      <div style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#374151;line-height:1.7;">
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Resting Period</h4>
        <p style="margin-bottom:1rem;">Even though many changes happen beneath the surface of conscious awareness, the sessions you have had so far will add up, and after any intense activity, it's crucial to set aside time for rest. You could schedule a nature walk or a relaxing day at home for yourself. Although it may be tempting to take quick action, it's equally important to allow these lessons to settle in and for your mind and body to rest and recover.</p>
        <p style="margin-bottom:1rem;">You have accomplished a lot, so take some time to appreciate yourself and give your mind and body the time it needs to rest.</p>
        <h4 style="font-family:'Libre Baskerville',serif;font-size:1rem;color:#111827;margin-bottom:0.5rem;">Integration Circles</h4>
        <p>We highly encourage you to work with a ketamine psychotherapist for integration. You can book a psychotherapy session with an experienced <a href="https://isha.health/post/why-do-i-need-a-therapist-for-ketamine-treatment" style="color:#0d9488;text-decoration:underline;">ketamine therapist</a> from <a href="https://isha.health/ketamine-therapist-directory" style="color:#0d9488;text-decoration:underline;">here</a>. We also have a resource where you can find donation based <a href="https://isha.health/post/online-integration-circles-for-ketamine-therapy" style="color:#0d9488;text-decoration:underline;">integration circles</a> that may meet your needs.</p>
      </div>
    </div>
  </div>

</div>
`,
      }}
    />
  );
}
