'use server';

import { createClient } from '@/utils/supabase/server';

export async function subscribeToNewsletter(formData) {
  // Check if formData exists
  if (!formData) {
    return { error: "Form data is missing" };
  }

  // Get the email from formData
  const email = formData.get('email');
  
  // Validate email
  if (!email) {
    return { error: "Email is required" };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase
      .from('subscribers')
      .insert({ email });

    if (error) {
      console.error('Supabase error:', error);
      return { error: error.message };
    }

    return { success: 'Thank you for subscribing!' };
  } catch (error) {
    console.error('Subscription error:', error);
    return { error: 'An error occurred. Please try again.' };
  }
}