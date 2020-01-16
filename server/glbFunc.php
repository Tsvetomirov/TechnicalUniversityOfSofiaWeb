<?php
require_once($_SERVER["DOCUMENT_ROOT"].'/server/connect.php');

class GlobalFunctions extends sql {
    
    public function clean_xss($value) {
        $value = str_replace(array('<script>','</script>'),array("",""),$value);
        
        
    if ($value === '' ) {
        $value = NULL;
    }
    if (is_array($value)) {
        $value = implode($value);
    }
        return $this->connect()->real_escape_string($value);
    }
    
    public function login ($username, $password) {
        $clean_xss_username = $username;
        $clean_xss_password = md5($password);
    	$user_id = false;
    	$sql = "SELECT id  FROM management WHERE mail = '".$clean_xss_username."' AND password = '".$clean_xss_password."' ";
    	$stmt = $this->connect()->query($sql);
    	while ($result = $stmt ->fetch_assoc()) {
            $data[] = $result;
    	}
        if (isset($data)) {
            return $data[0]['id'];
        } else {
            return false;
        }
    }
    
	public function logged_in() {
	    
	    return (isset($_SESSION['user_id'])) ? true:false;
	    
	    
    }
    
    public function user_exists($username) {
/*        $sql  = "SELECT count(id) as count FROM management WHERE mail = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt -> bind_param('s',$username);
        $stmt = $this->connect()->query($sql);
        $stmt -> bind_result($user_exists);
        while ($result = $stmt->fetch_assoc()) {
            $data[] = $result;
        }
        if (isset($data)) {
            return $data[0]['count'];
        } else {
            return 0;
        }
       
        return $user_exists;*/
    }
    
    public function output_errors($errors) {
    	if (is_array($errors) == true) {
    	    return '<ul><li>'.implode('</li><li>', $errors) .'</li></ul>';
        } else {
            $data = array($errors);
            return '<ul><li>'.implode('</li><li>', $data) .'</li></ul>';
        }
    }
    
}


?>