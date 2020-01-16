<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/connection.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$queries = new sql();
$gf = new glb_funcs();





if(isset($_POST['search'])){
 
 $rows = $queries->SelectQuery("SELECT id, uni as NAME,COUNTRY,www as LINK ,timeperiod as TIME,pdf as DOCUMENT, remarks as REMARKS,logo as LOGO FROM Erasmus WHERE uni LIKE '%".$gf->clean_xss($_POST['search'])."%'");
 
    
}else{
    $errors[] = array('errors'=>'No results have been found!');
}



if(isset($_POST['search']) && empty($errors)){
    if(!empty($rows)){
        echo json_encode($rows);
    }else{
        $errors[] = array('errors' =>'No results have been  found!');
        echo json_encode($errors);
    }
}
?>