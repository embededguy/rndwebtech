import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Sidebar from "../components/sidebar.js";
import Link from "next/link";

import Head from "next/head";

export const metadata = {
  title: "Branding Design | Web App Development, CMS & Branding Experts",
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
              Branding Design
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="/">
                    <i className="bi bi-house icon " />
                    home
                  </a>
                </li>
                <li className="breadcrumb-item active">services </li>
                <li className="breadcrumb-item active">Branding Design</li>
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
                    src="/assets/images/services/branding1.webp"
                    alt="featured image"
                  />
                </div>
                <div className="service-content">
                  <div className="part">
                    <h2 className="service-title">
                      Professional Branding & Creative Design Services at
                      RNDwebtech
                    </h2>
                    <p className="service-text">
                      At <strong>RNDwebtech</strong>, we believe that strong
                      branding is the foundation of any successful business. Our
                      dedicated creative team specializes in delivering
                      comprehensive
                      <strong>branding solutions</strong> that elevate your
                      company's image, connect emotionally with your audience,
                      and create lasting impressions across all platforms.
                    </p>
                    <p className="service-text">
                      From crafting unique <strong>logo designs</strong> to
                      building complete
                      <strong>brand identity systems</strong>, we ensure that
                      every element — color schemes, typography, messaging, and
                      visual assets — reflects your core values and vision. Our
                      approach blends strategy, creativity, and technology to
                      design memorable brands that thrive in competitive
                      industries.
                    </p>
                    <div className="part">
                      <div className="two-cols-img">
                        <div className="row">
                          <div className="col-12 col-md-6 mb-3">
                            <div className="img-col">
                              <img
                                className="img-fluid"
                                src="/assets/images/services/branding2.webp"
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
                    <p className="service-text">
                      We use advanced tools like{" "}
                      <strong>Adobe Illustrator</strong>,{" "}
                      <strong>Photoshop</strong>,<strong>Figma</strong>, and{" "}
                      <strong>Canva Pro</strong> to deliver polished,
                      professional outcomes. Whether you are starting from
                      scratch, rebranding, or expanding your brand story, we
                      provide services including
                      <strong>brand strategy consulting</strong>,{" "}
                      <strong>visual identity development</strong>,
                      <strong>corporate branding</strong>, and{" "}
                      <strong>digital brand assets</strong> optimized for web,
                      print, and social media.
                    </p>
                    <p className="service-text">
                      Our proven process starts with deep research and discovery
                      to understand your target market and competitors. We then
                      create mood boards, conceptual sketches, and style guides
                      that lead to a cohesive brand language. Throughout the
                      project, we collaborate closely with you to ensure
                      authenticity and alignment with your business goals.
                    </p>
                    <p className="service-text">
                      At RNDwebtech, branding isn't just about beautiful visuals
                      — it's about creating a powerful emotional connection that
                      builds trust and loyalty with your customers. Partner with
                      us to tell your brand story, differentiate your business,
                      and leave a lasting impact in the digital world.
                    </p>
                  </div>
                </div>

                <div className="part">
                  <div className="info-items-list">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="info-item">
                          <span className="info-number">01.</span>
                          <div className="info-content">
                            <h5 className="info-title">Modern Design Technologies</h5>
                            <p className="info-text" style={{fontSize:"12px"}}>
                              We use the latest design tools like <strong>Figma</strong>, <strong>Adobe Illustrator</strong>, and <strong>Photoshop</strong> 
                              to craft visually striking brand identities that look stunning across digital and print platforms.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="info-item">
                          <span className="info-number">02.</span>
                          <div className="info-content">
                            <h5 className="info-title">Unique Brand Strategies</h5>
                            <p className="info-text" style={{fontSize:"12px"}}>
                              Our creative experts design customized branding strategies that capture your vision, 
                              resonate with your audience, and help you stand out in a competitive marketplace.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="info-item">
                          <span className="info-number">03.</span>
                          <div className="info-content">
                            <h5 className="info-title">Consistency Across Platforms</h5>
                            <p className="info-text" style={{fontSize:"12px"}}>
                              From websites to social media to printed materials, we ensure your brand remains consistent, 
                              professional, and powerful everywhere your audience interacts with you.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="info-item">
                          <span className="info-number">04.</span>
                          <div className="info-content">
                            <h5 className="info-title">Creative Visual Storytelling</h5>
                            <p className="info-text" style={{fontSize:"12px"}}>
                              Through powerful visuals, illustrations, and design systems, we tell your brand’s story in 
                              a way that is authentic, engaging, and unforgettable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*FAQ*/}
                <div className="part">
  <h2 className="service-title">Most Asked Questions About Our Branding & Design Services</h2>
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
              Are your branding services beginner-friendly for startups?
            </button>
          </h5>
        </div>
        <div
          className="collapse"
          id="collapse-1"
          aria-labelledby="collapse-1"
          data-bs-parent="#accordion"
        >
          <div className="card-body">
            <p className="faq-answer">
              Absolutely! We specialize in working with startups and small businesses. 
              Our team guides you through every step — from logo creation and color palette 
              selection to brand voice development. Whether you're building your brand from 
              scratch or need a refresh, our process is simple, collaborative, and tailored to your goals.
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
              Will I receive ongoing support or future design updates?
            </button>
          </h5>
        </div>
        <div
          className="collapse"
          id="collapse-2"
          aria-labelledby="collapse-2"
          data-bs-parent="#accordion"
        >
          <div className="card-body">
            <p className="faq-answer">
              Yes, we offer ongoing design and branding support even after your project is delivered. 
              Whether you need design tweaks, social media templates, or new brand assets, 
              we provide flexible update packages to keep your brand fresh and evolving with the market.
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
              How long does a full branding project take?
            </button>
          </h5>
        </div>
        <div
          className="collapse"
          id="collapse-3"
          aria-labelledby="collapse-3"
          data-bs-parent="#accordion"
        >
          <div className="card-body">
            <p className="faq-answer">
              A complete branding project typically takes between 2 to 4 weeks, depending on the 
              scope and number of deliverables. We work efficiently while ensuring creativity, 
              feedback loops, and revisions are built into the timeline to deliver the best result.
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
              What tools and technologies do you use for design?
            </button>
          </h5>
        </div>
        <div
          className="collapse"
          id="collapse-4"
          aria-labelledby="collapse-4"
          data-bs-parent="#accordion"
        >
          <div className="card-body">
            <p className="faq-answer">
              Our creative team uses industry-leading tools like <strong>Adobe Illustrator</strong>, <strong>Photoshop</strong>, 
              <strong>Figma</strong>, <strong>Canva Pro</strong>, and <strong>InDesign</strong>. 
              For brand presentations and mockups, we also leverage tools like <strong>Adobe XD</strong> and <strong>Sketch</strong> 
              depending on the project needs.
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
              Can you redesign an existing brand?
            </button>
          </h5>
        </div>
        <div
          className="collapse"
          id="collapse-5"
          aria-labelledby="collapse-5"
          data-bs-parent="#accordion"
        >
          <div className="card-body">
            <p className="faq-answer">
              Yes! We offer brand refresh and rebranding services that modernize your 
              existing identity while maintaining the essence of your business. 
              Whether it's updating your logo, typography, or brand colors, 
              we ensure the new design reflects your growth and vision.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


              </div>
            </div>
            {/*Start service content*/}
            <Sidebar activePage="branding-design" />
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
