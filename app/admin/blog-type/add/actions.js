'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'

export async function addBlogType(formData) {
  const name = formData.get('name')

  const supabase = await createClient();
  const { error } = await supabase
    .from('blog_types')
    .insert({ name })

  if (error) {
    console.error('Insert error:', error)
    redirect('/admin/blog-type/add?success=false')
  }

  redirect('/admin/blog-type/add?success=true')
}