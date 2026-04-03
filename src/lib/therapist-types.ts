export interface Therapist {
  id: string;
  email: string;
  title: string | null;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  profile_pic: string | null;
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
  created_at: string;
  updated_at: string;
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
