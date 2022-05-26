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

$name = $_POST['sup'];
$newName = $_POST['new-sup'];
$array = explode(" ",$name);
$newArray = explode(" ",$newName);
$minunName = strtolower($array[0]);
$minunPaterno = strtolower($array[1]);
$minunMaterno = strtolower($array[2]);
$minunNewName = strtolower($newArray[0]);
$minunNewPaterno = strtolower($newArray[1]);
$minunNewMaterno = strtolower($newArray[2]);

    if ($validate->searchSup($minunName,$minunPaterno,$minunMaterno)) {
        $validate->setID($minunName,$minunPaterno,$minunMaterno);
        $validate->setNewID($minunNewName,$minunNewPaterno,$minunNewMaterno);
        $id = $validate->getID();
        $cod = $validate->getCod();
        $num = $validate->getNum();
        $newCod = $validate->getNewCod();
        $newCamp = $validate->getNewCamp();
        $newTurn = $validate->getNewTurn();
        $lastNum = $validate->getLastNum();

        $sql = "DELETE FROM `supervisores` WHERE `id_supervisor`='$cod'";
            $query = mysqli_query($conexion,$sql);
        if ($query) {
            $sql = "DELETE FROM `users` WHERE `id_user`='$id'";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "UPDATE `asesores` SET `sup_cod`='$newCod',`camp_cod`='$newCamp',`turn_cod`='$newTurn' WHERE `sup_cod`='$cod'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `supervisores` SET `asesores`=$lastNum + $num WHERE `id_supervisor`='$newCod'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "eliminado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error";
                }
            } else {
                echo "error";
            }
        } else {
            echo "error";
        }

    } else {
        echo "no existe";
    }
    


?>