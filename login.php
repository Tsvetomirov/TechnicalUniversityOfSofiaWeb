<?php
require_once $_SERVER['DOCUMENT_ROOT']. '/inc/init.php';
        $gf = new glb_funcs();


if($gf->logged_in() === true){

header('Location:/index.php');
}else{
	if(!empty($_POST['remember'])){
		//Инфо за страницата
		// Страницата изпраща проверява дали има празни полета в assets/login_page_erors
		// от там ако няма се редиректва към ajax/register.php
		// от там, ако всичко е точно и регистрацията е успешна се прехвърляме на
		//login.php, която сортира ако е в сесия акаунта се показва logged_in страницата
		// ако не е в сесия се показва страницата за login/register.
		setcookie('username',$gf->clean_xss($_POST['login_username']),time()+3600);
	}


if(isset($_POST['login_username']) && !empty($_POST['login_username'])){
    
		$username = $gf->clean_xss($_POST['login_username']);
		$password = $gf->clean_xss($_POST['login_password']);
		$name_exists = $gf->user_exists($username);
		 
		 
		 
		$required_fields = array ('login_username','login_password');
		foreach($_POST as $key=>$value){
			if(empty($value) && in_array($key , $required_fields)){
			$errors[] = 'Трябва да попълните всичките полета!';
			break 1;
			}
	
		}
		if($name_exists < 1){
			$errors[] = "Няма такъв потребител !";
		}
			$login = $gf->login($username,$password);
			if($login == false){
			     $errors[] = 'Името или паролата са грешни!';
			}else{
				$_SESSION['user_id'] = $login;
                header('Location:/index.php');
                exit();

			}
if(!empty($errors)){
    $print_errors ='<div class = "login_index_errors"><div class = "arrow-up"><div class = "arrow-up-inner"></div></div>'.$gf->output_errors($errors).'</div>';
}
       
}
require_once $_SERVER['DOCUMENT_ROOT'].'/header.php'; 

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
<script type = "text/javascript" src = "ajax/login/form_submit_checks.js" ></script>

<div id="primary" class="content-area">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">
					<div class="panel-heading">
						<div class="row">
							<div class="col-xs-6">
								<a href="#" class="active" id="login-form-link">Вход</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
								<form id="login-form"  method="post" role="form" style="display: block;">
									<div class="form-group">
										<input type="text" name="login_username" id="username" tabindex="1" class="form-control" placeholder="Име" value="<?php if(isset($_COOKIE['username'])){ echo clean_xss($_COOKIE['username']); } ?>">
									</div>
									<div class="form-group">
										<input type="password" name="login_password" id="password" tabindex="2" class="form-control" placeholder="Парола">
									</div>
									<div class="form-group text-center">
										<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
										<label for="remember"> Запомни ме</label>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Вход">
											</div>
										</div>
									</div>
									<div id="login_check"><?php if(isset($_POST['login_username']) && !empty($print_errors)){echo $print_errors;}?></div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href='/user_panel/login_panel/recover?mode=password'  tabindex="5" class="forgot-password">Забравена парола?</a>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<!--	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<form method = "POST">
		<input type= 'text' placeholder = 'Име' name='login_username'/>
		<input type = 'password' placeholder ='Парола' name='login_password'/>
        <p>Забравeно <a href='recover/?mode=username' ><b>Име</b></a> или <a href='www.shreddingnation.bg/recover/?mode=password'  ><b>Парола</b></a></p>
        <input type ='submit' value = 'Влизане' name = 'submit'/>
		</form>
		</div>
	</div>
-->
<?php
//сетваме низа с ерори, ако работи джаваскрипта, ако ли не работи
unset($_SESSION['errors']);
//използваме ПХП по горе на всеки събмит бутон

require_once $_SERVER['DOCUMENT_ROOT'].'/footer.php';
}
?>