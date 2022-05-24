<?php

    include_once 'get.php';

    class apiData{


        function getAll(){
            $data = new Datos();
            $datos = array();
            $datos["items"] = array();

            $res = $data->obtenerData();

            if ($res->rowCount()) {
                
                while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
                    $item = array(
                        'id_venta' => $row['id_venta'],
                        'cantidad' => $row['cantidad'],
                        'date' => $row['date'],
                        'sup_cod' => $row['sup_cod'],
                        'asesor_cod' => $row['asesor_cod'],
                        'camp_cod' => $row['camp_cod'],
                        'turn_cod' => $row['turn_cod'],
                        'meta' => $row['meta'],
                        'ugi' => $row['ugi']
                    );
                    array_push($datos['items'],$item);
                }

                echo json_encode($datos);


            }   else {
                echo json_encode($datos);
            }
        }
    }

?>