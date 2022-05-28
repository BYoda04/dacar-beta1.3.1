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
                        <form action="" method="POST" id="create-sup">
                            <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="userSup" class="form-label">Nombre de Usuario</label>
                                        <input type="text" class="form-control" id="userSup" name="username" value="@">
                                    </div>
                                    <div class="mb-3">
                                        <label for="userSup" class="form-label">Nombre del Supervisor</label>
                                        <input type="text" class="form-control" id="supName" name="name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="userSup" class="form-label">Apellido Paterno</label>
                                        <input type="text" class="form-control" id="supPaterno" name="paternoName">
                                    </div>
                                    <div class="mb-3">
                                        <label for="userSup" class="form-label">Apellido Materno</label>
                                        <input type="text" class="form-control" id="supMaterno" name="maternoName">
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
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Crear Usuario</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
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
                            <form action="" method="POST" id="create-asesor">
                            <div class="modal-body">
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
                                    <input type="text" id="supAsesor" name="sup" style="display: none;">  
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Agregar Asesor</button>
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Eliminar Supervisor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="POST" id="delete-sup">
                            <div class="modal-body">
                                <h3 id="name-sup-delete"></h3>
                                <input type="text" name="sup" id="input-sup" style="display: none;">
                                <h3>¿A que supervisor pasaran los asesores?</h3>
                                <select class="form-select" name="new-sup" id="list-update-sup">
                                                
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger">Eliminar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">¿Desea cambiar el estado del asesor?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="POST" id="update-state">
                            <div class="modal-body">
                                <input type="text" name="sup" id="sup-search" style="display: none;">
                                <input type="text" name="asesor" id="delete-asesor-container" style="display: none;">
                                <div class="row check-container">
                                    <div class="col-5">
                                        <input type="radio" class="form-check-input" id="active" name="state" value="activo">
                                        <label class="form-check-label" for="active">Activo</label>
                                    </div>
                                    <div class="col-5">
                                        <input type="radio" class="form-check-input" id="disabled" name="state" value="cese">
                                        <label class="form-check-label" for="disabled">Cese</label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-warning" data-bs-dismiss>Guardar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Crear Supervisor</button>
        </div>

        <ul class="list-group col-10" id="sup-list">
            <li class="list-group-item">Cargando ..</li>
        </ul>
    

<?php require_once './assets/components/footer.php' ?>