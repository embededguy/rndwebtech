'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid'

export async function addBlogData(formData) {
  const supabase = await createClient()
  const title = formData.get('blog-title')
  const slug  = formData.get('blog-slug')
  const date = formData.get('date')
  const type = formData.get('blog-type')
  const tags = formData.getAll('tags') // multiple tags
  const imageFile = formData.get('image')
  const content = formData.get('content')
  console.log(supabase.storage)

    if (!title || !type || !content) {
      return { success: false, message: 'Missing fields' }
    }

    const tagsCommaSeparated = tags.join(',') // <== Convert tags to string

    let imageUrl = null

    if (imageFile && imageFile.size > 0) {
      const fileExt = imageFile.name.split('.').pop()
      const fileName = `${uuidv4()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, imageFile)

      if (uploadError) {
        return { success: false, message: `Image upload failed: ${uploadError.message}` }
      }

      const { data } = supabase.storage.from('images').getPublicUrl(fileName)
      imageUrl = data.publicUrl
    }

    const { error } = await supabase.from('blogs').insert([
      {
        title,
        slug,
        content,
        imagepath: imageUrl,
        tags: tagsCommaSeparated, // <== store as comma-separated
        blog_type_id:type
      },
    ])

    if (error) {
      redirect(`/admin/blog/add?error=${encodeURIComponent(error.message)}`);
    }

  redirect('/admin/blog/add?success=true');
}