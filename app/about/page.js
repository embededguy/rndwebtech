import Footer from "../components/footer.js";
import Header from "../components/header.js";
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "About RNDwebtech | Web App Development, CMS & Branding Experts",
  keywords:
    "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      {/*Start Page Header*/}
      <Header activePage="about" />
      {/*End Page Header*/}
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
              About Us
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">about us</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* End inner Page hero*/}
      {/* Start  about Section*/}
      <section className="about mega-section" id="about">
        <div className="container">
          {/* Start first about div*/}
          <div className="content-block  ">
            <div className="row">
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp "
                data-wow-delay="0.6s"
              >
                <div className="text-area ">
                  <div className="sec-heading  light-title ">
                    <div className="content-area">
                      <span
                        className=" pre-title       wow fadeInUp "
                        data-wow-delay=".2s"
                      >
                        about Us
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span className="hollow-text">Trusted</span> by Global
                        Clients Since
                        <span className="featured-text">
                          {" "}
                          2023.{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" />
                          </svg>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <p className=" about-text">
                    RNDwebtech has been delivering cutting-edge web solutions to
                    clients across 20+ countries. Our expertise in web
                    development, CMS, and digital marketing ensures your
                    business stays ahead in the digital landscape.
                  </p>
                  <div className="info-items-list ">
                    <div className="row ">
                      <div className="col-9 col-xl-6">
                        <div className="info-item">
                          <i className="flaticon-medal  info-icon" />
                          <div className="info-content">
                            <h5 className="info-title">first on field </h5>
                            <p className="info-text"></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-9 col-xl-6">
                        <div className="info-item">
                          <i className="flaticon-game-console info-icon" />
                          <div className="info-content">
                            <h5 className="info-title">easy to reach </h5>
                            <p className="info-text">{""}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-9 col-xl-6">
                        <div className="info-item">
                          <i className="flaticon-map info-icon" />
                          <div className="info-content">
                            <h5 className="info-title">worldwide services</h5>
                            <p className="info-text">{""}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-9 col-xl-6">
                        <div className="info-item">
                          <i className="flaticon-technical-support-1  info-icon" />
                          <div className="info-content">
                            <h5 className="info-title">24/7 support</h5>
                            <p className="info-text">{""}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cta-area">
                    <Link className=" btn-solid reveal-start" href="/contact">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="img-area  " data-tilt="">
                  <div className="image   ">
                    <img
                      className="about-img img-fluid "
                      loading="lazy"
                      src="assets/images/about/1.png"
                      alt="Our vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End first about div*/}
        </div>
      </section>
      {/* End  about Section*/}

      {/* Start  testimonials*/}
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
      {/* End  testimonials*/}
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
      {/* Start  blog Section*/}
      <section className="blog blog-home mega-section  " id="blog">
        <div className="container ">
          <div className="sec-heading  ">
            <div className="content-area">
              <span
                className=" pre-title       wow fadeInUp "
                data-wow-delay=".2s"
              >
                blog
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                latest <span className="hollow-text">Blogs</span>
              </h2>
            </div>
            <div
              className=" cta-area  cta-area  wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link
                className="cta-btn btn-solid   cta-btn btn-solid  "
                href="/blog"
              >
                see all posts
                <i className="bi bi-arrow-right icon " />
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col-12 ">
              <div className="posts-grid ">
                <div className="row">
                  <div className="col-12 col-lg-4 ">
                    <div className="post-box">
                      {" "}
                      <Link
                        className="post-link"
                        href="post-single.html"
                        title="How litespeed technology works to speed up your site "
                      >
                        <div className="post-img-wrapper  ">
                          <img
                            className=" parallax-img   post-img"
                            loading="lazy"
                            src="assets/images/blog/post-images/1.jpg"
                            alt=""
                          />
                          <span className="post-date">
                            <span className="day">05 </span>oct 2022{" "}
                          </span>
                        </div>
                      </Link>
                      <div className="post-summary">
                        <div className="post-info">
                          <Link className="info post-cat" href="#">
                            {" "}
                            <i className="bi bi-bookmark icon" />
                            hosting
                          </Link>
                          <Link className="info post-author" href="#">
                            {" "}
                            <i className=" bi bi-person icon" />
                            Allan Moore
                          </Link>
                        </div>
                        <div className="post-text">
                          <Link className="post-link" href="post-single.html">
                            <h2 className="post-title">
                              {" "}
                              How litespeed technology works to speed up your
                              site{" "}
                            </h2>
                          </Link>
                          <p className="post-excerpt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae
                          </p>
                          <Link
                            className="read-more"
                            href="post-single.html"
                            title="How litespeed technology works to speed up your site "
                          >
                            read more
                            <i className="bi bi-arrow-right icon " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="post-box">
                      {" "}
                      <Link
                        className="post-link"
                        href="post-single.html"
                        title="give your website a new look and feel with themes"
                      >
                        <div className="post-img-wrapper  ">
                          <img
                            className=" parallax-img   post-img"
                            loading="lazy"
                            src="assets/images/blog/post-images/2.jpg"
                            alt=""
                          />
                          <span className="post-date">
                            <span className="day">15 </span>sep 2022{" "}
                          </span>
                        </div>
                      </Link>
                      <div className="post-summary">
                        <div className="post-info">
                          <Link className="info post-cat" href="#">
                            {" "}
                            <i className="bi bi-bookmark icon" />
                            web dev
                          </Link>
                          <Link className="info post-author" href="#">
                            {" "}
                            <i className=" bi bi-person icon" />
                            mhmd amin
                          </Link>
                        </div>
                        <div className="post-text">
                          <Link className="post-link" href="post-single.html">
                            <h2 className="post-title">
                              {" "}
                              give your website a new look and feel with themes
                            </h2>
                          </Link>
                          <p className="post-excerpt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae
                          </p>
                          <Link
                            className="read-more"
                            href="post-single.html"
                            title="give your website a new look and feel with themes"
                          >
                            read more
                            <i className="bi bi-arrow-right icon " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 ">
                    <div className="post-box">
                      {" "}
                      <Link
                        className="post-link"
                        href="post-single.html"
                        title="the role of domain names in SEO world explained "
                      >
                        <div className="post-img-wrapper  ">
                          <img
                            className=" parallax-img   post-img"
                            loading="lazy"
                            src="assets/images/blog/post-images/3.jpg"
                            alt=""
                          />
                          <span className="post-date">
                            <span className="day">27 </span>aug 2022{" "}
                          </span>
                        </div>
                      </Link>
                      <div className="post-summary">
                        <div className="post-info">
                          <Link className="info post-cat" href="#">
                            {" "}
                            <i className="bi bi-bookmark icon" />
                            SEO
                          </Link>
                          <Link className="info post-author" href="#">
                            {" "}
                            <i className=" bi bi-person icon" />
                            yusuf amin
                          </Link>
                        </div>
                        <div className="post-text">
                          <Link className="post-link" href="post-single.html">
                            <h2 className="post-title">
                              {" "}
                              the role of domain names in SEO world explained{" "}
                            </h2>
                          </Link>
                          <p className="post-excerpt">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae
                          </p>
                          <Link
                            className="read-more"
                            href="post-single.html"
                            title="the role of domain names in SEO world explained "
                          >
                            read more
                            <i className="bi bi-arrow-right icon " />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End  blog Section*/}
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
                  <br /> Reach out to RNDwebtech — we&apos;re here to help you grow
                  and succeed online.{" "}
                </p>
              </div>
            </div>
            {/*Start .see-more-area*/}
            <div className=" see-more-area wow fadeInUp" data-wow-delay="0.8s">
              <Link className=" btn-solid cta-link" href="contact">
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
      {/* End  page-footer Section*/}

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
