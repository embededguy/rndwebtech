import Footer from "../components/footer.js";
import Header from "../components/header.js";
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "Portfolio | Web App Development, CMS & Branding Experts",
  keywords:
    "Explore Services at RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      <Header activePage="portfolio" />
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
              Portfolio{" "}
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </Link>
                </li>
                <li className="breadcrumb-item active">portfolio</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* End inner Page hero*/}
      {/* Start  portfolio Section*/}
      <section className="portfolio mega-section   " id="portfolio">
        <div className="container">
          <div className="sec-heading  ">
            <div className="content-area">
              <span
                className=" pre-title       wow fadeInUp "
                data-wow-delay=".2s"
              >
                portfolio
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                Awesome <span className="hollow-text">portfolio</span>
              </h2>
            </div>
            
          </div>
          <div className="portfolio-wrapper  ">
            {/*a menu of links to show the photos users needs   */}
            <ul
              className="portfolio-btn-list wow fadeInUp"
              data-wow-delay=".2s"
            >
              <li className="portfolio-btn active " data-filter="*">
                All
              </li>
              <li className="portfolio-btn        " data-filter=".mobile">
                mobile apps
              </li>
              <li className="portfolio-btn        " data-filter=".web">
                cloud
              </li>
              <li className="portfolio-btn        " data-filter=".data">
                data analaysis
              </li>
              <li className="portfolio-btn        " data-filter=".hosting">
                hosting
              </li>
            </ul>
            <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
              <div className="row ">
                <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile ">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href=""
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/1.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">mobile apps</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-6  col-lg-4  portfolio-item web  ">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href=""
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/2.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">cloud</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-6  col-lg-4  portfolio-item data ">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href=""
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/3.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">data analaysis</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile ">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href="l"
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/4.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">hosting</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-6  col-lg-4  portfolio-item hosting ">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href=""
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/5.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">SEO</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
                <div className="col-12  col-md-6  col-lg-4  portfolio-item mobile">
                  <div className="item   ">
                    <Link
                      className="portfolio-img-link"
                      href=""
                    >
                      <img
                        className="portfolio-img   img-fluid "
                        loading="lazy"
                        src="assets/images/portfolio/6.jpg"
                        alt="portfolio item photo"
                      />
                    </Link>
                    <div className="item-info ">
                      <h3 className="item-title">other category</h3>
                      <i className="bi bi-arrow-right icon " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  portfolio Section*/}
      {/* Start  testimonials Section*/}
      <section
        className="testimonials testimonials-1-col   has-dark-bg  mega-section "
        id="testimonials-img-bg"
      >
        <div
          className="overlay-photo-image-bg parallax "
          data-bg-img="assets/images/sections-bg-images/1.jpg"
          data-bg-opacity=".25"
        >
          {" "}
        </div>
        <div className="container">
          <div className="sec-heading  centered ">
            <div className="content-area">
              <span
                className=" pre-title       wow fadeInUp "
                data-wow-delay=".2s"
              >
                testimonials
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                customers <span className="hollow-text">testmonials</span>
              </h2>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-10  mx-auto">
              <div
                className="swiper-container  wow fadeInUp  "
                data-wow-delay="0.2s"
              >
                <div className="swiper-wrapper">
                  {/*First Slide*/}
                  <div className="swiper-slide">
                    <div className="testmonial-card d-flex align-items-center justify-content-center">
                      <div className="testimonial-content">
                        <div className="customer-img ">
                          <img
                            className="img-fluid "
                            loading="lazy"
                            src="assets/images/testimonials/1.png"
                            alt="First Slide "
                          />
                        </div>
                        <div className="customer-testimonial">
                          <div className="content">
                            <p className="testimonial-text ">
                              {" "}
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel.
                            </p>
                          </div>
                        </div>
                        <div className="customer-info ">
                          <div className="customer-details">
                            <p className="customer-name">Yusuf amin</p>
                            <p className="customer-role">founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Second Slide*/}
                  <div className="swiper-slide">
                    <div className="testmonial-card d-flex align-items-center justify-content-center">
                      <div className="testimonial-content">
                        <div className="customer-img ">
                          <img
                            className="img-fluid "
                            loading="lazy"
                            src="assets/images/testimonials/2.png"
                            alt="First Slide "
                          />
                        </div>
                        <div className="customer-testimonial">
                          <div className="content">
                            <p className="testimonial-text ">
                              {" "}
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel.
                            </p>
                          </div>
                        </div>
                        <div className="customer-info ">
                          <div className="customer-details">
                            <p className="customer-name">fouad osman</p>
                            <p className="customer-role">officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*third Slide*/}
                  <div className="swiper-slide">
                    <div className="testmonial-card d-flex align-items-center justify-content-center">
                      <div className="testimonial-content">
                        <div className="customer-img ">
                          <img
                            className="img-fluid "
                            loading="lazy"
                            src="assets/images/testimonials/3.png"
                            alt="First Slide "
                          />
                        </div>
                        <div className="customer-testimonial">
                          <div className="content">
                            <p className="testimonial-text ">
                              {" "}
                              ipsum dolor sit amet consectetur adipisicing elit.
                              Quod, id sequi aut qui est ab, corporis quis
                              maiores reiciendis explicabo odio tenetur nulla
                              sint vel.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="customer-info ">
                          <div className="customer-details">
                            <p className="customer-name">fairouz mhmd</p>
                            <p className="customer-role">manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*navigation buttons*/}
                <div className="swiper-button-prev">
                  <div className="left-arrow">
                    <i className="bi bi-chevron-left icon " />
                  </div>
                </div>
                <div className="swiper-button-next">
                  <div className="right-arrow">
                    <i className="bi bi-chevron-right icon " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  testimonials Section*/}
      {/* Start  our-clients Section*/}
      <section className="our-clients  bg-main elf-section" id="our-clients">
        <div className="container-fluid">
          <div className="sec-heading d-none ">
            <h4 className="title ">our great clients</h4>
          </div>
          <div className=" clients-logos ">
            {/*Swiper*/}
            <div className="swiper-container">
              <div
                className="swiper-wrapper clients-logo-wrapper wow fadeIn "
                data-wow-delay=".02s"
              >
                {/* every client logo is located inside div  with clss name "swiper-slide ".
        if you want to add more logos please keep the strcture of the swiper-slide as showen below
        
        
        */}
                <div className="swiper-slide">
                  <div className="client-logo  ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/1-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/2-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/3-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/4-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/5-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/6-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="client-logo ">
                    <Link href="#0">
                      <img
                        className="img-fluid logo "
                        loading="lazy"
                        src="assets/images/clients-logos/7-white.png"
                        alt=" "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  our-clients Section*/}
      {/* Start  take-action Section*/}
      <section className="take-action elf-section has-dark-bg" id="take-action">
        <div
          className="overlay-photo-image-bg  "
          data-bg-img="assets/images/sections-bg-images/2.jpg"
          data-bg-opacity=".25"
        >
          {" "}
        </div>
        <div className="cta-wrapper">
          <div className="container">
            <div className="sec-heading  centered mb-0 ">
              <div className="content-area">
                <span
                  className=" pre-title       wow fadeInUp "
                  data-wow-delay=".2s"
                >
                  contact us
                </span>
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  get in totch with us
                </h2>
                <p className="subtitle   wow fadeInUp " data-wow-delay=".6s">
                  Have a project in mind or need expert digital solutions?{" "}
                  <br /> Reach out to RNDwebtech — we're here to help you grow
                  and succeed online.{" "}
                </p>
              </div>
            </div>
            {/*Start .see-more-area*/}
            <div className=" see-more-area wow fadeInUp" data-wow-delay="0.8s">
              <Link className=" btn-solid cta-link" href="/contact">
                contact us
              </Link>
            </div>
            {/*End Of .see-more-area        */}
          </div>
        </div>
      </section>
      {/* End  take-action Section*/}
      {/* Start  page-footer Section*/}
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
