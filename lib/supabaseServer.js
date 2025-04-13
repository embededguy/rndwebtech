'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const supabaseServer = async () => createServerComponentClient({ cookies: () => cookies() });