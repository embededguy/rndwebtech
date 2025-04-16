import '../../../css/admin-css/app-dark.css';
import '../../../css/admin-css/feather.css';
import '../../../css/admin-css/simplebar.css';
// 
import Sidebar from '../../components/sidebar.js';
import ImageUploader from '../../components/ImageUploader.js';
import QuillBasic from '../../components/QuillEditor.js';

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

export default async function Page({children, searchParams}) {

  const supabase = await createClient()  
  const { data, error } = await supabase.auth.getUser()  

  if (error || !data?.user) {    
    redirect('/admin/login')
  }

const { data: blogTypes, error: blogTypesError } = await supabase
  .from('blog_types')
  .select('*')
  .order('id', { ascending: false })

  const currentYear = new Date().getFullYear();
    const previewUrl = searchParams.previewUrl;
  return (
    <>
      <div className="wrapper ">
      <Sidebar/>
        <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="page-title" style={{fontWeight:"500"}}>
            Blog <span className="fe fe-chevrons-right fe-16" /> Add
          </h2>
          <p className="lead text-muted">Helps, you add a new blog</p>
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow mb-4">
                <div className="card-header">
                  <strong className="card-title" style={{color:"white"}}>CREATE BLOG</strong>
                </div>
                <form
                  action="./controller/process_add_blog.php"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="card-body">
                    <div className="form-row">
                      <div className="col-md-4">
                        <label htmlFor="blog-title" style={{color:"white"}}>Blog Title</label>
                        <input
                          type="text"
                          id="blog-title"
                          className="form-control"
                          name="blog-title"
                          defaultValue=""
                          placeholder="New Blog Title"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="basic-slug" style={{color:"white"}}>Your URL</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon3"
                            >
                              https://rndwebtech.com/blog/
                            </span>
                          </div>
                          <input
                            type="text"
                            name="blog-slug"
                            className="form-control"
                            id="basic-slug"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="date-input1" style={{color:"white"}}>Date of publish</label>
                        <div className="input-group">
                          <input
                            name="date"
                            type="date"
                            className="form-control drgpicker"
                            id="date-input1"
                            defaultValue=""
                            aria-describedby="button-addon2"
                            required=""
                          />
                          
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-3">
                        <label htmlFor="blog-type" style={{color:"white"}}>Blog Type</label>
                        <select
                          className="form-control"
                          name="blog-type"
                          id="lettertype"
                          required
                        >
                          <option value="">-- Select Blog Type --</option>
                          {blogTypes?.map((type) => (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          ))}
                        </select>

                      </div>
                      
                      <div className="form-group col-md-6">
                        <label htmlFor="multi-select2" style={{color:"white"}}>
                          Enter Tags (multiple)
                        </label>

                      </div>
                      
                      
                      <ImageUploader/>
                         


                      <div className="form-group col-md-12 mt-4">
                        <div className="col-md-12">
                          
                        </div>
                        <div className="row justify-content-center">
                          <div id="imageSection" className="col-md-8" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row mb-4">
                      <div className="col-md-12">
                        <div className="card shadow">
                          <h5 className="card-title " style={{color:"white"}}>Your Editor</h5>
                          <p style={{color:"white"}}> Write your creative content here.</p>
                          {/* Create the editor container */}
                          <QuillBasic/>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end section */}
                    <div className="form-row">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary mb-2">
                          Submit
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* end section */}
          <div className="row"></div> {/* end section */}
          <div className="row">
            <div className="col-md-12">
              <p className="mt-5 mb-3 text-muted">
                © {currentYear}, Developed &amp; Managed by RNDWebTech.
              </p>
            </div>
          </div>{" "}
          {/* end section */}
        </div>{" "}
        {/* .col-12 */}
      </div>{" "}
      {/* .row */}
    </div>{" "}
    {/* .container-fluid */}
  </main>{" "}
  {/* main */}
      </div>{" "}
    </>
  );
}