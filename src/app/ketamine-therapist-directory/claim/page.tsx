'use client';

import { useState } from 'react';
import { createBrowserSupabase } from '@/lib/supabase-browser';

export default function ClaimProfilePage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const supabase = createBrowserSupabase();

  async function handleClaim(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    // First check if this email has a therapist profile
    const { data: therapist } = await supabase
      .from('therapist')
      .select('id, first_name, last_name')
      .eq('email', email)
      .single();

    if (!therapist) {
      setError(
        'No therapist profile found with this email. If you want to join the directory, please create an account instead.'
      );
      setLoading(false);
      return;
    }

    // Send a magic link (passwordless login)
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://isha.health/ketamine-therapist-directory/dashboard',
      },
    });

    if (authError) {
      // If user doesn't exist in auth, create one and send magic link
      if (authError.message.includes('rate') || authError.message.includes('limit')) {
        setError('Too many attempts. Please try again in a few minutes.');
      } else {
        setError(authError.message);
      }
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div
        className="td-scope"
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<div style="max-width:460px;background-color:#f0fdfa;border-radius:12px;padding:2.5rem;text-align:center;border:1px solid #ccfbf1;">
              <p style="font-size:1.5rem !important;font-weight:700 !important;color:#0f766e !important;font-family:'Libre Baskerville',serif !important;margin-bottom:0.75rem !important;letter-spacing:normal !important;text-transform:none !important;">Check your email</p>
              <p style="color:#4b5563 !important;line-height:1.6 !important;font-size:0.95rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
                We've sent a sign-in link to <strong>${email}</strong>. Click the link in the email to access your profile editor. No password needed.
              </p>
              <p style="color:#9ca3af !important;font-size:0.8rem !important;margin-top:1rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
                Don't see it? Check your spam folder.
              </p>
            </div>`,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="td-scope"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `<div style="text-align:center;margin-bottom:2rem;">
              <p style="font-size:1.5rem !important;font-weight:700 !important;color:#111827 !important;font-family:'Libre Baskerville',serif !important;margin-bottom:0.5rem !important;letter-spacing:normal !important;text-transform:none !important;">Update Your Directory Profile</p>
              <p style="color:#6b7280 !important;font-size:0.9rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
                Enter the email associated with your therapist profile. We'll send you a link to sign in and edit your information.
              </p>
            </div>`,
          }}
        />

        <form onSubmit={handleClaim}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '0.35rem',
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter the email on your directory profile"
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: '#dc2626',
                fontSize: '0.85rem',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: loading ? '#9ca3af' : '#0d9488',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {loading ? 'Sending link...' : 'Send Me a Sign-In Link'}
          </button>
        </form>

        <div
          dangerouslySetInnerHTML={{
            __html: `<p style="text-align:center;margin-top:1.5rem;font-size:0.85rem !important;color:#6b7280 !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
              Already have a password? <a href="/ketamine-therapist-directory/login" style="color:#0d9488 !important;text-decoration:underline !important;display:inline !important;">Sign in</a>
              &nbsp;&middot;&nbsp;
              New therapist? <a href="/ketamine-therapist-directory/create-account" style="color:#0d9488 !important;text-decoration:underline !important;display:inline !important;">Join the directory</a>
            </p>`,
          }}
        />
      </div>
    </div>
  );
}
