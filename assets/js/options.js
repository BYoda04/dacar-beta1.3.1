
let optionsSup
let optionsAsesor
let optionsListSup
let optionsListAsesor
let optionsProduct

//no funciona en las urls ni en las apis

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
                    <p>${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</p>
                    <p>Estado: ${activo(asesorApi[e].state)}</p>
                </li>`
            }
        }
        optionsListSup += `<li class="list-group-item">
            <p>${(supApi[i].name).toUpperCase()} ${(supApi[i].apellido_paterno).toUpperCase()} ${(supApi[i].apellido_materno).toUpperCase()}<p>
            <div class="row">
                <p class="col-4">Campaña: ${camp(supApi[i].camp_cod)}</p>
                <p class="col-4">Turno: ${turn(supApi[i].turn_cod)}</p>
                <p class="col-4">N° Asesores: ${supApi[i].asesores}</p>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${supApi[i].id_supervisor}">
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
                if (asesorApi[e].sup_cod === supApi[i].id_supervisor) {
                    optionsListAsesor += `<div class="col-lg-4 asesores-items">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${asesorApi[e].id_asesor}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${asesorApi[e].id_asesor}" aria-expanded="false" aria-controls="collapse${asesorApi[e].id_asesor}">${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</button>
                            </h2>
                            <div id="collapse${asesorApi[e].id_asesor}" class="accordion-collapse collapse" aria-labelledby="heading${asesorApi[e].id_asesor}" data-bs-parent="#accordionExample">
                                <div class="accordion-body container-asesor-list">
                                <form>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planOne" class="form-label">${optionsProduct[0]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" id="planOne">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTwo" class="form-label">${optionsProduct[1]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" id="planTwo">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-8">
                                                <label for="planTrhee" class="form-label">${optionsProduct[0]}</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="number" class="form-control" id="planTrhee">
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
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
    console.log(optionsProduct)
    inputAsesor.innerHTML = optionsListAsesor

}, 900);

