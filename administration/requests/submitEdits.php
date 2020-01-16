<?php
$variables = json_decode(array_keys($_POST)[0]);

$id = $variables->id;
$values = json_decode($variables->values);
$url = explode('/',$variables->url);
$clearedUrlPageName = explode('_',end($url))[0];

if ($clearedUrlPageName === "staffEdit") {
    $unwantedCharacters = ['_','..'];
    foreach($values as  $key => $value){
        $value = str_replace($unwantedCharacters,".",$value);
        $update[] = ''. $key  .' = \'' . $value . '\' ';
    }
    $query = "UPDATE stafflist SET " . implode(',',$update)." WHERE ID = $id";
    //$stmt = $this->connect()->query($query);
    if ($query) {
        echo json_encode(array('NO_ERRORS' => 'true'));
    }else{
        echo json_encode(array('ERROR' => "JSON_ERROR"));
    }
}

?>