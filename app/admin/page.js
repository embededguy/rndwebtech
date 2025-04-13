import '../css/admin-css/app-dark.css';
import '../css/admin-css/feather.css';
import '../css/admin-css/simplebar.css';

import Sidebar from './components/sidebar.js';
import Head from "next/head";
import Link from 'next/link'

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { supabaseServer } from '@/lib/supabaseServer';


export const metadata = {
  title: "Admin Dashboard | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};

export default async function Page({children}) {
  const supabase = await supabaseServer();

  const { data } = await supabase.auth.getSession();

  console.log(data)

  if (!data) {
    redirect('/admin/login');
  }

  return (
    <>
      <Sidebar/>
      {children}
    </>
  );
}