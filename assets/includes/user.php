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
        $queryOne = $this->connect()->prepare('SELECT * FROM users WHERE user_name = :user');
        $queryOne->execute(['user' => $userMinun]);

        foreach ($queryOne as $currentUser) {
            $this->rol = $currentUser['rol_user'];
        }

        $queryTwo = $this->connect()->prepare('SELECT * FROM supervisores WHERE user_name = :user');
        $queryTwo->execute(['user' => $userMinun]);

        if($queryTwo->rowCount()){
            foreach ($queryTwo as $currentUser) {
                $this->username = $currentUser['name'];
            }
        }else{
            $this->username = $userMinun;
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