<?php
class sql {

    protected function connect(){

        $db_servername = 'name.com';
        $db_username   = 'name';
        $db_pass       = 'pass';
        $db_name       = 'name-sofia';



        $conn = new mysqli($db_servername,$db_username,$db_pass,$db_name);
        $conn->set_charset("utf8");



        if (mysqli_connect_errno()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
        return $conn;

    }


    public function selectQuery($query){

        $stmt = $this->connect()->query($query);


        if ($stmt === false) {
            return "SelectQuery Function Error";
        }


        while($result = $stmt->fetch_assoc()){

            $data[] = $result;
        }
        if(isset($data)){
            return $data;
        }
        return true;
    }



    public function updateQuery($query){

        $stmt = $this->connect()->query($query);
        if ($stmt === false) {
            trigger_error($this->mysqli->error, E_USER_ERROR);
            return;
        }

        if($stmt === true){
            return true;
        }
        return true;
    }

}