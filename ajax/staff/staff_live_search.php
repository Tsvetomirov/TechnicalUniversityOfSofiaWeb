<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/connection.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$queries = new sql();
$gf = new glb_funcs();





if(isset($_POST['search'])){
 
 $rows = $queries->SelectQuery("SELECT id, title as rank, name as tutor,office as room ,tel as telephone,email,web as webpage FROM stafflist WHERE name LIKE '%".$gf->clean_xss($_POST['search'])."%'");
 
    
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
}else{
    echo json_encode($errors);
}

?>