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
$hour = $_POST['hour'];
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

    if ($validate->searchCampSale($date,$asesor,$hour)) {
            
        $validate->searchDatHourSold($date,$asesor,$hour);
        $productOne = $validate->getProductOne();
        $productTwo = $validate->getProductTwo();
        $productTrhee = $validate->getProductTrhee();

        if ($planOne>$productOne) {
            $difference = $planOne-$productOne;
            $validate->searchDatSold($date,$asesor);
            $newProductOne = $difference + $validate->getProductOne();
            $newTotal = $difference + $validate->getLastTotal();
            $newUgi = $difference + $validate->getLastUgi();
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_one`='$planOne',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_one`='$newProductOne',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
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
                $sql = "UPDATE `ventas_camp` SET `product_one`='$planOne',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_one`='$newProductOne',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 1";
                }
            }
        } else if ($planOne<$productOne) {
            $difference = $productOne-$planOne;
            $validate->searchDatSold($date,$asesor);
            $newProductOne = $validate->getProductOne() - $difference;
            $newTotal = $validate->getLastTotal() - $difference;
            $newUgi = $validate->getLastUgi() - $difference;
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_one`='$planOne',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_one`='$newProductOne',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
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
                $sql = "UPDATE `ventas_camp` SET `product_one`='$planOne',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_one`='$newProductOne',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 1";
                }
            }
        }

        if ($planTwo>$productTwo) {
            $difference = $planTwo-$productTwo;
            $validate->searchDatSold($date,$asesor);
            $newProductTwo = $difference + $validate->getProductTwo();
            $newTotal = $difference + $validate->getLastTotal();
            $newUgi = ($difference*2) + $validate->getLastUgi();
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_two`='$planTwo',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_two`='$newProductTwo',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 2";
                }
            } else {
                $sql = "UPDATE `ventas_camp` SET `product_two`='$planTwo',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_two`='$newProductTwo',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 2";
                }
            }
        } else if ($planTwo<$productTwo) {
            $difference = $productTwo-$planTwo;
            $validate->searchDatSold($date,$asesor);
            $newProductTwo = $validate->getProductTwo() - $difference;
            $newTotal = $validate->getLastTotal() - $difference;
            $newUgi = $validate->getLastUgi() - ($difference*2);
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_two`='$planTwo',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_two`='$newProductTwo',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 2";
                }
            } else {
                $sql = "UPDATE `ventas_camp` SET `product_two`='$planTwo',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_two`='$newProductTwo',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 2";
                }
            }
        }

        if ($planTrhee>$productTrhee) {
            $difference = $planTrhee-$productTrhee;
            $validate->searchDatSold($date,$asesor);
            $newProductTrhee = $difference + $validate->getProductTrhee();
            $newTotal = $difference + $validate->getLastTotal();
            $newUgi = ($difference*3) + $validate->getLastUgi();
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_trhee`='$planTrhee',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_trhee`='$newProductTrhee',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 3";
                }
            } else {
                $sql = "UPDATE `ventas_camp` SET `product_trhee`='$planTrhee',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_trhee`='$newProductTrhee',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 3";
                }
            }
        } else if ($planTrhee<$productTrhee) {
            $difference = $productTrhee-$planTrhee;
            $validate->searchDatSold($date,$asesor);
            $newProductTrhee = $validate->getProductTrhee() - $difference;
            $newTotal = $validate->getLastTotal() - $difference;
            $newUgi = $validate->getLastUgi() - ($difference*3);
            if ($camp == 1) {
                $sql = "UPDATE `ventas_camp` SET `product_trhee`='$planTrhee',`meta`='$goal',`ugi`='$ugi' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_trhee`='$newProductTrhee',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 3";
                }
            } else {
                $sql = "UPDATE `ventas_camp` SET `product_trhee`='$planTrhee',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date' AND `hour`='$hour'";
                $query = mysqli_query($conexion,$sql);
                if ($query) {
                    $sql = "UPDATE `ventas` SET `product_trhee`='$newProductTrhee',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
                    $query = mysqli_query($conexion,$sql);
                    if ($query) {
                        echo "enviado";
                    } else {
                        echo "error";
                    }
                } else {
                    echo "error update 3";
                }
            }
        }

    } else {
        $validate->searchDatSold($date,$asesor);
        $productOne = $validate->getProductOne() + $planOne;
        $productTwo = $validate->getProductTwo() + $planTwo;
        $productTrhee = $validate->getProductTrhee() + $planTrhee;
        $newTotal = $validate->getLastTotal() + $total;
        $newUgi = $validate->getLastUgi() + $ugi;
        if ($camp == 1) {
            $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal','$ugi')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal',`ugi`='$newUgi' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
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
            $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal')";
            $query = mysqli_query($conexion,$sql);
            if ($query) {
                $sql = "UPDATE `ventas` SET `product_one`='$productOne',`product_two`='$productTwo',`product_trhee`='$productTrhee',`total`='$newTotal',`meta`='$goal' WHERE `asesor_cod`='$asesor' AND `date`='$date'";
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
        
    }

} else {
    if ($camp == 1) {
        $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal','$ugi')";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`, `ugi`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn','$total','$goal','$ugi')";
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
        $sql = "INSERT INTO `ventas_camp`(`product_one`, `product_two`, `product_trhee`, `date`, `hour`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$hour','$sup','$asesor','$camp','$turn','$goal')";
        $query = mysqli_query($conexion,$sql);
        if ($query) {
            $sql = "INSERT INTO `ventas`(`product_one`, `product_two`, `product_trhee`, `date`, `sup_cod`, `asesor_cod`, `camp_cod`, `turn_cod`, `total`, `meta`) VALUES ('$planOne','$planTwo','$planTrhee','$date','$sup','$asesor','$camp','$turn','$total','$goal')";
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
    
}






?>