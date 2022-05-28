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

$date = $_POST['date'];
$goal = $_POST['goal'];
$asesor = $_POST['asesorID'];
$sup = $_POST['supID'];
$camp = $_POST['camp'];
$turn = $_POST['turn'];
$planOne = $_POST['planOne'];
$planTwo = $_POST['planTwo'];
$planTrhee = $_POST['planTrhee'];

$ugi = $planOne + ($planTwo*2) + ($planTrhee*3);
$total = $planOne + $planTwo + $planTwo + 1;

if ($_POST['goal'] == 0) {
    echo "inserta una meta";
} else {
    if ($validate->searchSale($date,$asesor)) {
        echo "ya ingresaste ventas";
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
}



?>