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
                        'user_name' => $row['user_name'],
                        'name' => $row['name'],
                        'apellido_paterno' => $row['paterno'],
                        'apellido_materno' => $row['materno'],
                        'user_cod' => $row['user_cod'],
                        'camp_cod' => $row['camp_cod'],
                        'turn_cod' => $row['turn_cod'],
                        'asesores' => $row['asesores']
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