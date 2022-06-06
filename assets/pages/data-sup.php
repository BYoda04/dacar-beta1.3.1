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
            <div class="row">
                <h3 id="default-time">----/--/--</h3>
            </div>
            <div class="row">
                <h3 id="default-hour">--:--:--</h3>
            </div>
            <form action="" class="row justify-content-center align-items-center asesores-container" id="save-default">
                <div class="col-3"></div>
                <div class="col-3">
                    <input type="date" style="display: none;" id="default-time-input">
                    <input type="time" style="display: none;" id="default-hour-input">
                    <input type="number" class="form-control" value="0" id="goal">
                </div>
                <div class="col-2">
                    <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
                <div class="col-4"></div>
            </form>
        </div>
    
        <div class="row justify-content-center align-items-center asesores-container">
            <div class="row justify-content-center align-items-center" id="input-asesor-container">
                <div class="col-lg-4 asesores-items">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Cargando ...</button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center asesores-container">
                <div class="col-4">
                    <button class="btn btn-success" id="send-input-data">Enviar</button>
                </div>
            </div>
        </div>

<?php require_once './assets/components/footer.php' ?>