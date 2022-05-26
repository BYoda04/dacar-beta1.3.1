<?php

$servidor = "localhost";
$nombreusuario = "root";
$password = "";
$db = "dbbeta";

$conexion = new mysqli($servidor, $nombreusuario, $password,$db);

if($conexion-> connect_error){
    die("Conexión fallida: " . $conexion-> connect_error);
} 

include_once 'validate.php';

$validate = new User(); 

$name = $_POST['asesorName'];
$paterno = $_POST['paternoName'];
$materno = $_POST['maternoName'];
$sup = $_POST['sup'];

$array = explode(" ",$sup);

$minunName = strtolower($name);
$minunPaterno = strtolower($paterno);
$minunMaterno = strtolower($materno);

if(($_POST['asesorName'] !== "") && ($paterno = $_POST['paternoName'] !== "") && $materno = $_POST['maternoName'] !== ""){

    if ($validate->searchUser($array[0],$array[1],$array[2])) {
        $validate->setID($array[0],$array[1],$array[2]);
        $id = $validate->getID();
        $camp = $validate->getCamp();
        $turn = $validate->getTurn();
        $numAsesor = $validate->getNumAsesor();
        if ($validate->asesorExist($minunName,$minunPaterno,$minunMaterno,$id)) {
            echo "el asesor ya fue creado";
        } else {
            
            $sql = "INSERT INTO `asesores`( `asesor_name`, `paterno`, `materno`, `sup_cod`, `camp_cod`, `turn_cod`, `state`) VALUES ('$minunName','$minunPaterno','$minunMaterno','$id','$camp','$turn','1')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "UPDATE `supervisores` SET `asesores`=$numAsesor + 1 WHERE `id_supervisor`='$id'";
                $query = mysqli_query($conexion,$sql);

                if ($query) {
                    echo "enviado";
                } else {
                    echo "error";
                }
            } else {
                echo "error";
            }
            
        }
        
    } else {
        echo "no existe";
    }

} else {
    echo "rellena los campos";
}

?>