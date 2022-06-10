
let optionsSup
let optionsAsesor
let optionsListSup
let optionsListAsesor
let optionsProduct
let optionsListInputSup
let optionsAsesorSupGraphics

let fechaActualID = new Date()

setTimeout(() => {
    optionsSup = ""
    for (let i = 0; i < supApi.length; i++) {
        optionsSup += `<option>${(supApi[i].name).toUpperCase()} ${(supApi[i].apellido_paterno).toUpperCase()} ${(supApi[i].apellido_materno).toUpperCase()}</option>`
    }

    optionsListSup = ""
    for (let i = 0; i < supApi.length; i++) {
        optionsListAsesor = ""
        for (let e = 0; e < asesorApi.length; e++) {
            if (parseInt(asesorApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) {
                optionsListAsesor += `<li class="list-group-item asesor-item">
                    <p name="asesores-of-${supApi[i].id_supervisor}">${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</p>
                    <div class="row">
                        <p class="col">Estado: ${activo(asesorApi[e].state)}</p>
                        <button type="button" class="btn btn-warning col" data-bs-toggle="modal" data-bs-target="#exampleModal" name="change-state-${supApi[i].id_supervisor}">Estado</button>
                    </div>
                </li>`
            }
        }
        optionsListSup += `<li class="list-group-item">
            <p name="name-sup">${(supApi[i].name).toUpperCase()} ${(supApi[i].apellido_paterno).toUpperCase()} ${(supApi[i].apellido_materno).toUpperCase()}<p>
            <div class="row">
                <p class="col-4">Campaña: ${camp(supApi[i].camp_cod)}</p>
                <p class="col-4">Turno: ${turn(supApi[i].turn_cod)}</p>
                <p class="col-4">N° Asesores: ${supApi[i].asesores}</p>
            </div>
            <div class="row justify-content-center align-items-center">
                <button type="button" class="btn btn-danger col" data-bs-toggle="modal" data-bs-target="#staticBackdrop" name="delete-sup">Eliminar</button>
                <button class="btn btn-info col" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" name="agree-asesor">Agregar Asesor</button>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${supApi[i].id_supervisor}" name="accordion-asesor-list">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${supApi[i].id_supervisor}" aria-expanded="false" aria-controls="collapse${supApi[i].id_supervisor}">Asesores</button>
                    </h2>
                    <div id="collapse${supApi[i].id_supervisor}" class="accordion-collapse collapse" aria-labelledby="heading${supApi[i].id_supervisor}" data-bs-parent="#accordionExample">
                        <div class="accordion-body container-asesor-list">
                            <ul class="list-group asesor-list" id="asesor-list">
                                ${optionsListAsesor}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </li>`
    }

    optionsListInputSup = ""
    for (let i = 0; i < supApi.length; i++) {
        optionsListAsesor = ""
        for (let e = 0; e < asesorApi.length; e++) {
            if (parseInt(asesorApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)&&(parseInt(asesorApi[e].state) !== 2)) {
                optionsListAsesor += `<li class="list-group-item asesor-item">
                    <p name="asesores-of-${supApi[i].id_supervisor}">${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</p>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" name="list-of-${supApi[i].id_supervisor}">Actualizar datos de venta</button>
                        </div>
                    </div>
                </li>`
            }
        }
        optionsListInputSup += `<div class="col-lg-4 sup-input-items">
            <div class="col">
                <p name="name-sup">${(supApi[i].name).toUpperCase()} ${(supApi[i].apellido_paterno).toUpperCase()} ${(supApi[i].apellido_materno).toUpperCase()}<p>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${supApi[i].id_supervisor}" name="accordion-asesor-list">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${supApi[i].id_supervisor}" aria-expanded="false" aria-controls="collapse${supApi[i].id_supervisor}" name="button-update-data">Asesores</button>
                    </h2>
                    <div id="collapse${supApi[i].id_supervisor}" class="accordion-collapse collapse" aria-labelledby="heading${supApi[i].id_supervisor}" data-bs-parent="#accordionExample">
                        <div class="accordion-body container-asesor-list">
                            <ul class="list-group asesor-list">
                                ${optionsListAsesor}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>`
    }

    optionsListAsesor = ""
    optionsProduct = []
    for (let i = 0; i < supApi.length; i++) {
        if (nameTitle.innerText === supApi[i].name) {
            for (let e = 0; e < productApi.length; e++) {
                if (productApi[e].camp_cod === supApi[i].camp_cod) {
                    optionsProduct.push(productApi[e].product_name)
                }
            }
            for (let e = 0; e < asesorApi.length; e++) {
                if ((asesorApi[e].sup_cod === supApi[i].id_supervisor) && (asesorApi[e].state !== 2)) {
                    optionsListAsesor += `<div class="col-lg-4 asesores-items">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${asesorApi[e].id_asesor}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${asesorApi[e].id_asesor}" aria-expanded="false" aria-controls="collapse${asesorApi[e].id_asesor}">${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</button>
                            </h2>
                            <div id="collapse${asesorApi[e].id_asesor}" class="accordion-collapse collapse" aria-labelledby="heading${asesorApi[e].id_asesor}" data-bs-parent="#accordionExample">
                                <div class="accordion-body container-asesor-list">
                                <form name="forms-data">
                                    <input type="date" class="form-control" style="display: none;" name="date">
                                    <input type="time" class="form-control" style="display: none;" name="hour">
                                    <input type="number" class="form-control" style="display: none;" name="goal" value="0">
                                    <input type="number" class="form-control" value="${asesorApi[e].id_asesor}" style="display: none;" name="asesorID">
                                    <input type="number" class="form-control" value="${supApi[i].id_supervisor}" style="display: none;" name="supID">
                                    <input type="number" class="form-control" value="${supApi[i].camp_cod}" style="display: none;" name="camp">
                                    <input type="number" class="form-control" value="${supApi[i].turn_cod}" style="display: none;" name="turn">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planOne" class="form-label">${optionsProduct[0]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" value="0" name="planOne">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTwo" class="form-label">${optionsProduct[1]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" value="0" name="planTwo">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTrhee" class="form-label">${optionsProduct[2]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" value="0" name="planTrhee">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                }
            }
        }
    }

    optionsAsesorSupGraphics = ""
    for (let i = 0; i < supApi.length; i++) {
        if (nameTitle.innerText === supApi[i].name) {
            for (let e = 0; e < asesorApi.length; e++) {
                if ((parseInt(asesorApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (parseInt(asesorApi[e].state) !== 2)) {
                    optionsAsesorSupGraphics += `<option>${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</option>`
                }
            }
        }
    }

    defaultTime.innerText = defaultTimeInput.value

}, 900);

