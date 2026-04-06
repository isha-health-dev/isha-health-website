'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createBrowserSupabase } from '@/lib/supabase-browser';

interface TherapistProfile {
  id: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  title: string | null;
  pronouns: string | null;
  email: string;
  phone: string | null;
  website: string | null;
  bio: string | null;
  welcome_message: string | null;
  visit_type: string | null;
  mental_health_role: string | null;
  fee: string | null;
  profile_pic: string | null;
  sliding_scale: boolean;
  lgbtq_affirmative: boolean;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  street_address: string | null;
  npi: string | null;
  note_on_finance: string | null;
  note_on_top_specialties: string | null;
  note_on_therapy_types: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  youtube_url: string | null;
  tiktok_url: string | null;
  last_verified_at: string | null;
}

const inputStyle = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  boxSizing: 'border-box' as const,
};

const labelStyle = {
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 600 as const,
  color: '#374151',
  marginBottom: '0.3rem',
};

const sectionStyle = {
  marginBottom: '2rem',
  paddingBottom: '2rem',
  borderBottom: '1px solid #e5e7eb',
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<TherapistProfile | null>(null);
  const [licenses, setLicenses] = useState<{ id: string; state: string; license_number: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const supabase = createBrowserSupabase();

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/ketamine-therapist-directory/login');
        return;
      }

      const { data, error } = await supabase
        .from('therapist')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error || !data) {
        // Try matching by email
        const { data: emailMatch } = await supabase
          .from('therapist')
          .select('*')
          .eq('email', user.email)
          .single();

        if (emailMatch) {
          // Link the profile to the auth user
          await supabase
            .from('therapist')
            .update({ user_id: user.id })
            .eq('id', emailMatch.id);
          setProfile(emailMatch);
        } else {
          // Create a new profile for this user
          const meta = user.user_metadata || {};
          const { data: newProfile, error: insertError } = await supabase
            .from('therapist')
            .insert({
              user_id: user.id,
              email: user.email,
              first_name: meta.first_name || '',
              last_name: meta.last_name || '',
            })
            .select('*')
            .single();

          if (insertError || !newProfile) {
            setError('Failed to create profile: ' + (insertError?.message || 'Unknown error') + '. Please contact info@isha.health.');
          } else {
            setProfile(newProfile);
          }
        }
      } else {
        setProfile(data);
      }
      setLoading(false);
    }
    load();
  }, []);

  // Load licenses when profile is available
  useEffect(() => {
    if (!profile) return;
    async function loadLicenses() {
      const { data } = await supabase
        .from('therapist_license')
        .select('id, state, license_number')
        .eq('therapist_id', profile!.id);
      if (data) setLicenses(data);
    }
    loadLicenses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);
    setMessage('');
    setError('');

    const { error } = await supabase
      .from('therapist')
      .update({
        first_name: profile.first_name,
        middle_name: profile.middle_name,
        last_name: profile.last_name,
        title: profile.title,
        pronouns: profile.pronouns,
        phone: profile.phone,
        website: profile.website,
        bio: profile.bio,
        welcome_message: profile.welcome_message,
        visit_type: profile.visit_type,
        mental_health_role: profile.mental_health_role,
        fee: profile.fee,
        sliding_scale: profile.sliding_scale,
        lgbtq_affirmative: profile.lgbtq_affirmative,
        city: profile.city,
        state: profile.state,
        postal_code: profile.postal_code,
        street_address: profile.street_address,
        npi: profile.npi,
        note_on_finance: profile.note_on_finance,
        note_on_top_specialties: profile.note_on_top_specialties,
        note_on_therapy_types: profile.note_on_therapy_types,
        instagram_url: profile.instagram_url,
        linkedin_url: profile.linkedin_url,
        twitter_url: profile.twitter_url,
        youtube_url: profile.youtube_url,
        tiktok_url: profile.tiktok_url,
        last_verified_at: new Date().toISOString(),
      })
      .eq('id', profile.id);

    if (error) {
      setError('Failed to save: ' + error.message);
      setSaving(false);
      return;
    }

    // Save licenses
    // Delete existing licenses for this therapist, then insert fresh
    await supabase.from('therapist_license').delete().eq('therapist_id', profile.id);

    const validLicenses = licenses.filter((l) => l.state && l.license_number);
    if (validLicenses.length > 0) {
      const { error: licError } = await supabase.from('therapist_license').insert(
        validLicenses.map((l) => ({
          therapist_id: profile.id,
          state: l.state,
          license_number: l.license_number,
        }))
      );
      if (licError) {
        setError('Profile saved but license update failed: ' + licError.message);
        setSaving(false);
        return;
      }
    }

    setMessage('Profile saved and verified!');
    setSaving(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/ketamine-therapist-directory');
  }

  function updateField(field: keyof TherapistProfile, value: string | boolean | null) {
    if (!profile) return;
    setProfile({ ...profile, [field]: value });
  }

  if (loading) {
    return (
      <div className="td-scope" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#6b7280' }}>Loading your profile...</p>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="td-scope" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#dc2626', marginBottom: '1rem' }}>{error}</p>
          <button onClick={handleLogout} style={{ color: '#0d9488', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            Sign out
          </button>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="td-scope" style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', fontFamily: "'Libre Baskerville', serif" }}>
          Edit Your Profile
        </h1>
        <button onClick={handleLogout} style={{ color: '#6b7280', background: 'none', border: '1px solid #d1d5db', borderRadius: '6px', padding: '0.4rem 1rem', cursor: 'pointer', fontSize: '0.85rem' }}>
          Sign Out
        </button>
      </div>

      {/* Profile Photo */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Profile Photo</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {profile.profile_pic ? (
            <img
              src={profile.profile_pic}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
            />
          ) : (
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem', color: '#0f766e', fontWeight: 700 }}>
                {profile.first_name?.[0]}{profile.last_name?.[0]}
              </span>
            </div>
          )}
          <div>
            <label
              style={{
                display: 'inline-block',
                padding: '0.5rem 1.25rem',
                backgroundColor: '#0d9488',
                color: '#fff',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 5 * 1024 * 1024) {
                    setError('Image must be under 5MB');
                    return;
                  }
                  setMessage('Uploading photo...');
                  const ext = file.name.split('.').pop();
                  const path = `profile-images/${profile.id}/profile-${Date.now()}.${ext}`;
                  const { error: uploadError } = await supabase.storage
                    .from('therapist-media')
                    .upload(path, file, { upsert: true });
                  if (uploadError) {
                    setError('Upload failed: ' + uploadError.message);
                    setMessage('');
                    return;
                  }
                  const { data: urlData } = supabase.storage
                    .from('therapist-media')
                    .getPublicUrl(path);
                  const publicUrl = urlData.publicUrl;
                  await supabase
                    .from('therapist')
                    .update({ profile_pic: publicUrl })
                    .eq('id', profile.id);
                  setProfile({ ...profile, profile_pic: publicUrl });
                  setMessage('Photo updated!');
                }}
              />
            </label>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.35rem' }}>JPG, PNG, or WebP. Max 5MB.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave}>
        {/* Basic Info */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Basic Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input style={inputStyle} value={profile.first_name || ''} onChange={(e) => updateField('first_name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input style={inputStyle} value={profile.last_name || ''} onChange={(e) => updateField('last_name', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Title / Suffix</label>
              <input style={inputStyle} value={profile.title || ''} onChange={(e) => updateField('title', e.target.value)} placeholder="e.g., Dr., LCSW" />
            </div>
            <div>
              <label style={labelStyle}>Pronouns</label>
              <input style={inputStyle} value={profile.pronouns || ''} onChange={(e) => updateField('pronouns', e.target.value)} placeholder="e.g., she/her" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Contact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Phone</label>
              <input style={inputStyle} value={profile.phone || ''} onChange={(e) => updateField('phone', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Website</label>
              <input style={inputStyle} value={profile.website || ''} onChange={(e) => updateField('website', e.target.value)} placeholder="https://" />
            </div>
          </div>
        </div>

        {/* Location */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Location</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Street Address</label>
              <input style={inputStyle} value={profile.street_address || ''} onChange={(e) => updateField('street_address', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>City</label>
              <input style={inputStyle} value={profile.city || ''} onChange={(e) => updateField('city', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>State</label>
              <input style={inputStyle} value={profile.state || ''} onChange={(e) => updateField('state', e.target.value)} placeholder="e.g., CA" />
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Credentials &amp; Licensing</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label style={labelStyle}>NPI Number</label>
            <input style={{ ...inputStyle, maxWidth: '300px' }} value={profile.npi || ''} onChange={(e) => updateField('npi', e.target.value)} placeholder="10-digit NPI" />
          </div>

          <label style={labelStyle}>State Licenses</label>
          {licenses.map((lic, i) => (
            <div key={lic.id || i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
              <select
                style={{ ...inputStyle, width: '120px', flex: 'none' }}
                value={lic.state}
                onChange={(e) => {
                  const updated = [...licenses];
                  updated[i] = { ...lic, state: e.target.value };
                  setLicenses(updated);
                }}
              >
                <option value="">State</option>
                {['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input
                style={inputStyle}
                value={lic.license_number}
                onChange={(e) => {
                  const updated = [...licenses];
                  updated[i] = { ...lic, license_number: e.target.value };
                  setLicenses(updated);
                }}
                placeholder="License number"
              />
              <button
                type="button"
                onClick={async () => {
                  if (lic.id && !lic.id.startsWith('new-')) {
                    await supabase.from('therapist_license').delete().eq('id', lic.id);
                  }
                  setLicenses(licenses.filter((_, j) => j !== i));
                }}
                style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '1.2rem', padding: '0 0.5rem', flexShrink: 0 }}
                title="Remove license"
              >
                &times;
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setLicenses([...licenses, { id: `new-${Date.now()}`, state: '', license_number: '' }])}
            style={{ background: 'none', border: '1px dashed #d1d5db', borderRadius: '6px', padding: '0.5rem 1rem', color: '#0d9488', cursor: 'pointer', fontSize: '0.85rem', marginTop: '0.25rem' }}
          >
            + Add State License
          </button>
        </div>

        {/* Practice */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Practice Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Visit Type</label>
              <select style={inputStyle} value={profile.visit_type || ''} onChange={(e) => updateField('visit_type', e.target.value || null)}>
                <option value="">Select...</option>
                <option value="telemedicine_only">Telemedicine Only</option>
                <option value="hybrid">Hybrid (Online + In Person)</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Fee</label>
              <input style={inputStyle} value={profile.fee || ''} onChange={(e) => updateField('fee', e.target.value)} placeholder="e.g., $150-200/session" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.85rem', color: '#374151' }}>
              <input type="checkbox" checked={profile.sliding_scale} onChange={(e) => updateField('sliding_scale', e.target.checked)} />
              Sliding Scale
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.85rem', color: '#374151' }}>
              <input type="checkbox" checked={profile.lgbtq_affirmative} onChange={(e) => updateField('lgbtq_affirmative', e.target.checked)} />
              LGBTQ+ Affirmative
            </label>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Welcome Message</label>
            <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' as const }} value={profile.welcome_message || ''} onChange={(e) => updateField('welcome_message', e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Bio</label>
            <textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' as const }} value={profile.bio || ''} onChange={(e) => updateField('bio', e.target.value)} />
          </div>
        </div>

        {/* Social Media */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Social Media</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Instagram URL</label>
              <input style={inputStyle} value={profile.instagram_url || ''} onChange={(e) => updateField('instagram_url', e.target.value)} placeholder="https://instagram.com/..." />
            </div>
            <div>
              <label style={labelStyle}>LinkedIn URL</label>
              <input style={inputStyle} value={profile.linkedin_url || ''} onChange={(e) => updateField('linkedin_url', e.target.value)} placeholder="https://linkedin.com/in/..." />
            </div>
            <div>
              <label style={labelStyle}>Twitter URL</label>
              <input style={inputStyle} value={profile.twitter_url || ''} onChange={(e) => updateField('twitter_url', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>YouTube URL</label>
              <input style={inputStyle} value={profile.youtube_url || ''} onChange={(e) => updateField('youtube_url', e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>TikTok URL</label>
              <input style={inputStyle} value={profile.tiktok_url || ''} onChange={(e) => updateField('tiktok_url', e.target.value)} />
            </div>
          </div>
        </div>

        {/* Notes */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Additional Notes</h2>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Note on Top Specialties</label>
            <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' as const }} value={profile.note_on_top_specialties || ''} onChange={(e) => updateField('note_on_top_specialties', e.target.value)} />
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Note on Therapy Types</label>
            <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' as const }} value={profile.note_on_therapy_types || ''} onChange={(e) => updateField('note_on_therapy_types', e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>Note on Finances</label>
            <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' as const }} value={profile.note_on_finance || ''} onChange={(e) => updateField('note_on_finance', e.target.value)} />
          </div>
        </div>

        {/* Save */}
        {message && <p style={{ color: '#16a34a', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>{message}</p>}
        {error && profile && <p style={{ color: '#dc2626', textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</p>}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button type="submit" disabled={saving}
            style={{ padding: '0.75rem 2.5rem', backgroundColor: saving ? '#9ca3af' : '#0d9488', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
            {saving ? 'Saving...' : 'Save & Verify Profile'}
          </button>
          <Link href="/ketamine-therapist-directory"
            style={{ padding: '0.75rem 1.5rem', border: '1px solid #d1d5db', borderRadius: '8px', color: '#374151', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
            View Directory
          </Link>
        </div>
      </form>
    </div>
  );
}
