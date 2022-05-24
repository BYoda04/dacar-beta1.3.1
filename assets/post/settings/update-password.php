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

$userName = $_POST['userName'];
$lastPass = $_POST['lastPassword'];
$newPass = $_POST['newPassword'];
$repeatPass = $_POST['repeatPassword'];

if(($_POST['newPassword'] !== "") && ($_POST['repeatPassword'] !== "")){

    $md5lastPass = md5($lastPass);
    $md5newPass = md5($newPass);
    $md5repeatPass = md5($repeatPass);
    
    if ($md5newPass == $md5repeatPass) {
        
        if($validate->searchUser($userName,$md5lastPass)){
            $validate->setID($userName);
            $id = $validate->getID();

            $sql = "UPDATE `users` SET `password`='$md5newPass' WHERE `id_user` = '$id'";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                echo "enviado";
            } else {
                echo "error";
            }
            echo "existe";
        }else{
            echo "error";
        }
    } else {
        echo "las contraseñas no se parecen";
    }
} else {
    echo "campos vacios";
}


?>