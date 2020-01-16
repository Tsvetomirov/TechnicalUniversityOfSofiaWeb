<!DOCTYPE html>

<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/init.php');

$pageName = explode('.',str_replace('/','',$_SERVER['PHP_SELF']));
$page = array_shift($pageName);

$gf = new glb_funcs();

$pageGetValues = '';
if(isset($_GET)){
    $result = array();
    foreach ($_GET as $keys => $values)
    {
        $result[] = $keys. "=". $values;
    }
    $pageGetValues = (implode($result,'&'));
}
else{$pageGetValues = '';}
?>
<html lang="en">
    
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Technical University of Sofia, ELFE</title>


	<!-- Bootstrap -->
	<link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
	<script src="js/intersection-observer.js" type="text/javascript"></script>
<!-- remove -->
	<!-- Owl Carousel -->
	<link type="text/css" rel="stylesheet" href="css/owl.carousel.css" />
	<link type="text/css" rel="stylesheet" href="css/owl.theme.default.css" />

	<!-- Magnific Popup -->
	<link type="text/css" rel="stylesheet" href="css/magnific-popup.css" />
<!-- remove -->
	<!-- Font Awesome Icon -->
	<link rel="stylesheet" href="/resources/fonts/font-awesome.min.css">

	<!-- Custom stlylesheet -->
	<link type="text/css" rel="stylesheet" href="css/style.css" />

    <script type ="text/javascript" src= "js/functions.js" ></script>
</head>

<body>
	<!-- Header -->
	<header id="<?php if($_SERVER["SCRIPT_NAME"] == "/index.php"){echo "home";}else{echo "home-subpage";}?>">
	    
	    		<!-- Nav -->
		<nav id="nav" class="navbar nav-transparent">
			<div class="container">

				<div class="navbar-header">
					<!-- Logo -->
					<div class="brand"> <!--class="navbar-brand" from bootstrap -->
						<a href="<?php echo 'index.php';?>">
							<div class = "miniLogoContainer">
							    	<img class="logo-alt" src="/images/logo-new.png" alt="logo">
                                    <div class = "miniFirstFigure <?php if(strpos($_SERVER["PHP_SELF"],"index")!== false){echo "homePage"; }?>" id = "miniFirstFigure">
                                        <div class ="miniPolygon2"></div>
                                        <div class = "miniPolygon1"></div>
                                        <div class = "miniPolygon3"></div>
                                        <div class = "miniPolygon4"></div>
                                    </div>
                                
                                    <div class="miniHexagon"></div>
                                    <div class = "miniSecondFigure <?php if(strpos($_SERVER["PHP_SELF"],"index")!== false){echo "homePage"; }?>" id="miniSecondFigure">
                                        <div class ="miniPolygon22"></div>
                                        <div class = "miniPolygon21"></div>
                                        <div class = "miniPolygon23"></div>
                                        <div class = "miniPolygon24"></div>
                                    </div>
                                    <div class = "miniThirdFigure <?php if(strpos($_SERVER["PHP_SELF"],"index")!== false){echo "homePage"; }?>" id="miniThirdFigure">
                                        <div class = "miniPolygon32"></div>
                                        <div class = "miniPolygon31"></div>
                                        <div class = "miniPolygon33"></div>
                                        <div class = "miniPolygon34"></div>
                                    </div>
                                    
                                </div>
						</a>
					</div>
					<!-- /Logo -->

					<!-- Collapse nav button -->
					<div class="nav-collapse" id ="navigation-collapse">
						<span></span>
					</div>
					<!-- /Collapse nav button -->
				</div>

				<!--  Main navigation  -->
				<ul class="main-nav nav navbar-nav navbar-right">
					<li><a href="/index.php">Home</a></li>
					<li><a href="/courses.php">Courses</a></li>
					<li><a href="/erasmus.php">Erasmus+</a></li>
					<li><a href="/staff.php">Staff</a></li>
					<li class="has-dropdown"><a href="#blog">Dropdown</a>
						<ul class="dropdown">
							<li><a href="blog-single.html">Dropdown test</a></li>
						</ul>
					</li>
					<?php  if($gf->logged_in()){echo '<li><a href="/administration/home.php">Admin Panel</a></li>';}?>
					<?php if(strlen($page) > 0) {?><li id = "search-trigger" onclick = "activateSearch(event,<?php echo "'".$pageGetValues."'";?>)" ><a id = "website-search" data-search-page = "<?php echo $page; ?>" ><i class="fas fa-search"></i></a></li><?php }?>
					<div id="search-box">
					    <form id="search-dropdown" method="get" action="search.php">

					    </form>
					</div>
				</ul>
				<!-- /Main navigation -->

			</div>
		</nav>
		<!-- /Nav -->

	    
	    
