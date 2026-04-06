import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || !url.startsWith('http')) {
      return NextResponse.json({ error: 'Valid URL required' }, { status: 400 });
    }

    // Fetch the webpage
    let pageText = '';
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; IshaHealth/1.0)' },
      });
      const html = await res.text();
      // Strip HTML tags, keep text content
      pageText = html
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 15000); // Limit to 15K chars
    } catch {
      return NextResponse.json({ error: 'Could not fetch the URL' }, { status: 400 });
    }

    if (pageText.length < 100) {
      return NextResponse.json({ error: 'Page has too little content to extract from' }, { status: 400 });
    }

    // Use Claude to extract structured data
    const prompt = `Extract therapist profile information from this webpage text. Return ONLY valid JSON with these fields (use null for any field you cannot confidently extract):

{
  "first_name": "",
  "last_name": "",
  "credentials": ["LCSW", "PhD"],
  "pronouns": "",
  "bio": "",
  "welcome_message": "",
  "treatment_approach": "",
  "education": "",
  "years_in_practice": null,
  "specialties": ["anxiety", "depression", "ptsd"],
  "therapy_types": ["cbt", "emdr", "ifs"],
  "languages": ["english"],
  "session_formats": "",
  "typical_session_length": "",
  "fee": "",
  "sliding_scale": false,
  "accepting_new_clients": true,
  "free_consultation": false,
  "evening_weekend_availability": false,
  "lgbtq_affirmative": false,
  "insurance_accepted": ["aetna", "cigna"],
  "phone": "",
  "website": "",
  "city": "",
  "state": "",
  "street_address": "",
  "booking_url": "",
  "telehealth_platform": "",
  "publications": "",
  "professional_memberships": "",
  "client_focus": "",
  "cultural_focus": "",
  "faith_or_spiritual_focus": "",
  "instagram_url": "",
  "linkedin_url": ""
}

For specialties and therapy_types, use lowercase with underscores (e.g., "trauma_ptsd", "acceptance_commitment").
For credentials, use uppercase abbreviations (e.g., "LCSW", "LMFT", "PhD").
For bio, write a clean, professional paragraph — do not copy marketing fluff.
For treatment_approach, summarize their therapeutic philosophy in 2-3 sentences.

Webpage text:
${pageText}`;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      return NextResponse.json({ error: 'AI extraction failed', details: err }, { status: 500 });
    }

    const geminiData = await geminiRes.json();
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Could not parse AI response', raw: text }, { status: 500 });
    }

    const extracted = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ success: true, data: extracted, source_url: url });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
