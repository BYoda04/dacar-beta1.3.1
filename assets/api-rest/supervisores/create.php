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
                        'id_supervisor' => $row['id_supervisor'],
                        'supervisor_name' => $row['supervisor_name'],
                        'user_cod' => $row['user_cod']
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