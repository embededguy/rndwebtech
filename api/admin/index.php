<?php
ob_start();
    // Set sessions
    if(!isset($_SESSION)) {
        session_start();
    }
    $hostname = "localhost";
    $username = "user";
    $password = "password";
    $dbname = "rnd";
    $conn = mysqli_connect($hostname, $username, $password, $dbname) or die("Database connection not established.");
    
  if (!isset($_SESSION["admin_logged_in"]) || $_SESSION["admin_logged_in"] !== true) {
      // Redirect to the login page if not logged in
      $customPath = "/admin/login.php";
      $actual_link = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]".$customPath;
      header("Location: $actual_link");
  }else{
    
    $sql = "SELECT COUNT(*) AS total_admins FROM admins;";
    $result = $conn->query($sql);
    $data = mysqli_fetch_assoc($result);
    $total_admins = $data["total_admins"];

    $sql = "SELECT COUNT(*) AS total_blogs FROM blog;";
    $result = $conn->query($sql);
    $data = mysqli_fetch_assoc($result);
    $total_blogs = $data["total_blogs"];

    $sql = "SELECT COUNT(*) AS total_blogs_types FROM blog_type;";
    $result = $conn->query($sql);
    $data = mysqli_fetch_assoc($result);
    $total_blogs_types = $data["total_blogs_types"];
  }
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="./assets/images/favicon.png">
    <title>RNDWebTech - Dashboard Admin Panel</title>
    <!-- Simple bar CSS -->
    <link rel="stylesheet" href="assets/css/simplebar.css">
    <!-- Fonts CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- Icons CSS -->
    <link rel="stylesheet" href="assets/css/feather.css">
    <link rel="stylesheet" href="assets/css/select2.css">
    <link rel="stylesheet" href="assets/css/dropzone.css">
    <link rel="stylesheet" href="assets/css/uppy.min.css">
    <link rel="stylesheet" href="assets/css/jquery.steps.css">
    <link rel="stylesheet" href="assets/css/jquery.timepicker.css">
    <link rel="stylesheet" href="assets/css/quill.snow.css">
    <!-- Date Range Picker CSS -->
    <link rel="stylesheet" href="assets/css/daterangepicker.css">
    <!-- App CSS -->
    <link rel="stylesheet" href="assets/css/app-light.css" id="lightTheme" disabled>
    <link rel="stylesheet" href="assets/css/app-dark.css" id="darkTheme">
    <script>
         if (!window.location.pathname.endsWith('/') && !window.location.pathname.endsWith('.php')) {
            // Redirect to the same URL with a trailing slash
            window.location.href = window.location.pathname + '/' + window.location.search + window.location.hash;
         }
    </script>
    <style>
      .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999; /* Ensure it's above other content */
      }
       ul {
            list-style-type: none;
            padding: 0;
        }
        .api-status {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        .api-status span {
            margin-right: 10px;
            font-size: 1.5em;
        }
        .active {
            color: green;
        }
        .inactive {
            color: red;
        }
    </style>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        // Hide the loading screen
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "none";
      });

    </script>
  </head>
  <body class="vertical dark">
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
    </div>
    <div class="wrapper">
      <?php include "./components/sidebar.php";?>
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <h2 class="h5 page-title">Welcome, <?php echo $_SESSION['name'];?>!</h2>
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col">
                  <h2 class="mb-2 page-title"><span class="fe fe-chevrons-right fe-16"></span> Admin Dashboard</h2>
                </div>
              </div>
              <br/>
              <div class="row">
                
                  <div class="col-md-3 mb-4">
                    <div class="card shadow">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col">
                            <span class="h2 mb-0"><?php echo $total_admins;?></span>
                            <p class="small text-muted mb-0">Admins</p>
                            <span class="badge badge-pill badge-primary"><span class="fe fe-16 fe-bar-chart text-muted mb-0" style="color: black !important;"></span></span>
                          </div>
                          <div class="col-auto">
                            <span class="fe fe-32 fe-users text-muted mb-0"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div> <!-- end section -->
                <div class="row">
                  <div class="col">
                    <h2 class="mb-2 page-title"><span class="fe fe-chevrons-right fe-16"></span> Blog Dashboard</h2>
                  </div>
                </div>
                <br/>
                <div class="row">
                  <div class="col-md-3 mb-4">
                    <div class="card shadow">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col">
                            <span class="h2 mb-4"><?php echo $total_blogs;?></span>
                            <p class="small text-muted mb-0">Total Blog</p>
                            <span class="badge badge-pill badge-primary"><span class="fe fe-16 fe-bar-chart-2 text-muted mb-0" style="color: black !important;"></span></span>
                          </div>
                          <div class="col-auto">
                            <span class="fe fe-32 fe-shopping-bag text-muted mb-0"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card shadow">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col">
                            <span class="h2 mb-4"><?php echo $total_blogs_types;?></span>
                            <p class="small text-muted mb-0">Total Blog Type</p>
                            <span class="badge badge-pill badge-primary"><span class="fe fe-16 fe-bar-chart-2 text-muted mb-0" style="color: black !important;"></span></span>
                            
                          </div>
                          <div class="col-auto">
                            <span class="fe fe-32 fe-shopping-bag text-muted mb-0"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> <!-- end section -->
                <div class="row">
                  <div class="col-md-12">
                    <p class="mt-5 mb-3 text-muted">© <script>document.write(new Date().getFullYear());</script>, Developed & Managed by Vhiron Technologies.</p>
                  </div>
                </div> <!-- end section -->
              <br/>
            </div> <!-- .col-12 -->
          </div> <!-- .row -->
        </div> <!-- .container-fluid -->        
      </main> <!-- main -->
    </div> <!-- .wrapper -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/moment.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/simplebar.min.js"></script>
    <script src='assets/js/daterangepicker.js'></script>
    <script src='assets/js/jquery.stickOnScroll.js'></script>
    <script src="assets/js/tinycolor-min.js"></script>
    <script src="assets/js/config.js"></script>
    <script src="assets/js/d3.min.js"></script>
    <script src="assets/js/topojson.min.js"></script>
    <script src="assets/js/datamaps.all.min.js"></script>
    <script src="assets/js/datamaps-zoomto.js"></script>
    <script src="assets/js/datamaps.custom.js"></script>
    <script src="assets/js/Chart.min.js"></script>
    <script>
      /* defind global options */
      Chart.defaults.global.defaultFontFamily = base.defaultFontFamily;
      Chart.defaults.global.defaultFontColor = colors.mutedColor;
    </script>
    <script src="assets/js/gauge.min.js"></script>
    <script src="assets/js/jquery.sparkline.min.js"></script>
    <script src="assets/js/apexcharts.min.js"></script>
    <script src="assets/js/apexcharts.custom.js"></script>
    <script src='assets/js/jquery.mask.min.js'></script>
    <script src='assets/js/select2.min.js'></script>
    <script src='assets/js/jquery.steps.min.js'></script>
    <script src='assets/js/jquery.validate.min.js'></script>
    <script src='assets/js/jquery.timepicker.js'></script>
    <script src='assets/js/dropzone.min.js'></script>
    <script src='assets/js/uppy.min.js'></script>
    <script src='assets/js/quill.min.js'></script>
    
    <script src="assets/js/apps.js"></script>
    <script>
      const apis = [
            { name: 'Market Status', url: 'https://www.nseindia.com/api/marketStatus', method: 'GET' },
            { name: 'Stock Live Price', url: 'https://www.google.com/finance/quote/NMDC:NSE?hl=en', method: 'GET' },
            { name: 'Nifty Movers', url: 'https://portal.tradebrains.in/api/index/NIFTY/movers/gainers?page=1&per_page=25&by=percent&ascending=false', method: 'GET' }
        ];

        const apiList = document.getElementById('apiList');

        apis.forEach(api => {
            const listItem = document.createElement('li');
            listItem.className = 'api-status';
            listItem.innerText = `Checking: ${api.name}...`;

            const options = {
                method: api.method,
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(api.url, options)
                .then(response => {
                    if (response.ok || response.type === 'opaque') {
                        listItem.innerHTML = `<span class="active"> ✅ </span><strong>${api.name}</strong>`;
                    } else {
                        listItem.innerHTML = `<span class="inactive"> ❌ </span><strong>${api.name}</strong>`;
                    }
                })
                .catch(error => {
                    listItem.innerHTML = `<span class="inactive"> ❌ </span><strong>${api.name}</strong>`;
                });

            apiList.appendChild(listItem);
        });
    </script>
    
  </body>
</html>