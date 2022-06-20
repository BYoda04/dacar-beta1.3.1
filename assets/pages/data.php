<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">

        <div class="button-container">
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="update-data-asesor">Actualizar datos de </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="POST" id="update-data-venta">
                            <div class="modal-body">
                                <input type="number" name="sup" id="sup-update" style="display: none;">
                                <input type="number" name="asesor" id="asesor-update" style="display: none;">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="date-update-data" class="form-label">fecha</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="date" class="form-control" name="date" id="date-update-data">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="date-update-data" class="form-label">hora</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="time" class="form-control" name="hour" id="hour-update-data">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="plan-one-update" class="form-label">plan 1</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="number" class="form-control" name="planOne" id="plan-one-update">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="plan-two-update" class="form-label">plan 2</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="number" class="form-control" name="planTwo" id="plan-two-update">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="plan-trhee-update" class="form-label">plan 3</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="number" class="form-control" name="planTrhee" id="plan-trhee-update">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <label for="meta-update" class="form-label">meta</label>
                                        </div>
                                        <div class="col-6">
                                            <input type="number" class="form-control" name="meta" id="meta-update">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success" data-bs-dismiss>Actualizar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center align-items-center">
            <div class="row  justify-content-center align-items-center" id="input-sup-container">
                <div class="col-sm-4 sup-input-items">
                    <div class="col">
                        <h2>cargando ...</h2>
                    </div>
                </div>
            </div>
        </div>
    

<?php require_once './assets/components/footer.php' ?>