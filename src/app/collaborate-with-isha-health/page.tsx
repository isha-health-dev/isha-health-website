'use client';

import { useState } from 'react';

export default function CollaboratePage() {
  const [form, setForm] = useState({
    name: '', lastName: '', email: '', phone: '',
    licenseType: '', licenseStates: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/collaborate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.65rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600 as const,
    color: '#374151',
    marginBottom: '0.35rem',
  };

  if (status === 'sent') {
    return (
      <div style={{ padding: '0 0 2rem' }}>
        <div style={{ textAlign: 'center', padding: '3rem 1.5rem 1.5rem' }}>
          <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '2rem', fontWeight: 700, color: '#111827', margin: 0 }}>Thank You</h1>
        </div>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '3rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `<div style="background:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;padding:2.5rem;">
                <p style="font-family:'Libre Baskerville',serif;font-size:1.5rem;font-weight:700;color:#0f766e;margin-bottom:0.75rem;">We've received your inquiry</p>
                <p style="font-family:'Poppins',sans-serif;color:#4b5563;line-height:1.6;">Thank you for your interest in collaborating with Isha Health. We'll review your information and be in touch shortly. A confirmation has been sent to your email.</p>
                <a href="/" style="display:inline-block;margin-top:1.5rem;color:#0d9488;text-decoration:underline;font-family:'Poppins',sans-serif;">← Back to Home</a>
              </div>`,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 0 2rem' }}>
      <div style={{ textAlign: 'center', padding: '3rem 1.5rem 1.5rem' }}>
        <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '2rem', fontWeight: 700, color: '#111827', margin: 0 }}>Collaborate with Isha Health</h1>
      </div>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 1.5rem 2rem',
        }}
      >
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1rem', lineHeight: 1.7, color: '#4b5563', marginBottom: '2rem', textAlign: 'center' }}>
          We believe ketamine therapy works best when prescribers and therapists work together. Isha Health collaborates with over 500 clinicians across the country — our physicians handle the medical side while you provide the integration support that deepens and sustains patient progress.
        </p>

        {/* How It Works */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>How the Collaboration Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#0d9488', flexShrink: 0 }}>1</span>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>We provide integrative medical care, you provide therapy</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}>Isha Health physicians evaluate patients, prescribe ketamine, monitor medical safety, and provide ongoing integrative care. You provide the psychotherapy and integration sessions that deepen the therapeutic work.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#0d9488', flexShrink: 0 }}>2</span>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>Shared patients, shared communication</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}>When appropriate, our physicians coordinate directly with you on dosage, frequency, and treatment adjustments based on what you observe in therapy sessions.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#0d9488', flexShrink: 0 }}>3</span>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>Refer patients who need a prescriber</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}>If your clients are interested in ketamine therapy but need a physician to prescribe and monitor, refer them to Isha Health. We handle the medical side so you can focus on therapy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '1.25rem' }}>Why Clinicians Work with Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#f0fdfa', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ccfbf1' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#0f766e', marginBottom: '0.25rem' }}>Free Directory Listing</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.5 }}>Get a dedicated profile page on our clinician directory — no fees, ever.</p>
            </div>
            <div style={{ background: '#f0fdfa', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ccfbf1' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#0f766e', marginBottom: '0.25rem' }}>Patient Referrals</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.5 }}>Patients searching our directory can find and contact you directly.</p>
            </div>
            <div style={{ background: '#f0fdfa', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ccfbf1' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#0f766e', marginBottom: '0.25rem' }}>AI Profile Import</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.5 }}>Paste your Psychology Today or website URL — our AI fills in your profile automatically.</p>
            </div>
            <div style={{ background: '#f0fdfa', borderRadius: '8px', padding: '1.25rem', border: '1px solid #ccfbf1' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#0f766e', marginBottom: '0.25rem' }}>88.8% Outcomes</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.5 }}>Our collaborative model achieves measurable results. <a href="/outcomes" style={{ color: '#0d9488', textDecoration: 'underline' }}>See the data</a>.</p>
            </div>
          </div>
        </div>

        {/* Who We're Looking For */}
        <div style={{ marginBottom: '2.5rem', background: '#f9fafb', borderRadius: '10px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>Who We&rsquo;re Looking For</h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '0.5rem' }}>Licensed mental health professionals with training or interest in ketamine-assisted psychotherapy:</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.8 }}>
            LMFTs &bull; LCSWs &bull; LPCs &bull; Psychologists (PsyD, PhD) &bull; Psychiatrists (MD, DO) &bull; Psychiatric NPs
          </p>
        </div>

        {/* Form Header */}
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Get in Touch</h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: '#6b7280', marginBottom: '1.5rem' }}>Fill out the form below and our team will be in touch.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>First Name *</label>
              <input
                style={inputStyle}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Last Name</label>
              <input
                style={inputStyle}
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                style={inputStyle}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel"
                style={inputStyle}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>License Type</label>
              <select
                style={inputStyle}
                value={form.licenseType}
                onChange={(e) => setForm({ ...form, licenseType: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="LCSW">LCSW</option>
                <option value="LMFT">LMFT</option>
                <option value="LPC">LPC</option>
                <option value="PsyD">PsyD</option>
                <option value="PhD">PhD</option>
                <option value="MD">MD</option>
                <option value="DO">DO</option>
                <option value="NP">NP / PMHNP</option>
                <option value="PA">PA</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Licensed States</label>
              <input
                style={inputStyle}
                value={form.licenseStates}
                onChange={(e) => setForm({ ...form, licenseStates: e.target.value })}
                placeholder="e.g., CA, TX, FL"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' as const }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your practice and interest in collaborating..."
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#dc2626', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
              Something went wrong. Please try again or email us at info@isha.health.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: '100%',
              padding: '0.85rem',
              backgroundColor: status === 'sending' ? '#9ca3af' : '#0d9488',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>

        <div
          dangerouslySetInnerHTML={{
            __html: `<div style="margin-top:3rem;padding-top:2rem;border-top:1px solid #e5e7eb;">
              <p style="font-family:'Poppins',sans-serif;font-size:0.85rem;color:#6b7280;text-align:center;">
                Already a KAP-trained therapist? <a href="/ketamine-therapist-directory/login" style="color:#0d9488;text-decoration:underline;">Join our therapist directory</a> to connect with patients seeking ketamine-assisted therapy.
              </p>
            </div>`,
          }}
        />
      </div>
    </div>
  );
}
