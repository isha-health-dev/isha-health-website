export interface Therapist {
  id: string;
  email: string;
  title: string | null;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  profile_pic: string | null;
  profile_pic_position: string | null;
  website: string | null;
  is_verified: boolean;
  pronouns: string | null;
  visit_type: 'online' | 'in_person' | 'hybrid' | null;
  mental_health_role: string | null;
  country: string | null;
  certified: boolean;
  bio: string | null;
  practice_type: string | null;
  fee: string | null;
  welcome_message: string | null;
  phone: string | null;
  street_address: string | null;
  address_line2: string | null;
  city: string | null;
  state: string | null;
  postal_code: string | null;
  npi: string | null;
  note_on_finance: string | null;
  note_on_top_specialties: string | null;
  note_on_therapy_types: string | null;
  sliding_scale: boolean;
  lgbtq_affirmative: boolean;
  accepting_new_clients: boolean;
  free_consultation: boolean;
  evening_weekend_availability: boolean;
  education: string | null;
  years_in_practice: number | null;
  professional_memberships: string | null;
  publications: string | null;
  treatment_approach: string | null;
  session_formats: string | null;
  typical_session_length: string | null;
  client_focus: string | null;
  cultural_focus: string | null;
  faith_or_spiritual_focus: string | null;
  booking_url: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  youtube_url: string | null;
  tiktok_url: string | null;
  last_verified_at: string | null;
  verification_reminder_sent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface TherapistEvent {
  id: string;
  therapist_id: string;
  title: string;
  description: string | null;
  event_date: string;
  event_url: string | null;
  location: string | null;
  is_virtual: boolean;
  created_at: string;
}

export function getVerificationStatus(t: Therapist): {
  label: string;
  color: string;
  daysAgo: number | null;
} {
  if (!t.last_verified_at) {
    return { label: 'Not yet verified', color: '#9ca3af', daysAgo: null };
  }
  const days = Math.floor(
    (Date.now() - new Date(t.last_verified_at).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days <= 30) {
    return { label: 'Verified recently', color: '#16a34a', daysAgo: days };
  }
  if (days <= 90) {
    return { label: `Verified ${days} days ago`, color: '#ca8a04', daysAgo: days };
  }
  return { label: `Last verified ${days} days ago`, color: '#9ca3af', daysAgo: days };
}

export interface TherapistWithRelations extends Therapist {
  therapist_credential: { credential: string }[];
  therapist_specialty: { specialty: string; top_three: boolean }[];
  therapist_therapy_type: { therapy_type: string }[];
  therapist_language: { language: string }[];
  therapist_ethnicity: { ethnicity: string }[];
  therapist_insurance: { insurance_type: string }[];
  therapist_license: { license_number: string; state: string }[];
  therapist_age_group: { age_group: string }[];
  therapist_payment_method: { payment_method: string }[];
  therapist_training_program: { training_program: string }[];
  therapist_event: TherapistEvent[];
}

export function formatRole(role: string | null): string {
  if (!role) return 'Therapist';
  return role
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function formatLabel(value: string): string {
  return value
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function getTherapistName(t: Therapist): string {
  const parts = [t.first_name, t.middle_name, t.last_name].filter(Boolean);
  return parts.join(' ');
}

export function getTherapistSlug(t: Therapist): string {
  const name = [t.first_name, t.last_name].filter(Boolean).join(' ');
  const state = t.state ? t.state.toLowerCase() : '';
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return state ? `${slug}-${state}` : slug;
}

export function getTherapistLocation(t: Therapist): string | null {
  if (t.city && t.state) return `${t.city}, ${t.state}`;
  if (t.state) return t.state;
  if (t.city) return t.city;
  return null;
}
