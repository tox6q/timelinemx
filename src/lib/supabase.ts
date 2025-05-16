import { createClient } from '@supabase/supabase-js';

// These environment variables are set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for our database tables
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string | null;
  images: string[] | null;
  created_at: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  created_at: string;
};

export type Contact = {
  id: string;
  instagram: string | null;
  phone: string | null;
  created_at: string;
};
