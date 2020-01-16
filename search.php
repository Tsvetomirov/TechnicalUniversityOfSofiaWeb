<?php
if(!isset($_GET['search']) || isset($_GET['search']) && empty($_GET['search'])){
    header("Location:/index.php");
}
require_once("header.php");
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
							<h1 class="white-text">Search</h1>
							<p class="white-text">Results
							</p>
						</div>
					</div>
					<!-- /home content -->

				</div>
			</div>
		</div>
		<!-- /home wrapper -->

</header>
	<div id="portfolio" class="section md-padding bg-grey">
		<div class="container">
		    <h2>No results have been found for: <b><?php echo $_GET['search'];?></b></h2>
		    <div class="search_container">
		        <form method="get" action="/search.php">
		            <input type="text" name="search" class="search--input" value="<?php echo $_GET['search']; ?>"/>
		        </form>
		    </div>
		    </div>
		</dvi>
<?php
require_once("footer.php");
?>