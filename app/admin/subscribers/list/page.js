import "../../../css/admin-css/app-dark.css";
import "../../../css/admin-css/feather.css";
import "../../../css/admin-css/simplebar.css";
//
import Sidebar from "../../components/sidebar.js";
import Head from "next/head";
import Link from "next/link";

import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Admin Dashboard | Web App Development, CMS & Branding Experts",
  keywords:
    "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};

export default async function Page({ searchParams }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/admin/login");
  }
  const { data: blogTypes, error: blogTypesError } = await supabase
    .from("subscribers")
    .select("*")
    .order("id", { ascending: false });
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="wrapper ">
        <Sidebar />
        {/* Main Sidebar*/}
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="mb-2 page-title" style={{fontWeight:"500"}}>
                  Subscribers <span className="fe fe-chevrons-right fe-16" /> List
                </h2>
                <p className="card-text">Helps, you view all subscribers</p>
                <div className="row my-4">
                  {/* Small table */}
                  <div className="col-md-12">
                        {blogTypesError ? (
                          <div className="alert alert-danger mt-4">
                            Failed to load subscribers.
                          </div>
                        ) : (
                          <div className="card shadow mb-4 mt-4">
                            <div className="card-header">
                              <strong className="card-title text-white">
                                ALL Subscribers
                              </strong>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-dark table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">#ID</th>
                                      <th scope="col">Email</th>
                                      <th scope="col">Created At</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {blogTypes?.map((type) => (
                                      <tr key={type.id}>
                                        <td>{type.id}</td>
                                        <td>{type.email}</td>
                                        <td>
                                          {new Date(
                                            type.created_at
                                          ).toLocaleString()}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* table */}
                  </div>{" "}
                  {/* simple table */}
                </div>{" "}
                {/* end section */}
              </div>{" "}
              {/* .col-12 */}
            </div>{" "}
            {/* .row */}
            <div className="row">
              <div className="col-md-12">
                <p className="mt-5 mb-3 text-muted">
                  © {currentYear}, Developed &amp; Managed by RNDWebTech.
                </p>
              </div>
            </div>{" "}
            {/* end section */}
          </div>{" "}
          {/* .container-
           */}
        </main>
      </div>{" "}
    </>
  );
}
