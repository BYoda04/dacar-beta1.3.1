<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $id;
    private $cod;
    private $num;
    private $newCod;
    private $newCamp;
    private $newTurn;
    private $lastNum;

    public function searchSup($name,$paterno,$materno){
        $query = $this->connect()->prepare('SELECT * FROM supervisores WHERE name= :name AND paterno= :paterno AND materno= :materno' );
        $query->execute(['name' => $name, 'paterno' => $paterno, 'materno' => $materno]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function setID($name,$paterno,$materno){
        $query = $this->connect()->prepare('SELECT * FROM supervisores WHERE name= :name AND paterno= :paterno AND materno= :materno' );
        $query->execute(['name' => $name, 'paterno' => $paterno, 'materno' => $materno]);

        foreach ($query as $currentUser) {
            $this->id = $currentUser['user_cod'];
            $this->cod = $currentUser['id_supervisor'];
            $this->num = $currentUser['asesores'];
        }
    }

    public function setNewID($name,$paterno,$materno){
        $query = $this->connect()->prepare('SELECT * FROM supervisores WHERE name= :name AND paterno= :paterno AND materno= :materno' );
        $query->execute(['name' => $name, 'paterno' => $paterno, 'materno' => $materno]);

        foreach ($query as $currentUser) {
            $this->newCod = $currentUser['id_supervisor'];
            $this->newCamp = $currentUser['camp_cod'];
            $this->newTurn = $currentUser['turn_cod'];
            $this->lastNum = $currentUser['asesores'];
        }
    }

    public function getID(){
        return $this->id;
    }

    public function getCod(){
        return $this->cod;
    }

    public function getNum(){
        return $this->num;
    }

    public function getNewCod(){
        return $this->newCod;
    }

    public function getNewCamp(){
        return $this->newCamp;
    }

    public function getNewTurn(){
        return $this->newTurn;
    }

    public function getLastNum(){
        return $this->lastNum;
    }

}

?>