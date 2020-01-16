<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/connection.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$queries = new sql();
$gf = new glb_funcs();

    if(isset($_POST['course']) && $_POST['course'] == "b" ){
    
    
        if(isset($_POST['subj']) && $_POST['subj'] == "eng"){
            
            $course = "BEng";
            $subject = "Industrial Engineering";
            
            
            $rows = $queries -> selectQuery("SELECT programme as program,programmename as prgname,coursename as cname,optional as option,semester,code,lecturer as lectname FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."' AND coursename LIKE '%".$gf->clean_xss($_POST['s'])."%'");
        
        }
        
    }else if (isset($_POST['course']) && $_POST['course'] =="m"){
        
        
            if(isset($_POST['subj']) && $_POST['subj'] = "eng"){
                //Industrial Engineering
                $course = "MEng";
                $subject = "Industrial Engineering";
                
                
                $rows = $queries -> selectQuery("SELECT programme as program,programmename as prgname,coursename as cname,optional as option,semester,code,lecturer as lectname FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."' AND coursename LIKE '%".$gf->clean_xss($_POST['s'])."%'");
            

            }else if(isset($_GET['subj']) && $_GET['subj'] = "management"){
                // management
                $course = "MEng";
                $subject = "E-Management";
                
                
                $rows = $queries -> selectQuery("SELECT programme as program,programmename as prgname,coursename as cname,optional as option,semester,code,lecturer as lectname FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."' AND coursename LIKE '%".$gf->clean_xss($_POST['s'])."%'");
            
                
                
            }else if(isset($_POST['subj']) && $_POST['subj'] = "ITBM"){
                //ITBM
                $course = "MEng";
                $subject = "ITBM";
                
                
                $rows = $queries -> selectQuery("SELECT programme as program,programmename as prgname,coursename as cname,optional as option,semester,code,lecturer as lectname FROM cources WHERE programme = '".$course."' AND programmename = '".$subject."' AND coursename LIKE '%".$gf->clean_xss($_POST['s'])."%'");
                
                
            }else{
                header("Location:http://www.tu-sofia.musclevale.com/courses.php?course=b&subj=eng");
            }
            
            
            
    }else{
        $errors[] = "Възникна грешка, при вземането на информацията от датабазата!";
    }

if(isset($rows) && !empty($rows) && empty($errors)){
    echo json_encode($rows);
}else{
    $errors[] = array('errors'=>"No results found!");
    echo json_encode($errors);
}

?>