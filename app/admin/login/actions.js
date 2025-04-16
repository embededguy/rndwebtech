'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'

export async function login(formData) {
  const supabase = await createClient();

  // Type-casting for convenience.
  // In production, you should validate your inputs.
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/admin', 'layout');
  redirect('/admin');
}

export async function addBlogType(formData) {
  const name = formData.get('name')

  const supabase = await createClient();


  const { error } = await supabase
    .from('blog_types')
    .insert({ name })

  if (error) {
    console.error('Insert error:', error)
    return { success: false }
  }

  return { success: true }
}
