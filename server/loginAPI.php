<?php
require_once ("./connect.php");
require_once ("./glbFunc.php");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$functions = new GlobalFunctions();
$decode = json_decode(file_get_contents('php://input'));

foreach($decode->credentials as $key=>$value){
    if(empty($value)){
        return print_r(json_encode(['Please fill all of the fields!']));
    }
}

$username = $functions->clean_xss($decode->credentials->username);
$password = $functions->clean_xss(md5($decode->credentials->password));

if(!empty($username) && is_string($username) && !empty($password) && is_string($password)){
    $query = "SELECT position,name,title,phone,mail,office,image FROM management WHERE mail = '".$username."' AND password='".$password."'";
    $rows = $functions->selectQuery($query);
    if(isset($rows[0]) && !empty($rows[0])){
        if(!session_start()){
            session_start();
            $_SESSION['user_id'] = $rows[0];
        }
        print_r($_SESSION);
        return print_r(json_encode([true]));
    }else{
        return print_r(json_encode(["Username or password are incorrect!"]));
    }

}