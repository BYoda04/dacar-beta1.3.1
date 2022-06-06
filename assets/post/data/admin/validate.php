<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $capm;
    private $turn;
    private $productOne;
    private $productTwo;
    private $productTrhee;
    private $lastTotal;
    private $lastUgi;

    public function searchSale($date,$id){
        $query = $this->connect()->prepare('SELECT * FROM ventas WHERE date= :date AND asesor_cod= :id' );
        $query->execute(['date' => $date, 'id' => $id]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function searchCampSale($date,$id,$hour){
        $query = $this->connect()->prepare('SELECT * FROM ventas_camp WHERE date= :date AND asesor_cod= :id AND hour= :hour' );
        $query->execute(['date' => $date, 'id' => $id,'hour'=>$hour]);

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

    public function searchDatSold($date,$id){
        $query = $this->connect()->prepare('SELECT * FROM ventas WHERE date= :date AND asesor_cod= :id' );
        $query->execute(['date' => $date, 'id' => $id]);

        foreach ($query as $currentUser) {
            $this->productOne = $currentUser['product_one'];
            $this->productTwo = $currentUser['product_two'];
            $this->productTrhee = $currentUser['product_trhee'];
            $this->lastTotal = $currentUser['total'];
            $this->lastUgi = $currentUser['ugi'];
        }
        
    }

    public function searchDatHourSold($date,$id,$hour){
        $query = $this->connect()->prepare('SELECT * FROM ventas_camp WHERE date= :date AND asesor_cod= :id AND hour= :hour' );
        $query->execute(['date' => $date, 'id' => $id,'hour'=>$hour]);

        foreach ($query as $currentUser) {
            $this->productOne = $currentUser['product_one'];
            $this->productTwo = $currentUser['product_two'];
            $this->productTrhee = $currentUser['product_trhee'];
        }
        
    }

    public function getCamp(){
        return $this->camp;
    }

    public function getTurn(){
        return $this->turn;
    }

    public function getProductOne(){
        return $this->productOne;
    }

    public function getProductTwo(){
        return $this->productTwo;
    }

    public function getProductTrhee(){
        return $this->productTrhee;
    }

    public function getLastTotal(){
        return $this->lastTotal;
    }

    public function getLastUgi(){
        return $this->lastUgi;
    }

}

?>