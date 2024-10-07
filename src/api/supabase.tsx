import { createClient } from "@supabase/supabase-js";

function isString(value: string | undefined): value is string {
    return typeof value === 'string';
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


if (!isString(supabaseUrl) || !isString(supabaseAnonKey)) {
    throw new Error('Supabase URL or Anon Key is missing or invalid');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
