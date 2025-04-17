'use server';

import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation';

export async function deleteBlog(id) {
  const supabase = await createClient();
  
  try {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      redirect(`/admin/blog/list?error=${encodeURIComponent(error.message)}`);
    }
    
    redirect('/admin/blog/list?success=true');
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}