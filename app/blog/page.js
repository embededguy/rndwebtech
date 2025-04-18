import Footer from "../components/footer.js";
import Header from "../components/header.js";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Explore Blogs | Web App Development, CMS & Branding Experts",
  keywords:
    "about RNDwebtech, IT company, web development, SEO services, CMS solutions, branding, digital solutions",
  description:
    "RNDwebtech delivers cutting-edge web applications, CMS solutions, SEO, and branding services. Partner with experts to grow your digital presence.",
};
export default async function Page() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('blog_types')
    .select('name, blogs(count)')
    .order('name', { ascending: true });

  const { data: blogs, errorx } = await supabase
    .from('blogs')
    .select(`
      id,
      title,
      content,
      slug,
      imagepath,
      tags,
      created_at,
      blog_type_id:blog_types!inner(
        id,
        name
      )
      
    `)
    .order('created_at', { ascending: false });
    const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year };
  };
  function generateExcerpt(content, paragraphCount = 2, maxLength = 120) {
  if (!content) return '';
  
  // Split into paragraphs (assuming content uses <p> tags or double newlines)
  const paragraphs = content.split('</p>').slice(0, paragraphCount);
  let excerpt = paragraphs.join('</p>') + '</p>';
  
  // Clean up HTML tags if needed
  excerpt = excerpt.replace(/<[^>]*>/g, ' ').trim();
  
  // Limit length
  if (excerpt.length > maxLength) {
    excerpt = excerpt.substring(0, maxLength) + '...';
  }
  
  return excerpt;
}
const allTags = blogs.flatMap(blog => {
    try {
      return JSON.parse(blog.tags.replace(/'/g, '"')) || [];
    } catch {
      return [];
    }
  });

  return (
    <>
      {/*Start Page Header*/}
      <Header activePage="blog" />
      {/*End Page Header*/}
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
              Blog
            </h1>
            <nav aria-label="breadcrumb ">
              <ul className="breadcrumb wow fadeInUp" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="/home">
                    <i className="bi bi-house icon " />
                    home
                  </a>
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
                  {blogs?.map((blog) => {
                    const excerpt = generateExcerpt(blog.content)
                    const { day, month, year } = formatDate(blog.created_at);
                    return (
                      <div className="col-12 col-lg-6" key={blog.id}>
                        <div className="post-box">
                          <a
                            className="post-link"
                            href={`/blog/${blog.slug}`}
                            title={blog.title}
                          >
                            <div className="post-img-wrapper">
                              <img
                                className="parallax-img post-img"
                                loading="lazy"
                                src={blog.imagepath || '/assets/images/blog/post-images/default.jpg'}
                                alt={blog.title}
                              />
                              <span className="post-date">
                                <span className="day">{day}{' '}</span>
                                {month} {year}
                              </span>
                            </div>
                          </a>
                          <div className="post-summary">
                            <div className="post-info">
                              {blog.blog_type_id && (
                                <a className="info post-cat" href={`/blog/category/${blog.blog_type_id.name}`}>
                                  <i className="bi bi-bookmark icon" />
                                  {blog.blog_type_id.name}
                                </a>
                              )}
                              {true && (
                                <a className="info post-author" href="#">
                                  <i className="bi bi-person icon" />
                                  RNDWebTech
                                </a>
                              )}
                            </div>
                            <div className="post-text">
                              <a className="post-link" href={`/blog/${blog.slug}`}>
                                <h2 className="post-title">{blog.title}</h2>
                              </a>
                              <p className="post-excerpt">
                                {excerpt}
                              </p>
                              <a
                                className="read-more"
                                href={`/blog/${blog.slug}`}
                                title={blog.title}
                              >
                                read more
                                <i className="bi bi-arrow-right icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}     
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
                  <h6 className="sidebar-box-title"><span style={{color:"#09aff4"}}>#{' '}</span>Categories:</h6>
                  <ul className="sidebar-list cats-list" style={{listStyle:"disclosure-closed"}}>
                    {data.map((category) => (
                      <>
                      <li className="cat-item" key={category.name}>
                        <a 
                          className="cat-link" 
                          href={`/blog/category/${category.name}`}
                        >
                          {category.name}
                          <span className="cat-count">{category.blogs[0].count}</span>
                        </a>
                      </li>
                      </>
                    ))}
                  </ul>
                </div>
                
                {/*Recent posts  */}
               <div className="recent-posts sidebar-box">
                  <h6 className="sidebar-box-title">
                    <span style={{color: "#09aff4"}}>#{' '}</span>recent posts:
                  </h6>
                  <ul className="sidebar-list r-posts-list">
                    {blogs.slice(0, 4).map((blog) => {
                      const { day, month, year } = formatDate(blog.created_at);
                      return (
                        <li 
                          className="r-post-item" 
                          key={blog.id}
                          style={{borderRadius: "10px"}}
                        >
                          <a
                            className="r-post-link" 
                            href={`/blog/${blog.slug}`}
                          >
                            <div 
                              className="r-post-img-wrapper" 
                              style={{margin: "1rem !important"}}
                            >
                              <img
                                className="r-post-img"
                                loading="lazy"
                                src={blog.imagepath || '/assets/images/blog/recent-posts/default.jpg'}
                                alt={blog.title}
                              />
                            </div>
                            <div className="content">
                              <h6 className="r-post-title">
                                {blog.title}
                              </h6>
                              <span className="r-post-date">
                                {`${month.toLowerCase()}, ${day} ${year}`}
                              </span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className="follow-us sidebar-box">
                  <h6 className="sidebar-box-title">follow us on:</h6>
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
      </section>
      {/* End _2-col-left-sidebar*/}

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
