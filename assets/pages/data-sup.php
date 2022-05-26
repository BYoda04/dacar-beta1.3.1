<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">

        <div class="container-fluid justify-content-center align-items-center title">
            <div class="col justify-content-center align-items-center">
                <div class="row">
                    <h2 id="name"><?php echo $user->getUserName();  ?></h2>
                </div>
                <div class="row">
                    <p class="col-4" id="camp-title">campaña: </p>
                    <h4 class="col-4">Cargo: <strong id="rol"><?php echo $user->getRol();  ?></strong></h4>
                    <p class="col-4" id="turn-title">turno: </p>
                </div>
            </div>
        </div>

        <div class="container-fluid justify-content-center align-items-center">

        </div>
    
        <div class="row justify-content-center align-items-center asesores-container">
            <div class="row justify-content-center align-items-center" id="input-asesor-container">
                <div class="col-lg-4 asesores-items">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Cargando ...</button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body container-asesor-list">
                                <form>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planOne" class="form-label">cargando ...</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTwo" class="form-label">cargando ...</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTrhee" class="form-label">cargando ...</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php require_once './assets/components/footer.php' ?>