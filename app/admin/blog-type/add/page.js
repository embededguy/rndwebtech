import '../../../css/admin-css/app-dark.css';
import '../../../css/admin-css/feather.css';
import '../../../css/admin-css/simplebar.css';
// 
import Sidebar from '../../components/sidebar.js';
import Head from "next/head";
import Link from 'next/link'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server'

import { addBlogType } from './actions'

export const metadata = {
  title: "Admin Dashboard | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};

export default async function Page({ searchParams }) {

  const supabase = await createClient()  
  const { data, error } = await supabase.auth.getUser()  

  if (error || !data?.user) {    
    redirect('/admin/login')
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Sidebar/>
      <div className="wrapper ">
    {/* Main Sidebar*/}
    <main role="main" className="main-content">
      <div className="container-fluid">
        {searchParams?.success === 'true' && (
  <div className="alert alert-success alert-dismissible fade show" role="alert" style={{textAlign:"center"}}>
    Blog Type added successfully!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{padding:"1rem 1rem"}}></button>
  </div>
)}

{searchParams?.success === 'false' && (
  <div className="alert alert-danger" role="alert">
    Failed to add Blog Type. Please try again.
  </div>
)}
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="page-title" style={{fontWeight:"500"}}>
              Blog Type <span className="fe fe-chevrons-right fe-16" /> Add
            </h2>
            <p className="lead text-muted">Helps you add a new blog type.</p>
            <div className="row">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  <div className="card-header">
                    <strong className="card-title text-white">ADD NEW BLOG TYPE</strong>
                  </div>
                  
                <div className="card-body">
                  <form
                    id="uploadForm"
                    action={addBlogType}
                  >
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="" style={{color:"white"}}>Blog Type: </label>
                        <input
                          type="hidden"
                          name="csrf_token"
                          
                        />
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id=""
                          placeholder="Blog Type"
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </form>
                </div>
                </div>
               
              </div>
            </div>
          </div>{" "}
          {/* end section */}
        </div>{" "}
        {/* .col-12 */}
      </div>{" "}
      {/* .row */}
      <div className="row">
        <div className="col-md-12">
          <p className="mt-5 mb-3 text-muted">
                © {currentYear}, Developed & Managed by <a href="https://rndwebtech.com">RNDWebTech</a>.
              </p>
        </div>
      </div>{" "}
      {/* end section */}
    </main>
  </div>{" "}
    </>
  );
}