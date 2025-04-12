import '../../css/admin-css/app-dark.css';

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
      <div className="wrapper vh-100">
        <div className="row align-items-center h-100">
          <form
            className="col-lg-3 col-md-4 col-10 mx-auto text-center"
            method="POST"
            action="./controller/process_login.php"
          >
            <a
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="/"
            >
              <img src="/rnd.svg" width="80%" style={{maxWidth:"250px"}}/>
            </a>
            <br />
            <br />
            <br />
            <h1 className="h4 mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="inputEmail"
                className="form-control form-control-lg"
                placeholder="Email address"
                required=""
                autofocus=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                className="form-control form-control-lg"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Stay logged in{" "}
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-muted">
              © 2025, Developed &amp; Managed by RNDWebTech.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}