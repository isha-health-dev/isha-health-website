import { getAllTherapists } from './therapist-queries';
import { getTherapistSlug, getTherapistName, type TherapistWithRelations } from './therapist-types';

// Per-metro mapping: which therapists are most relevant to surface on a
// given /locations/ketamine-therapy-* page. Keys match the city page slug.
// `state` is the two-letter code stored in Supabase. `nearCities` is
// city names (case-insensitive substring match) that should be ranked
// higher than other in-state therapists. `excludeCities` lets a metro
// like Long Island avoid pulling NYC clinicians.
type MetroConfig = {
  state: string;
  nearCities: string[];
  excludeCities?: string[];
};

const METRO_CONFIG: Record<string, MetroConfig> = {
  'ketamine-therapy-new-york-city': {
    state: 'NY',
    nearCities: ['new york', 'manhattan', 'new york city', 'nyc'],
  },
  'ketamine-therapy-brooklyn': {
    state: 'NY',
    nearCities: ['brooklyn'],
  },
  'ketamine-therapy-long-island': {
    state: 'NY',
    nearCities: [
      'garden city', 'hicksville', 'mineola', 'hempstead', 'huntington',
      'smithtown', 'babylon', 'great neck', 'syosset', 'long island',
      'farmingdale', 'plainview', 'massapequa', 'levittown', 'commack',
      'islip', 'patchogue', 'bay shore', 'rockville centre',
    ],
    excludeCities: ['new york', 'manhattan', 'brooklyn', 'queens', 'bronx', 'staten island'],
  },
  'ketamine-therapy-los-angeles': {
    state: 'CA',
    nearCities: [
      'los angeles', 'la', 'beverly hills', 'west hollywood', 'santa monica',
      'culver city', 'pasadena', 'glendale', 'burbank', 'long beach',
      'inglewood', 'hollywood', 'venice', 'sherman oaks', 'studio city',
    ],
  },
  'ketamine-therapy-san-francisco': {
    state: 'CA',
    nearCities: [
      'san francisco', 'sf', 'oakland', 'berkeley', 'daly city',
      'south san francisco', 'san mateo', 'palo alto', 'redwood city',
      'mountain view', 'sausalito',
    ],
  },
  'ketamine-therapy-san-diego': {
    state: 'CA',
    nearCities: [
      'san diego', 'la jolla', 'del mar', 'encinitas', 'carlsbad',
      'oceanside', 'chula vista', 'national city', 'el cajon', 'la mesa',
      'coronado',
    ],
  },
  'ketamine-therapy-beverly-hills': {
    state: 'CA',
    nearCities: [
      'beverly hills', 'west hollywood', 'bel air', 'brentwood', 'westwood',
      'los angeles', 'santa monica', 'century city',
    ],
  },
  'ketamine-therapy-houston': {
    state: 'TX',
    nearCities: [
      'houston', 'sugar land', 'the woodlands', 'katy', 'pearland',
      'pasadena', 'baytown', 'cypress', 'spring',
    ],
  },
  'ketamine-therapy-dallas': {
    state: 'TX',
    nearCities: [
      'dallas', 'plano', 'frisco', 'irving', 'garland', 'mesquite',
      'richardson', 'arlington', 'fort worth', 'mckinney', 'allen',
    ],
  },
  'ketamine-therapy-austin': {
    state: 'TX',
    nearCities: [
      'austin', 'round rock', 'cedar park', 'pflugerville', 'georgetown',
      'leander', 'lakeway', 'westlake',
    ],
  },
  'ketamine-therapy-miami': {
    state: 'FL',
    nearCities: [
      'miami', 'miami beach', 'coral gables', 'aventura', 'doral',
      'hialeah', 'kendall', 'pinecrest', 'homestead', 'fort lauderdale',
      'hollywood', 'pembroke pines',
    ],
  },
  'ketamine-therapy-denver': {
    state: 'CO',
    nearCities: [
      'denver', 'aurora', 'lakewood', 'centennial', 'arvada', 'thornton',
      'westminster', 'highlands ranch', 'broomfield', 'englewood',
      'wheat ridge', 'commerce city',
    ],
  },
  'ketamine-therapy-atlanta': {
    state: 'GA',
    nearCities: [
      'atlanta', 'sandy springs', 'roswell', 'marietta', 'alpharetta',
      'decatur', 'smyrna', 'duluth', 'johns creek', 'kennesaw',
      'lawrenceville', 'cumming',
    ],
  },
  'ketamine-therapy-portland': {
    state: 'OR',
    nearCities: [
      'portland', 'beaverton', 'hillsboro', 'gresham', 'lake oswego',
      'tigard', 'tualatin', 'wilsonville', 'milwaukie', 'oregon city',
    ],
  },
  'ketamine-therapy-seattle': {
    state: 'WA',
    nearCities: [
      'seattle', 'bellevue', 'redmond', 'kirkland', 'sammamish',
      'issaquah', 'mercer island', 'renton', 'bothell', 'kent',
      'shoreline', 'edmonds',
    ],
  },
  'ketamine-therapy-phoenix': {
    state: 'AZ',
    nearCities: [
      'phoenix', 'scottsdale', 'tempe', 'mesa', 'chandler', 'glendale',
      'gilbert', 'peoria', 'paradise valley', 'surprise', 'avondale',
    ],
  },
  'ketamine-therapy-scottsdale': {
    state: 'AZ',
    nearCities: [
      'scottsdale', 'paradise valley', 'fountain hills', 'tempe',
      'phoenix', 'mesa', 'chandler', 'cave creek', 'carefree',
    ],
  },
};

function scoreTherapist(t: TherapistWithRelations, cfg: MetroConfig): number {
  const tCity = (t.city || '').toLowerCase().trim();
  const tState = (t.state || '').toUpperCase().trim();
  if (tState !== cfg.state) return 0;
  if (cfg.excludeCities?.some((c) => tCity === c || tCity.startsWith(c + ' '))) return 0;
  // Exact-city match scores highest, then substring (e.g. "los angeles" matching "Los Angeles, CA").
  for (let i = 0; i < cfg.nearCities.length; i++) {
    const near = cfg.nearCities[i];
    if (tCity === near) return 100 - i; // earlier in list = higher rank
    if (tCity.includes(near)) return 80 - i;
  }
  return 1; // in-state but not in metro
}

export async function getTherapistsForCity(
  citySlug: string,
  limit = 6
): Promise<{ slug: string; name: string; city: string | null; state: string | null; profilePic: string | null }[]> {
  const cfg = METRO_CONFIG[citySlug];
  if (!cfg) return [];
  let all: TherapistWithRelations[];
  try {
    all = await getAllTherapists();
  } catch {
    return [];
  }
  const scored = all
    .map((t) => ({ t, score: scoreTherapist(t, cfg) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  return scored.map(({ t }) => ({
    slug: getTherapistSlug(t),
    name: getTherapistName(t),
    city: t.city,
    state: t.state,
    profilePic: t.profile_pic,
  }));
}
