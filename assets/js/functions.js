
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

const getNameSupervisor = (cod)=>{
    for (let i = 0; i < supApi.length; i++) {
        if (supApi[i].camp_cod === cod) {
            return supApi[i].name
        }
    }
}

const getCampCod = (cod)=>{
    let name = cod.toLowerCase()
    for (let i = 0; i < campAPi.length; i++) {
        if (campAPi[i].name_camp === name) {
            return campAPi[i].id_camp
        }
    }
}

const table = (id,asesorNom,listProduct,plan)=>{
    if (id !==2) {
        dataGeneralSup.innerHTML += `
        <div class="body-grid-hogar" name="info-sold">
            <div>
                <p>${asesorNom}</p>
            </div>
            <div>
                <p name="sold">${plan[0]}</p>
            </div>
            <div>
                <p name="sold">${plan[1]}</p>
            </div>
            <div>
                <p name="sold">${plan[2]}</p>
            </div>
            <div class="sold">
                <p>${plan[0] + plan[1] + plan[2]}</p>
            </div>
            <div class="ugi">
                <p>${plan[3]}</p>
            </div>
        </div>`
    } else {
        dataGeneralSup.innerHTML +=  `
        <div class="body-grid-movil" name="info-sold">
            <div>
                <p>${asesorNom}</p>
            </div>
            <div>
                <p name="sold">${plan[0]}</p>
            </div>
            <div>
                <p name="sold">${plan[1]}</p>
            </div>
            <div>
                <p name="sold">${plan[2]}</p>
            </div>
            <div class="sold">
                <p>${plan[0] + plan[1] + plan[2]}</p>
            </div>
        </div>`
    }
}

const timeDefault = ()=>{
    
    let time = new Date()
    let hour = time.getHours()
    let minuts = time.getMinutes()
    let seconds = time.getSeconds()
    let hourInput
    let hourActual
    let minutsActual
    let secondsActual

    if (hour > 12) {
        if (hour-12 < 10) {
            hourActual = "0"+(hour -12)
        } else {
            hourActual = hour -12
        }
    } else {
        if (hour < 10) {
            hourActual = "0"+hour
        } else {
            hourActual = hour
        }
    }

    if (hour < 10) {
        hourInput = "0"+(hour)
    } else {
        hourInput = (hour)
    }

    if (minuts < 10) {
        minutsActual = "0"+minuts
    } else {
        minutsActual = minuts
    }

    if (seconds < 10) {
        secondsActual = "0"+seconds
    } else {
        secondsActual = seconds
    }

    defaultHour.innerText = `${hourActual} : ${minutsActual} : ${secondsActual}`
    defaultHourInput.value = `${hourInput}:00:00`
}

const timeUpdate = ()=>{

    let time = new Date()
    let hour = time.getHours()
    let hourInput

    if (hour < 10) {
        hourInput = "0"+hour
    } else {
        hourInput = hour
    }

    hourUpdate.value = `${hourInput}:00:00`
}

const hourValidate = (hour)=>{
    let array = hour.split(":")
    if (array.length<3) {
        return hour+":00"
    } else {
        return hour
    }
}