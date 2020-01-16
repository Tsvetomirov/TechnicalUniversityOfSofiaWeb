<?php 
require_once('header.php');

require_once('inc/init.php');

$queries = new sql();
$gf = new glb_funcs();
$errors[] = '';


$rows = $queries -> SelectQuery("SELECT title, name,office,tel,email,web FROM stafflist");


if(!$rows){
    $errors[] = 'There was an error with connecting to database.';
}


?>

		<!-- Background Image -->
		<div class="bg-img" style="background-image: url('http://tu-sofia.musclevale.com/images/staff/university-staff.jpg');">
			<div class="overlay"></div>
		</div>
		<!-- /Background Image -->


		<!-- home wrapper -->
		<div class="home-wrapper">
			<div class="container">
				<div class="row">

					<!-- home content -->
					<div class="col-md-10 col-md-offset-1">
						<div class="home-content">
							<h1 class="white-text">ELFE WEBSITE</h1>
							<p class="white-text">Paragraph
							</p>
						</div>
					</div>
					<!-- /home content -->

				</div>
			</div>
		</div>
		<!-- /home wrapper -->

</header>


<?php

if(empty($errors[0]) && isset($rows)){

?>
<section class = "course-sectionx1" id="course-sectionx1">
    
    <div class="content-wrapper">
        <div id='desktop-side-menu'>
            <h3>Resources:</h3>
            <ul>
                <li><a href = "https://e-university.tu-sofia.bg/ETUS/index.php">E-University</a></li>
                <li><a href = "https://mail.tu-sofia.bg/">e-mail</a></li>
            </ul>
        </div>
        <div id='universal-side-menu'>
            <div id = "mobile-menu-arrow" onclick="mobileMenu(this)"></div>
            <li class = "univ-menu-header">Resources</li>
            <ul id = "univ-menu-ul">
                <li><a href = "https://e-university.tu-sofia.bg/ETUS/index.php">E-University</a></li>
                <li><a href = "https://mail.tu-sofia.bg/">e-mail</a></li>
            <!-- Example sub menus
               <li class='active has-sub'><a href='#'><span>Products</span></a>
                  <ul>
                     <li class='has-sub'><a href='#'><span>Product 1</span></a>
                        <ul>
                           <li><a href='#'><span>Sub Product</span></a></li>
                           <li class='last'><a href='#'><span>Sub Product</span></a></li>
                        </ul>
                     </li>
                  </ul>
               </li>-->
            </ul>
        </div>

    <table class = "table table-responsive table-striped table-hover" id ="courseTable">
        <thead>
            <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Office</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Webpage</th>
            </tr>
        </thead>
        <tbody>
           <?php
           foreach($rows as $key => $value){

           ?>
            <tr>
                <td><?php echo $value['title']; ?></td>
                <td><?php echo '<b>'.$value['name'].'</b>';?></td>
                <td><?php echo $value['office'];?> </td>
                <td><?php echo $value['tel'];?></td>
                <td><?php echo $value['email'];?></td>
                <td><?php echo $value['web'];?></td>
            </tr>
            <?php
           }
            ?>
        </tbody>

    </table>
    <div class = "search-engine search-icon-center" >
        <form method = "POST" class = "default-search-form">
            <input type = "text" class = "animated-search" id= "animated-search-input" onkeyup ="LiveSearchStaff('/ajax/staff/staff_live_search.php','','animated-search-input')" placeholder = "Search ...">
            <button type = "submit" class = "animated-search-button" id = "animated-search-button" ><i class="fas fa-search"></i></button>
        </form>
    </div>
    </div>
</section>


<?php
}
require_once('footer.php');
?>