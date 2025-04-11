import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Sidebar from "../components/sidebar.js";
import Link from 'next/link'

import Head from "next/head";

export const metadata = {
  title: "Website Maintenance | Web App Development, CMS & Branding Experts",
  keywords:
    "Explore Services at RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      <Header activePage="services" />
      {/* Start inner Page hero*/}
      <section
        className="d-flex align-items-center page-hero  inner-page-hero "
        id="page-hero"
      >
        <div
          className="overlay-photo-image-bg parallax"
          data-bg-img="assets/images/hero/inner-page-hero.jpg"
          data-bg-opacity={1}
          style={{
            backgroundImage: "url('/assets/images/hero/inner-page-hero.jpg')",
          }}
        />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
              Website Maintenance
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </Link>
                </li>
                <li className="breadcrumb-item active">services </li>
                <li className="breadcrumb-item active">Webiste Maintenance</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* End inner Page hero*/}
      {/* Start inner Page hero*/}
      <div className="service-single ">
        <div className="container">
          <div className="row">
            {/*Start service content*/}
            <div className="col-12 col-xl-8  ">
              <div className="service-content-area">
                <div className="featured-img-area part">
                  <img
                    className="feat-img img-fluid"
                    src="/assets/images/services/service-single-featured-img.jpg"
                    alt="featured image"
                  />
                </div>
                <div className="service-content">
                  <div className="part">
                    <h2 className="service-title">
                      Website Maintenance & Support Services We Offer
                    </h2>
                    <p className="service-text">
                      We ensure your website remains secure, updated, and performing at its best.
                      RNDwebtech offers reliable maintenance services to protect your online
                      presence and keep everything running smoothly.
                    </p>
                    <p className="service-text">
                      From regular updates and backups to performance optimization and
                      troubleshooting, our support team is dedicated to keeping your
                      website healthy, secure, and always ready for visitors.
                    </p>
                  </div>
                  <div className="part">
                    <div className="two-cols-img">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <div className="img-col">
                            <img className="img-fluid" src="assets/images/services/maintenance.jpg" alt="Website Maintenance" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Start service content*/}
            <Sidebar activePage="website-maintenance" />
          </div>
        </div>
      </div>
      {/* End inner Page hero*/}

      <Footer />
      {/* Start loading-screen Component*/}
      <div className="loading-screen" id="loading-screen">
        <span className="bar top-bar" />
        <span className="bar down-bar" />
        <span className="progress-line" />
        <span className="loading-counter"> </span>
      </div>
      {/* End loading-screen Component*/}
      {/* Start back-to-top Button*/}
      <div className="back-to-top" id="back-to-top">
        <i className="bi bi-arrow-up icon " />
      </div>
      {/* End back-to-top Button*/}
    </>
  );
}
