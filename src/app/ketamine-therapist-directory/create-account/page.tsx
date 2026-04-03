'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createBrowserSupabase } from '@/lib/supabase-browser';

export default function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createBrowserSupabase();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setLoading(false);
      return;
    }

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Create therapist profile linked to auth user
    if (authData.user) {
      const { error: profileError } = await supabase.from('therapist').insert({
        user_id: authData.user.id,
        email,
        first_name: firstName,
        last_name: lastName,
      });

      if (profileError) {
        // Profile might already exist if email matches - try linking instead
        const { error: linkError } = await supabase
          .from('therapist')
          .update({ user_id: authData.user.id })
          .eq('email', email);

        if (linkError) {
          console.error('Profile link error:', linkError);
          // Don't block signup - profile will be created on first dashboard visit
        }
      }
    }

    // If user identity has confirmed email, they can log in directly
    // Otherwise show the confirmation message
    if (authData.user?.identities?.length === 0) {
      // Email already registered
      setError('An account with this email already exists. Please log in instead.');
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
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
            __html: `<div style="max-width:420px;background-color:#f0fdfa;border-radius:12px;padding:2.5rem;text-align:center;border:1px solid #ccfbf1;">
              <p style="font-size:1.5rem !important;font-weight:700 !important;color:#0f766e !important;font-family:'Libre Baskerville',serif !important;margin-bottom:0.75rem !important;letter-spacing:normal !important;text-transform:none !important;">Check your email</p>
              <p style="color:#4b5563 !important;line-height:1.6 !important;font-size:0.95rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">
                We've sent a confirmation link to <strong>${email}</strong>.
                Click the link to verify your account, then
                <a href="/ketamine-therapist-directory/login" style="color:#0d9488 !important;text-decoration:underline !important;display:inline !important;">log in</a>
                to set up your profile.
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
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#111827',
              fontFamily: "'Libre Baskerville', serif",
              marginBottom: '0.5rem',
            }}
          >
            Join the Directory
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
            Create an account to list your practice on the Isha Health therapist
            directory
          </p>
        </div>

        <form onSubmit={handleSignup}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
                First Name
              </label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
                Last Name
              </label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
              Email
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
              Password
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8}
              style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>At least 8 characters</p>
          </div>

          {error && (
            <p style={{ color: '#dc2626', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: loading ? '#9ca3af' : '#0d9488', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
          Already have an account?{' '}
          <Link href="/ketamine-therapist-directory/login" style={{ color: '#0d9488', textDecoration: 'underline' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
