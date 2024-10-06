import { createClient } from "@supabase/supabase-js";

function isString(value: string | undefined): value is string {
    return typeof value === 'string';
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(
    isString(supabaseUrl) ? supabaseUrl : 'Invalid Supabase URL',
    isString(supabaseAnonKey) ? supabaseAnonKey : 'Invalid Supabase Anon Key'
);
