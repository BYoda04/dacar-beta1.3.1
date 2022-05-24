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
                        'id_asesor' => $row['id_asesor'],
                        'asesor_name' => $row['asesor_name'],
                        'sup_cod' => $row['sup_cod'],
                        'camp_cod' => $row['camp_cod'],
                        'turn_cod' => $row['turn_cod'],
                        'state' => $row['state']
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