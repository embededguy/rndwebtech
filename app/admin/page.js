import '../css/admin-css/app-dark.css';
import '../css/admin-css/feather.css';
import '../css/admin-css/simplebar.css';

import Sidebar from './components/sidebar.js';
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "Login | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      <Sidebar/>
    </>
  );
}