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
$hour = $_POST['hour'];
$asesor = $_POST['asesorID'];
$sup = $_POST['supID'];
$camp = $_POST['camp'];
$turn = $_POST['turn'];
$planOne = $_POST['planOne'];
$planTwo = $_POST['planTwo'];
$planTrhee = $_POST['planTrhee'];

$ugi = $planOne + ($planTwo*2) + ($planTrhee*3);
$total = $planOne + $planTwo + $planTrhee;

if ($_POST['goal'] == 0) {
    echo "inserta una meta";
} else {
    if ($validate->searchSale($date,$asesor)) {
        if ($validate->searchHourSale($date,$asesor,$hour)) {
            $validate->searchHourSolds($date,$asesor,$hour);
            $productOne = $planOne + $validate->getProductOne();
            $productTwo = $planTwo + $validate->getProductTwo();
            $productTrhee = $planTrhee + $validate->getProductTrhee();
            $newUgi = $ugi + $validate->getLastUgi();

            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $validate->searchSolds($date,$asesor);
                    $productOne = $planOne + $validate->getProductOne();
                    $productTwo = $planTwo + $validate->getProductTwo();
                    $productTrhee = $planTrhee + $validate->getProductTrhee();
                    $newTotal = $total + $validate->getLastTotal();
                    $newUgi = $ugi + $validate->getLastUgi();
                    $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error update 1";
                    }
                } else {
                    echo "error";
                }
            } else {
                $sql = "UPDATE `ventas_camp` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $validate->searchSolds($date,$asesor);
                    $productOne = $planOne + $validate->getProductOne();
                    $productTwo = $planTwo + $validate->getProductTwo();
                    $productTrhee = $planTrhee + $validate->getProductTrhee();
                    $newTotal = $total + $validate->getLastTotal();
                    $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error update 1";
                    }
                } else {
                    echo "error";
                }
            }
            
        } else {
            $validate->searchSolds($date,$asesor);
            $productOne = $planOne + $validate->getProductOne();
            $productTwo = $planTwo + $validate->getProductTwo();
            $productTrhee = $planTrhee + $validate->getProductTrhee();
            $newTotal = $total + $validate->getLastTotal();
            $newUgi = $ugi + $validate->getLastUgi();
            if ($camp == 1) {
                $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal','$ugi')";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 1";
                }
            } else {
                $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal')";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error update ventas camp 2";
                    }
                    
                } else {
                    echo "error update 2";
                }
            }
        }
        
    } else {
        if ($camp == 1) {
            $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn','$total','$goal','$ugi')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal','$ugi')";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    echo "enviado";
                } else {
                    echo "error";
                }
            } else {
                echo "error";
            }
        } else {
            $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn','$total','$goal')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal')";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    echo "enviado";
                } else {
                    echo "error ventas camp 2";
                }
                
            } else {
                echo "error ventas";
            }
        }
        
    }
}



?>