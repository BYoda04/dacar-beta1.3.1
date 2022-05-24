<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">
        <div class="button-container">
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Crear Supervisor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="POST" id="create-sup">
                                <div class="mb-3">
                                    <label for="userSup" class="form-label">Nombre de Usuario</label>
                                    <input type="text" class="form-control" id="userSup" name="username">
                                </div>
                                <div class="mb-3">
                                    <label for="pass" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="pass" name="password">
                                </div>
                                <div class="row">
                                    <div class="col-6 asesor">
                                        <label for="sup" class="visually">Campaña: </label>
                                        <select class="form-select" id="sup" name="camp">
                                            <option>Hogar</option>
                                            <option>Movil</option>
                                        </select>
                                    </div>
                                    <div class="col-6 asesor">
                                        <label for="asesor" class="visually">Turno: </label>
                                        <select class="form-select" id="asesor" name="turn">
                                            <option>Mañana</option>
                                            <option>Tarde</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Crear Usuario</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Crear Asesor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="POST" id="create-asesor">
                                <div class="mb-3">
                                    <label for="userAsesor" class="form-label">Nombre de Asesor</label>
                                    <input type="text" class="form-control" id="userAsesor" name="asesorName">
                                </div>
                                <div class="mb-3">
                                    <label for="apellidoPaterno" class="form-label">Apellido de Paterno</label>
                                    <input type="text" class="form-control" id="apellidoPaterno" name="paternoName">
                                </div>
                                <div class="mb-3">
                                    <label for="apellidoMaterno" class="form-label">Apellido Materno</label>
                                    <input type="text" class="form-control" id="apellidoMaterno" name="maternoName">
                                </div>
                                <div class="mb-3">
                                    <label for="supAsesor" class="visually">Supervisor a Cargo: </label>
                                    <select class="form-select" id="supAsesor" name="sup">
                                        
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Agregar Asesor</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Crear Supervisor</a>
            <button class="btn btn-info" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Crear asesor</button>
        </div>

        <div class="row justify-content-center align-items-center accounts">
            <ul class="list-group col-10">
                <li class="list-group-item">
                    An item
                </li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    

<?php require_once './assets/components/footer.php' ?>