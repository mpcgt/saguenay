import { createClient } from "@supabase/supabase-js";

function isString(value: string | undefined): value is string {
    return typeof value === 'string' && value.length > 0;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!isString(supabaseUrl)) {
    throw new Error('Supabase URL is missing or invalid.');
}

if (!isString(supabaseAnonKey)) {
    throw new Error('Supabase Anon Key is missing or invalid.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Server client initialized successfully');