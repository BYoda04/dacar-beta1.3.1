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
                        'inversion' => $row['inversion'],
                        'lead' => $row['lead'],
                        'google' => $row['lead_google'],
                        'date' => $row['date'],
                        'hour' => $row['hour']
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