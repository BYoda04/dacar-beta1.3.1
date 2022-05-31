
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

        <form class="row g-3 search-section" id="search-graphic-sup">
            <div class="col-sm-3 asesor">
                <label for="asesores-sup" class="visually">Asesor: </label>
                <div class="row">
                    <div class="col">
                        <select class="form-select" id="asesores-sup">
                            
                        </select>
                    </div>
                    <div class="col-1">
                        <input type="checkbox" class="form-check-input" id="check-sup">
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="col row">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Inicio</label>
                    <input type="date" class="form-control" id="date-start-sup">
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Final</label>
                    <input type="date" class="form-control" id="date-end-sup">
                </div>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-primary mb-3">Buscar</button>
            </div>
        </form>

        <div class="row measurer">
            <div class="col-sm-6 card-container align-self-start">
                <div class="card">
                    <div class="box">
                        <div class="percent" id="measurer-sup">
                            <svg>
                                <circle cx="108" cy="108" r="108"></circle>
                                <circle cx="108" cy="108" r="108" style="--i:0;"></circle>
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
                <div class="row border border-white border-start-0 rounded-end">
                    <h3>Datos de Venta General</h3>
                </div>
                <div class="row border-bottom border-white">
                    <div class="col-6">
                        <h3 id="data-venta-sup">0</h3>
                        <p>Venta Total</p>
                    </div>
                    <div class="col-6">
                        <h3 id="data-meta-sup">0</h3>
                        <p>Meta</p>
                    </div>
                </div>
                <div class="row border-bottom border-white">
                    <h3>Datos de Venta por Asesor</h3>
                </div>
                <div id="data-generalsup"></div>
            </div>
        </div>
    

<?php require_once './assets/components/footer.php' ?>