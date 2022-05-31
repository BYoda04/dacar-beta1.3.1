<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">
        <div class="container-fluid justify-content-center align-items-center title">
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
                    <input type="date" class="form-control" id="date-start-admin" placeholder="name@example.com">
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Fecha Final</label>
                    <input type="date" class="form-control" id="date-end-admin" placeholder="name@example.com">
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
            </div>
            <div class="col-sm-6">
                <div class="row border border-white border-start-0 rounded-end">
                    <h3>Datos de Venta General</h3>
                </div>
                <div class="row border-bottom border-white">
                    <div class="col-6">
                        <h3 id="data-venta-admin">0</h3>
                        <p>Venta Total</p>
                    </div>
                    <div class="col-6">
                        <h3 id="data-meta-admin">0</h3>
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