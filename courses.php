<?php

require_once('inc/init.php');

$queries = new sql();

if(!isset($_GET['course']) || empty($_GET['course']) || !isset($_GET['subj']) || empty($_GET['subj'])){
    header("Location:http://www.tu-sofia.musclevale.com/courses.php?course=b&subj=eng");
}
function checkIsSet($var){
    if(isset($var) && !empty($var)){
        return true;
    }else{
        return "";
    }
}
$semestersToGet = [];
$subject = "";
if(isset($_GET['year']) && !empty($_GET['year']) && $_GET["year"] > 0 && $_GET["year"] <= 4){
    if($_GET["year"] == 1){
        $semestersToGet=[
            0=>"AND semester=1",
            1=>"OR semester=2"
        ];
    }else if($_GET["year"] == 2){
        $semestersToGet=[
            0=>"AND semester=3",
            1=>"OR semester=4"
        ];
    }else if($_GET["year"] == 3){
        $semestersToGet=[
            0=>"AND semester=5",
            1=>"OR semester=6"
        ];
    }else if($_GET["year"] == 4){
        $semestersToGet=[
            0=>"AND semester=7",
            1=>"OR semester=8"
        ];

    }
}
if(isset($_GET['course']) && $_GET['course'] == "b" ){
    if(isset($_GET['subj']) && $_GET['subj'] == "eng"){

        $course = "BEng";
        $subject = "Industrial Engineering";

        $rows = $queries -> selectQuery("SELECT programme,programmename,coursename,optional,semester,code,lecturer FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."'".(!empty($semestersToGet) ? implode($semestersToGet," "):""));
    }
}else if (isset($_GET['course']) && $_GET['course'] =="m"){
    if(isset($_GET['subj']) && $_GET['subj'] == "eng"){
        //Industrial Engineering

        $course = "MEng";
        $subject = "Industrial Engineering";


        $rows = $queries -> selectQuery("SELECT programme,programmename,coursename,optional,semester,code,lecturer FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."'".(!empty($semestersToGet) ? implode($semestersToGet," "):""));
        $subject = "EBEM<";

    }else if(isset($_GET['subj']) && $_GET['subj'] == "management"){
        // management
        $course = "MEng";
        $subject = "E-Management";


        $rows = $queries -> selectQuery("SELECT programme,programmename,coursename,optional,semester,code,lecturer FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."'".(!empty($semestersToGet) ? implode($semestersToGet," "):""));

    }else if(isset($_GET['subj']) && $_GET['subj'] == "ITBM"){
        //ITBM
        $course = "MEng";
        $subject = "ITBM";


        $rows = $queries -> selectQuery("SELECT programme,programmename,coursename,optional,semester,code,lecturer FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."'".(!empty($semestersToGet) ? implode($semestersToGet," "):""));


    }else{
        header("Location:http://www.tu-sofia.musclevale.com/courses.php?course=b&subj=eng");
    }



}else{
    $errors[] = "Възникна грешка, при вземането на информацията от датабазата!";
}
require_once('header.php');
?>




<?php
if(isset($rows) && !empty($rows)){
    ?>

    <!-- Background Image -->
    <div class="bg-img" style="background-image: url('http://tu-sofia.musclevale.com/images/courses/graduation-background.jpg');">
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
        <h1>
            <?php
            echo $subject." Courses ". ($_GET['course'] == "b" ? "Bachelor Degree Programme" : "Master Degree Programme");
            ?>
        </h1>
        <div class="content-wrapper">
            <ul class="semester-nav">
                <li class="semester <?php if(isset($_GET['generalInfo'])) echo "active";?>"><a href="/courses.php?course=b&subj=eng">Information</a></li>
                <li class="semester <?php if(isset($_GET['year']) && $_GET['year'] == 1) echo "active";?>"><a href="<?php echo $_SERVER["PHP_SELF"]."?course=b&subj=". $_GET["subj"] . "&year=1";?>">First Year</a></li>
                <li class="semester <?php if(isset($_GET['year']) && $_GET['year'] == 2) echo "active";?>"><a href="<?php echo $_SERVER["PHP_SELF"]."?course=b&subj=". $_GET["subj"] . "&year=2";?>">Second Year</a></li>
                <li class="semester <?php if(isset($_GET['year']) && $_GET['year'] == 3) echo "active";?>"><a href="<?php echo $_SERVER["PHP_SELF"]."?course=b&subj=".$_GET["subj"] . "&year=3";?>">Thirt Year</a></li>
                <li class="semester <?php if(isset($_GET['year']) && $_GET['year'] == 4) echo "active";?>"><a href="<?php echo $_SERVER["PHP_SELF"]."?course=b&subj=". $_GET["subj"] . "&year=4";?>">Forth Year</a></li>
            </ul>
            <div class = "search-engine search-icon-center" >
                <form method = "POST" class = "default-search-form">
                    <input type = "text" class = "animated-search" id= "animated-search-input" onkeyup ="LiveSearchCourses('/ajax/courses/courses_live_search.php','course=<?php echo $_GET['course'];?>&subj=<?php echo $_GET['subj']; ?>&year=<?php echo isset($_GET['year']) ? $_GET['year'] : "";?>','animated-search-input')" placeholder = "Search ...">
                    <button type = "submit" class = "animated-search-button" id = "animated-search-button" ><i class="fas fa-search"></i></button>

                </form>
            </div>

            <!--<div id='desktop-side-menu'>
                  <h3>Degrees</h3>
                  <ul>
                  <h4>Bachelour:</h4>
                  <li><a href = "http://www.tu-sofia.musclevale.com/courses.php?course=b&subj=eng" >Industrial Engineering</a></li>
                  <h4>Master:</h4>
                  <li><a href = "http://www.tu-sofia.musclevale.com/courses.php?course=m&subj=eng">Industrial Engineering</a></li>
                  <li><a href = "http://www.tu-sofia.musclevale.com/courses.php?course=m&subj=ITBM">ITBM</a></li>
                  <li><a href = "http://www.tu-sofia.musclevale.com/courses.php?course=m&subj=management">E-Management</a></li>
                  </ul>
              </div>-->

            <table class = "table table-responsive table-striped table-hover" id ="courseTable">
                <thead>
                <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <?php
                foreach ($rows as $key=>$array){
                    ?>
                    <tr>
                        <th><?php echo $array['code']; ?></th>
                        <td><?php echo "<b><a target = '_blank' href='https://elfe.tu-sofia.bg/ELFE/Docs/".$array['code'].".pdf'>".$array['coursename']."</b></a>(".$array['optional']." in semester ".$array['semester'].")";?></td>
                        <td><?php echo $array['lecturer']; ?></td>
                    </tr>
                    <?php
                }
                ?>
                </tbody>
            </table>
        </div>
    </section>


    <!--<script> document.getElementById('course-search').addEventListener("keyup",LiveSearch("/ajax/courses/courses_live_search.php","course=<?php echo $_GET['course'];?>&subj=<?php echo $_GET['subj']; ?>"));
</script>-->
    <?php

}else{
    $errors[] = "Няма намерени резултати!";
}
require_once('footer.php');
?>