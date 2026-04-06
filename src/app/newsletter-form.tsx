'use client';

import { useState } from 'react';

export function NewsletterForm({ variant = 'footer' }: { variant?: 'footer' | 'blog' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('sent');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <p
        style={{
          color: variant === 'footer' ? '#ccfbf1' : '#0f766e',
          fontSize: '0.9rem',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        You&apos;re subscribed! Check your email for confirmation.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        style={{
          padding: '0.6rem 0.75rem',
          borderRadius: '6px',
          border: variant === 'footer' ? '1px solid rgba(255,255,255,0.3)' : '1px solid #d1d5db',
          backgroundColor: variant === 'footer' ? 'rgba(255,255,255,0.1)' : '#fff',
          color: variant === 'footer' ? '#fff' : '#111827',
          fontSize: '0.85rem',
          fontFamily: 'inherit',
          flex: '1 1 200px',
          minWidth: '200px',
        }}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          padding: '0.6rem 1.25rem',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: status === 'sending' ? '#9ca3af' : '#0d9488',
          color: '#fff',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {status === 'sending' ? '...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', color: '#ef4444', fontSize: '0.8rem', margin: '0.25rem 0 0' }}>
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
