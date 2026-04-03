import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTherapistBySlug, getAllTherapistSlugs } from '@/lib/therapist-queries';
import {
  formatRole,
  formatLabel,
  getTherapistName,
  getTherapistLocation,
} from '@/lib/therapist-types';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllTherapistSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const therapist = await getTherapistBySlug(slug);
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
  const description = `${name} offers ketamine-assisted psychotherapy${location ? ` in ${location}` : ''}. Specializing in personalized mental health treatment through ketamine therapy.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://isha.health/ketamine-therapist-directory/${slug}`,
    },
    openGraph: {
      title: `${displayName} - Ketamine-Assisted Therapy`,
      description,
      type: 'profile',
      ...(therapist.profile_pic ? { images: [therapist.profile_pic] } : {}),
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTherapistBySlug(slug);
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

  // Structured data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: formatRole(t.mental_health_role),
    ...(t.profile_pic ? { image: t.profile_pic } : {}),
    ...(t.website ? { url: t.website } : {}),
    ...(t.phone ? { telephone: t.phone } : {}),
    ...(location
      ? {
          address: {
            '@type': 'PostalAddress',
            ...(t.city ? { addressLocality: t.city } : {}),
            ...(t.state ? { addressRegion: t.state } : {}),
            addressCountry: 'US',
          },
        }
      : {}),
    worksFor: {
      '@type': 'Organization',
      name: 'Isha Health',
      url: 'https://isha.health',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://isha.health',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Therapist Directory',
        item: 'https://isha.health/ketamine-therapist-directory',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: `https://isha.health/ketamine-therapist-directory/${slug}`,
      },
    ],
  };

  return (
    <div className="td-scope min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.8rem',
            color: '#6b7280',
            marginBottom: '1.5rem',
          }}
        >
          <Link href="/" style={{ color: '#0d9488', textDecoration: 'none' }}>
            Home
          </Link>
          {' / '}
          <Link
            href="/ketamine-therapist-directory"
            style={{ color: '#0d9488', textDecoration: 'none' }}
          >
            Therapist Directory
          </Link>
          {' / '}
          <span style={{ color: '#9ca3af' }}>{name}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          {t.profile_pic ? (
            <img
              src={t.profile_pic}
              alt={`${name} - Ketamine-Assisted Psychotherapist`}
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
          <div className="space-y-6">
            {t.fee && <Detail label="Fee" value={t.fee} />}
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
                  className="text-teal-600 break-all"
                  style={{ textDecoration: 'underline' }}
                >
                  {t.website}
                </a>
              </div>
            )}
            {licenses.length > 0 && (
              <Detail
                label="Licensed In"
                value={licenses.map((l) => l.state).join(', ')}
              />
            )}
          </div>
          <div className="space-y-6">
            {languages.length > 0 && (
              <Detail label="Languages" value={languages.join(', ')} />
            )}
            {insurances.length > 0 && (
              <Detail label="Insurance" value={insurances.join(', ')} />
            )}
            {paymentMethods.length > 0 && (
              <Detail label="Payment Methods" value={paymentMethods.join(', ')} />
            )}
            {ageGroups.length > 0 && (
              <Detail label="Age Groups" value={ageGroups.join(', ')} />
            )}
            {trainingPrograms.length > 0 && (
              <Detail label="Training Programs" value={trainingPrograms.join(', ')} />
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#f0fdfa',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#111827',
              marginBottom: '0.5rem',
            }}
          >
            Ready to start ketamine-assisted therapy?
          </h2>
          <p
            style={{
              color: '#4b5563',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
            }}
          >
            Book a consultation with Isha Health to see if ketamine therapy is
            right for you.
          </p>
          <a
            href="/appointment"
            style={{
              display: 'inline-block',
              backgroundColor: '#0d9488',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}
          >
            Check Appointment Availability
          </a>
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
