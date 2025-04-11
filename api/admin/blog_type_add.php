<?php
include('config/db.php');

if (!isset($_SESSION["admin_logged_in"]) || $_SESSION["admin_logged_in"] !== true) {
    // Redirect to the login page if not logged in
    $customPath = "./admin/login.php";
    $actual_link = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]".$customPath;
    header("Location: $actual_link");
}

if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="./assets/images/favicon.png">
    <title>Add Blog Type | RNDWebTech </title>
    <!-- Simple bar CSS -->
    <link rel="stylesheet" href="css/simplebar.css">
    <!-- Fonts CSS -->
    <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- Icons CSS -->
    <link rel="stylesheet" href="css/feather.css">
    <link rel="stylesheet" href="css/select2.css">
    <link rel="stylesheet" href="css/dropzone.css">
    <link rel="stylesheet" href="css/uppy.min.css">
    <link rel="stylesheet" href="css/jquery.steps.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">
    <link rel="stylesheet" href="css/quill.snow.css">
    <!-- Date Range Picker CSS -->
    <link rel="stylesheet" href="css/daterangepicker.css">
    <!-- App CSS -->
    <link rel="stylesheet" href="css/app-light.css" id="lightTheme">
    <link rel="stylesheet" href="css/app-dark.css" id="darkTheme" disabled>
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
        .table{
            display: block;
            overflow-x: auto;
        }
        
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var loadingScreen = document.getElementById("loadingScreen");
            loadingScreen.style.display = "none";
        });
        // ########################################################################
        function formatNumberIndian(num) {
            const [integerPart, decimalPart] = num.split(".");
            const lastThreeDigits = integerPart.slice(-3);
            const otherDigits = integerPart.slice(0, -3);
            const formattedOtherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
            const formattedNumber = otherDigits ? formattedOtherDigits + "," + lastThreeDigits : lastThreeDigits;
            return decimalPart ? formattedNumber + "." + decimalPart : formattedNumber;
        }
    </script>
</head>
<body class="vertical light">
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
        <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
    </div>
    <div class="wrapper">
         <!-- Main Sidebar-->
        <?php include './components/navbar.php'; ?>
        <?php include "./components/sidebar.php";?>
        <main role="main" class="main-content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h2 class="page-title">Blog Type <span class="fe fe-chevrons-right fe-16"></span> Add</h2>
                        <p class="lead text-muted">Helps you add a new blog type.</p>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card shadow mb-4">
                                    <div class="card-header">
                                        <strong class="card-title">ADD NEW BLOG TYPE</strong>
                                    </div>
                                    <?php
                                        if (isset($_GET['success']) && $_GET['success'] == 1) {
                                            echo '<div class="alert alert-success" style="text-align:center" role="alert">
                                                    <strong style="color:black">Success!</strong> Type Added Successfully.
                                                </div>';
                                        } elseif (isset($_GET['success']) && $_GET['success'] == 0) {
                                            echo '<div class="alert alert-danger" style="text-align:center" role="alert">
                                                    <strong style="color:black">Error !!</strong>
                                                </div>';
                                        }
                                    ?>
                                    <div class="card-body">
                                        <form id="uploadForm" action="./controller/process_add_blog_type.php" method="POST">
                                          <div class="form-row">
                                            <div class="form-group col-md-4">
                                              <label for="">Blog Type: </label>
                                              <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
                                              <input name="name" type="text" class="form-control" id="" placeholder="Blog Type">
                                            </div>                                            
                                          </div>
                                          <button type="submit" class="btn btn-primary">Save</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end section -->
                    </div> <!-- .col-12 -->
                </div> <!-- .row -->
                <div class="row">
                    <div class="col-md-12">
                        <p class="mt-5 mb-3 text-muted">© <script>document.write(new Date().getFullYear());</script>, Developed & Managed by Vhiron Technologies.</p>
                    </div>
                </div> <!-- end section -->
            </div> <!-- .container-fluid -->        
        </main> <!-- main -->
    </div> <!-- .wrapper -->

    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/moment.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/simplebar.min.js"></script>
    <script src='js/daterangepicker.js'></script>
    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/tinycolor-min.js"></script>
    <script src="js/config.js"></script>
    <script src="js/d3.min.js"></script>
    <script src="js/topojson.min.js"></script>
    <script src="js/datamaps.all.min.js"></script>
    <script src="js/datamaps-zoomto.js"></script>
    <script src="js/datamaps.custom.js"></script>
    <script src="js/Chart.min.js"></script>
    <script src="js/gauge.min.js"></script>
    <script src="js/jquery.sparkline.min.js"></script>
    <script src="js/apexcharts.min.js"></script>
    <script src="js/apexcharts.custom.js"></script>
    <script src='js/jquery.mask.min.js'></script>
    <script src='js/select2.min.js'></script>
    <script src='js/jquery.steps.min.js'></script>
    <script src='js/jquery.validate.min.js'></script>
    <script src='js/jquery.timepicker.js'></script>
    <script src='js/dropzone.min.js'></script>
    <script src='js/uppy.min.js'></script>
    <script src='js/quill.min.js'></script>
    <script src="js/apps.js"></script>
    <script type="text/javascript" src="js/quill-better-table.js"></script>
    
    <script>
        $('.select2').select2({
            theme: 'bootstrap4',
        });
        $('.select2-multi').select2({
            multiple: true,
            theme: 'bootstrap4',
        });
        $('.drgpicker').daterangepicker({
            singleDatePicker: true,
            timePicker: false,
            showDropdowns: true,
            locale:
            {
                format: 'DD/MM/YYYY'
            }
        });
        document.addEventListener('DOMContentLoaded', function () {
            
        });
    </script>

</body>
</html>
