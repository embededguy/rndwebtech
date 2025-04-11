import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Sidebar from "../components/sidebar.js";
import Link from 'next/link'

import Head from "next/head";

export const metadata = {
  title: "SEO Services | Web App Development, CMS & Branding Experts",
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
              SEO Services
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
                <li className="breadcrumb-item active">SEO Services</li>
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
                    src="/assets/images/services/seo1.jpg"
                    alt="featured image"
                  />
                </div>
                <div className="service-content">
                  <div className="part">
                    <h2 className="service-title">
                      Branding & Creative Design Services We Offer
                    </h2>
                    <p className="service-text">
                      At <strong>RNDwebtech</strong>, we specialize in crafting powerful brand identities that captivate, inspire, and build lasting relationships. 
                      Our expert creative team offers end-to-end <strong>branding solutions</strong>—from professional <strong>logo design</strong> and comprehensive 
                      <strong>brand strategy development</strong> to visual storytelling that aligns with your mission and values. 
                      We ensure that every design element reflects your unique brand personality, making you stand out in a crowded digital marketplace and fostering deeper customer connections.
                    </p>

                    <div className="part">
                      <div className="two-cols-img">
                        <div className="row">
                         
                          <div className="col-12 col-md-6 mb-3">
                            <div className="img-col">
                              <img
                                className="img-fluid"
                                src="/assets/images/services/seo3.jpg"
                                alt="Seo 2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="service-text">
                      Whether you're building a new brand from the ground up or revitalizing an existing one, 
                      RNDwebtech delivers <strong>custom branding services</strong> that combine creativity, innovation, and strategic thinking. 
                      Our creative design solutions are not just visually stunning—they are strategically developed to resonate with your target audience, 
                      drive engagement, and build brand loyalty. With a focus on <strong>consistency</strong>, <strong>authenticity</strong>, and <strong>growth-driven design</strong>, 
                      we help businesses achieve greater brand recognition, expand their market reach, and create a lasting impact in their industry.
                    </p>
                  </div>

                  <div className="part">
  <div className="info-items-list">
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="info-item">
          <span className="info-number">01.</span>
          <div className="info-content">
            <h5 className="info-title">
              Tailored E-commerce Storefront Design
            </h5>
            <p className="info-text" style={{ fontSize: "13px" }}>
              At <strong>RNDwebtech</strong>, we design visually stunning and conversion-optimized 
              <strong>e-commerce storefronts</strong> using industry-leading tools like <strong>Figma</strong>, 
              <strong>Adobe XD</strong>, and <strong>Photoshop</strong>. Our custom storefronts not only reflect 
              your brand identity but are also engineered for performance, delivering a seamless, intuitive 
              shopping experience that enhances customer engagement and drives repeat sales.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="info-item">
          <span className="info-number">02.</span>
          <div className="info-content">
            <h5 className="info-title">
              SEO-Focused Design and Optimization
            </h5>
            <p className="info-text" style={{ fontSize: "13px" }}>
              Our e-commerce solutions are built with <strong>SEO best practices</strong> at their core. 
              We optimize every aspect of your online store—from <strong>site structure</strong> and 
              <strong>URL hierarchy</strong> to <strong>meta tags</strong> and <strong>mobile responsiveness</strong>. 
              This ensures your store not only looks great but also ranks higher in search engines, driving 
              organic traffic and boosting online visibility for sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


                  <div className="part">
  <h2 className="service-title">Most Asked Questions</h2>
  <div className="faq">
    {/* Start Accordion List For FAQ */}
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
              What is SEO and why is it important for my business?
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
              SEO, or Search Engine Optimization, is the process of improving your website's visibility on search engines like Google. 
              A higher ranking helps attract more organic traffic, increase brand credibility, and ultimately grow your business. 
              In today's digital landscape, SEO is essential for staying competitive online.
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
              How long does it take to see SEO results?
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
              SEO is a long-term strategy. Typically, you can start seeing noticeable improvements within 3 to 6 months, depending 
              on factors like website age, competition, and your industry's competitiveness. Consistent efforts are key for sustainable results.
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
              Do you guarantee #1 ranking on Google?
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
              No ethical SEO company can guarantee a #1 ranking because search engine algorithms are complex and constantly changing. 
              However, we guarantee implementing the best strategies and practices that maximize your chances of achieving top rankings 
              over time.
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
              What SEO services do you provide?
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
              Our SEO services include keyword research, on-page SEO, technical SEO, link building, local SEO, 
              content optimization, website audits, and performance tracking. We offer customized strategies based on your 
              unique business needs and goals.
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
              We track SEO success through metrics like keyword rankings, organic traffic growth, bounce rate reduction, 
              conversion rate improvement, and ROI. Monthly reports and transparent analytics are provided so you can 
              clearly see your campaign’s progress.
            </p>
          </div>
        </div>
      </div>

    </div>
    {/* End Accordion List For FAQ */}
  </div>
</div>
                </div>
              </div>
            </div>
            {/*Start service content*/}
            <Sidebar activePage="seo-services" />
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
