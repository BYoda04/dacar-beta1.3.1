<?php

include_once '../../includes/db.php';

class Datos extends DB{

    function obtenerData(){
        $query = $this->connect()->query('SELECT * FROM ventas');

        return $query;
    }

}

?>