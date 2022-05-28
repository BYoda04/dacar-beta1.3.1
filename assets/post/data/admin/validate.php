<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $capm;
    private $turn;

    public function searchSale($date,$id){
        $query = $this->connect()->prepare('SELECT * FROM ventas WHERE date= :date AND asesor_cod= :id' );
        $query->execute(['date' => $date, 'id' => $id]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function searchCamp($id){
        $query = $this->connect()->prepare('SELECT * FROM asesores WHERE id_asesor= :id' );
        $query->execute(['id' => $id]);

        foreach ($query as $currentUser) {
            $this->camp = $currentUser['camp_cod'];
            $this->turn = $currentUser['turn_cod'];
        }
    }

    public function getCamp(){
        return $this->camp;
    }

    public function getTurn(){
        return $this->turn;
    }


}

?>