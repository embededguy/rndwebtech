import Link from 'next/link';
import { SubscribeForm } from './subscribeForm';
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
            <SubscribeForm/>
          </div>
          {/* Rest of your footer remains the same */}
          <div className="col-6 col-lg-2  footer-col ">
            <h2 className=" footer-col-title    ">useful links</h2>
            <div className="footer-col-content-wrapper">
              <ul className="footer-menu ">
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/services/web-development">
                    Web Development
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/services/seo-services">
                    Seo Services
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/services/cms-development">
                    CMS Development
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/services/ecommerce-development">
                    E Commerce Development
                  </a>
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
                  <a className="footer-menu-link" href="/">
                    Home
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="footer-menu-item">
                  <i className="bi bi-arrow-right icon " />
                  <a className="footer-menu-link" href="/contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12     col-lg-4 footer-col ">
            <h2 className=" footer-col-title    ">contact information</h2>
            <div className="footer-col-content-wrapper">
              <div className="contact-info-card">
                <i className="bi bi-envelope icon" />
                <a
                  className="text-lowercase  info"
                  href="mailto:example@support.com"
                >
                  support@rndwebtech.com
                </a>
              </div>
              <div className="contact-info-card">
                <i className="bi bi-geo-alt icon" />
                <span className="text-lowercase  info">
                  Canada
                </span>
              </div>
              <div className="contact-info-card">
                <i className="bi bi-phone icon" />
                <a className="info" href="tel:+20123456789">
                  +20123456789
                </a>
              </div>
              <div className="contact-info-card">
                <div className="social-icons">
                  <div className="sc-wrapper dir-row sc-size-32">
                    <ul className="sc-list">
                      <li className="sc-item " title="Facebook">
                        <a
                          className="sc-link"
                          href="#0"
                          title="social media icon"
                        >
                          <i className="fab fa-facebook-f sc-icon" />
                        </a>
                      </li>
                      <li className="sc-item " title="youtube">
                        <a
                          className="sc-link"
                          href="#0"
                          title="social media icon"
                        >
                          <i className="fab fa-youtube sc-icon" />
                        </a>
                      </li>
                      <li className="sc-item " title="instagram">
                        <a
                          className="sc-link"
                          href="#0"
                          title="social media icon"
                        >
                          <i className="fab fa-instagram sc-icon" />
                        </a>
                      </li>
                      <li className="sc-item " title="X">
                        <a
                          className="sc-link"
                          href="#0"
                          title="social media icon"
                        >
                          <i className="fab fa-x-twitter sc-icon" />
                        </a>
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
                © 2024 Created and Managed by {" "}
                <a className="link" href="https://rndwebtech.com">
                  RNDwebtech
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
              <div className="terms-links">
                <a href="/terms-and-conditions">Terms & Conditions </a>|{" "}
                <a
                  href="/privacy-policy"
                >
                  Privacy Policy.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}