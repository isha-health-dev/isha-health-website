import { supabase } from './supabase';
import type { TherapistWithRelations } from './therapist-types';
import { getTherapistSlug } from './therapist-types';

const THERAPIST_SELECT = `
  *,
  therapist_credential(credential),
  therapist_specialty(specialty, top_three),
  therapist_therapy_type(therapy_type),
  therapist_language(language),
  therapist_ethnicity(ethnicity),
  therapist_insurance(insurance_type),
  therapist_license(license_number, state),
  therapist_age_group(age_group),
  therapist_payment_method(payment_method),
  therapist_training_program(training_program),
  therapist_event(id, title, description, event_date, event_url, location, is_virtual, created_at)
`;

export async function getAllTherapists(): Promise<TherapistWithRelations[]> {
  const { data, error } = await supabase
    .from('therapist')
    .select(THERAPIST_SELECT)
    .order('last_verified_at', { ascending: false, nullsFirst: false })
    .order('first_name', { ascending: true });

  if (error) throw error;
  return (data as TherapistWithRelations[]) || [];
}

export async function getTherapistById(
  id: string
): Promise<TherapistWithRelations | null> {
  const { data, error } = await supabase
    .from('therapist')
    .select(THERAPIST_SELECT)
    .eq('id', id)
    .single();

  if (error) return null;
  return data as TherapistWithRelations;
}

export async function getTherapistBySlug(
  slug: string
): Promise<TherapistWithRelations | null> {
  // Fetch all and match by generated slug (since slug isn't stored in DB)
  const all = await getAllTherapists();
  return all.find((t) => getTherapistSlug(t) === slug) || null;
}

export async function getAllTherapistSlugs(): Promise<
  { slug: string; id: string }[]
> {
  const all = await getAllTherapists();
  return all.map((t) => ({
    slug: getTherapistSlug(t),
    id: t.id,
  }));
}
