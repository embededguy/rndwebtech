import '../css/admin-css/app-dark.css';
import '../css/admin-css/feather.css';
import '../css/admin-css/simplebar.css';

import Sidebar from './components/sidebar.js';
import Head from "next/head";
import Link from 'next/link'

import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabaseServer';

import { createClient } from '@/utils/supabase/server'

export const metadata = {
  title: "Admin Dashboard | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};

export default async function Page({children}) {

  const supabase = await createClient()  
  const { data, error } = await supabase.auth.getUser()  

  if (error || !data?.user) {    
    redirect('/admin/login')  
  }

  const { count, error2 } = await supabase.from('blogs').select('*', { count: 'exact', head: true }) // head:true avoids fetching data
  const { blogTypeCount, error3 } = await supabase.from('blog_types').select('*', { count: 'exact', head: true }) // head:true avoids fetching data

  console.log(count)

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Sidebar/>
      <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row align-items-center mb-2">
            <div className="col">
              <h2 className="h5 page-title" style={{fontWeight:"500"}}>
                Welcome, {data.user.email}!
              </h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <h2 className="mb-2 page-title" style={{fontWeight:"500"}}>
                <span className="fe fe-chevrons-right fe-16" /> Admin Dashboard
              </h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-0" style={{fontWeight:"500"}}>
                        {0}
                      </span>
                      <p className="small text-muted mb-0">Admins</p>
                      <span className="badge badge-pill badge-primary">
                        <span
                          className="fe fe-16 fe-bar-chart text-muted mb-0"
                          style={{ color: "black !important" }}
                        />
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-32 fe-users text-muted mb-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-4" style={{fontWeight:"500"}}>
                        {count}
                      </span>
                      <p className="small text-muted mb-0">Total Blog</p>
                      <span className="badge badge-pill badge-primary">
                        <span
                          className="fe fe-16 fe-bar-chart-2 text-muted mb-0"
                          style={{ color: "black !important" }}
                        />
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-32 fe-shopping-bag text-muted mb-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <span className="h2 mb-4"  style={{fontWeight:"500"}}>
                        {0}
                      </span>
                      <p className="small text-muted mb-0">Total Blog Type</p>
                      <span className="badge badge-pill badge-primary">
                        <span
                          className="fe fe-16 fe-bar-chart-2 text-muted mb-0"
                          style={{ color: "black !important" }}
                        />
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="fe fe-32 fe-shopping-bag text-muted mb-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end section */}
          
          
          {/* end section */}
          <div className="row">
            <div className="col-md-12">
              <p className="mt-5 mb-3 text-muted">
                © {currentYear}, Developed & Managed by RNDWebTech.
              </p>
            </div>
          </div>{" "}
          {/* end section */}
          <br />
        </div>{" "}
        {/* .col-12 */}
      </div>{" "}
      {/* .row */}
    </div>{" "}
    {/* .container-fluid */}
  </main>{" "}
      {children}
    </>
  );
}