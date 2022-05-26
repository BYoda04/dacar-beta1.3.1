
const updateSupList = ()=>{
    optionsListSup = ""
    for (let i = 0; i < supApi.length; i++) {
        optionsListAsesor = ""
        for (let e = 0; e < asesorApi.length; e++) {
            if (parseInt(asesorApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) {
                optionsListAsesor += `<li class="list-group-item asesor-item">${asesorApi[e].asesor_name} ${asesorApi[e].paterno} ${asesorApi[e].materno}</li>`
            }
        }
        optionsListSup += `<li class="list-group-item">
            <p>${(supApi[i].name).toUpperCase()} ${(supApi[i].apellido_paterno).toUpperCase()} ${(supApi[i].apellido_materno).toUpperCase()}<p>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value="${supApi[i].id_supervisor}">Eliminar Supervisor</button>
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
    console.log("me ejecute")
}

const agreeAsesor = (id)=>{
    optionsAsesor = ""
    deleteAsesorContainer.innerHTML = ""
    for (let i = 0; i < asesorApi.length; i++) {
        if (asesorApi[i].sup_cod === id) {
            optionsAsesor += `<option>${(asesorApi[i].asesor_name).toUpperCase()} ${(asesorApi[i].paterno).toUpperCase()} ${(asesorApi[i].materno).toUpperCase()}</option>`
        }
    }
    deleteAsesorContainer.innerHTML += optionsAsesor
}



const camp = (id)=>{
    if (id === 1) {
        return "Hogar"
    } else {
        return "Movil"
    }
}

const turn = (id)=>{
    if (id === 1) {
        return "Mañana"
    } else {
        return "Tarde"
    }
}

const activo = (id)=>{
    if (id === 1) {
        return "activo"
    } else {
        return "cese"
    }
}