'use client';

import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

import Link from 'next/link'

export default function Sidebar() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
  	<>
      <>
  <nav className="topnav navbar navbar-light">
    <button
      type="button"
      className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"
    >
      <i className="fe fe-menu navbar-toggler-icon" />
    </button>
    <ul className="nav">
      <li className="nav-item" style={{ display: "none" }}>
        <a
          className="nav-link text-muted my-2"
          href="#"
          id="modeSwitcher"
          data-mode="dark"
        >
          <i className="fe fe-sun fe-16" />
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-muted pr-0"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="avatar avatar-sm mt-2">
            <img
              width={70}
              src="/user.png"
              alt="..."
              className="avatar-img rounded-circle"
            />
          </span>
        </a>
        {/* <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
  <a class="dropdown-item" href="./profile.php">Profile</a>
  <a class="dropdown-item" href="./settings.php">Settings</a>
</div> */}
      </li>
    </ul>
  </nav>
  <aside
    className="sidebar-left border-right bg-white shadow"
    id="leftSidebar"
    data-simplebar=""
  >
    <a
      href="#"
      className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
      data-toggle="toggle"
    >
      <i className="fe fe-x">
        <span className="sr-only" />
      </i>
    </a>
    <nav className="vertnav navbar navbar-light">
      {/* nav bar */}
      <div className="w-100 mb-4 d-flex mt-4">
        <a
          className="navbar-brand mx-auto mt-2 flex-fill text-center"
          href="./index.php"
        >
          <img
            alt="rndwebtech-logo"
            src="/rnd.svg"
            style={{ width: "80%", maxWidth: 150 }}
          />
        </a>
      </div>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a href="/admin" aria-expanded="false" className="nav-link">
            <i className="fe fe-home fe-16" />
            <span className="ml-3 item-text">Dashboard</span>
            <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1" id="h-blog">
        <span>Blog Management</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a
            href="#blog"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle nav-link"
          >
            <i className="fe fe-file-text fe-16" />
            <span className="ml-3 item-text">Blog</span>
            <span className="sr-only">(current)</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="blog">
            <li className="nav-item sauth">
              <a className="nav-link pl-3" href="/admin/blog/add">
                <span className="ml-1 item-text">Add Blog</span>
              </a>
            </li>
            <li className="nav-item sauth">
              <a className="nav-link pl-3" href="/admin/blog-type/add">
                <span className="ml-1 item-text">Add Blog Type</span>
              </a>
            </li>
            <li className="nav-item sauth">
              <a className="nav-link pl-3" href="/admin/blog/list">
                <span className="ml-1 item-text">List Blogs</span>
              </a>
            </li>
            <li className="nav-item sauth">
              <a className="nav-link pl-3" href="/admin/blog-type/list">
                <span className="ml-1 item-text">List Blogs Types</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="text-muted nav-heading mt-4 mb-1" id="h-blog">
        <span>Logs &amp; Analytics</span>
      </p>
      <ul className="navbar-nav flex-fill w-100 mb-2">
        <li className="nav-item dropdown">
          <a
            href="#traffic"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle nav-link"
          >
            <i className="fe fe-bar-chart-2 fe-16" />
            <span className="ml-3 item-text">Subscribers</span>
            <span className="sr-only">(current)</span>
          </a>
          <ul className="collapse list-unstyled pl-4 w-100" id="traffic">
            <li className="nav-item sauth">
              <a className="nav-link pl-3" href="./blog_type_list.php">
                <span className="ml-1 item-text">List Subscribers</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="btn-box w-100 mt-4 mb-1">
        <a
          onClick={logout}
          
          className="btn mb-2 btn-danger btn-lg btn-block"
        >
          <i className="fe fe-log-out fe-12 mx-2" />
          <span className="small">Log Out</span>
        </a>
      </div>
    </nav>
  </aside>
</>

    </>
  );
}
