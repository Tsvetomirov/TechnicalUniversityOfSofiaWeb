<?php
require_once './connect.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$connection = new sql();
$param = $_GET['querySearch'];
if(!empty($param)) {
    switch ($param){
        case "erasmus":
            $rows = $connection->selectQuery("SELECT uni,country,www,timeperiod,pdf,logo FROM Erasmus ");
            print_r(json_encode(["erasmus"=>$rows]));
            break;
            case "staff";
            break;
    }
}
