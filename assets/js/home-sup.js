
dateStartSup.value = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

setTimeout(() => {

    let campTitleArray = campTitle.innerText.split(" ")
    if (campTitleArray[1] === "hogar") {
        headGridSup.classList.add ("head-grid-hogar")
        headGridSup.innerHTML = `
                    <div style="border: none;"></div>
                    <div>1 PLAY</div>
                    <div>2 PLAY</div>
                    <div>3 PLAY</div>
                    <div class="sold">ventas</div>
                    <div class="ugi">ugi</div>`
        planPercent[0].children[1].innerText = productApi[0].product_name
        planPercent[1].children[1].innerText = productApi[1].product_name
        planPercent[2].children[1].innerText = productApi[2].product_name
    } else {
        headGridSup.classList.add ("head-grid-movil")
        headGridSup.innerHTML = `
                    <div style="border: none;"></div>
                    <div>LIMITADO</div>
                    <div>ILIMITADO</div>
                    <div>EQUIPO</div>
                    <div class="sold">ventas</div>`
        planPercent[0].children[1].innerText = productApi[3].product_name
        planPercent[1].children[1].innerText = productApi[4].product_name
        planPercent[2].children[1].innerText = productApi[5].product_name
    }

    let circle = measurerSup.children[0].children[1].attributes
    let percent = measurerSup.children[1].children[0].childNodes
    let codCamp = getCamp(nameTitle.innerText)
    let listProduct = product(codCamp)

    for (let i = 0; i < supApi.length; i++) {
        if (nameTitle.innerText === supApi[i].name) {
            let total = 0
            let meta = 0
            let productOne = 0
            let producTwo = 0
            let productTrhee = 0
            dataGeneralSup.innerHTML = ""
            for (let e = 0; e < ventasApi.length; e++) {
                let planList = []
                let aseCod
                if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === dateStartSup.value)) {
                    aseCod = ventasApi[e].asesor_cod
                    planList.push(ventasApi[e].product_one)
                    planList.push(ventasApi[e].product_two)
                    planList.push(ventasApi[e].product_trhee)
                    planList.push(ventasApi[e].ugi)
                    total += ventasApi[e].total
                    if (ventasApi[e].meta !== meta) {
                        meta += ventasApi[e].meta
                    }
                    let asesorNom = getNameAsesor(aseCod)
                    productOne += planList[0]
                    producTwo += planList[1]
                    productTrhee += planList[2]
                    table(codCamp,asesorNom,listProduct,planList)
                }
            }
            planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
            planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
            planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
            planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
            planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
            planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
            percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
            circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
            dataVentaSup.innerText = total
            dataMetaSup.innerText = meta 
        }
    }

    asesoresSup.innerHTML = optionsAsesorSupGraphics

    graphicSup.addEventListener("submit",e=>{
        e.preventDefault()

        if (checkSup.checked) {
            
            let idAsesor = getIdAsesor(asesoresSup.value)

            if (dateEndSup.value !== "") {
                    let total = 0
                    let meta = 0
                    let productOne = 0
                    let producTwo = 0
                    let productTrhee = 0
                    dataGeneralSup.innerHTML = ""
                    for (let e = 0; e < ventasApi.length; e++) {
                        let planList = []
                        let aseCod
                        if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)) && (ventasApi[e].date === dateStartSup.value)) {
                            aseCod = ventasApi[e].asesor_cod
                            planList.push(ventasApi[e].product_one)
                            planList.push(ventasApi[e].product_two)
                            planList.push(ventasApi[e].product_trhee)
                            planList.push(ventasApi[e].total)
                            planList.push(ventasApi[e].ugi)
                            total += ventasApi[e].total
                            if (ventasApi[e].meta !== meta) {
                                meta += ventasApi[e].meta
                            }
                            let asesorNom = getNameAsesor(aseCod)
                            productOne += planList[0]
                            producTwo += planList[1]
                            productTrhee += planList[2]
                            table(codCamp,asesorNom,listProduct,planList)
                        }
                    }
                    planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                    planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                    planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                    planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                    planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                    planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                    percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                    circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                    dataVentaSup.innerText = total
                    dataMetaSup.innerText = meta 
                    total = 0
                    meta = 0
                    productOne = 0
                    producTwo = 0
                    productTrhee = 0
                    let e = 0
                    let dayEnd = getDay(dateEndSup.value)
                    let monthEnd = getMonth(dateEndSup.value)
                    let nameExist = document.getElementsByName('info-sold')
                    for (let c = 0; c < nameExist.length; c++) {
                        for (let d = 1; d < 5; d++) {
                            nameExist[c].children[d].children[0].innerText = 0
                        }
                    }
                    for (e ;e < ventasApi.length; e++) {
                        let planList = []
                        let aseCod
                        if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)) && (ventasApi[e].date === dateStartSup.value)) {
                            for (e ;e < ventasApi.length; e++) {
                                if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor))&&(ventasApi[e+1] !== undefined)) {
                                    let dayNext = getDay(ventasApi[e+1].date)
                                    let monthNext = getMonth(ventasApi[e+1].date)
                                    if ((dayNext>dayEnd)&&(monthNext>monthEnd)) {
                                        total += ventasApi[e].total
                                        if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                            meta += ventasApi[e].meta
                                        }
                                        break
                                    } else {
                                        planList = []
                                        aseCod = ventasApi[e].asesor_cod
                                        planList.push(ventasApi[e].product_one)
                                        planList.push(ventasApi[e].product_two)
                                        planList.push(ventasApi[e].product_trhee)
                                        planList.push(ventasApi[e].total)
                                        planList.push(ventasApi[e].ugi)
                                        let num = getMeta(meta,ventasApi[e].meta)
                                        total += ventasApi[e].total
                                        if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                            meta += ventasApi[e].meta
                                        } else if (ventasApi[e].meta !== num) {
                                            meta += ventasApi[e].meta
                                        }
                                        let asesorNom = getNameAsesor(aseCod)
                                        productOne += planList[0]
                                        producTwo += planList[1]
                                        productTrhee += planList[2]
                                        let nameExist = document.getElementsByName('info-sold')
                                        if (nameExist.length !== 0) {
                                            for (let a = 0; a < nameExist.length; a++) {
                                                if (nameExist[a].childNodes[1].children[0].innerText === asesorNom) {
                                                    for (let b = 1; b < nameExist[0].children.length; b++) {
                                                        nameExist[a].children[b].children[0].innerText = parseInt(nameExist[a].children[b].children[0].innerText) + planList[b-1]
                                                    }
                                                }
                                            }
                                        }
                                    } 
                                } else if (parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)){
                                    planList = []
                                    aseCod = ventasApi[e].asesor_cod
                                    planList.push(ventasApi[e].product_one)
                                    planList.push(ventasApi[e].product_two)
                                    planList.push(ventasApi[e].product_trhee)
                                    planList.push(ventasApi[e].total)
                                    planList.push(ventasApi[e].ugi)
                                    let num = getMeta(meta,ventasApi[e].meta)
                                    total += ventasApi[e].total
                                    if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                        meta += ventasApi[e].meta
                                    } else if (ventasApi[e].meta !== num) {
                                        meta += ventasApi[e].meta
                                    }
                                    let asesorNom = getNameAsesor(aseCod)
                                    productOne += planList[0]
                                    producTwo += planList[1]
                                    productTrhee += planList[2]
                                    let nameExist = document.getElementsByName('info-sold')
                                    if (nameExist.length !== 0) {
                                        for (let a = 0; a < nameExist.length; a++) {
                                            if (nameExist[a].childNodes[1].children[0].innerText === asesorNom) {
                                                for (let b = 1; b < nameExist[0].children.length; b++) {
                                                    nameExist[a].children[b].children[0].innerText = parseInt(nameExist[a].children[b].children[0].innerText) + planList[b-1]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                    planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                    planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                    planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                    planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                    planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                    percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                    circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                    dataVentaSup.innerText = total
                    dataMetaSup.innerText = meta 
                    
            } else {
                    let total = 0
                    let meta = 0
                    let productOne = 0
                    let producTwo = 0
                    let productTrhee = 0
                    dataGeneralSup.innerHTML = ""
                    for (let e = 0; e < ventasApi.length; e++) {
                        let planList = []
                        let aseCod
                        if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)) && (ventasApi[e].date === dateStartSup.value)) {
                            aseCod = ventasApi[e].asesor_cod
                            planList.push(ventasApi[e].product_one)
                            planList.push(ventasApi[e].product_two)
                            planList.push(ventasApi[e].product_trhee)
                            planList.push(ventasApi[e].ugi)
                            total += ventasApi[e].total
                            if (ventasApi[e].meta !== meta) {
                                meta += ventasApi[e].meta
                            }
                            let asesorNom = getNameAsesor(aseCod)
                            productOne += planList[0]
                            producTwo += planList[1]
                            productTrhee += planList[2]
                            table(codCamp,asesorNom,listProduct,planList)
                        }
                    }
                    planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                    planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                    planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                    planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                    planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                    planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                    percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                    circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                    dataVentaSup.innerText = total
                    dataMetaSup.innerText = meta 
                    
            }

        } else {
            
            if (dateEndSup.value !== "") {
                for (let i = 0; i < supApi.length; i++) {
                    if (nameTitle.innerText === supApi[i].name) {
                        let total = 0
                        let meta = 0
                        let productOne = 0
                        let producTwo = 0
                        let productTrhee = 0
                        dataGeneralSup.innerHTML = ""
                        for (let e = 0; e < ventasApi.length; e++) {
                            let planList = []
                            let aseCod
                            if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === dateStartSup.value)) {
                                aseCod = ventasApi[e].asesor_cod
                                planList.push(ventasApi[e].product_one)
                                planList.push(ventasApi[e].product_two)
                                planList.push(ventasApi[e].product_trhee)
                                planList.push(ventasApi[e].total)
                                planList.push(ventasApi[e].ugi)
                                total += ventasApi[e].total
                                if (ventasApi[e].meta !== meta) {
                                    meta += ventasApi[e].meta
                                }
                                let asesorNom = getNameAsesor(aseCod)
                                productOne += planList[0]
                                producTwo += planList[1]
                                productTrhee += planList[2]
                                table(codCamp,asesorNom,listProduct,planList)
                            }
                        }
                        planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                        planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                        planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                        planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                        planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                        planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                        percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                        circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                        dataVentaSup.innerText = total
                        dataMetaSup.innerText = meta 
                        total = 0
                        meta = 0
                        productOne = 0
                        producTwo = 0
                        productTrhee = 0
                        let e = 0
                        let dayEnd = getDay(dateEndSup.value)
                        let monthEnd = getMonth(dateEndSup.value)
                        let nameExist = document.getElementsByName('info-sold')
                        for (let c = 0; c < nameExist.length; c++) {
                            for (let d = 1; d < 5; d++) {
                                nameExist[c].children[d].children[0].innerText = 0
                            }
                        }
                        for (e ;e < ventasApi.length; e++) {
                            let planList = []
                            let aseCod
                            if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === dateStartSup.value)) {
                                for (e ;e < ventasApi.length; e++) {
                                    if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor))&&(ventasApi[e+1] !== undefined)) {
                                        let dayNext = getDay(ventasApi[e].date)
                                        let monthNext = getMonth(ventasApi[e].date)
                                        if ((dayNext>dayEnd)&&(monthNext>=monthEnd)) {
                                            break
                                        } else {
                                            planList = []
                                            aseCod = ventasApi[e].asesor_cod
                                            planList.push(ventasApi[e].product_one)
                                            planList.push(ventasApi[e].product_two)
                                            planList.push(ventasApi[e].product_trhee)
                                            planList.push(ventasApi[e].total)
                                            planList.push(ventasApi[e].ugi)
                                            let num = getMeta(meta,ventasApi[e].meta)
                                            total += ventasApi[e].total
                                            if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                                meta += ventasApi[e].meta
                                            } else if (ventasApi[e].meta !== num) {
                                                meta += ventasApi[e].meta
                                            }
                                            let asesorNom = getNameAsesor(aseCod)
                                            productOne += planList[0]
                                            producTwo += planList[1]
                                            productTrhee += planList[2]
                                            let nameExist = document.getElementsByName('info-sold')
                                            if (nameExist.length !== 0) {
                                                for (let a = 0; a < nameExist.length; a++) {
                                                    if (nameExist[a].childNodes[1].children[0].innerText === asesorNom) {
                                                        for (let b = 1; b < nameExist[0].children.length; b++) {
                                                            nameExist[a].children[b].children[0].innerText = parseInt(nameExist[a].children[b].children[0].innerText) + planList[b-1]
                                                        }
                                                    }
                                                }
                                            }
                                        } 
                                    } else if (parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)){
                                        planList = []
                                        aseCod = ventasApi[e].asesor_cod
                                        planList.push(ventasApi[e].product_one)
                                        planList.push(ventasApi[e].product_two)
                                        planList.push(ventasApi[e].product_trhee)
                                        planList.push(ventasApi[e].total)
                                        planList.push(ventasApi[e].ugi)
                                        total += ventasApi[e].total
                                        let asesorNom = getNameAsesor(aseCod)
                                        productOne += planList[0]
                                        producTwo += planList[1]
                                        productTrhee += planList[2]
                                        let nameExist = document.getElementsByName('info-sold')
                                        if (nameExist.length !== 0) {
                                            for (let a = 0; a < nameExist.length; a++) {
                                                if (nameExist[a].childNodes[1].children[0].innerText === asesorNom) {
                                                    for (let b = 1; b < nameExist[0].children.length; b++) {
                                                        nameExist[a].children[b].children[0].innerText = parseInt(nameExist[a].children[b].children[0].innerText) + planList[b-1]
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                        planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                        planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                        planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                        planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                        planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                        percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                        circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                        dataVentaSup.innerText = total
                        dataMetaSup.innerText = meta 
                    }
                }
            } else {
                for (let i = 0; i < supApi.length; i++) {
                    if (nameTitle.innerText === supApi[i].name) {
                        let total = 0
                        let meta = 0
                        let productOne = 0
                        let producTwo = 0
                        let productTrhee = 0
                        dataGeneralSup.innerHTML = ""
                        for (let e = 0; e < ventasApi.length; e++) {
                            let planList = []
                            let aseCod
                            if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === dateStartSup.value)) {
                                aseCod = ventasApi[e].asesor_cod
                                planList.push(ventasApi[e].product_one)
                                planList.push(ventasApi[e].product_two)
                                planList.push(ventasApi[e].product_trhee)
                                planList.push(ventasApi[e].ugi)
                                total += ventasApi[e].total
                                if (ventasApi[e].meta !== meta) {
                                    meta += ventasApi[e].meta
                                }
                                let asesorNom = getNameAsesor(aseCod)
                                productOne += planList[0]
                                producTwo += planList[1]
                                productTrhee += planList[2]
                                table(codCamp,asesorNom,listProduct,planList)
                            }
                        }
                        planPercent[0].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productOne/parseInt(meta))*100).toFixed(1)}`
                        planPercent[0].children[0].children[0].children[1].attributes[3].value = `--i:${((productOne/parseInt(meta))*100).toFixed(1)};`
                        planPercent[1].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((producTwo/parseInt(meta))*100).toFixed(1)}`
                        planPercent[1].children[0].children[0].children[1].attributes[3].value = `--i:${((producTwo/parseInt(meta))*100).toFixed(1)};`
                        planPercent[2].children[0].children[1].childNodes[1].childNodes[0].textContent = `${((productTrhee/parseInt(meta))*100).toFixed(1)}`
                        planPercent[2].children[0].children[0].children[1].attributes[3].value = `--i:${((productTrhee/parseInt(meta))*100).toFixed(1)};`
                        percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                        circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                        dataVentaSup.innerText = total
                        dataMetaSup.innerText = meta 
                    }
                }
            }

        }
    })

    /* asesoresSup.addEventListener("change",e=>{

        if (checkSup.checked) {
            let idAsesor = getIdAsesor(asesoresSup.value)
    
                if (dateEndSup.value !== "") {
                        let total = 0
                        let meta = 0
                        let e = 0
                        let dayEnd = getDay(dateEndSup.value)
                        let monthEnd = getMonth(dateEndSup.value)
                        for (e ;e < ventasApi.length; e++) {
                            if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)) && (ventasApi[e].date === dateStartSup.value)) {
                                for (e ;e < ventasApi.length; e++) {
                                    if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor))&&(ventasApi[e+1] !== undefined)) {
                                        let dayNext = getDay(ventasApi[e+1].date)
                                        let monthNext = getMonth(ventasApi[e+1].date)
                                        if ((dayNext>dayEnd)&&(monthNext>monthEnd)) {
                                            total += ventasApi[e].total
                                            if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                                meta += ventasApi[e].meta
                                            }
                                            break
                                        } else {
                                            let num = getMeta(meta,ventasApi[e].meta)
                                            total += ventasApi[e].total
                                            if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                                meta += ventasApi[e].meta
                                            } else if (ventasApi[e].meta !== num) {
                                                meta += ventasApi[e].meta
                                            }
                                        } 
                                    } else if (parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)){
                                        let num = getMeta(meta,ventasApi[e].meta)
                                        total += ventasApi[e].total
                                        if ((ventasApi[e-1] !== undefined)&&(ventasApi[e].meta !== ventasApi[e-1].meta)) {
                                            meta += ventasApi[e].meta
                                        } else if (ventasApi[e].meta !== num) {
                                            meta += ventasApi[e].meta
                                        }
                                    }
                                }
                            }
                        }
                        percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                        circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                        dataVentaSup.innerText = total
                        dataMetaSup.innerText = meta 
                        
                } else {
                        let total = 0
                        let meta = 0
                        for (let e = 0; e < ventasApi.length; e++) {
                            if ((parseInt(ventasApi[e].asesor_cod) === parseInt(idAsesor)) && (ventasApi[e].date === dateStartSup.value)) {
                                total += ventasApi[e].total
                                if (ventasApi[e].meta !== meta) {
                                    meta += ventasApi[e].meta
                                }
                            }
                        }
                        percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
                        circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
                        dataVentaSup.innerText = total
                        dataMetaSup.innerText = meta 
                        
                }
        }

    }) */

}, 1500);