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
                  <a className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </a>
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
                    src="/assets/images/services/maintain1.jpg"
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
                            <img className="img-fluid" src="/assets/images/services/service-single-img-col-2.jpg" alt="Website Maintenance" />
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
              What is SEO and why is it important for my website?
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
              SEO (Search Engine Optimization) is the process of optimizing your website to improve its visibility on search engines like Google. Higher visibility means more traffic, better brand awareness, and increased conversions for your business.
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
              How long does SEO take to show results?
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
              SEO is a long-term strategy. Typically, you can expect to start seeing significant improvements in organic rankings and traffic within 3 to 6 months, depending on your industry, competition, and the quality of SEO work performed.
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
              What SEO services do you offer at RNDwebtech?
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
              At RNDwebtech, we offer comprehensive SEO services including keyword research, on-page SEO, technical SEO audits, link building, content optimization, local SEO, and ongoing SEO management to help you achieve top rankings.
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
              Do you guarantee first-page rankings on Google?
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
              No honest SEO agency can guarantee first-page rankings, as Google’s algorithms are constantly changing. However, our proven strategies, ethical practices, and expertise significantly boost your chances of achieving top rankings and sustained growth.
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
              How do you measure SEO success?
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
              We track SEO success using key metrics such as organic traffic growth, keyword ranking improvements, bounce rate, domain authority, conversion rates, and ROI. We provide detailed monthly reports so you can see the tangible progress.
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
