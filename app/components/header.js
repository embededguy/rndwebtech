import Link from 'next/link'

export default function Header({ activePage }) {
  return (
  	<>
    <header
      className=" page-header   inner-page-header header-basic"
      id="page-header"
    >
      <div className="header-search-box">
        <div className="close-search" />
        <form
          className="nav-search search-form"
          role="search"
          method="get"
          action="#"
        >
          <div className="search-wrapper">
            <label className="search-lbl">Search for:</label>
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
              name="searchInput"
              autoFocus={true}
            />
            <button className="search-btn" type="submit">
              <i className="bi bi-search icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <nav className="menu-navbar">
          <div className="header-logo">
            <Link className="logo-link" href="/">
              <img
                className="logo-img light-logo"
                loading="lazy"
                src="/assets/images/logo/logo-light.png"
                alt="logo"
              />
              <img
                className="logo-img  dark-logo"
                loading="lazy"
                src="/assets/images/logo/logo-dark.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="links menu-wrapper ">
            <ul className="list-js links-list">
              <li className="menu-item has-sub-menu">
                <Link className={`menu-link ${activePage === "home" ? "active" : ""}`} href="/">
                  home
                </Link>
                
              </li>
              <li className="menu-item has-sub-menu">
                <Link className={`menu-link ${activePage === "services" ? "active" : ""}`} href="/services">
                  services
                </Link>
                <ul className="sub-menu ">
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/ecommerce-development">
                      E Commerce Development
                    </Link>
                  </li>
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/cms-development">
                      CMS Development
                    </Link>
                  </li>
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/website-maintenance">
                      Website Maintenance
                    </Link>
                  </li>
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/seo-services">
                      SEO Services
                    </Link>
                  </li>
                  <li className="menu-item sub-menu-item">
                    <Link className="menu-link sub-menu-link  " href="/services/branding-design">
                      Branding Design
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link className={`menu-link ${activePage === "portfolio" ? "active" : ""}`} href="/portfolio">
                  portfolio
                </Link>
                
              </li>
              <li className="menu-item has-sub-menu">
                <Link className={`menu-link ${activePage === "blog" ? "active" : ""}`} href="/blog">
                  blog
                </Link>
              </li>
             
              <li className="menu-item">
                <Link className={`menu-link ${activePage === "about" ? "active" : ""}`} href="/about">
                  about us{" "}
                </Link>
              </li>
              <li className="menu-item">
                <Link className={`menu-link ${activePage === "contact" ? "active" : ""}`} href="/contact">
                  contact us{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="controls-box">
            {/*Menu Toggler button*/}
            <div className="control  menu-toggler">
              <span />
              <span />
              <span />
            </div>
            {/*search Icon button*/}
            {/*<div className="control header-search-btn">
              <i className="bi bi-search icon" />
            </div>*/}
            {/*Dark/Light mode button*/}
            
            {/*mini shoping cart*/}
          </div>
        </nav>
      </div>
    </header>
    </>
  );
}
