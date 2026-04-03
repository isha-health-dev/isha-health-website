'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { TherapistWithRelations } from '@/lib/therapist-types';
import {
  formatRole,
  formatLabel,
  getTherapistName,
  getTherapistLocation,
  getTherapistSlug,
} from '@/lib/therapist-types';

interface Props {
  therapists: TherapistWithRelations[];
}

export function TherapistDirectory({ therapists }: Props) {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [visitTypeFilter, setVisitTypeFilter] = useState('');
  const [insuranceFilter, setInsuranceFilter] = useState('');
  const [lgbtqFilter, setLgbtqFilter] = useState(false);
  const [slidingScaleFilter, setSlidingScaleFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  // Extract unique values for filter dropdowns
  const states = useMemo(() => {
    const s = new Set<string>();
    therapists.forEach((t) => {
      t.therapist_license.forEach((l) => {
        if (l.state) s.add(l.state);
      });
      if (t.state) s.add(t.state);
    });
    return [...s].sort();
  }, [therapists]);

  const specialties = useMemo(() => {
    const s = new Set<string>();
    therapists.forEach((t) => {
      t.therapist_specialty.forEach((sp) => s.add(sp.specialty));
    });
    return [...s].sort();
  }, [therapists]);

  const insurances = useMemo(() => {
    const s = new Set<string>();
    therapists.forEach((t) => {
      t.therapist_insurance.forEach((i) => s.add(i.insurance_type));
    });
    return [...s].sort();
  }, [therapists]);

  // Reset pagination when filters change
  useMemo(() => {
    setVisibleCount(24);
  }, [search, stateFilter, specialtyFilter, visitTypeFilter, insuranceFilter, lgbtqFilter, slidingScaleFilter]);

  const filtered = useMemo(() => {
    return therapists.filter((t) => {
      const name = getTherapistName(t).toLowerCase();
      const searchLower = search.toLowerCase();
      if (search && !name.includes(searchLower)) return false;

      if (stateFilter) {
        const hasState =
          t.state === stateFilter ||
          t.therapist_license.some((l) => l.state === stateFilter);
        if (!hasState) return false;
      }

      if (specialtyFilter) {
        const hasSpecialty = t.therapist_specialty.some(
          (s) => s.specialty === specialtyFilter
        );
        if (!hasSpecialty) return false;
      }

      if (visitTypeFilter) {
        if (visitTypeFilter === 'online' && t.visit_type === 'in_person')
          return false;
        if (visitTypeFilter === 'in_person' && t.visit_type === 'online')
          return false;
      }

      if (insuranceFilter) {
        const hasInsurance = t.therapist_insurance.some(
          (i) => i.insurance_type === insuranceFilter
        );
        if (!hasInsurance) return false;
      }

      if (lgbtqFilter && !t.lgbtq_affirmative) return false;
      if (slidingScaleFilter && !t.sliding_scale) return false;

      return true;
    });
  }, [
    therapists,
    search,
    stateFilter,
    specialtyFilter,
    visitTypeFilter,
    insuranceFilter,
    lgbtqFilter,
    slidingScaleFilter,
  ]);

  return (
    <div className="td-scope min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.8rem',
            color: '#6b7280',
            marginBottom: '1.5rem',
          }}
        >
          <a href="/" style={{ color: '#0d9488', textDecoration: 'none' }}>
            Home
          </a>
          {' / '}
          <span style={{ color: '#9ca3af' }}>Therapist Directory</span>
        </nav>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">
            Find a Ketamine-Assisted Psychotherapy Therapist
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse {therapists.length} KAP-trained therapists across the United
            States. Filter by state, specialty, visit type, and more to find
            the right therapist for your ketamine-assisted therapy journey.
          </p>
          <div
            style={{
              marginTop: '1rem',
              fontSize: '0.85rem',
              color: '#6b7280',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Are you a KAP-trained therapist?{' '}
            <a
              href="/ketamine-therapist-directory/create-account"
              style={{ color: '#0d9488', textDecoration: 'underline' }}
            >
              Join the directory
            </a>
            {' or '}
            <a
              href="/ketamine-therapist-directory/login"
              style={{ color: '#0d9488', textDecoration: 'underline' }}
            >
              log in to update your profile
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All States</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Specialties</option>
              {specialties.map((s) => (
                <option key={s} value={s}>
                  {formatLabel(s)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={visitTypeFilter}
              onChange={(e) => setVisitTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Visit Types</option>
              <option value="online">Online</option>
              <option value="in_person">In Person</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              value={insuranceFilter}
              onChange={(e) => setInsuranceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Insurance</option>
              {insurances.map((i) => (
                <option key={i} value={i}>
                  {formatLabel(i)}
                </option>
              ))}
            </select>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={lgbtqFilter}
                onChange={(e) => setLgbtqFilter(e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded"
              />
              <span className="text-sm text-gray-700">LGBTQ+ Affirmative</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={slidingScaleFilter}
                onChange={(e) => setSlidingScaleFilter(e.target.checked)}
                className="w-4 h-4 text-teal-600 rounded"
              />
              <span className="text-sm text-gray-700">Sliding Scale</span>
            </label>
            <span className="ml-auto text-sm text-gray-500">
              {filtered.length} therapist{filtered.length !== 1 ? 's' : ''}{' '}
              found
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((t) => (
            <TherapistCard key={t.id} therapist={t} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No therapists match your filters.</p>
            <p className="text-sm mt-2">Try broadening your search criteria.</p>
          </div>
        )}

        {visibleCount < filtered.length && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => setVisibleCount((c) => c + 24)}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#0d9488',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: 600,
                fontFamily: 'inherit',
              }}
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TherapistCard({ therapist: t }: { therapist: TherapistWithRelations }) {
  const name = getTherapistName(t);
  const location = getTherapistLocation(t);
  const credentials = t.therapist_credential
    .map((c) => c.credential.toUpperCase())
    .join(', ');
  const topSpecialties = t.therapist_specialty
    .filter((s) => s.top_three)
    .map((s) => formatLabel(s.specialty));
  const displaySpecialties =
    topSpecialties.length > 0
      ? topSpecialties
      : t.therapist_specialty.slice(0, 3).map((s) => formatLabel(s.specialty));

  return (
    <Link
      href={`/ketamine-therapist-directory/${getTherapistSlug(t)}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        {t.profile_pic ? (
          <img
            src={t.profile_pic}
            alt={name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <span className="text-teal-700 font-semibold text-lg">
              {t.first_name[0]}
              {t.last_name[0]}
            </span>
          </div>
        )}
        <div className="min-w-0">
          <h2 className="font-semibold text-gray-900 truncate">
            {name}
            {credentials && (
              <span className="text-gray-500 font-normal text-sm">
                , {credentials}
              </span>
            )}
          </h2>
          <p className="text-sm text-gray-600">{formatRole(t.mental_health_role)}</p>
          {location && (
            <p className="text-sm text-gray-500 mt-1">{location}</p>
          )}
        </div>
      </div>

      {displaySpecialties.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {displaySpecialties.map((s) => (
            <span
              key={s}
              className="inline-block bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
        {t.visit_type && (
          <span>{formatLabel(t.visit_type)}</span>
        )}
        {t.sliding_scale && <span>Sliding Scale</span>}
        {t.lgbtq_affirmative && <span>LGBTQ+ Affirmative</span>}
        {t.fee && <span>{t.fee}</span>}
      </div>
    </Link>
  );
}
