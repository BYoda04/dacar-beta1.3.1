<?php

include_once 'db.php';

class User extends DB{

    private $rol;
    private $username;

    public function userExists($user, $pass){
        $userMinun = strtolower($user);
        $md5pass = md5($pass);

        $query = $this->connect()->prepare('SELECT * FROM users WHERE user_name = :user AND password = :pass');
        $query->execute(['user' => $userMinun, 'pass' => $md5pass]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function setUser($user){
        $userMinun = strtolower($user);
        $query = $this->connect()->prepare('SELECT * FROM users WHERE user_name = :user');
        $query->execute(['user' => $userMinun]);

        foreach ($query as $currentUser) {
            $this->rol = $currentUser['rol_user'];
            $this->username = $currentUser['user_name'];
        }
    }

    public function getRol(){
        return $this->rol;
    }

    public function getUserName(){
        return $this->username;
    }
}

?>