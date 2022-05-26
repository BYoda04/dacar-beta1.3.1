<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $id;
    private $camp;
    private $turn;
    private $num;

    public function searchUser($name,$paterno,$materno){
        $nameMinun = strtolower($name);
        $paternoMinun = strtolower($paterno);
        $maternoMinun = strtolower($materno);

        $query = $this->connect()->prepare('SELECT * FROM supervisores WHERE name= :user AND paterno= :paterno AND materno= :materno');
        $query->execute(['user' => $nameMinun, 'paterno' => $paternoMinun, 'materno' => $maternoMinun]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function setID($name,$paterno,$materno){
        $nameMinun = strtolower($name);
        $paternoMinun = strtolower($paterno);
        $maternoMinun = strtolower($materno);

        $query = $this->connect()->prepare('SELECT * FROM supervisores WHERE name= :user AND paterno= :paterno AND materno= :materno');
        $query->execute(['user' => $nameMinun, 'paterno' => $paternoMinun, 'materno' => $maternoMinun]);

        foreach ($query as $currentUser) {
            $this->id = $currentUser['id_supervisor'];
            $this->camp = $currentUser['camp_cod'];
            $this->turn = $currentUser['turn_cod'];
            $this->num = $currentUser['asesores'];
        }
    }

    public function asesorExist($name,$paterno,$materno,$cod){
        $query = $this->connect()->prepare('SELECT * FROM asesores WHERE asesor_name= :asesor AND paterno= :paterno AND materno= :materno AND sup_cod= :cod');
        $query->execute(['asesor' => $name, 'paterno' => $paterno, 'materno' => $materno,'cod' => $cod]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function getID(){
        return $this->id;
    }

    public function getCamp(){
        return $this->camp;
    }

    public function getTurn(){
        return $this->turn;
    }

    public function getNumAsesor(){
        return $this->num;
    }

}

?>