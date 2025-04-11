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
    $sql = "SELECT * FROM blog_type";
    $result = $conn->query($sql); 
    if ($result->num_rows > 0) {
      // Fetch ALL USERS
      $type = [];
      while ($row = $result->fetch_assoc()) {
        $type[] = $row;
      }
    } else {
      $type = [];
    }
    

    $conn->close();
  }

  if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
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
    <title>Add Blog - RNDWebTech</title>
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
    <!-- App CSS -->
    <link href=https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-dev.3/quill.snow.min.css rel=stylesheet>
    <script src=https://cdnjs.cloudflare.com/ajax/libs/quill/2.0.0-dev.3/quill.min.js></script>
    <link href="assets/css/quill-better-table.css" rel="stylesheet">

    <!-- Date Range Picker CSS -->
    <link rel="stylesheet" href="assets/css/daterangepicker.css">
    <!-- App CSS -->
    <link rel="stylesheet" href="assets/css/app-light.css" id="lightTheme">
    <link rel="stylesheet" href="assets/css/app-dark.css" id="darkTheme" disabled>
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
    </style>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        // Hide the loading screen
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.style.display = "none";
      });

    </script>
  </head>
  <body class="vertical  light  ">
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
            <h2 class="page-title">Blog <span class="fe fe-chevrons-right fe-16"></span> Add</h2>
            <p class="lead text-muted">Helps, you add a new blog</p>

              <div class="row">
                <div class="col-md-12">
                  <div class="card shadow mb-4">
                    <div class="card-header">
                      <strong class="card-title">CREATE BLOG</strong>
                    </div>
                    <?php
                      if (isset($_GET['success']) && $_GET['success'] == 1) {
                        echo '<div class="alert alert-success" style="text-align:center" role="alert">
                                <strong style="color:black">Success!</strong> Blog Added Successfully.
                              </div>';
                      }elseif(isset($_GET['success']) && $_GET['success'] == 0){
                        echo '<div class="alert alert-danger" style="text-align:center" role="alert">
                                <strong style="color:black">Error !!</strong>
                              </div>';
                      }
                    ?>
                    <form action="./controller/process_add_blog.php" method="POST" enctype="multipart/form-data">
                      <div class="card-body">
                        <div class="form-row">
                          <div class="col-md-4">
                              <label for="blog-title">Blog Title</label>
                              <input type="text" id="blog-title" class="form-control" name="blog-title" value="" placeholder="New Blog Title">
                          </div>
                          
                          <div class="form-group col-md-6">
                            <label for="basic-slug">Your URL</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">https://rndwebtech.com/blog/</span>
                              </div>
                              <input type="text" name="blog-slug" class="form-control" id="basic-slug" aria-describedby="basic-addon3">
                            </div>                          
                          </div>
                          <div class="col-md-2">
                            <label for="date-input1">Date of publish</label>
                            <div class="input-group">
                              <input name="date" type="text" class="form-control drgpicker" id="date-input1" value="" aria-describedby="button-addon2" required>
                              <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">   
                              <input type="hidden" id="content-html" name="content-html" value="">               
                              <div class="input-group-append">
                                <div class="input-group-text" id="button-addon-date"><span class="fe fe-calendar fe-16 mx-2"></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row">
                          <div class="col-md-3">
                            <label for="blog-type">Blog Type</label>
                              <select class="form-control" name="blog-type" id="lettertype" required>
                                  <option value="XX" selected> -- Select Blog Type -- </option>
                                  <?php
                                      foreach ($type as $spec) {
                                        $id = $spec['id'];
                                        $name = $spec['name'];
                                        echo "<option value='$id' >$name</option>";
                                      }
                                  ?>
                              </select>
                          </div>

                          <div class="form-group col-md-3">
                            <label for="customFile">Upload Banner Image</label>
                            <div class="custom-file">
                              <input name="image" type="file" class="custom-file-input" id="customFile">
                              <label class="custom-file-label" for="customFile">Choose file</label>
                            </div>
                          </div>

                          <div class="form-group col-md-6">
                            <label for="multi-select2">Enter Tags (multiple)</label>
                            <select class="form-control select2-multi" name="tags[]" id="multi-select2">
                              
                            </select>
                          </div>
                           <div class="row mb-4">
                          <div class="col-md-4">
                            <label for="multi-select2">Rows:</label>
                            <input id="prow" class="form-control" type="number" value="3" min="1">
                          </div>
                          <div class="col-md-4">
                            <label for="multi-select2">Columns:</label>
                            <input id="pcolumn" class="form-control" type="number" value="3" min="1">
                          </div>
                          <div class="col-md-4 mt-4 pt-1 align-iems-center">
                            <button class="btn btn-primary btn" type="button" id=insert-table>Insert table</button>
                          </div>
                        </div>
                          <div class="form-group col-md-12 mt-4">
                            <div class="col-md-12">
                                <h5 style="text-align:center;">** Image Preview **</h5>
                                <p style="text-align:center;">[ MIN RESOLUTION 1200 x 900 ]</p>
                            </div>
                            <div class="row justify-content-center">
                              <div id="imageSection" class="col-md-8"></div>
                            </div>
                          </div>

                        </div>
                        <br/>
                        <div class="row mb-4">
                          <div class="col-md-12">
                            <div class="card shadow">
                                <h5 class="card-title">Your Editor</h5>
                                <p>Write your creative content here.</p>
                                <!-- Create the editor container -->
                                <div id="editor" style="">

                                </div>
                            </div>
                          </div>
                        </div> <!-- end section -->
                        <div class="form-row">
                          <div class="col-md-12" >
                            <button type="submit" class="btn btn-primary mb-2">Submit</button><br/>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> <!-- end section -->
              <div class="row">
              </div> <!-- end section -->
              <div class="row">
                <div class="col-md-12">
                  <p class="mt-5 mb-3 text-muted">© <script>document.write(new Date().getFullYear());</script>, Developed & Managed by Vhiron Technologies.</p>
                </div>
              </div> <!-- end section -->
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
    <script src='assets/js/demo.js'></script>
    <script type="text/javascript" src="assets/js/quill-better-table.min.js"></script>
    <script>
      const cont = '';
      $('.select2').select2(
      {
        theme: 'bootstrap4',
      });
      $('.select2-multi').select2(
      {
        multiple: true,
        theme: 'bootstrap4',
        tags:true,
      });

      $('.drgpicker').daterangepicker(
      {
        singleDatePicker: true,
        timePicker: false,
        showDropdowns: true,
        locale:
        {
          format: 'DD/MM/YYYY'
        }
      });
      $('.time-input').timepicker(
      {
        'scrollDefault': 'now',
        'zindex': '9999' /* fix modal open */
      });
      /** date range picker */
      if ($('.datetimes').length)
      {
        $('.datetimes').daterangepicker(
        {
          timePicker: true,
          startDate: moment().startOf('hour'),
          endDate: moment().startOf('hour').add(32, 'hour'),
          locale:
          {
            format: 'M/DD hh:mm A'
          }
        });
      }
      var start = moment().subtract(29, 'days');
      var end = moment();

      function cb(start, end)
      {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }
      $('#reportrange').daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges:
        {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);
      cb(start, end);
      $('.input-placeholder').mask("00/00/0000",
      {
        placeholder: "__/__/____"
      });
      $('.input-zip').mask('00000-000',
      {
        placeholder: "____-___"
      });
      $('.input-money').mask("#.##0,00",
      {
        reverse: true
      });
      $('.input-phoneus').mask('(000) 000-0000');
      $('.input-mixed').mask('AAA 000-S0S');
      $('.input-ip').mask('0ZZ.0ZZ.0ZZ.0ZZ',
      {
        translation:
        {
          'Z':
          {
            pattern: /[0-9]/,
            optional: true
          }
        },
        placeholder: "___.___.___.___"
      });
      // editor
      
      
    </script>
    <script src="assets/js/apps.js"></script>

    <script>

      // Display selected images before submitting the form
        const imageSection = document.getElementById('imageSection');
        const inputImages = document.getElementById('customFile');

        inputImages.addEventListener('change', (event) => {
            imageSection.innerHTML = ''; // Clear previous previews

            for (const file of event.target.files) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.className = 'img-fluid';
                img.style.borderRadius = "10px"
                imageSection.appendChild(img);
            }
        });

    </script>
    
  </body>
</html>