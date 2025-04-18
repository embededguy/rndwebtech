import Footer from "../../components/footer.js";
import Header from "../../components/header.js";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { notFound } from 'next/navigation';

import DOMPurify from 'isomorphic-dompurify';

export async function generateMetadata({ params }) {
  const paramsx = await params
  const supabase = await createClient();
  const { data: blog } = await supabase
    .from('blogs')
    .select('title, imagepath')
    .eq('slug', paramsx.slug)
    .single();

  return {
    title: blog?.title || 'Blog Not Found',
    description: blog?.title || '',
    openGraph: {
      images: blog?.imagepath ? [{ url: blog.imagepath }] : [],
    },
  };
}


export default async function Page({params}) {
  const paramsx = await params
  const supabase = await createClient()
  const { data: blog } = await supabase
    .from('blogs')
    .select(`
      id,
      title,
      content,
      slug,
      imagepath,
      created_at,
      tags,
      blog_type_id:blog_types!inner(
        id,
        name
      )
    `)
    .eq('slug', paramsx.slug)
    .single();

  if (!blog) {
    notFound();
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year };
  };
  const { day, month, year } = formatDate(blog.created_at);
  
  const cleanHtml = DOMPurify.sanitize(blog.content || '', {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
  // Allow class attribute
  ADD_ATTR: ['class'],
});

// Add classes to p tags
const htmlWithClasses = cleanHtml.replace(/<p(>|\s)/g, '<p class="post-text"$1');

const html2 = htmlWithClasses.replace(/<h3(>|\s)/g, '<h3 class="post-heading"$1');

  return (
    <>
      {/*Start Page Header*/}
      <Header activePage="blog" />
      <div className="blog blog-post ">
  <div className="container">
    <div className="row">
      <div className="col-12 col-lg-10 mx-auto">
        {/*post heading area2021*/}
        <div className="social">
          <div className="share-us ">
            <h6 className="share-title">share post:</h6>
            <div className="sc-wrapper dir-row sc-flat">
              <ul className="sc-list">
                <li className="sc-item " title="Facebook">
                  <a className="sc-link" href="#0" title="social media icon">
                    <i className="fab fa-facebook-f sc-icon" />
                  </a>
                </li>
                <li className="sc-item " title="youtube">
                  <a className="sc-link" href="#0" title="social media icon">
                    <i className="fab fa-youtube sc-icon" />
                  </a>
                </li>
                <li className="sc-item " title="instagram">
                  <a className="sc-link" href="#0" title="social media icon">
                    <i className="fab fa-instagram sc-icon" />
                  </a>
                </li>
                <li className="sc-item " title="X">
                  <a className="sc-link" href="#0" title="social media icon">
                    <i className="fab fa-x-twitter sc-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="post-title">
          {blog.title}
        </h2>
        <div className="post-img-wrapper post-featured-area">
          <img
            className="featured-img"
            loading="lazy"
            src={blog.imagepath}
            alt="Featured Image"
            style={{borderRadius:"10px"}}
          />
        </div>
      </div>
      <div className="col-12 col-lg-9 mx-auto">
        <div className="post-main-area">
          <div className="post-info">
            <a className="info post-cat" href="#">
              <i className="fas fa-list-alt icon" />
              {blog.blog_type_id.name}
            </a>
            <a className="info post-author" href="#">
              <i className="fas fa-user icon" />
              RNDWebTech
            </a>
            <a className="info post-date" href="#">
              <i className="fas fa-history icon" />
              {day} {month} {year}
            </a>
          
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: html2 }}>
            
          </div>
          {/*tags panel*/}
          {blog.tags && (
                  <div className="tags panel">
                    <ul className="sidebar-list tags-list">
                      <li className="tags-icon-label">
                        <i className="fas fa-tags icon" />
                      </li>
                      {JSON.parse(blog.tags.replace(/'/g, '"')).map((tag, index) => (
                        <li className="tag-item" key={index}>
                          <a className="tag-link" href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
          
          {/*other-posts panel*/}
          {/*<div className="other-posts panel">
            <h6 className="panel-title">posts by the author</h6>
            <div className="row">
              <div className="col-12 col-sm-6 mb-3">
                <div className="prev-post">
                  <a className="other-post-link" href="#0">
                    <div className="other-post-img" title="Previous Post">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src="assets/images/blog/post-images/1.jpg"
                        alt="other posts Image"
                      />
                      <i className="bi bi-chevron-left icon " />
                    </div>
                    <h6 className="other-post-title">
                      how to get early saves your day and give you the
                      productivity you want
                    </h6>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="next-post">
                  <a className="other-post-link" href="#0">
                    <div className="other-post-img" title="Next Post">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src="assets/images/blog/post-images/2.jpg"
                        alt="other posts Image"
                      />
                      <i className="bi bi-chevron-right icon " />
                    </div>
                    <h6 className="other-post-title">
                      9 Habits Make You A Better Person, No. 3 Will Surprise You
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>*/}
          
        </div>
      </div>
    </div>
  </div>
</div>

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
