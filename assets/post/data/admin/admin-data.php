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

$sup = $_POST['sup'];
$asesor = $_POST['asesor'];
$date = $_POST['date'];
$planOne = $_POST['planOne'];
$planTwo = $_POST['planTwo'];
$planTrhee = $_POST['planTrhee'];
$goal = $_POST['meta'];

$validate->searchCamp($asesor);
$camp = $validate->getCamp();
$turn = $validate->getTurn();

$total = $planOne + $planTwo + $planTrhee;
$ugi = $planOne + ($planTwo*2) + ($planTrhee*3);

if ($validate->searchSale($date,$asesor)) {
    if ($camp == 1) {
        $sql = "UPDATE `ventas` SET `product_one`='$planOne',`product_two`='$planTwo',`product_trhee`='$planTrhee',`date`='$date',`sup_cod`='$sup',`asesor_cod`='$asesor',`camp_cod`='$camp',`turn_cod`='$turn',`total`='$total',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            echo "enviado";
        } else {
            echo "error";
        }
    } else {
        $sql = "UPDATE `ventas` SET `product_one`='$planOne',`product_two`='$planTwo',`product_trhee`='$planTrhee',`date`='$date',`sup_cod`='$sup',`asesor_cod`='$asesor',`camp_cod`='$camp',`turn_cod`='$turn',`total`='$total',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            echo "enviado";
        } else {
            echo "error";
        }
    }
} else {
    if ($camp == 1) {
        $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn ','$total','$goal','$ugi')";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            echo "enviado";
        } else {
            echo "error";
        }
    } else {
        $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn ','$total','$goal')";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            echo "enviado";
        } else {
            echo "error";
        }
    }
}




?>