<?php
require_once('header.php');
require_once('inc/init.php');

$queries = new sql();

$rows = $queries->SelectQuery("SELECT uni,country,www,timeperiod,pdf,logo FROM Erasmus ");



?>


<?php 
if(!empty($rows)){
?>


		<!-- Background Image -->
		<div class="bg-img" style="background-image: url('http://tu-sofia.musclevale.com/images/erasmus/erasmus.jpg');">
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
<section class = "course-sectionx1" id="course-sectionx1">
    
    <div id = "erasum-inner-header">
        <h1>Erasmus +</h1>
        <p>Erasmus schemes can last between three months and a year. You may be required to do Erasmus as part of your degree, or you might simply decide to spread your wings and spend a few months in another country.</p>
        <p>Either way, it will look good on your CV, help you to become more motivated, make you more independent, improve your language skills and allow you to gain some great work experience.</p>
        <form method = "POST" class = "default-search-form">

            <input type = "text" class = "animated-search" id= "animated-search-input" onkeyup ="LiveSearchErasmus('/ajax/erasmus/erasmus_live_search.php','','animated-search-input')" placeholder = "Search ...">
            <button type = "submit" class = "animated-search-button" id = "animated-search-button" ><i class="fas fa-search"></i></button>
            
        </form>
    </div>



    <div id='universal-side-menu'>
        <div id = "mobile-menu-arrow" onclick="mobileMenu(this)"></div>
        <li class = "univ-menu-header">Erasmus+ documents</li>
        <ul id = "univ-menu-ul">
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiST.html">Outgoing students</a></li>
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiST.html">Incoming students</a></li>
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiPrepodavateli.html">Outgoing lecturers</a></li>
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiPrepodavateli.html">Incoming lecturers</a></li>
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiPrepodavateliALL.html">Outgoing staff</a></li>
        <li><a href = "http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiPrepodavateliALL.html">Incoming staff</a></li>
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
    
    <div class = "row" id = 'tableRow'>
    <?php
    foreach($rows as $key => $value){
    ?>
    			<div class="col-md-4 col-xs-6 work">
    				<img class="img-responsive" id = "img-erasum" src="<?php echo $value['logo']; ?>" alt="">
    				<div class="overlay"></div>
    				<div class="work-content">
    					<span></span>
    					<h3><?php echo $value['uni'];?></h3>
    					<div class="work-link">
    						<a href="<?php  echo 'https://elfe.tu-sofia.bg/ELFE/Docs/'.$value['pdf'];?>.pdf" target ="_blank"><i class="fas fa-file-pdf"></i></a>
    						<a class="lightbox" href="<?php echo $value['www'];?>" target ="_blank" ><i class="fas fa-globe"></i></a>
    					</div>
    				</div>
    			</div>
    			
    			<?php
                }
    			?>
    </div>
</section>
<?php
}else{
    echo 'No results Found!';
}


require_once('footer.php');
?>