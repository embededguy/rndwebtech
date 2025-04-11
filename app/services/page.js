import Footer from "../components/footer.js";
import Header from "../components/header.js";
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "Explore Services | Web App Development, CMS & Branding Experts",
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
          data-bg-img="./assets/images/hero/inner-page-hero.jpg"
          data-bg-opacity={1}
          style={{
            backgroundImage: "url('/assets/images/hero/inner-page-hero.jpg')",
          }}
        />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
              Services{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </Link>
                </li>
                <li className="breadcrumb-item active">services</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* End inner Page hero*/}
      {/* Start  services Section*/}
      <section className="services services-boxed mega-section  " id="services">
        <div className="container">
          <div className="sec-heading  ">
            <div className="content-area">
              <span
                className=" pre-title       wow fadeInUp "
                data-wow-delay=".2s"
              >
                services
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                <span className="hollow-text">services</span> we offer
              </h2>
              <p className="subtitle   wow fadeInUp " data-wow-delay=".6s">
                At RNDwebtech, we provide a full range of IT services — from web
                development to branding — crafted to drive your business forward
                and inspire growth.
              </p>
            </div>
            <div
              className=" cta-area   wow fadeInUp"
              data-wow-delay=".8s"
            ></div>
          </div>
          <div className="row gx-4 gy-4 services-row ">
            <div className="col-12 col-md-6  col-lg-4 mx-auto ">
              {/*Start First service box*/}
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".1s"
              >
                <div className="service-icon">
                  <i className="flaticon-web-development font-icon" />
                </div>
                <span className="service-num hollow-text">1 </span>
                <div className="service-content">
                  <h3 className="service-title">web development</h3>
                  <p className="service-text">
                    Building custom, scalable, and high-performance web
                    applications to meet your business goals with modern
                    technologies and best practices.
                  </p>
                </div>
                <Link className="read-more" href="/services/web-development">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End First service box   */}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto ">
              {/*Start Second service box*/}
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".2s"
              >
                <div className="service-icon">
                  <i className="flaticon-nanotechnology font-icon" />
                </div>
                <span className="service-num hollow-text">2 </span>
                <div className="service-content">
                  <h3 className="service-title">E Commerce Development</h3>
                  <p className="service-text">
                    Designing and developing secure, responsive, and
                    feature-rich e-commerce platforms to help you sell smarter
                    and grow your online store.
                  </p>
                </div>
                <Link className="read-more" href="/services/ecommerce-development">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End Second service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start Third service box*/}
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".3s"
              >
                <div className="service-icon">
                  <i className="flaticon-web-domain font-icon" />
                </div>
                <span className="service-num hollow-text">3 </span>
                <div className="service-content">
                  <h3 className="service-title">CMS Development</h3>
                  <p className="service-text">
                    Delivering flexible and user-friendly CMS solutions to help
                    you easily manage, update, and grow your website with
                    complete control.
                  </p>
                </div>
                <Link className="read-more" href="/services/cms-development">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End Third service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start fourth service box*/}
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".4s"
              >
                <div className="service-icon">
                  <i className="flaticon-profile font-icon" />
                </div>
                <span className="service-num hollow-text">4 </span>
                <div className="service-content">
                  <h3 className="service-title">Maintenance & Support</h3>
                  <p className="service-text">
                    Ensuring your website stays secure, updated, and optimized
                    with reliable maintenance services that keep your business
                    running smoothly.
                  </p>
                </div>
                <Link className="read-more" href="/services/website-maintenance">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End fourth service box   */}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start 5th service box*/}
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset={0}
                data-wow-delay=".5s"
              >
                <div className="service-icon">
                  <i className="flaticon-search font-icon" />
                </div>
                <span className="service-num hollow-text">5 </span>
                <div className="service-content">
                  <h3 className="service-title">SEO services</h3>
                  <p className="service-text">
                    Boosting your website’s visibility and rankings through
                    proven SEO strategies, ensuring you reach the right audience
                    and drive more traffic.
                  </p>
                </div>
                <Link className="read-more" href="/services/seo-services">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End 5th service box*/}
            </div>
            <div className="col-12 col-md-6  col-lg-4 mx-auto  ">
              {/*Start 6th service box*/}
              <div
                className="box service-box  wow fadeInUp  reveal-start"
                data-wow-offset={0}
                data-wow-delay=".6s"
              >
                <div className="service-icon">
                  <i className="flaticon-strategy font-icon" />
                </div>
                <span className="service-num hollow-text">6 </span>
                <div className="service-content">
                  <h3 className="service-title">Branding & Creative Design</h3>
                  <p className="service-text">
                    Creating powerful brand identities and stunning designs that
                    connect with your audience, enhance credibility, and drive
                    business growth.
                  </p>
                </div>
                <Link className="read-more" href="/services/branding-design">
                  read more
                  <i className="bi bi-arrow-right icon " />
                </Link>
              </div>
              {/* End 6th service box*/}
            </div>
          </div>
        </div>
      </section>
      {/* End  services Section*/}
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
