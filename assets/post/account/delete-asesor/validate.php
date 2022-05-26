<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $cod;
    private $num;
    private $codState;

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
            $this->cod = $currentUser['id_supervisor'];
            $this->num = $currentUser['asesores'];
        }
    }

    public function setState($state){
        if ($state == "activo") {
            $this->codState = 1;
        } else {
            $this->codState = 2;
        }
        
    }

    public function getCod(){
        return $this->cod;
    }

    public function getNum(){
        return $this->num;
    }
    
    public function getState(){
        return $this->codState;
    }

}

?>