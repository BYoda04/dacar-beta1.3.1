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
                        'id_camp' => $row['id_camp'],
                        'name_camp' => $row['name_camp']
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