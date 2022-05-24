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

$userName = $_POST['username'];
$pass = $_POST['password'];
$camp = $_POST['camp'];
$turn = $_POST['turn'];

if(($_POST['username'] !== "") && ($_POST['password'] !== "")){
    $userMinun = strtolower($userName);
    $md5pass = md5($pass);

    $sql = "INSERT INTO `users`(`user_name`, `password`, `rol_user`) VALUES ('$userMinun','$md5pass','2')";
    $query = mysqli_query($conexion,$sql);
    if ($query) {
        if ($validate->searchUser($userName,$md5pass)) {
            $validate->setID($userName);
            $validate->setCamp($camp);
            $validate->setTurn($turn);
            $id = $validate->getID();
            $campCod = $validate->getCamp();
            $turnCod = $validate->getTurn();

            $sql = "INSERT INTO `supervisores`(`supervisor_name`, `user_cod`, `camp_cod`, `turn_cod`, `asesores`) VALUES ('$userMinun','$id','$campCod','$turnCod','0')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                echo "enviado";
            } else {
                echo "error";
            }
        }
    } else {
        echo "error";
    }

}

?>