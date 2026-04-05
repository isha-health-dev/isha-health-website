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
      <div className="section-base white-section static-page">
        <div className="hero-isha">
          <h1 className="heading static-heading">Thank You</h1>
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
    <div className="section-base white-section static-page">
      <div className="hero-isha">
        <h1 className="heading static-heading">Collaborate with Isha Health</h1>
      </div>
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<p style="font-family:'Poppins',sans-serif;font-size:1rem;line-height:1.7;color:#4b5563;margin-bottom:2rem;text-align:center;text-wrap:pretty;">
              Are you a KAP-trained therapist, psychiatrist, or mental health clinician interested in collaborating with Isha Health? Fill out the form below and our team will be in touch.
            </p>`,
          }}
        />

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
                placeholder="e.g., CA, NY, TX"
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
