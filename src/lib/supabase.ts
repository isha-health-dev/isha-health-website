import { createClient } from '@supabase/supabase-js';

// Fallback to placeholder values so the build doesn't crash in environments
// without Supabase credentials (e.g. CI without secrets set). Queries against
// the placeholder client fail at request time; sitemap + directory routes
// already wrap their Supabase calls in try/catch and degrade gracefully.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
