<?php

include_once '../../../includes/db.php';

class User extends DB{


    public function searchSale($date,$id){
        $query = $this->connect()->prepare('SELECT * FROM ventas WHERE date= :date AND asesor_cod= :id' );
        $query->execute(['date' => $date, 'id' => $id]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

}

?>