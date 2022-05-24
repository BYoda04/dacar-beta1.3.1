<?php

include_once '../../includes/db.php';

class User extends DB{

    private $id;

    public function searchUser($name,$pass){
        $userMinun = strtolower($name);

        $query = $this->connect()->prepare('SELECT * FROM users WHERE user_name= :user AND password= :pass');
        $query->execute(['user' => $userMinun, 'pass' => $pass]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function setID($name){
        $userMinun = strtolower($name);
        $query = $this->connect()->prepare('SELECT * FROM users WHERE user_name = :user');
        $query->execute(['user' => $userMinun]);

        foreach ($query as $currentUser) {
            $this->id = $currentUser['id_user'];
        }
    }

    public function getID(){
        return $this->id;
    }

}

?>