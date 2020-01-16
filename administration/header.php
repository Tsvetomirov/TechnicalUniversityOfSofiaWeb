<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="../administration/images/apple-icon.png">
  <link rel="icon" type="image/png" href="../administration/images/favicon.png">
  <title>
    Admin Panel
  </title>
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet" />

  <!-- Nucleo Icons -->
  <link href="../administration/css/fontawesome.min.css" rel="stylesheet" />
  <!-- CSS Files -->
  <script src = "../administration/js/core/custom.js"></script>
  <link href="../administration/css/black-dashboard.min.css" rel="stylesheet"/>
</head>



<body class="white-content">
  <div class="wrapper">
    <div class="sidebar" data="blue">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tu-sofia-logo.svg/1200px-Tu-sofia-logo.svg.png"/>
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">
            Technical University of Sofia
          </a>
        </div>
        <ul class="nav">
          <li <?php  if($_SERVER['PHP_SELF'] == '/administration/home.php') {echo 'class="active "';} else {echo 'class = ""';}?>>
            <a href="./home.php">
              <i class="fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li <?php  if($_SERVER['PHP_SELF'] == '/administration/staffEdit.php') {echo 'class="active "';} else {echo 'class = ""';}?>>
            <a href="./staffEdit.php">
                <i class="fas fa-users-cog"></i>
              <p>Edit Staff</p>
            </a>
          </li>
          <li  <?php  if($_SERVER['PHP_SELF'] == '/administration/erasmusEdit.php') {echo 'class="active "';} else {echo 'class = ""';}?> >
            <a href="./erasmusEdit.php">
              <i class="fas fa-users"></i>
              <p>Edit Erasmus</p>
            </a>
          </li>
          <li  <?php  if($_SERVER['PHP_SELF'] == '/administration/courcesEdit.php') {echo 'class="active "';} else {echo 'class = ""';}?>>
            <a href="./courcesEdit.php">
              <i class="fas fa-book"></i>
              <p>Courses</p>
            </a>
          </li>
          <li <?php  if($_SERVER['PHP_SELF'] == '/administration/user-profile.php') {echo 'class="active "';} else {echo 'class = ""';}?>>
            <a href="./user-profile.php">
              <i class="fas fa-user-circle"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i class="tim-icons icon-align-center"></i>
              <p>Typography</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel" data="blue">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-toggle d-inline">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="/index.php">Dashboard</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div class="collapse navbar-collapse" id="navigation">
            <ul class="navbar-nav ml-auto">
              <li class="search-bar input-group">
                <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i class="fas fa-search"></i>
                  <span class="d-lg-none d-md-block">Search</span>
                </button>
              </li>
              <li class="dropdown nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div class="notification d-none d-lg-block d-xl-block"></div>
                  <i class="fas fa-bell"></i>
                  <p class="d-lg-none">
                    Notifications
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li class="nav-link">
                    <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
                  </li>
                  <li class="nav-link">
                    <a href="javascript:void(0)" class="nav-item dropdown-item">You have 5 more tasks</a>
                  </li>
                  <li class="nav-link">
                    <a href="javascript:void(0)" class="nav-item dropdown-item">Your friend Michael is in town</a>
                  </li>
                  <li class="nav-link">
                    <a href="javascript:void(0)" class="nav-item dropdown-item">Another notification</a>
                  </li>
                  <li class="nav-link">
                    <a href="javascript:void(0)" class="nav-item dropdown-item">Another one</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <div class="photo">
                    <img src="/administration/images/anime3.png" alt="Profile Photo">
                  </div>
                  <b class="caret d-none d-lg-block d-xl-block"></b>
                  <p class="d-lg-none">
                    Log out
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-navbar">
                  <li class="nav-link">
                    <a href="./user-profile.php" class="nav-item dropdown-item">Profile</a>
                  </li>
                  <li class="nav-link">
                    <a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a>
                  </li>
                  <li class="dropdown-divider"></li>
                  <li class="nav-link">
                    <a href="/logout.php" class="nav-item dropdown-item">Log out</a>
                  </li>
                </ul>
              </li>
              <li class="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <i class="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Navbar -->