import { supabase } from './supabaseClient';
import { cookies } from 'next/headers';

export async function getSession() {
  const cookieStore = cookies();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const session = await getSession();
  return session?.user ?? null;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}