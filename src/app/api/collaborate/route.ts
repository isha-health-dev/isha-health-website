import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, lastName, email, phone, licenseType, licenseStates, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Send notification to Isha Health
    await resend.emails.send({
      from: 'Isha Health <info@isha.health>',
      to: 'info@isha.health',
      replyTo: email,
      subject: `New Collaboration Inquiry from ${name} ${lastName || ''}`.trim(),
      html: `
        <h2>New Collaboration Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name} ${lastName || ''}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>` : ''}
          ${licenseType ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">License Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${licenseType}</td></tr>` : ''}
          ${licenseStates ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Licensed States</td><td style="padding:8px;border-bottom:1px solid #eee;">${licenseStates}</td></tr>` : ''}
          ${message ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${message}</td></tr>` : ''}
        </table>
        <p style="color:#999;font-size:12px;margin-top:20px;">Submitted from isha.health/collaborate-with-isha-health</p>
      `,
    });

    // Send confirmation to the submitter
    await resend.emails.send({
      from: 'Isha Health <info@isha.health>',
      to: email,
      subject: 'Thank you for your interest in collaborating with Isha Health',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;">
          <img src="https://isha.health/images/isha_logo.webp" alt="Isha Health" style="height:40px;margin-bottom:20px;" />
          <p>Hi ${name},</p>
          <p>Thank you for your interest in collaborating with Isha Health. We've received your inquiry and will be in touch shortly.</p>
          <p>In the meantime, you can learn more about our <a href="https://isha.health/our-treatment-approach" style="color:#0d9488;">treatment approach</a> or browse our <a href="https://isha.health/ketamine-therapist-directory" style="color:#0d9488;">therapist directory</a>.</p>
          <p>Best,<br>The Isha Health Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to send', details: String(err) },
      { status: 500 }
    );
  }
}
