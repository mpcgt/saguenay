import { createClient } from "@supabase/supabase-js";

function isString(value: string | undefined): value is string {
    return typeof value === 'string';
}

export const supabase = createClient(
    isString(import.meta.env.VITE_SUPABASE_URL) ? import.meta.env.VITE_SUPABASE_URL : 'REACT_APP_SUPABASE_URL',
    isString(import.meta.env.VITE_SUPABASE_ANON_KEY) ? import.meta.env.VITE_SUPABASE_ANON_KEY : 'REACT_APP_SUPABASE_ANON_KEY'
);
