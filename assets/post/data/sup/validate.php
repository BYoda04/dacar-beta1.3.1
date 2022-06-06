<?php

include_once '../../../includes/db.php';

class User extends DB{

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

    public function searchHourSale($date,$id,$hour){
        $query = $this->connect()->prepare('SELECT * FROM ventas_camp WHERE date= :date AND asesor_cod= :id AND hour= :hour' );
        $query->execute(['date' => $date, 'id' => $id,'hour'=>$hour]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
        
    }

    public function searchHourSolds($date,$id,$hour){
        $query = $this->connect()->prepare('SELECT * FROM ventas_camp WHERE date= :date AND asesor_cod= :id AND hour= :hour' );
        $query->execute(['date' => $date, 'id' => $id,'hour'=>$hour]);

        foreach ($query as $currentUser) {
            $this->productOne = $currentUser['product_one'];
            $this->productTwo = $currentUser['product_two'];
            $this->productTrhee = $currentUser['product_trhee'];
            $this->lastUgi = $currentUser['ugi'];
        }
        
    }

    public function searchSolds($date,$id){
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