'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserSupabase } from '@/lib/supabase-browser';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [mode, setMode] = useState<'password' | 'magic'>('magic');
  const router = useRouter();
  const supabase = createBrowserSupabase();

  async function handlePasswordLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push('/ketamine-therapist-directory/dashboard');
  }

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://isha.health/ketamine-therapist-directory/dashboard',
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMagicLinkSent(true);
    setLoading(false);
  }

  if (magicLinkSent) {
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
                We've sent a sign-in link to <strong>${email}</strong>. Click the link in the email to access your profile editor.
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
          maxWidth: '420px',
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
              <h1 style="font-size:1.5rem !important;font-weight:700 !important;color:#111827 !important;font-family:'Libre Baskerville',serif !important;margin-bottom:0.5rem !important;letter-spacing:normal !important;text-transform:none !important;">Clinician Login</h1>
              <p style="color:#6b7280 !important;font-size:0.9rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">Sign in to manage your clinician directory profile</p>
            </div>`,
          }}
        />

        {/* Toggle */}
        <div style={{ display: 'flex', marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
          <button
            type="button"
            onClick={() => setMode('magic')}
            style={{
              flex: 1, padding: '0.5rem', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit',
              backgroundColor: mode === 'magic' ? '#0d9488' : '#fff',
              color: mode === 'magic' ? '#fff' : '#374151',
              fontWeight: mode === 'magic' ? 600 : 400,
            }}
          >
            Email Link
          </button>
          <button
            type="button"
            onClick={() => setMode('password')}
            style={{
              flex: 1, padding: '0.5rem', border: 'none', borderLeft: '1px solid #d1d5db', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit',
              backgroundColor: mode === 'password' ? '#0d9488' : '#fff',
              color: mode === 'password' ? '#fff' : '#374151',
              fontWeight: mode === 'password' ? 600 : 400,
            }}
          >
            Password
          </button>
        </div>

        <form onSubmit={mode === 'magic' ? handleMagicLink : handlePasswordLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
            />
          </div>

          {mode === 'password' && (
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
              />
            </div>
          )}

          {error && (
            <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '0.75rem', backgroundColor: loading ? '#9ca3af' : '#0d9488', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', marginTop: mode === 'magic' ? '0.5rem' : '0',
            }}
          >
            {loading ? 'Please wait...' : mode === 'magic' ? 'Send Sign-In Link' : 'Sign In'}
          </button>
        </form>

        <div
          dangerouslySetInnerHTML={{
            __html: `<p style="text-align:center;margin-top:1.5rem;font-size:0.85rem !important;color:#6b7280 !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
              Don't have an account? <a href="/ketamine-therapist-directory/create-account" style="color:#0d9488 !important;text-decoration:underline !important;display:inline !important;">Create one</a>
            </p>`,
          }}
        />
      </div>
    </div>
  );
}
