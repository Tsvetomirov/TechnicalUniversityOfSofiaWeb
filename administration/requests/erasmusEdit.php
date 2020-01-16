<?php
$postType = json_decode(implode(array_keys($_POST)));
require_once($_SERVER['DOCUMENT_ROOT'].'/inc/glbFunc.php');
$gf = new glb_funcs();
$sql = new sql();


$action = $gf->clean_xss($postType->action);
$id = $gf->clean_xss($postType->id);



if(isset($action) && $action == 'edit' ){
    
    $query = "SELECT id, uni as NAME,COUNTRY,www as LINK ,timeperiod as TIME,pdf as DOCUMENT, remarks as REMARKS,logo as LOGO FROM Erasmus WHERE id =".$id;
    
    $result = $sql->selectQuery($query);
    
    echo json_encode(array('true'=>$result[0]));
    
}else{
    return json_encode(array('false'=>'error'));
}

?>