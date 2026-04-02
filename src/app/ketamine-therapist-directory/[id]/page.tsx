import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTherapistById, getAllTherapistIds } from '@/lib/therapist-queries';
import {
  formatRole,
  formatLabel,
  getTherapistName,
  getTherapistLocation,
} from '@/lib/therapist-types';

export const revalidate = 3600;

export async function generateStaticParams() {
  const ids = await getAllTherapistIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const therapist = await getTherapistById(id);
  if (!therapist) return { title: 'Therapist Not Found' };

  const name = getTherapistName(therapist);
  const location = getTherapistLocation(therapist);
  const credentials = therapist.therapist_credential
    .map((c) => c.credential.toUpperCase())
    .join(', ');
  const displayName = credentials ? `${name}, ${credentials}` : name;
  const title = location
    ? `${displayName} - Ketamine-Assisted Therapy in ${location}`
    : `${displayName} - Ketamine-Assisted Therapy`;
  const description = `Offering ketamine-assisted therapy${location ? ` in ${location}` : ''}, ${name} specializes in treating various mental health conditions through personalized ketamine treatment.`;

  return {
    title,
    description,
    openGraph: {
      title: `${displayName} - Ketamine-Assisted Therapy`,
      description,
      type: 'website',
      siteName: 'Isha Health',
    },
    twitter: {
      card: 'summary',
      title: `${displayName} - Ketamine-Assisted Therapy`,
      description,
    },
  };
}

export default async function TherapistProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTherapistById(id);
  if (!t) notFound();

  const name = getTherapistName(t);
  const location = getTherapistLocation(t);
  const credentials = t.therapist_credential
    .map((c) => c.credential.toUpperCase())
    .join(', ');
  const topSpecialties = t.therapist_specialty
    .filter((s) => s.top_three)
    .map((s) => formatLabel(s.specialty));
  const otherSpecialties = t.therapist_specialty
    .filter((s) => !s.top_three)
    .map((s) => formatLabel(s.specialty));
  const therapyTypes = t.therapist_therapy_type.map((tt) =>
    formatLabel(tt.therapy_type)
  );
  const languages = t.therapist_language.map((l) => formatLabel(l.language));
  const insurances = t.therapist_insurance.map((i) =>
    formatLabel(i.insurance_type)
  );
  const licenses = t.therapist_license;
  const trainingPrograms = t.therapist_training_program.map((tp) =>
    formatLabel(tp.training_program)
  );
  const ageGroups = t.therapist_age_group.map((a) => formatLabel(a.age_group));
  const paymentMethods = t.therapist_payment_method.map((p) =>
    formatLabel(p.payment_method)
  );

  return (
    <div className="td-scope min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/ketamine-therapist-directory"
          className="text-teal-600 hover:text-teal-800 text-sm mb-8 inline-block"
        >
          &larr; Back to Directory
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          {t.profile_pic ? (
            <img
              src={t.profile_pic}
              alt={name}
              className="w-32 h-32 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-teal-700 font-bold text-3xl">
                {t.first_name[0]}
                {t.last_name[0]}
              </span>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              {name}
              {credentials && (
                <span className="text-gray-500 font-normal">, {credentials}</span>
              )}
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              {formatRole(t.mental_health_role)}
            </p>
            {location && <p className="text-gray-500 mt-1">{location}</p>}
            <div className="flex flex-wrap gap-2 mt-3">
              {t.visit_type && (
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {formatLabel(t.visit_type)}
                </span>
              )}
              {t.lgbtq_affirmative && (
                <span className="inline-block bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full">
                  LGBTQ+ Affirmative
                </span>
              )}
              {t.sliding_scale && (
                <span className="inline-block bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                  Sliding Scale
                </span>
              )}
              {t.certified && (
                <span className="inline-block bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full">
                  Certified
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        {t.welcome_message && (
          <Section title="Welcome">
            <p className="text-gray-700 whitespace-pre-line">
              {t.welcome_message}
            </p>
          </Section>
        )}

        {/* Bio */}
        {t.bio && (
          <Section title="About">
            <p className="text-gray-700 whitespace-pre-line">{t.bio}</p>
          </Section>
        )}

        {/* Top Specialties */}
        {topSpecialties.length > 0 && (
          <Section title="Top Specialties">
            <div className="flex flex-wrap gap-2">
              {topSpecialties.map((s) => (
                <span
                  key={s}
                  className="inline-block bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
            {t.note_on_top_specialties && (
              <p className="text-gray-600 text-sm mt-3 whitespace-pre-line">
                {t.note_on_top_specialties}
              </p>
            )}
          </Section>
        )}

        {/* Other Specialties */}
        {otherSpecialties.length > 0 && (
          <Section title="Other Areas of Focus">
            <div className="flex flex-wrap gap-2">
              {otherSpecialties.map((s) => (
                <span
                  key={s}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* Therapy Types */}
        {therapyTypes.length > 0 && (
          <Section title="Therapy Types">
            <div className="flex flex-wrap gap-2">
              {therapyTypes.map((tt) => (
                <span
                  key={tt}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {tt}
                </span>
              ))}
            </div>
            {t.note_on_therapy_types && (
              <p className="text-gray-600 text-sm mt-3 whitespace-pre-line">
                {t.note_on_therapy_types}
              </p>
            )}
          </Section>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Contact & Logistics */}
          <div className="space-y-6">
            {t.fee && (
              <Detail label="Fee" value={t.fee} />
            )}
            {t.note_on_finance && (
              <Detail label="Financial Notes" value={t.note_on_finance} />
            )}
            {t.phone && <Detail label="Phone" value={t.phone} />}
            {t.website && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Website
                </h3>
                <a
                  href={t.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 break-all"
                >
                  {t.website}
                </a>
              </div>
            )}
            {licenses.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Licensed In
                </h3>
                <p className="text-gray-700">
                  {licenses.map((l) => l.state).join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            {languages.length > 0 && (
              <Detail label="Languages" value={languages.join(', ')} />
            )}
            {insurances.length > 0 && (
              <Detail label="Insurance" value={insurances.join(', ')} />
            )}
            {paymentMethods.length > 0 && (
              <Detail
                label="Payment Methods"
                value={paymentMethods.join(', ')}
              />
            )}
            {ageGroups.length > 0 && (
              <Detail label="Age Groups" value={ageGroups.join(', ')} />
            )}
            {trainingPrograms.length > 0 && (
              <Detail
                label="Training Programs"
                value={trainingPrograms.join(', ')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
