<nav class="topnav navbar navbar-light">
  <button type="button" class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar">
    <i class="fe fe-menu navbar-toggler-icon"></i>
  </button>
  
  <ul class="nav">
    <li class="nav-item" style="display: none;">
      <a class="nav-link text-muted my-2" href="#" id="modeSwitcher" data-mode="dark">
        <i class="fe fe-sun fe-16"></i>
      </a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-muted pr-0" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="avatar avatar-sm mt-2">
          <img width="50" src="<?php echo $_SESSION["imgpath"];?>" alt="..." class="avatar-img rounded-circle">
        </span>
      </a>
      <!-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="./profile.php">Profile</a>
        <a class="dropdown-item" href="./settings.php">Settings</a>
      </div> -->
    </li>
  </ul>
</nav>
<aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
  <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
    <i class="fe fe-x"><span class="sr-only"></span></i>
  </a>
  <nav class="vertnav navbar navbar-light">
    <!-- nav bar -->
    <div class="w-100 mb-4 d-flex mt-4">
      <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.php">
        <img alt="rndwebtech-logo" src="./assets/images/rnd-logo.png" style="width: 80%; max-width: 150px;" />
      </a>
    </div>
    <ul class="navbar-nav flex-fill w-100 mb-2">
      <li class="nav-item dropdown">
        <a href="./" aria-expanded="false" class="nav-link">
          <i class="fe fe-home fe-16"></i>
          <span class="ml-3 item-text">Dashboard</span><span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
    
    
    <p class="text-muted nav-heading mt-4 mb-1" id="h-blog">
      <span>Blog Management</span>
    </p>
    <ul class="navbar-nav flex-fill w-100 mb-2">
      <li class="nav-item dropdown">
        <a href="#blog" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
          <i class="fe fe-file-text fe-16"></i>
          <span class="ml-3 item-text">Blog</span><span class="sr-only">(current)</span>
        </a>
        <ul class="collapse list-unstyled pl-4 w-100" id="blog">
          <li class="nav-item sauth">
            <a class="nav-link pl-3" href="./blog_add.php">
              <span class="ml-1 item-text">Add Blog</span>
            </a>
          </li>
          <li class="nav-item sauth">
            <a class="nav-link pl-3" href="./blog_type_add.php">
              <span class="ml-1 item-text">Add Blog Type</span>
            </a>
          </li>
          <li class="nav-item sauth">
            <a class="nav-link pl-3" href="./blog_list.php">
              <span class="ml-1 item-text">List Blogs</span>
            </a>
          </li>
          <li class="nav-item sauth">
            <a class="nav-link pl-3" href="./blog_type_list.php">
              <span class="ml-1 item-text">List Blogs Types</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <p class="text-muted nav-heading mt-4 mb-1" id="h-blog">
      <span>Logs & Analytics</span>
    </p>
    <ul class="navbar-nav flex-fill w-100 mb-2">
      <li class="nav-item dropdown">
        <a href="#traffic" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
          <i class="fe fe-bar-chart-2 fe-16"></i>
          <span class="ml-3 item-text">Subscribers</span><span class="sr-only">(current)</span>
        </a>
        <ul class="collapse list-unstyled pl-4 w-100" id="traffic">
          <li class="nav-item sauth">
            <a class="nav-link pl-3" href="./blog_type_list.php">
              <span class="ml-1 item-text">List Subscribers</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="btn-box w-100 mt-4 mb-1">
      <a href="./logout.php" target="_self" class="btn mb-2 btn-danger btn-lg btn-block">
        <i class="fe fe-log-out fe-12 mx-2"></i><span class="small">Log Out</span>
      </a>
    </div>
  </nav>
</aside>