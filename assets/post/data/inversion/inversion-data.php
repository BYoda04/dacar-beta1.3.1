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
$inversion = $_POST['inversion'];
$lead = $_POST['lead'];
$google = $_POST['google'];

if ($validate->searchInversion($date)) {
    $validate->searchData($date);

    $newInversion = $inversion + $validate->getInversion();
    $newLead = $lead + $validate->getLead();
    $newGoogle = $google + $validate->getGoogle();

    $sql = "UPDATE `inversion` SET `inversion`='$newInversion',`lead`='$newLead',`lead_google`='$newGoogle' WHERE `date`='$date'";
    $query = mysqli_query($conexion,$sql);
    if ($query) {
        echo "enviado";
    } else {
        echo "error";
    }

} else {
    $sql = "INSERT INTO `inversion`(`inversion`, `lead`, `lead_google`, `date`) VALUES ('$inversion','$lead','$google','$date')";
    $query = mysqli_query($conexion,$sql);
    if ($query) {
        echo "enviado";
    } else {
        echo "error";
    }
}


?>