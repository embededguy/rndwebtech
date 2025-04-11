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
	if ($_SERVER["REQUEST_METHOD"] === "POST") {

		if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        	// Handle invalid CSRF token 
        	die("CSRF token validation failed.");
    	}

		$blog_title = $_POST["blog-title"];
		$blog_slug  = $_POST["blog-slug"];
		$blog_date  = $_POST["date"];

		$blog_type  = $_POST['blog-type'];

		$content = $_POST['content-html'];
		$tagsArray = $_POST['tags'];

		$targetDirectory = "./../blog/assets/images/";

		if(isset($_FILES["image"])) {
			$timestamp = time();
			if($_FILES['image']['error'] === UPLOAD_ERR_OK){
		        $uploadFileName = $timestamp . '_' . basename($_FILES['image']['name']);
		        $targetPath = $targetDirectory . $uploadFileName;
		        move_uploaded_file($_FILES['image']['tmp_name'], ".".$targetPath);
		        $imageUrl = "./assets/images/". $uploadFileName;
		    }else{
		        $imageUrl = "";
		    }
		}
		// Tags 
		if (!empty($tagsArray)) {
			$tags = implode(",", $tagsArray);
		}

		$sql = "INSERT INTO `blog` (`title`, `slug`, `image`, `date`,`content`, `tags`, `fk_blogtype_id`) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

		$stmt = mysqli_prepare($conn, $sql);

		mysqli_stmt_bind_param($stmt, "ssssssi", $blog_title, $blog_slug, $imageUrl, $blog_date, $content, $tags, $blog_type);

		mysqli_stmt_execute($stmt);

		if (mysqli_stmt_affected_rows($stmt) > 0) {
			mysqli_stmt_close($stmt);
			mysqli_close($conn);
    		header("Location: ../blog_add.php?success=1");
		} else {

			header("Location: ../blog_add.php?success=0");
		}
	}

?>