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

        <form class="row g-3 search-section">
            <div class="col-sm-3 asesor">
                <label for="supervisores" class="visually">Supervisor: </label>
                <select class="form-select" aria-label="Default select example" id="supervisores">
                    <option>supervisores</option>
                </select>
            </div>
            <div class="col-sm-3 asesor">
                <label for="asesores" class="visually">Asesor: </label>
                <div class="row">
                    <div class="col">
                        <select class="form-select" aria-label="Default select example" id="asesores">
                            <option>asesores</option>
                        </select>
                    </div>
                    <div class="col-1">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="col row">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Inicio</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Final</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-primary mb-3">Buscar</button>
            </div>
        </form>

        <div class="row measurer">
            <div class="col-sm-6 card-container">
                <div class="card">
                    <div class="box">
                        <div class="percent" id="measurer">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70" style="--i:0;"></circle>
                            </svg>
                            <div class="number">
                                <h2>0<span>%</span></h2>
                            </div>
                        </div>
                        <h2 class="text">Porcentaje</h2>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <p>Datos de venta</p>
                <div>
                    <h3 id="data-venta">0</h3>
                    <p>Venta</p>
                </div>
                <div>
                    <h3 id="data-meta">0</h3>
                    <p>Meta</p>
                </div>
            </div>
        </div>
    

<?php require_once './assets/components/footer.php' ?>