import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Sidebar from "../components/sidebar.js";
import Link from 'next/link'
import Head from "next/head";

export const metadata = {
  title: "Web Development | Web App Development, CMS & Branding Experts",
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
              Web Development
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
                <li className="breadcrumb-item active">Web Development</li>
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
                      Web Application Development Services We Offer
                    </h2>
                    <p className="service-text">
                      At RNDwebtech, we specialize in building custom web applications tailored
                      to your business needs. Our team crafts responsive, secure, and scalable
                      solutions that enhance user experience and drive business efficiency.
                    </p>
                    <p className="service-text">
                      From startups to enterprises, we deliver modern web technologies that
                      ensure performance, flexibility, and growth. We transform ideas into
                      fully-functional digital products with innovation at every step.
                    </p>
                  </div>
                  <div className="part">
                    <div className="two-cols-img">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <div className="img-col">
                            <img className="img-fluid" src="assets/images/services/web-dev.jpg" alt="Web Development" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Start service content*/}
            <Sidebar activePage="web-development" />
          </div>
        </div>
      </div>
      {/* End inner Page hero*/}

      <Footer />
      {/* Start loading-screen Component*/}
      <div className="loading-screen" id="loading-screen">
        <span className="bar top-bar"> </span>
        <span className="bar down-bar"> </span>
        <span className="progress-line" > </span>
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
