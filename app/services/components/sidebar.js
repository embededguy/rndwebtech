import Link from 'next/link'

export default function Sidebar({ activePage }) {
  return (
  	<>
      {/* Start service sidebar*/}
        <div className="col-12 col-xl-4">
          <div className="service-sidebar ">
            <div className="sidebar-pane">
              <h2 className="sidebar-title">list of services</h2>
              <ul className="list">
                <li className={`list-item ${activePage === "web-development" ? "active" : ""}`}>
                  <i className="flaticon-web-development font-icon" />
                  <Link href="/services/web-development">
                    {" "}
                    web development
                    <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
                <li className={`list-item ${activePage === "ecommerce-development" ? "active" : ""}`}>
                  <i className="flaticon-nanotechnology font-icon" />
                  <Link href="/services/ecommerce-development">
                    {" "}
                    E Commerce development
                    <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
                <li className={`list-item ${activePage === "cms-development" ? "active" : ""}`}>
                  <i className="flaticon-web-domain font-icon" />
                  <Link href="/services/cms-development">
                    {" "}
                    CMS Development <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
                <li className={`list-item ${activePage === "website-maintenance" ? "active" : ""}`}>
                  <i className="flaticon-profile font-icon" />
                  <Link href="/services/website-maintenance">
                    {" "}
                    Website Maintainance
                    <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
                <li className={`list-item ${activePage === "seo-services" ? "active" : ""}`}>
                  <i className="flaticon-search font-icon" />
                  <Link href="/services/seo-services">
                    {" "}
                    SEO services
                    <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
                <li className={`list-item ${activePage === "branding-design" ? "active" : ""}`}>
                  <i className="flaticon-strategy font-icon" />
                  <Link href="/services/branding-design">
                    {" "}
                    Branding Design
                    <i className="bi bi-arrow-right icon " />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sidebar-pane">
              <div className="download-area">
                <h2 className="sidebar-title">download assets</h2>
                <p className="sidebar-text">
                  
                </p>
                <ul className="list">
                  <li className="list-item">
                    <i className="flaticon-downloading font-icon" />
                    <Link href="#0">
                      service-report
                      <i className="bi bi-arrow-right icon " />
                    </Link>
                  </li>
                  <li className="list-item">
                    <i className="flaticon-downloading font-icon" />
                    <Link href="#0">
                      all services
                      <i className="bi bi-arrow-right icon " />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-pane">
              <div className="social-area">
                <h2 className="sidebar-title">follow us</h2>
                <div className="sc-wrapper dir-row sc-size-40">
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
        {/* End service sidebar*/}
    </>
  );
}
