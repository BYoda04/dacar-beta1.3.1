<?php

include_once '../../../includes/db.php';

class User extends DB{

    private $inversion;
    private $lead;
    private $google;

    public function searchInversion($date){
        $query = $this->connect()->prepare('SELECT * FROM inversion WHERE date= :date');
        $query->execute(['date' => $date]);

        if($query->rowCount()){
            return true;
        }else{
            return false;
        }
    }

    public function searchData($date){
        $query = $this->connect()->prepare('SELECT * FROM inversion WHERE date= :date' );
        $query->execute(['date' => $date]);

        foreach ($query as $currentUser) {
            $this->inversion = $currentUser['inversion'];
            $this->lead = $currentUser['lead'];
            $this->google = $currentUser['lead_google'];
        }
    }

    public function getInversion(){
        return $this->inversion;
    }

    public function getLead(){
        return $this->lead;
    }

    public function getGoogle(){
        return $this->google;
    }

}

?>