import Link from 'next/link'

export default function Footer() {
  return (
      <footer className="page-footer dark-color-footer" id="page-footer">
        <div
          className="overlay-photo-image-bg"
          data-bg-img="assets/images/sections-bg-images/footer-bg-1.jpg"
          data-bg-opacity=".25"
        />
        <div className="container">
          <div className="row footer-cols">
            <div className="col-12 col-md-8 col-lg-4  footer-col ">
              <img
                className="img-fluid footer-logo"
                loading="lazy"
                src="/assets/images/logo/logo-colored.png"
                alt="logo"
              />
              <div className="footer-col-content-wrapper">
                <p className="footer-text-about-us ">
                  RNDwebtech specializes in web development, CMS, SEO, and branding, delivering innovative and scalable digital solutions to enhance your online presence.
                </p>
              </div>
              <div className="mode-switcher ">
              <div
                className="switch-inner go-light "
                title="Switch To Light Mode "
              >
                <i className="bi bi-sun icon " />
              </div>
              <div
                className="switch-inner go-dark"
                title="Switch To Dark Mode "
              >
                <i className="bi bi-moon icon " />
              </div>
            </div>
              <br/>
              <div className="form-area ">
                <div className="mailchimp-form ">
                  <form className="one-field-form" method="post" action="#0">
                    <div className="field-group ">
                      <label className="email-label" htmlFor="email-input">
                        {" "}
                        *Subscribe to our news letter

                      </label>
                      <div style={{height:"20px"}}></div>
                      <input
                        className="email-input "
                        type="email"
                        defaultValue=""
                        name="EMAIL"
                        id="email-input"
                        placeholder="Email Address"
                        autoComplete="off"
                      />
                      <div className="cta-area">
                        <input
                          className="btn-solid subscribe-btn"
                          type="submit"
                          defaultValue="Subscribe"
                          name="subscribe"
                        />
                      </div>
                    </div>
                    <div style={{height:"10px"}}></div>
                    <span className="email-notice">
                      *we will not share your personal info
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2  footer-col ">
              <h2 className=" footer-col-title    ">useful links</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu ">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/services/seo-services">
                      Seo Services
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/services/cms-development">
                      CMS Development
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/services/ecommerce-development">
                      E Commerce Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 footer-col ">
              <h2 className=" footer-col-title    ">Resources</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/services">
                      Services
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/about">
                      About us
                    </Link>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon " />
                    <Link className="footer-menu-link" href="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12     col-lg-4 footer-col ">
              <h2 className=" footer-col-title    ">contact information</h2>
              <div className="footer-col-content-wrapper">
                <div className="contact-info-card">
                  <i className="bi bi-envelope icon" />
                  <Link
                    className="text-lowercase  info"
                    href="mailto:example@support.com"
                  >
                    support@rndwebtech.com
                  </Link>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-geo-alt icon" />
                  <span className="text-lowercase  info">
                    Canada
                  </span>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-phone icon" />
                  <Link className="info" href="tel:+20123456789">
                    +20123456789
                  </Link>
                </div>
                <div className="contact-info-card">
                  <div className="social-icons">
                    <div className="sc-wrapper dir-row sc-size-32">
                      <ul className="sc-list">
                        <li className="sc-item " title="Facebook">
                          <Link
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-facebook-f sc-icon" />
                          </Link>
                        </li>
                        <li className="sc-item " title="youtube">
                          <Link
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-youtube sc-icon" />
                          </Link>
                        </li>
                        <li className="sc-item " title="instagram">
                          <Link
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-instagram sc-icon" />
                          </Link>
                        </li>
                        <li className="sc-item " title="X">
                          <Link
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-x-twitter sc-icon" />
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrights ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-start">
                <p className="creadits">
                  © 2024 Created by {" "}
                  <Link className="link" href="https://rndwebtech.com">
                    RNDwebtech
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <div className="terms-links">
                  <Link href="/terms-and-conditions">Terms & Conditions </Link>|{" "}
                  <Link
                    href="/privacy-policy"
                                   >
                    Privacy Policy.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
