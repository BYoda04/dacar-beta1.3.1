<?php require_once './assets/components/nav-top.php' ?>

    </nav>
        <section class="view">
            <table class="table view-container">
                <thead>
                    <tr name="table">
                        <th scope="col">CAMPAÑAS</th>
                        <th scope="col">TOTAL</th>
                        <th scope="col">09:00am</th>
                        <th scope="col">10:00am</th>
                        <th scope="col">11:00am</th>
                        <th scope="col">12:00pm</th>
                        <th scope="col">01:00pm</th>
                        <th scope="col">02:00pm</th>
                        <th scope="col">03:00pm</th>
                        <th scope="col">04:00pm</th>
                        <th scope="col">05:00pm</th>
                        <th scope="col">06:00pm</th>
                        <th scope="col">07:00pm</th>
                        <th scope="col">08:00pm</th>
                        <th scope="col">09:00pm</th>
                        <th scope="col">10:00pm</th>
                    </tr>
                </thead>
                <tbody class="view-body">
                    <tr name="table">
                        <th scope="row">HOGAR</th>
                        <td id="hogar-total">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                        <td name="hogar-data">0</td>
                    </tr>
                    <tr name="table">
                        <th scope="row">MOVIL</th>
                        <td id="movil-total">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                        <td name="movil-data">0</td>
                    </tr>
                </tbody>
            </table>

            <div class="row select-camp-view">
                <div class="col-3"></div>
                <form class="col-sm-6" id="camp-data-select">
                    <h2>CAMPAÑAS</h2>
                    <select class="form-select">
                        
                    </select>
                    <button class="btn btn-primary mb-3">BUSCAR</button>
                </form>
                <div class="col-3"></div>
            </div>

            <div class="fila measurer">
                <div class="card-container">
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
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div class="col-6">
                                <h3 id="data-venta-sup">0</h3>
                                <p>Venta Total</p>
                            </div>
                            <div class="col-6">
                                <h3 id="data-meta-sup">0</h3>
                                <p>Meta</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-data">
                    <div id="head-grid-sup">
                    </div>
                    <div id="data-generalsup">
                    </div>
                </div>
            </div>
            <div class="fila-planes-sup">
                <div></div>
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