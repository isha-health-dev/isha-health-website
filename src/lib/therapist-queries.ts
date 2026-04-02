import { supabase } from './supabase';
import type { TherapistWithRelations } from './therapist-types';

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
  therapist_training_program(training_program)
`;

export async function getAllTherapists(): Promise<TherapistWithRelations[]> {
  const { data, error } = await supabase
    .from('therapist')
    .select(THERAPIST_SELECT)
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

export async function getAllTherapistIds(): Promise<string[]> {
  const { data, error } = await supabase
    .from('therapist')
    .select('id');

  if (error) throw error;
  return (data || []).map((t) => t.id);
}
