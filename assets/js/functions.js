
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
    for (let i = 0; i < campAPi.length; i++) {
        if (id === campAPi[i].id_camp) {
            return campAPi[i].name_camp
        }
    }
}

const turn = (id)=>{
    for (let i = 0; i < turnApi.length; i++) {
        if (id === turnApi[i].id_turn) {
            return turnApi[i].name_turn
        }
    }
}

const activo = (id)=>{
    for (let i = 0; i < activoApi.length; i++) {
        if (id === activoApi[i].id_state) {
            return activoApi[i].name_state
        }
    }
}

const product = (id)=>{
    let arrayProducts = []
    for (let i = 0; i < productApi.length; i++) {
        if (productApi[i].camp_cod === id) {
            arrayProducts.push(productApi[i].product_name)
        }
    }
    return arrayProducts
}

const getId = (nom)=>{
    let arrayNom = nom.split(" ")
    let apellidoP = arrayNom[1].toLowerCase()
    let apellidoM = arrayNom[2].toLowerCase()
    for (let i = 0; i < supApi.length; i++) {
        if ((apellidoP === supApi[i].apellido_paterno)&&(apellidoM === supApi[i].apellido_materno)) {
            return supApi[i].id_supervisor
        }
    }
}

const getIdAsesor = (nom)=>{
    let arrayNom = nom.split(" ")
    let apellidoP = arrayNom[1].toLowerCase()
    let apellidoM = arrayNom[2].toLowerCase()
    for (let i = 0; i < asesorApi.length; i++) {
        if ((apellidoP === asesorApi[i].paterno)&&(apellidoM === asesorApi[i].materno)) {
            return asesorApi[i].id_asesor
        }
    }
}

const getDay = (day) =>{
    let arrayDay = day.split("-")
    let numDay = parseInt(arrayDay[2])
    return numDay
}

const getMonth = (month) =>{
    let arrayMonth = month.split("-")
    let numMonth = parseInt(arrayMonth[1])
    return numMonth
}

const getMeta = (meta,add) =>{
    let preview = parseInt(meta) - (parseInt(meta) - parseInt(add))
    if (parseInt(meta) !== 0) {
        if (parseInt(meta)>parseInt(add)) {
            return preview
        } else {
            return meta
        }
    } else {
        return meta
    }
}

const listAseores = (id)=>{
    asesoresAdmin.innerHTML = ""
    for (let i = 0; i < asesorApi.length; i++) {
        if ((parseInt(asesorApi[i].sup_cod) === parseInt(id))&&(parseInt(asesorApi[i].state) !== 2)) {
            asesoresAdmin.innerHTML += `<option>${(asesorApi[i].asesor_name).toUpperCase()} ${(asesorApi[i].paterno).toUpperCase()} ${(asesorApi[i].materno).toUpperCase()}</option>`
        }
    }
}

const getCamp = (nom)=>{
    for (let i = 0; i < supApi.length; i++) {
        if (nom === supApi[i].name) {
            return supApi[i].camp_cod
        } else if (nom === supApi[i].id_supervisor) {
            return supApi[i].camp_cod
        }
    }
}

const getNameAsesor = (id)=>{
    for (let i = 0; i < asesorApi.length; i++) {
        if (asesorApi[i].id_asesor === id) {
            return asesorApi[i].asesor_name
        }
    }
}

const table = (id,asesorNom,listProduct,plan,ugi)=>{
    if (id !==2) {
        dataGeneralSup.innerHTML += `<div class="border border-white p-2 mb-2 rounded" name="info-sold">
            <div class="row border-bottom border-white">
                <h4>${asesorNom}</h4>
            </div>
            <div class="row">
                <div class="col-3 border border-white">
                    <p>${listProduct[0]}</p>
                    <p name="sold">${plan[0]}</p>
                </div>
                <div class="col-3 border border-white">
                    <p>${listProduct[1]}</p>
                    <p name="sold">${plan[1]}</p>
                </div>
                <div class="col-3 border border-white">
                    <p>${listProduct[2]}</p>
                    <p name="sold">${plan[2]}</p>
                </div>
                <div class="col-3 border border-white">
                    <p>UGI</p>
                    <p>${plan[3]}</p>
                </div>
            </div>
        </div>`
    } else {
        dataGeneralSup.innerHTML += `<div class="border border-white p-2 mb-2 rounded" name="info-sold">
            <div class="row border-bottom border-white">
                <h4>${asesorNom}</h4>
            </div>
            <div class="row">
                <div class="col-4 border border-white" name="sold">
                    <p>${listProduct[0]}</p>
                    <p name="sold">${plan[0]}</p>
                </div>
                <div class="col-4 border border-white" name="sold">
                    <p>${listProduct[1]}</p>
                    <p name="sold">${plan[1]}</p>
                </div>
                <div class="col-4 border border-white" name="sold">
                    <p>${listProduct[2]}</p>
                    <p name="sold">${plan[2]}</p>
                </div>
            </div>
        </div>`
    }
}