import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Head from "next/head";
import Link from 'next/link'

export const metadata = {
  title: "Explore Blogs | Web App Development, CMS & Branding Experts", 
  keywords: "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description: "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default function Page() {
  return (
    <>
      {/*Start Page Header*/}
      <Header activePage="blog"/>
      {/*End Page Header*/}
      {/* Start inner Page hero*/}
  <section
    className="d-flex align-items-center page-hero  inner-page-hero "
    id="page-hero"
  >
    <div
      className="overlay-photo-image-bg parallax"
      data-bg-img="assets/images/hero/inner-page-hero.jpg"
      data-bg-opacity={1} style={{ "backgroundImage":"url('/assets/images/hero/inner-page-hero.jpg')"}}
    />
    <div className="overlay-color" data-bg-opacity=".75" />
    <div className="container">
      <div className="hero-text-area centerd">
        <h1 className="hero-title  wow fadeInUp" data-wow-delay=".2s">
          Blog
        </h1>
        <nav aria-label="breadcrumb ">
          <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
            <li className="breadcrumb-item">
              <Link className="breadcrumb-link" href="#0">
                <i className="bi bi-house icon " />
                home
              </Link>
            </li>
            <li className="breadcrumb-item active">blog</li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
  {/* End inner Page hero*/}
  {/* Start _2-col-left-sidebar*/}
  <section className="blog blog-home mega-section">
    <div className="container ">
      <div className="row ">
        <div className="col-12 col-lg-8 ">
          <div className="posts-grid">
            <div className="row">
              <div className="col-12 col-lg-6  ">
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
                          How litespeed technology works to speed up your site{" "}
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
              <div className="col-12 col-lg-6 ">
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
              <div className="col-12 col-lg-6 ">
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
              <div className="col-12 col-lg-6 ">
                <div className="post-box">
                  {" "}
                  <Link
                    className="post-link"
                    href="post-single.html"
                    title="we are able to building your dream website"
                  >
                    <div className="post-img-wrapper  ">
                      <img
                        className=" parallax-img   post-img"
                        loading="lazy"
                        src="assets/images/blog/post-images/4.jpg"
                        alt=""
                      />
                      <span className="post-date">
                        <span className="day">15 </span>aug 2022{" "}
                      </span>
                    </div>
                  </Link>
                  <div className="post-summary">
                    <div className="post-info">
                      <Link className="info post-cat" href="#">
                        {" "}
                        <i className="bi bi-bookmark icon" />
                        design
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
                          we are able to building your dream website
                        </h2>
                      </Link>
                      <p className="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.Iure nulla dolorem, voluptates molestiae
                      </p>
                      <Link
                        className="read-more"
                        href="post-single.html"
                        title="we are able to building your dream website"
                      >
                        read more
                        <i className="bi bi-arrow-right icon " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="post-box">
                  {" "}
                  <Link
                    className="post-link"
                    href="post-single.html"
                    title="data analysis and the big impact on industry"
                  >
                    <div className="post-img-wrapper  ">
                      <img
                        className=" parallax-img   post-img"
                        loading="lazy"
                        src="assets/images/blog/post-images/5.jpg"
                        alt=""
                      />
                      <span className="post-date">
                        <span className="day">02 </span>aug 2022{" "}
                      </span>
                    </div>
                  </Link>
                  <div className="post-summary">
                    <div className="post-info">
                      <Link className="info post-cat" href="#">
                        {" "}
                        <i className="bi bi-bookmark icon" />
                        features
                      </Link>
                      <Link className="info post-author" href="#">
                        {" "}
                        <i className=" bi bi-person icon" />
                        fairouz amin
                      </Link>
                    </div>
                    <div className="post-text">
                      <Link className="post-link" href="post-single.html">
                        <h2 className="post-title">
                          {" "}
                          data analysis and the big impact on industry
                        </h2>
                      </Link>
                      <p className="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.Iure nulla dolorem, voluptates molestiae
                      </p>
                      <Link
                        className="read-more"
                        href="post-single.html"
                        title="data analysis and the big impact on industry"
                      >
                        read more
                        <i className="bi bi-arrow-right icon " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="post-box">
                  {" "}
                  <Link
                    className="post-link"
                    href="post-single.html"
                    title="helping others can boost you happiness"
                  >
                    <div className="post-img-wrapper  ">
                      <img
                        className=" parallax-img   post-img"
                        loading="lazy"
                        src="assets/images/blog/post-images/6.jpg"
                        alt=""
                      />
                      <span className="post-date">
                        <span className="day">21 </span>jul 2022{" "}
                      </span>
                    </div>
                  </Link>
                  <div className="post-summary">
                    <div className="post-info">
                      <Link className="info post-cat" href="#">
                        {" "}
                        <i className="bi bi-bookmark icon" />
                        cloud
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
                          helping others can boost you happiness
                        </h2>
                      </Link>
                      <p className="post-excerpt">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.Iure nulla dolorem, voluptates molestiae
                      </p>
                      <Link
                        className="read-more"
                        href="post-single.html"
                        title="helping others can boost you happiness"
                      >
                        read more
                        <i className="bi bi-arrow-right icon " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/*Start pagination*/}
                <nav className="ma-pagination">
                  <ul className="pagination justify-content-center">
                    <li className="ma-page-item deactive-page-item">
                      <Link
                        className="ma-page-link "
                        href="#"
                        title="Previous Page"
                      >
                        <i className="bi bi-chevron-left icon " />
                      </Link>
                    </li>
                    <li className="ma-page-item active">
                      <Link className="ma-page-link " href="#">
                        1{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item  ">
                      <Link className="ma-page-link " href="#">
                        2{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item  ">
                      <Link className="ma-page-link " href="#">
                        3{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item  ">
                      <Link className="ma-page-link " href="#">
                        4{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item  ">
                      <Link className="ma-page-link " href="#">
                        5{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item  ">
                      <Link className="ma-page-link " href="#">
                        6{" "}
                      </Link>
                    </li>
                    <li className="ma-page-item">
                      <Link className="ma-page-link" href="#" title="Next Page">
                        <i className="bi bi-chevron-right icon " />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="blog-sidebar">
            {/*search box*/}
            <div className="search sidebar-box">
              <form className="search-form" action="#">
                <input
                  className="search-input"
                  type="search"
                  name="seach_form"
                  placeholder="Search Posts..."
                />
                <button className="search-btn" type="submit">
                  <i className="bi bi-search icon" />
                </button>
              </form>
            </div>
            {/*categories box*/}
            <div className="cats sidebar-box">
              <h6 className="sidebar-box-title">Categories:</h6>
              <ul className="sidebar-list cats-list  ">
                <li className="cat-item">
                  <Link className="cat-link" href="#">
                    data<span className="cat-count">17</span>
                  </Link>
                </li>
                <li className="cat-item">
                  <Link className="cat-link" href="#">
                    web dev <span className="cat-count">25</span>
                  </Link>
                </li>
                <li className="cat-item">
                  <Link className="cat-link" href="#">
                    hosting<span className="cat-count">14</span>
                  </Link>
                </li>
                <li className="cat-item">
                  <Link className="cat-link" href="#">
                    domain names<span className="cat-count">73</span>
                  </Link>
                </li>
                <li className="cat-item">
                  <Link className="cat-link" href="#">
                    apps<span className="cat-count">36</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/*Recent posts  */}
            <div className="recent-posts sidebar-box">
              <h6 className="sidebar-box-title">recent posts: </h6>
              <ul className="sidebar-list r-posts-list ">
                <li className="r-post-item">
                  <Link className="r-post-link" href="#">
                    <div className="r-post-img-wrapper">
                      <img
                        className="r-post-img"
                        loading="lazy"
                        src="assets/images/blog/recent-posts/1.jpg"
                        alt="recent post image"
                      />
                    </div>
                    <div className="content">
                      <h6 className="r-post-title">
                        this is the article title
                      </h6>
                      <span className="r-post-date">jun, 15 2022 </span>
                    </div>
                  </Link>
                </li>
                <li className="r-post-item">
                  <Link className="r-post-link" href="#">
                    <div className="r-post-img-wrapper">
                      <img
                        className="r-post-img"
                        loading="lazy"
                        src="assets/images/blog/recent-posts/2.jpg"
                        alt="recent post image"
                      />
                    </div>
                    <div className="content">
                      <h6 className="r-post-title">
                        this is the article title
                      </h6>
                      <span className="r-post-date">may, 10 2022 </span>
                    </div>
                  </Link>
                </li>
                <li className="r-post-item">
                  <Link className="r-post-link" href="#">
                    <div className="r-post-img-wrapper">
                      <img
                        className="r-post-img"
                        loading="lazy"
                        src="assets/images/blog/recent-posts/3.jpg"
                        alt="recent post image"
                      />
                    </div>
                    <div className="content">
                      <h6 className="r-post-title">
                        this is the article title
                      </h6>
                      <span className="r-post-date">feb, 28 2022 </span>
                    </div>
                  </Link>
                </li>
                <li className="r-post-item">
                  <Link className="r-post-link" href="#">
                    <div className="r-post-img-wrapper">
                      <img
                        className="r-post-img"
                        loading="lazy"
                        src="assets/images/blog/recent-posts/4.jpg"
                        alt="recent post image"
                      />
                    </div>
                    <div className="content">
                      <h6 className="r-post-title">
                        this is the article title
                      </h6>
                      <span className="r-post-date">jun, 07 2022 </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tags sidebar-box">
              <h6 className="sidebar-box-title">tags:</h6>
              <ul className="sidebar-list tags-list ">
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    wordpress
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    data analysis
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    hosting
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    design
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    developing
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    consulting
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    design
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    concept
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    features
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    services
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    portfolio
                  </Link>
                </li>
                <li className="tag-item">
                  <Link className="tag-link" href="#">
                    testmonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="follow-us sidebar-box">
              <h6 className="sidebar-box-title">follow us on:</h6>
              <div className="sc-wrapper dir-row sc-size-32">
                <ul className="sc-list">
                  <li className="sc-item " title="Facebook">
                    <Link className="sc-link" href="#0" title="social media icon">
                      <i className="fab fa-facebook-f sc-icon" />
                    </Link>
                  </li>
                  <li className="sc-item " title="youtube">
                    <Link className="sc-link" href="#0" title="social media icon">
                      <i className="fab fa-youtube sc-icon" />
                    </Link>
                  </li>
                  <li className="sc-item " title="instagram">
                    <Link className="sc-link" href="#0" title="social media icon">
                      <i className="fab fa-instagram sc-icon" />
                    </Link>
                  </li>
                  <li className="sc-item " title="X">
                    <Link className="sc-link" href="#0" title="social media icon">
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
  </section>
  {/* End _2-col-left-sidebar*/}

      {/* Start  page-footer Section*/}
      <Footer/>
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