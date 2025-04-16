import '../../../css/admin-css/app-dark.css';
import '../../../css/admin-css/feather.css';
import '../../../css/admin-css/simplebar.css';

// Components
import Sidebar from '../../components/sidebar.js';
import ImageUploader from '../../components/ImageUploader.js';
import QuillBasic from '../../components/QuillEditor.js';
import TagInput from '../../components/TagInput.js';
import Head from "next/head";
import Link from 'next/link';

// Utils
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';


import { addBlogData } from './actions';


export const metadata = {
  title: "Admin Dashboard | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};

export default async function Page({ searchParams }) {
  const searchParamsx = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  // Redirect if not authenticated
  if (error || !data?.user) {    
    redirect('/admin/login');
  }

  // Fetch blog types
  const { data: blogTypes, error: blogTypesError } = await supabase
    .from('blog_types')
    .select('*')
    .order('id', { ascending: false });

  const currentYear = new Date().getFullYear();
  const success = searchParamsx?.success
  const errorMsg = searchParamsx?.error
  return (
    <>
      <Sidebar />
      <div className="wrapper">
        
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                {/* Page Header */}
                <div className="mb-4">
                  <h2 className="page-title" style={{ fontWeight: "500" }}>
                    Blog <span className="fe fe-chevrons-right fe-16" /> Add
                  </h2>
                  <p className="lead text-muted">Helps you add a new blog</p>
                </div>

                {/* Main Form Card */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card shadow mb-4">
                      <div className="card-header">
                        <strong className="card-title text-white" style={{fontWeight:"500"}}>CREATE BLOG</strong>
                      </div>
                      {success && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{textAlign:"center"}}>
                          Blog added successfully!
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{padding:"1rem 1rem"}}></button>
                        </div>
                      )}
                      {errorMsg && (
                        <div className="alert alert-danger">
                          {decodeURIComponent(errorMsg)}
                        </div>
                      )}
                      
                      <form
                        action={addBlogData}
                      >
                        <div className="card-body">
                          {/* Title, URL & Date Section */}
                          <div className="form-row mb-4">
                            <div className="col-md-4">
                              <label htmlFor="blog-title" className="text-white">Blog Title</label>
                              <input
                                type="text"
                                id="blog-title"
                                className="form-control"
                                name="blog-title"
                                placeholder="New Blog Title"
                                required
                              />
                            </div>
                            
                            <div className="form-group col-md-6">
                              <label htmlFor="basic-slug" className="text-white">Your URL</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    https://rndwebtech.com/blog/
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="blog-slug"
                                  className="form-control"
                                  id="basic-slug"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div className="col-md-2">
                              <label htmlFor="date-input1" className="text-white">Publish Date</label>
                              <input
                                name="date"
                                type="date"
                                className="form-control"
                                id="date-input1"
                                required
                              />
                            </div>
                          </div>

                          {/* Blog Type & Tags Section */}
                          <div className="form-row mb-4">
                            <div className="col-md-3">
                              <label htmlFor="blog-type" className="text-white">Blog Type</label>
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
                            
                            <div className="form-group col-md-4">
                              <label htmlFor="multi-select2" className="text-white">
                                Enter Tags (multiple)
                              </label>
                              <TagInput />
                            </div>
                          </div>

                          {/* Image Uploader */}
                          <div className="form-group mb-4">
                            <ImageUploader />
                          </div>

                          {/* Editor Section */}
                          <div className="row mb-4 mt-2">
                            <div className="col-md-12">
                                  <h5 className="card-title text-white" style={{fontWeight:"500"}}> # Your Editor</h5>
                                  <p className="text-white">Write your creative content here.</p>
                                  <QuillBasic />
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="form-row">
                            <div className="col-md-12">
                              <button type="submit" className="btn btn-primary">
                                Submit Blog
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="row">
                  <div className="col-md-12">
                    <p className="mt-5 mb-3 text-muted">
                      © {currentYear}, Developed &amp; Managed by{' '}
                      <a href="https://rndwebtech.com" target="_blank" rel="noopener noreferrer">
                        RNDWebTech
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}