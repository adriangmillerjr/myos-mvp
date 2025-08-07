import { createClient } from '@supabase/supabase-js';

// Reads environment variables at runtime. When deploying on Vercel, set
// SUPABASE_URL and SUPABASE_ANON_KEY in your environment.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);