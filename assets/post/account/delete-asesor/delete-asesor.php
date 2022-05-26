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

$sup = strtolower($_POST['sup']);
$asesor = strtolower($_POST['asesor']);
$state = $_POST['state'];
$arraySup = explode(" ", $sup);
$arrayAsesor = explode(" ",$asesor);

echo $arraySup[0];
echo $arraySup[1];
echo $arraySup[2];
echo $arrayAsesor[0];
echo $arrayAsesor[1];
echo $arrayAsesor[2];
echo $state;

if ($validate->searchSup($arraySup[0],$arraySup[1],$arraySup[2])) {
    $validate->setID($arraySup[0],$arraySup[1],$arraySup[2]);
    $validate->setState($state);

    $cod = $validate->getCod();
    $num = $validate->getNum();
    $codState = $validate->getState();

    $sql = "UPDATE `asesores` SET `state`='$codState' WHERE `sup_cod`='$cod' AND `asesor_name`='$arrayAsesor[0]' AND `paterno`='$arrayAsesor[1]' AND `materno`= '$arrayAsesor[2]'";
    $query = mysqli_query($conexion,$sql);
    if ($query) {
        $sql = "UPDATE `supervisores` SET `asesores`= $num - 1 WHERE `id_supervisor`='$cod'";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            echo "actualizado";
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}

    


?>