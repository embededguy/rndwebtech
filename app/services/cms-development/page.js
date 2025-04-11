import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Sidebar from "../components/sidebar.js";
import Link from "next/link";

import Head from "next/head";

export const metadata = {
  title: "CMS Development | Web App Development, CMS & Branding Experts",
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
              CMS Development
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </a>
                </li>
                <li className="breadcrumb-item active">services </li>
                <li className="breadcrumb-item active">CMS Development</li>
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
                    src="/assets/images/services/cms1.jpg"
                    alt="featured image"
                  />
                </div>
                <div className="service-content">
                  <div className="part">
                    <h2 className="service-title">
                      CMS Development Services We Offer
                    </h2>
                    <p className="service-text">
                      RNDwebtech creates powerful, user-friendly CMS solutions
                      that give you full control over your website content. We
                      build flexible, scalable systems tailored to your business
                      needs and future growth.
                    </p>
                    <p className="service-text">
                      Whether it’s WordPress, Shopify, custom CMS, or
                      enterprise-level platforms, we deliver intuitive
                      interfaces and robust performance, making content
                      management simple and efficient for your team.
                    </p>
                  </div>
                  <div className="part">
                    <div className="two-cols-img">
                      <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                          <div className="img-col">
                            <img
                              className="img-fluid"
                              src="/assets/images/services/cms2.jpg"
                              alt="Logo and Branding Design Service"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mb-3">
                          <div className="img-col">
                            <img
                              className="img-fluid"
                              src="/assets/images/services/branding3.webp"
                              alt="Creative Design Team at Work using Adobe Illustrator and Figma"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="part">
                    <div className="info-items-list">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <div className="info-item">
                            <span className="info-number">01.</span>
                            <div className="info-content">
                              <h5 className="info-title">
                                Custom CMS Solutions
                              </h5>
                              <p
                                className="info-text"
                                style={{ fontSize: "12px" }}
                              >
                                We specialize in developing fully customized{" "}
                                <strong>CMS platforms</strong> using{" "}
                                <strong>WordPress</strong>,{" "}
                                <strong>Drupal</strong>, and{" "}
                                <strong>Joomla</strong>, tailored to your unique
                                business needs. Our CMS solutions offer easy
                                content management, scalability, and seamless
                                performance.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="info-item">
                            <span className="info-number">02.</span>
                            <div className="info-content">
                              <h5 className="info-title">
                                User-Friendly Interface Design
                              </h5>
                              <p
                                className="info-text"
                                style={{ fontSize: "12px" }}
                              >
                                We focus on creating intuitive and responsive{" "}
                                <strong>CMS interfaces</strong> that make it
                                simple for you to manage pages, blogs, media,
                                and more — without requiring any technical
                                expertise. Our designs prioritize both
                                functionality and user experience.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="info-item">
                            <span className="info-number">03.</span>
                            <div className="info-content">
                              <h5 className="info-title">
                                CMS Integration & Extensions
                              </h5>
                              <p
                                className="info-text"
                                style={{ fontSize: "12px" }}
                              >
                                Extend your CMS capabilities with custom
                                plugins, modules, and third-party integrations.
                                Whether you need{" "}
                                <strong>e-commerce features</strong>,{" "}
                                <strong>SEO tools</strong>, or{" "}
                                <strong>analytics dashboards</strong>, we ensure
                                seamless functionality.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="info-item">
                            <span className="info-number">04.</span>
                            <div className="info-content">
                              <h5 className="info-title">
                                Ongoing CMS Maintenance & Support
                              </h5>
                              <p
                                className="info-text"
                                style={{ fontSize: "12px" }}
                              >
                                Our team provides reliable{" "}
                                <strong>CMS maintenance</strong> services,
                                including updates, security patches, and
                                performance optimization, ensuring your website
                                stays fast, secure, and up-to-date at all times.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="part">
                    <h2 className="service-title">
                      Frequently Asked Questions (FAQ)
                    </h2>
                    <div className="faq">
                      <div className="faq-accordion" id="accordion">
                        <div className="card mb-2">
                          <div className="card-header" id="heading-1">
                            <h5 className="mb-0 faq-title">
                              <button
                                className="btn btn-link faq-btn collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse-1"
                                aria-expanded="false"
                                aria-controls="collapse-1"
                              >
                                What is a CMS and why do I need one for my
                                website?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse-1"
                            className="collapse"
                            aria-labelledby="heading-1"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="faq-answer">
                                A Content Management System (CMS) allows you to
                                easily create, manage, and update website
                                content without needing technical knowledge. At
                                RNDwebtech, we build CMS solutions that give you
                                full control over your website, saving time,
                                improving flexibility, and enhancing overall
                                digital growth.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="card mb-2">
                          <div className="card-header" id="heading-2">
                            <h5 className="mb-0 faq-title">
                              <button
                                className="btn btn-link faq-btn collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse-2"
                                aria-expanded="false"
                                aria-controls="collapse-2"
                              >
                                Which CMS platforms do you work with?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse-2"
                            className="collapse"
                            aria-labelledby="heading-2"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="faq-answer">
                                We specialize in developing websites using
                                popular CMS platforms such as
                                <strong>WordPress</strong>,{" "}
                                <strong>Drupal</strong>, <strong>Joomla</strong>
                                , and custom-built CMS solutions tailored to
                                your specific business needs.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="card mb-2">
                          <div className="card-header" id="heading-3">
                            <h5 className="mb-0 faq-title">
                              <button
                                className="btn btn-link faq-btn collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse-3"
                                aria-expanded="false"
                                aria-controls="collapse-3"
                              >
                                Can you create a custom CMS from scratch?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse-3"
                            className="collapse"
                            aria-labelledby="heading-3"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="faq-answer">
                                Absolutely! At RNDwebtech, we offer custom CMS
                                development services that are fully tailored to
                                your unique requirements. Whether you need a
                                lightweight solution or a complex
                                enterprise-level CMS, we can build a system that
                                is scalable, secure, and easy to manage.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="card mb-2">
                          <div className="card-header" id="heading-4">
                            <h5 className="mb-0 faq-title">
                              <button
                                className="btn btn-link faq-btn collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse-4"
                                aria-expanded="false"
                                aria-controls="collapse-4"
                              >
                                How secure are your CMS solutions?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse-4"
                            className="collapse"
                            aria-labelledby="heading-4"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="faq-answer">
                                Security is our top priority. We implement best
                                practices like regular updates, SSL encryption,
                                secure admin access, and advanced firewalls to
                                ensure that your CMS website remains protected
                                against vulnerabilities and cyber threats.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="card mb-2">
                          <div className="card-header" id="heading-5">
                            <h5 className="mb-0 faq-title">
                              <button
                                className="btn btn-link faq-btn collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse-5"
                                aria-expanded="false"
                                aria-controls="collapse-5"
                              >
                                Will I receive training to manage my CMS
                                website?
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapse-5"
                            className="collapse"
                            aria-labelledby="heading-5"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="faq-answer">
                                Yes! We provide comprehensive CMS training
                                sessions and user manuals to help you easily
                                manage and update your website content. Our team
                                ensures you are fully confident in using your
                                new CMS platform without any technical
                                difficulties.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Start service content*/}
            <Sidebar activePage="cms-development" />
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
