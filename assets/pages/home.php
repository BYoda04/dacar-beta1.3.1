<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">
        <div class="container-fluid justify-content-center align-items-center title no-visible" id="info-user-mobile">
            <div class="col justify-content-center align-items-center">
                <div class="row justify-content-center align-items-center">
                    <h2 id="name"><?php echo $user->getUserName();  ?></h2>
                </div>
                <div class="row justify-content-center align-items-center">
                    <h4 class="col">Cargo: <strong id="rol"><?php echo $user->getRol();  ?></strong></h4>
                </div>
            </div>
        </div>

        <form class="row g-3 search-section" id="search-graphic-admin">
            <div class="col-sm-3 asesor">
                <label for="supervisores-admin" class="visually">Supervisor: </label>
                <select class="form-select" aria-label="Default select example" id="supervisores-admin">
                    
                </select>
            </div>
            <div class="col-sm-3 asesor">
                <label for="asesores-admin" class="visually">Asesor: </label>
                <div class="row">
                    <div class="col">
                        <select class="form-select" id="asesores-admin">

                        </select>
                    </div>
                    <div class="col-1">
                        <input type="checkbox" class="form-check-input" id="check-admin">
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="col row">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Inicio</label>
                    <input type="date" class="form-control" id="date-start-admin">
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Final</label>
                    <input type="date" class="form-control" id="date-end-admin">
                </div>
            </div>
            <div class="col-sm-2">
                <button class="btn btn-primary mb-3">Buscar</button>
            </div>
        </form>

        <div class="fila measurer">
            <div class="card-container">
                <div class="card">
                    <div class="box">
                        <div class="percent" id="measurer-admin">
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
                <div>
                    <div class="row">
                        <div class="col-6">
                            <h3 id="data-venta-admin">0</h3>
                            <p>Venta Total</p>
                        </div>
                        <div class="col-6">
                            <h3 id="data-meta-admin">0</h3>
                            <p>Objetivo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-data">
                <div id="head-grid-admin">
                </div>
                <div id="data-generalsup">
                </div>
            </div>
        </div>
        <div class="fila-planes-sup">
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">Inversion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="POST" id="inversion">
                        <input type="date" class="form-control" id="date-inversion-admin" style="display: none;" name="date">
                        <input type="time" class="form-control" id="hour-inversion-admin" style="display: none;" name="hour">
                        <div class="modal-body">
                            <div class="mb-3 row">
                                <label for="number-inversion" class="form-label col">Inversion</label>
                                <input type="number" step="any" class="form-control col" id="number-inversion" value="0" name="inversion">
                            </div>
                            <div class="mb-3 row">
                                <label for="lead" class="form-label col">Leads</label>
                                <input type="number" step="any" class="form-control col" id="lead" value="0" name="lead">
                            </div>
                            <div class="mb-3 row">
                                <label for="google-lead" class="form-label col">Google CLicks</label>
                                <input type="number" step="any" class="form-control col" id="google-lead" value="0" name="google">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <div class="inversion">
                <div class="inversion-container">
                    <div>
                        <p name="inversion">inversion: 0</p>
                        <p name="inversion">leads: 0</p>
                        <p name="inversion">cpl: 0</p>
                        <p name="inversion">cpa: 0</p>
                        <p name="inversion">%venta: 0</p>
                        <p name="inversion">%web: 0</p>
                    </div>
                    <div class="inversion-button">
                        <button class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">INGRESAR</button>
                        <div>
                            <p name="inversion">actualizado: 00:00</p>
                            <p name="inversion">ventas: 0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="planes-percent">
                <div class="plan-percent-container">
                    <div class="card">
                        <div class="box" name="plan-percent">
                            <div class="percent" id="measurer-sup">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" style="--i:0;"></circle>
                                </svg>
                                <div class="number">
                                    <h2>0<span>%</span></h2>
                                </div>
                            </div>
                            <h2 class="text"></h2>
                        </div>
                    </div>
                </div>
                <div class="plan-percent-container">
                    <div class="card">
                        <div class="box" name="plan-percent">
                            <div class="percent" id="measurer-sup">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" style="--i:0;"></circle>
                                </svg>
                                <div class="number">
                                    <h2>0<span>%</span></h2>
                                </div>
                            </div>
                            <h2 class="text"></h2>
                        </div>
                    </div>
                </div>
                <div class="plan-percent-container">
                    <div class="card">
                        <div class="box" name="plan-percent">
                            <div class="percent" id="measurer-sup">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" style="--i:0;"></circle>
                                </svg>
                                <div class="number">
                                    <h2>0<span>%</span></h2>
                                </div>
                            </div>
                            <h2 class="text"></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

<?php require_once './assets/components/footer.php' ?>