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
  profile_pic_position: string | null;
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
  accepting_new_clients: boolean;
  education: string | null;
  years_in_practice: number | null;
  treatment_approach: string | null;
  client_focus: string | null;
  faith_or_spiritual_focus: string | null;
  session_formats: string | null;
  typical_session_length: string | null;
  evening_weekend_availability: boolean;
  free_consultation: boolean;
  telehealth_platform: string | null;
  publications: string | null;
  professional_memberships: string | null;
  booking_url: string | null;
  cultural_focus: string | null;
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
  const [insurances, setInsurances] = useState<string[]>([]);
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [therapyTypes, setTherapyTypes] = useState<string[]>([]);
  const [trainingPrograms, setTrainingPrograms] = useState<string[]>([]);
  const [importPreview, setImportPreview] = useState<Record<string, { current: string; imported: string; use: 'current' | 'imported' }> | null>(null);
  const [importing, setImporting] = useState(false);
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

    async function loadRelations() {
      const [ins, spec, tt, tp] = await Promise.all([
        supabase.from('therapist_insurance').select('insurance_type').eq('therapist_id', profile!.id),
        supabase.from('therapist_specialty').select('specialty').eq('therapist_id', profile!.id),
        supabase.from('therapist_therapy_type').select('therapy_type').eq('therapist_id', profile!.id),
        supabase.from('therapist_training_program').select('training_program').eq('therapist_id', profile!.id),
      ]);
      if (ins.data) setInsurances(ins.data.map((i) => i.insurance_type));
      if (spec.data) setSpecialties(spec.data.map((s) => s.specialty));
      if (tt.data) setTherapyTypes(tt.data.map((t) => t.therapy_type));
      if (tp.data) setTrainingPrograms(tp.data.map((t) => t.training_program));
    }
    loadRelations();
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
        accepting_new_clients: profile.accepting_new_clients,
        education: profile.education,
        years_in_practice: profile.years_in_practice,
        treatment_approach: profile.treatment_approach,
        client_focus: profile.client_focus,
        faith_or_spiritual_focus: profile.faith_or_spiritual_focus,
        session_formats: profile.session_formats,
        typical_session_length: profile.typical_session_length,
        evening_weekend_availability: profile.evening_weekend_availability,
        free_consultation: profile.free_consultation,
        telehealth_platform: profile.telehealth_platform,
        publications: profile.publications,
        professional_memberships: profile.professional_memberships,
        booking_url: profile.booking_url,
        cultural_focus: profile.cultural_focus,
        profile_pic_position: profile.profile_pic_position,
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

    // Save insurance, specialties, therapy types (delete + re-insert)
    await supabase.from('therapist_insurance').delete().eq('therapist_id', profile.id);
    if (insurances.length > 0) {
      await supabase.from('therapist_insurance').insert(
        insurances.map((i) => ({ therapist_id: profile.id, insurance_type: i }))
      );
    }

    await supabase.from('therapist_specialty').delete().eq('therapist_id', profile.id);
    if (specialties.length > 0) {
      await supabase.from('therapist_specialty').insert(
        specialties.map((s) => ({ therapist_id: profile.id, specialty: s }))
      );
    }

    await supabase.from('therapist_therapy_type').delete().eq('therapist_id', profile.id);
    if (therapyTypes.length > 0) {
      await supabase.from('therapist_therapy_type').insert(
        therapyTypes.map((t) => ({ therapist_id: profile.id, therapy_type: t }))
      );
    }

    await supabase.from('therapist_training_program').delete().eq('therapist_id', profile.id);
    if (trainingPrograms.length > 0) {
      await supabase.from('therapist_training_program').insert(
        trainingPrograms.map((t) => ({ therapist_id: profile.id, training_program: t }))
      );
    }

    setMessage('Profile saved and verified! Changes will appear on your directory listing within a few minutes.');
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
          Edit Your Clinician Profile
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
            {profile.profile_pic && (
              <div style={{ marginTop: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', color: '#6b7280' }}>Photo position: </label>
                <select
                  style={{ fontSize: '0.75rem', padding: '0.2rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                  value={profile.profile_pic_position || 'center center'}
                  onChange={(e) => updateField('profile_pic_position', e.target.value)}
                >
                  <option value="center center">Center</option>
                  <option value="center top">Top</option>
                  <option value="center bottom">Bottom</option>
                  <option value="left center">Left</option>
                  <option value="right center">Right</option>
                  <option value="left top">Top Left</option>
                  <option value="right top">Top Right</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Import from website */}
      <div style={sectionStyle}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>Import from Website</h2>
        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.75rem' }}>
          Paste your Psychology Today or practice website URL to auto-fill your profile.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="url"
            placeholder="https://www.psychologytoday.com/us/therapists/..."
            style={{ ...inputStyle, flex: 1 }}
            id="import-url"
          />
          <button
            type="button"
            onClick={async () => {
              const urlInput = document.getElementById('import-url') as HTMLInputElement;
              const url = urlInput?.value;
              if (!url) return;
              setImporting(true);
              setMessage('Importing profile data...');
              setError('');
              try {
                const res = await fetch('/api/therapist/import', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ url }),
                });
                const data = await res.json();
                if (!data.success || !data.data) {
                  setError('Import failed: ' + (data.error || 'Unknown error'));
                  setMessage('');
                  setImporting(false);
                  return;
                }
                const d = data.data;
                // Build diff preview — show fields where imported data differs from current
                const fields = ['bio', 'welcome_message', 'treatment_approach', 'education', 'fee', 'phone', 'city', 'state', 'session_formats', 'typical_session_length', 'booking_url', 'telehealth_platform', 'publications', 'professional_memberships', 'client_focus', 'cultural_focus', 'faith_or_spiritual_focus', 'instagram_url', 'linkedin_url'];
                const preview: Record<string, { current: string; imported: string; use: 'current' | 'imported' }> = {};
                for (const field of fields) {
                  const current = String((profile as unknown as Record<string, unknown>)[field] || '');
                  const imported = String(d[field] || '');
                  if (imported && imported !== current) {
                    preview[field] = { current, imported, use: current ? 'current' : 'imported' };
                  }
                }
                if (Object.keys(preview).length === 0) {
                  setMessage('No new data found to import.');
                  setImporting(false);
                } else {
                  setImportPreview(preview);
                  setMessage(`Found ${Object.keys(preview).length} fields to review.`);
                  setImporting(false);
                }
              } catch {
                setError('Import failed. Please try again.');
                setMessage('');
              }
            }}
            style={{
              padding: '0.6rem 1.25rem',
              backgroundColor: '#0d9488',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
            }}
          >
            {importing ? 'Importing...' : 'Import'}
          </button>
        </div>
      </div>

      {/* Import preview diff */}
      {importPreview && Object.keys(importPreview).length > 0 && (
        <div style={{ ...sectionStyle, backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '10px', border: '1px solid #fcd34d' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#92400e', marginBottom: '1rem' }}>Review imported data</h2>
          <p style={{ fontSize: '0.8rem', color: '#78350f', marginBottom: '1rem' }}>For each field, choose which version to keep:</p>
          {Object.entries(importPreview).map(([field, { current, imported, use }]) => (
            <div key={field} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #fde68a' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#92400e', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                {field.replace(/_/g, ' ')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {current && (
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', padding: '0.5rem', borderRadius: '6px', backgroundColor: use === 'current' ? '#dcfce7' : '#fff', border: '1px solid #e5e7eb' }}>
                    <input type="radio" checked={use === 'current'} onChange={() => setImportPreview({ ...importPreview, [field]: { ...importPreview[field], use: 'current' } })} style={{ marginTop: '0.15rem' }} />
                    <span><strong>Keep current:</strong> {current.slice(0, 150)}{current.length > 150 ? '...' : ''}</span>
                  </label>
                )}
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', padding: '0.5rem', borderRadius: '6px', backgroundColor: use === 'imported' ? '#dbeafe' : '#fff', border: '1px solid #e5e7eb' }}>
                  <input type="radio" checked={use === 'imported'} onChange={() => setImportPreview({ ...importPreview, [field]: { ...importPreview[field], use: 'imported' } })} style={{ marginTop: '0.15rem' }} />
                  <span><strong>Use imported:</strong> {imported.slice(0, 150)}{imported.length > 150 ? '...' : ''}</span>
                </label>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button type="button" onClick={() => {
              setProfile((prev) => {
                if (!prev) return prev;
                const updated = { ...prev };
                for (const [field, { imported, use }] of Object.entries(importPreview)) {
                  if (use === 'imported') {
                    (updated as unknown as Record<string, unknown>)[field] = imported;
                  }
                }
                return updated;
              });
              setImportPreview(null);
              setMessage('Import applied! Review the form and click Save.');
            }} style={{ padding: '0.6rem 1.5rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'inherit' }}>
              Apply Selected
            </button>
            <button type="button" onClick={() => { setImportPreview(null); setMessage(''); }} style={{ padding: '0.6rem 1.5rem', backgroundColor: '#fff', color: '#374151', border: '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit' }}>
              Cancel Import
            </button>
          </div>
        </div>
      )}

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

        {/* Availability */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Availability</h2>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' as const }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.85rem', color: '#374151' }}>
              <input type="checkbox" checked={profile.accepting_new_clients} onChange={(e) => updateField('accepting_new_clients', e.target.checked)} />
              Accepting New Clients
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.85rem', color: '#374151' }}>
              <input type="checkbox" checked={profile.free_consultation} onChange={(e) => updateField('free_consultation', e.target.checked)} />
              Free Consultation
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontSize: '0.85rem', color: '#374151' }}>
              <input type="checkbox" checked={profile.evening_weekend_availability} onChange={(e) => updateField('evening_weekend_availability', e.target.checked)} />
              Evening/Weekend Availability
            </label>
          </div>
          <div>
            <label style={labelStyle}>Booking URL</label>
            <input style={inputStyle} value={profile.booking_url || ''} onChange={(e) => updateField('booking_url', e.target.value)} placeholder="https://calendly.com/..." />
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

        {/* Background */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Background</h2>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Education</label>
            <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' as const }} value={profile.education || ''} onChange={(e) => updateField('education', e.target.value)} placeholder="e.g., PhD Clinical Psychology, NYU, 2015" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Years in Practice</label>
              <input style={inputStyle} type="number" min="0" value={profile.years_in_practice ?? ''} onChange={(e) => updateField('years_in_practice', e.target.value === '' ? null : e.target.value)} />
            </div>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Professional Memberships</label>
            <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' as const }} value={profile.professional_memberships || ''} onChange={(e) => updateField('professional_memberships', e.target.value)} placeholder="e.g., APA, MAPS, IFS Institute" />
          </div>
          <div>
            <label style={labelStyle}>Publications</label>
            <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' as const }} value={profile.publications || ''} onChange={(e) => updateField('publications', e.target.value)} placeholder="Published works, media appearances" />
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
                style={{ all: 'revert', width: '90px', padding: '8px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }}
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

        {/* Insurance */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Insurance Accepted</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {insurances.map((ins, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.75rem', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '0.8rem' }}>
                {ins.replace(/_/g, ' ')}
                <button type="button" onClick={() => setInsurances(insurances.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '1rem', padding: 0, lineHeight: 1 }}>&times;</button>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <select style={{ ...inputStyle, flex: 1 }} id="new-insurance" defaultValue="">
              <option value="" disabled>Select insurance...</option>
              <option value="aetna">Aetna</option>
              <option value="alameda_alliance">Alameda Alliance for Health</option>
              <option value="alliant_health">Alliant Health Plans</option>
              <option value="ambetter">Ambetter</option>
              <option value="amerigroup">Amerigroup</option>
              <option value="anthem">Anthem / Elevance Health</option>
              <option value="az_complete_health">Arizona Complete Health</option>
              <option value="avmed">AvMed</option>
              <option value="banner_aetna">Banner-Aetna</option>
              <option value="baylor_scott_white">Baylor Scott and White Health Plan</option>
              <option value="bcbs_arizona">Blue Cross Blue Shield of Arizona</option>
              <option value="bcbs_texas">Blue Cross Blue Shield of Texas</option>
              <option value="blue_shield_ca">Blue Shield of California</option>
              <option value="bridgespan">BridgeSpan Health</option>
              <option value="cdphp">CDPHP</option>
              <option value="caloptima">CalOptima Health</option>
              <option value="capital_health_plan">Capital Health Plan</option>
              <option value="care1st_az">Care1st Health Plan Arizona</option>
              <option value="careoregon">CareOregon</option>
              <option value="caresource_ga">CareSource Georgia</option>
              <option value="cchp">Chinese Community Health Plan</option>
              <option value="cigna">Cigna Healthcare</option>
              <option value="colorado_access">Colorado Access</option>
              <option value="community_health_choice">Community Health Choice</option>
              <option value="chpw">Community Health Plan of Washington</option>
              <option value="coordinated_care_wa">Coordinated Care</option>
              <option value="denver_health_plan">Denver Health Medical Plan</option>
              <option value="devoted_health">Devoted Health</option>
              <option value="emblemhealth">EmblemHealth</option>
              <option value="empire_bcbs">Empire Blue Cross Blue Shield</option>
              <option value="excellus_bcbs">Excellus BlueCross BlueShield</option>
              <option value="fidelis_care">Fidelis Care</option>
              <option value="firstcare">FirstCare Health Plans</option>
              <option value="florida_blue">Florida Blue</option>
              <option value="health_net">Health Net</option>
              <option value="healthfirst">Healthfirst</option>
              <option value="highmark_bcbs_wny">Highmark BCBS of Western NY</option>
              <option value="humana">Humana</option>
              <option value="independent_health">Independent Health</option>
              <option value="iehp">Inland Empire Health Plan</option>
              <option value="kaiser_permanente">Kaiser Permanente</option>
              <option value="la_care">L.A. Care Health Plan</option>
              <option value="lifewise">LifeWise Health Plan</option>
              <option value="mvp_health_care">MVP Health Care</option>
              <option value="medicaid">Medicaid</option>
              <option value="medicare">Medicare</option>
              <option value="mercy_care">Mercy Care</option>
              <option value="metroplus">MetroPlusHealth</option>
              <option value="moda_health">Moda Health</option>
              <option value="molina">Molina Healthcare</option>
              <option value="oscar">Oscar Health</option>
              <option value="other">Other</option>
              <option value="out_of_network">Out of Network</option>
              <option value="pacificsource">PacificSource Health Plans</option>
              <option value="parkland">Parkland Community Health Plan</option>
              <option value="partnership_healthplan_ca">Partnership HealthPlan of California</option>
              <option value="peach_state_health">Peach State Health Plan</option>
              <option value="premera_blue_cross">Premera Blue Cross</option>
              <option value="providence_health_plan">Providence Health Plan</option>
              <option value="regence_bcbs_or">Regence BCBS of Oregon</option>
              <option value="regence_blueshield">Regence BlueShield</option>
              <option value="rocky_mountain_health">Rocky Mountain Health Plans</option>
              <option value="samaritan_health">Samaritan Health Plans</option>
              <option value="sf_health_plan">San Francisco Health Plan</option>
              <option value="santa_clara_family_health">Santa Clara Family Health Plan</option>
              <option value="self_pay">Self Pay</option>
              <option value="sendero">Sendero Health Plans</option>
              <option value="sharp_health_plan">Sharp Health Plan</option>
              <option value="simply_healthcare">Simply Healthcare</option>
              <option value="sunshine_health">Sunshine Health</option>
              <option value="superior_healthplan">Superior HealthPlan</option>
              <option value="sutter_health_plus">Sutter Health Plus</option>
              <option value="tricare">TRICARE</option>
              <option value="texas_childrens">Texas Children&#39;s Health Plan</option>
              <option value="trillium">Trillium Community Health Plan</option>
              <option value="united_healthcare">UnitedHealthcare</option>
              <option value="western_health_advantage">Western Health Advantage</option>
            </select>
            <button type="button" onClick={() => { const select = document.getElementById('new-insurance') as HTMLSelectElement; if (select?.value) { if (!insurances.includes(select.value)) { setInsurances([...insurances, select.value]); } select.value = ''; } }} style={{ padding: '0.5rem 1rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>Add</button>
          </div>
        </div>

        {/* Specialties */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Specialties</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {specialties.map((spec, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.75rem', backgroundColor: '#f0fdfa', borderRadius: '20px', fontSize: '0.8rem', color: '#0f766e' }}>
                {spec.replace(/_/g, ' ')}
                <button type="button" onClick={() => setSpecialties(specialties.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '1rem', padding: 0, lineHeight: 1 }}>&times;</button>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input style={{ ...inputStyle, flex: 1 }} placeholder="Type specialty and press Add (e.g., anxiety, PTSD)" id="new-specialty" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); const input = e.target as HTMLInputElement; if (input.value.trim()) { setSpecialties([...specialties, input.value.trim().toLowerCase().replace(/\s+/g, '_')]); input.value = ''; } } }} />
            <button type="button" onClick={() => { const input = document.getElementById('new-specialty') as HTMLInputElement; if (input?.value.trim()) { setSpecialties([...specialties, input.value.trim().toLowerCase().replace(/\s+/g, '_')]); input.value = ''; } }} style={{ padding: '0.5rem 1rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>Add</button>
          </div>
        </div>

        {/* Therapy Types */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Therapy Types / Modalities</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {therapyTypes.map((tt, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.75rem', backgroundColor: '#f3f4f6', borderRadius: '20px', fontSize: '0.8rem' }}>
                {tt.replace(/_/g, ' ')}
                <button type="button" onClick={() => setTherapyTypes(therapyTypes.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '1rem', padding: 0, lineHeight: 1 }}>&times;</button>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input style={{ ...inputStyle, flex: 1 }} placeholder="Type therapy modality and press Add (e.g., CBT, EMDR, IFS)" id="new-therapy-type" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); const input = e.target as HTMLInputElement; if (input.value.trim()) { setTherapyTypes([...therapyTypes, input.value.trim().toLowerCase().replace(/\s+/g, '_')]); input.value = ''; } } }} />
            <button type="button" onClick={() => { const input = document.getElementById('new-therapy-type') as HTMLInputElement; if (input?.value.trim()) { setTherapyTypes([...therapyTypes, input.value.trim().toLowerCase().replace(/\s+/g, '_')]); input.value = ''; } }} style={{ padding: '0.5rem 1rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>Add</button>
          </div>
        </div>

        {/* Training Programs */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Ketamine / Psychedelic Training</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {trainingPrograms.map((tp, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.3rem 0.75rem', backgroundColor: '#fef3c7', borderRadius: '20px', fontSize: '0.8rem', color: '#92400e' }}>
                {tp.replace(/_/g, ' ')}
                <button type="button" onClick={() => setTrainingPrograms(trainingPrograms.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '1rem', padding: 0, lineHeight: 1 }}>&times;</button>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input style={{ ...inputStyle, flex: 1 }} placeholder="e.g., Fluence, Polaris Insight Center, MAPS, IPI" id="new-training" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); const input = e.target as HTMLInputElement; if (input.value.trim()) { setTrainingPrograms([...trainingPrograms, input.value.trim()]); input.value = ''; } } }} />
            <button type="button" onClick={() => { const input = document.getElementById('new-training') as HTMLInputElement; if (input?.value.trim()) { setTrainingPrograms([...trainingPrograms, input.value.trim()]); input.value = ''; } }} style={{ padding: '0.5rem 1rem', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>Add</button>
          </div>
        </div>

        {/* Practice */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Practice Details</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Professional Role</label>
              <select style={inputStyle} value={profile.mental_health_role || ''} onChange={(e) => updateField('mental_health_role', e.target.value || null)}>
                <option value="">Select...</option>
                <option value="clinical_social_work_therapist">Clinical Social Worker (LCSW)</option>
                <option value="marriage_and_family_therapist">Marriage &amp; Family Therapist (LMFT)</option>
                <option value="licensed_professional_counselor">Licensed Professional Counselor (LPC)</option>
                <option value="psychologist">Psychologist (PhD/PsyD)</option>
                <option value="psychiatric_nurse_practitioner">Psychiatric Nurse Practitioner</option>
                <option value="psychiatrist">Psychiatrist (MD/DO)</option>
                <option value="counselor">Counselor</option>
                <option value="art_therapist">Art Therapist</option>
                <option value="licensed_psychoanalyst">Licensed Psychoanalyst</option>
                <option value="registered_psychotherapist">Registered Psychotherapist</option>
                <option value="pre_licensed_professional">Pre-Licensed Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
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

        {/* Approach */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Approach</h2>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Treatment Approach</label>
            <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' as const }} value={profile.treatment_approach || ''} onChange={(e) => updateField('treatment_approach', e.target.value)} placeholder="Describe your therapeutic approach..." />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Session Formats</label>
              <input style={inputStyle} value={profile.session_formats || ''} onChange={(e) => updateField('session_formats', e.target.value)} placeholder="e.g., Individual, Couples, Group, Family" />
            </div>
            <div>
              <label style={labelStyle}>Typical Session Length</label>
              <input style={inputStyle} value={profile.typical_session_length || ''} onChange={(e) => updateField('typical_session_length', e.target.value)} placeholder="e.g., 50 minutes" />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Telehealth Platform</label>
            <input style={inputStyle} value={profile.telehealth_platform || ''} onChange={(e) => updateField('telehealth_platform', e.target.value)} placeholder="e.g., Zoom, Doxy.me" />
          </div>
        </div>

        {/* Client Focus */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>Client Focus</h2>
          <div style={{ marginBottom: '0.75rem' }}>
            <label style={labelStyle}>Client Focus</label>
            <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' as const }} value={profile.client_focus || ''} onChange={(e) => updateField('client_focus', e.target.value)} placeholder="e.g., Adults 25-65, LGBTQ+ community, veterans" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Cultural Focus</label>
              <input style={inputStyle} value={profile.cultural_focus || ''} onChange={(e) => updateField('cultural_focus', e.target.value)} placeholder="e.g., Multicultural, BIPOC-affirming" />
            </div>
            <div>
              <label style={labelStyle}>Faith / Spiritual Focus</label>
              <input style={inputStyle} value={profile.faith_or_spiritual_focus || ''} onChange={(e) => updateField('faith_or_spiritual_focus', e.target.value)} placeholder="e.g., Buddhist-informed, Christian counseling, secular" />
            </div>
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
