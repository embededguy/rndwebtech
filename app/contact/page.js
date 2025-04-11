import Footer from "../components/footer.js";
import Header from "../components/header.js";
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "Contact RNDwebtech | Web App Development, CMS & Branding Experts",
  keywords:
    "Contact RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      {/*Start Page Header*/}
      <Header activePage="contact" />
      {/*End Page Header*/}
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
              Contact Us
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <Link className="breadcrumb-link" href="#0">
                    <i className="bi bi-house icon " />
                    home
                  </Link>
                </li>
                <li className="breadcrumb-item active">contact us</li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* End inner Page hero*/}
      {/* Start contact-us */}
      <section className="contact-us  mega-section  pb-0" id="contact-us">
        <div className="container">
          <section className="locations-section  mega-section ">
            <div className="sec-heading centered  ">
              <div className="content-area">
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  our offices around the world
                </h2>
              </div>
            </div>
            <div className=" contact-info-panel ">
              <div className="info-section ">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div
                      className="info-panel  wow fadeInUp"
                      data-wow-delay=".4s "
                    >
                      <h4 className="location-title">New york</h4>
                      <div className="line-on-side "> </div>
                      <p className="location-address">
                        United States, 307 Wilshire, 2nd av. new york 3516.
                      </p>
                      <div className="location-card  ">
                        <i className="flaticon-email icon" />
                        <div className="card-content">
                          <h6 className="content-title">email:</h6>
                          <Link
                            className="email link"
                            href="mailto:yourname@example.com"
                          >
                            info@example.com
                          </Link>
                        </div>
                      </div>
                      <div className="location-card  ">
                        <i className="flaticon-phone-call icon" />
                        <div className="card-content">
                          <h6 className="content-title">phone:</h6>
                          <Link className="tel link" href="tel:0123456789">
                            +29876543210
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div
                      className="info-panel  wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h4 className="location-title">London</h4>
                      <div className="line-on-side "> </div>
                      <p className="location-address">
                        United kingdom, 12 smith town, 2nd av. London 2159.
                      </p>
                      <div className="location-card  ">
                        <i className="flaticon-email icon" />
                        <div className="card-content">
                          <h6 className="content-title">email:</h6>
                          <Link
                            className="email link"
                            href="mailto:yourname@example.com"
                          >
                            info@example.com
                          </Link>
                        </div>
                      </div>
                      <div className="location-card  ">
                        <i className="flaticon-phone-call icon" />
                        <div className="card-content">
                          <h6 className="content-title">phone:</h6>
                          <Link className="tel link" href="tel:0123456789">
                            +969876543210
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div
                      className="info-panel  wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <h4 className="location-title">tokio</h4>
                      <div className="line-on-side "> </div>
                      <p className="location-address">
                        Japan, 307 chinzo appy road, portsika way. tokio 3516.
                      </p>
                      <div className="location-card  ">
                        <i className="flaticon-email icon" />
                        <div className="card-content">
                          <h6 className="content-title">email:</h6>
                          <Link
                            className="email link"
                            href="mailto:yourname@example.com"
                          >
                            info@example.com
                          </Link>
                        </div>
                      </div>
                      <div className="location-card  ">
                        <i className="flaticon-phone-call icon" />
                        <div className="card-content">
                          <h6 className="content-title">phone:</h6>
                          <Link className="tel link" href="tel:0123456789">
                            +459876543210
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="map-section  elf-section">
            <div className="sec-heading  centered   ">
              <div className="content-area">
                <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                  find us on google maps
                </h2>
              </div>
            </div>
            <div className="map-box  wow fadeInUp" data-wow-delay=".6s">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="map-iframe"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1613762954590!5m2!1sen!2seg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="contact-us-form-section  mega-section  ">
            <div className="row">
              <div className="col-12 ">
                <div className="contact-form-panel">
                  <div className="sec-heading centered    ">
                    <div className="content-area">
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        Have any questions? Let&apos;s answer them
                      </h2>
                    </div>
                  </div>
                  <div
                    className="contact-form-inputs wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="custom-form-area input-boxed">
                      {/*Form To have user messages*/}
                      <form
                        className="main-form"
                        id="contact-us-form"
                        action="https://amincods.com/html/flex-it/php/send-mail.php"
                        method="post"
                      >
                        <span className="done-msg" />
                        <div className="row ">
                          <div className="col-12 col-lg-6">
                            <div className="   input-wrapper">
                              <input
                                className="text-input"
                                id="user-name"
                                name="UserName"
                                type="text"
                              />
                              <label
                                className="input-label"
                                htmlFor="user-name"
                              >
                                {" "}
                                Name <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="   input-wrapper">
                              <input
                                className="text-input"
                                id="user-email"
                                name="UserEmail"
                                type="email"
                              />
                              <label
                                className="input-label"
                                htmlFor="user-email"
                              >
                                {" "}
                                E-mail <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="   input-wrapper">
                              <input
                                className="text-input"
                                id="msg-subject"
                                name="subject"
                                type="text"
                              />
                              <label
                                className="input-label"
                                htmlFor="msg-subject"
                              >
                                {" "}
                                Subject <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 ">
                            <div className="   input-wrapper">
                              <textarea
                                className=" text-input"
                                id="msg-text"
                                name="message"
                                defaultValue={""}
                              />
                              <label className="input-label" htmlFor="msg-text">
                                {" "}
                                your message <span className="req">*</span>
                              </label>
                              <span className="b-border" />
                              <i />
                              <span className="error-msg" />
                            </div>
                          </div>
                          <div className="col-12 submit-wrapper">
                            <button
                              className=" btn-solid"
                              id="submit-btn"
                              type="submit"
                              name="UserSubmit"
                            >
                              Send your message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* End contact-us */}
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
