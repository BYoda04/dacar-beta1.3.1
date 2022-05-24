<?php

$servidor = "localhost";
$nombreusuario = "root";
$password = "";
$db = "dbbeta";

$conexion = new mysqli($servidor, $nombreusuario, $password,$db);

if($conexion-> connect_error){
    die("Conexión fallida: " . $conexion-> connect_error);
} 

$name = $_POST['asesorName'];
$paterno = $_POST['paternoName'];
$materno = $_POST['maternoName'];
$sup = $_POST['sup'];

echo $name;
echo $paterno;
echo $materno;
echo $sup;

?>