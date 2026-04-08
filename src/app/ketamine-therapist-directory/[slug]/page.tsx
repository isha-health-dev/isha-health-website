import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTherapistBySlug, getAllTherapistSlugs } from '@/lib/therapist-queries';
import {
  formatRole,
  formatLabel,
  getTherapistName,
  getTherapistLocation,
  getVerificationStatus,
} from '@/lib/therapist-types';

export const revalidate = 60;

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
    ...(t.education ? { alumniOf: t.education } : {}),
    ...(t.years_in_practice != null
      ? { description: `${t.years_in_practice} years in practice` }
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
        name: 'Clinician Directory',
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
            Clinician Directory
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
              style={{ objectPosition: t.profile_pic_position || 'center center' }}
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
              {t.accepting_new_clients && (
                <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                  Accepting New Clients
                </span>
              )}
              {t.free_consultation && (
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                  Free Consultation
                </span>
              )}
              {t.evening_weekend_availability && (
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                  Evening/Weekend Hours
                </span>
              )}
            </div>

            {/* Social Links */}
            {(t.instagram_url || t.linkedin_url || t.twitter_url || t.youtube_url || t.tiktok_url) && (
              <div className="flex flex-wrap gap-3 mt-3">
                {t.linkedin_url && (
                  <a href={t.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    LinkedIn
                  </a>
                )}
                {t.instagram_url && (
                  <a href={t.instagram_url} target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Instagram
                  </a>
                )}
                {t.twitter_url && (
                  <a href={t.twitter_url} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Twitter
                  </a>
                )}
                {t.youtube_url && (
                  <a href={t.youtube_url} target="_blank" rel="noopener noreferrer" style={{ color: '#ff0000', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    YouTube
                  </a>
                )}
                {t.tiktok_url && (
                  <a href={t.tiktok_url} target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    TikTok
                  </a>
                )}
              </div>
            )}

            {/* Verification Badge */}
            <div style={{ marginTop: '0.75rem' }}>
              {(() => {
                const v = getVerificationStatus(t);
                return (
                  <span style={{ fontSize: '0.75rem', color: v.color, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: v.color, display: 'inline-block' }} />
                    {v.label}
                    {t.last_verified_at && (
                      <> &middot; {new Date(t.last_verified_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</>
                    )}
                  </span>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Booking Button */}
        {t.booking_url && (
          <div className="mb-8">
            <a
              href={t.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Book a Session
            </a>
          </div>
        )}

        {/* Upcoming Events */}
        {t.therapist_event && t.therapist_event.length > 0 && (
          <Section title="Upcoming Events">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {t.therapist_event
                .filter((e) => new Date(e.event_date) >= new Date())
                .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime())
                .map((event) => (
                  <div
                    key={event.id}
                    style={{
                      padding: '1rem 1.25rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      backgroundColor: '#fafafa',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: 0, textTransform: 'none', letterSpacing: 'normal' }}>
                          {event.event_url ? (
                            <a href={event.event_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0d9488', textDecoration: 'none' }}>
                              {event.title}
                            </a>
                          ) : (
                            event.title
                          )}
                        </h3>
                        {event.description && (
                          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.25rem' }}>
                            {event.description}
                          </p>
                        )}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <div>{new Date(event.event_date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}</div>
                        <div>{new Date(event.event_date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
                        {event.location && <div>{event.location}</div>}
                        {event.is_virtual && <span style={{ color: '#0d9488' }}>Virtual</span>}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Section>
        )}

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

        {/* Background */}
        {(t.education || t.years_in_practice || t.professional_memberships || t.publications) && (
          <Section title="Background">
            <div className="space-y-3">
              {t.education && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Education</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.education}</p>
                </div>
              )}
              {t.years_in_practice != null && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Experience</h3>
                  <p className="text-gray-700">{t.years_in_practice} years in practice</p>
                </div>
              )}
              {t.professional_memberships && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Professional Memberships</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.professional_memberships}</p>
                </div>
              )}
              {t.publications && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Publications</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.publications}</p>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Treatment Approach */}
        {t.treatment_approach && (
          <Section title="Treatment Approach">
            <p className="text-gray-700 whitespace-pre-line">{t.treatment_approach}</p>
            {(t.session_formats || t.typical_session_length) && (
              <div className="flex flex-wrap gap-4 mt-3">
                {t.session_formats && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Session Formats</h3>
                    <p className="text-gray-700">{t.session_formats}</p>
                  </div>
                )}
                {t.typical_session_length && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Typical Session Length</h3>
                    <p className="text-gray-700">{t.typical_session_length}</p>
                  </div>
                )}
              </div>
            )}
          </Section>
        )}

        {/* Client Focus */}
        {(t.client_focus || t.cultural_focus || t.faith_or_spiritual_focus) && (
          <Section title="Client Focus">
            <div className="space-y-3">
              {t.client_focus && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Focus Areas</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.client_focus}</p>
                </div>
              )}
              {t.cultural_focus && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Cultural Focus</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.cultural_focus}</p>
                </div>
              )}
              {t.faith_or_spiritual_focus && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Faith / Spiritual Focus</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t.faith_or_spiritual_focus}</p>
                </div>
              )}
            </div>
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
                  href={t.website.startsWith('http') ? t.website : `https://${t.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 break-all"
                  style={{ textDecoration: 'underline' }}
                >
                  {t.website.replace(/^https?:\/\//, '')}
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
          dangerouslySetInnerHTML={{
            __html: `<div style="margin-top:3rem;padding:2.5rem;background-color:#f0fdfa;border-radius:12px;text-align:center;border:1px solid #ccfbf1;">
              <p style="font-size:1.35rem !important;font-weight:700 !important;color:#0f766e !important;margin-bottom:0.5rem !important;font-family:'Libre Baskerville',serif !important;letter-spacing:normal !important;text-transform:none !important;">Ready to start ketamine-assisted therapy?</p>
              <p style="color:#4b5563 !important;margin-bottom:1.5rem !important;font-size:1rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;">Book a consultation with Isha Health to see if ketamine therapy is right for you.</p>
              <a href="/appointment" style="display:inline-block !important;background-color:#0d9488 !important;color:#fff !important;padding:0.85rem 2.5rem !important;border-radius:8px !important;text-decoration:none !important;font-weight:600 !important;font-size:1rem !important;font-family:'Poppins',sans-serif !important;letter-spacing:normal !important;text-transform:none !important;transition:background-color 0.2s;">Check Appointment Availability</a>
            </div>`,
          }}
        />
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
