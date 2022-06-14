
if (screen.width < 767) {
    for (let i = 0; i < tabla.length; i++) {
        tabla[i].classList.add('row')
    }
}

let optionsCamp

setTimeout(() => {
    let arrayHogar = []
    let arrayMovil = []
    let totalHogar = 0
    let totalMovil = 0
    let now = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

    for (let i = 0; i < ventasCampApi.length; i++) {
        if ((ventasCampApi[i].date === now) && (ventasCampApi[i].camp_cod === 1)) {
            arrayHogar.push(ventasCampApi[i])
        } else if ((ventasCampApi[i].date === now) && (ventasCampApi[i].camp_cod === 2)) {
            arrayMovil.push(ventasCampApi[i])
        }
    }

    let indice = 9
    let hour = ""

    for (let i = 0; i < hogarData.length; i++) {
        if (indice < 10) {
            hour = "0"+indice
        } else {
            hour = indice
        }
        for (let e = 0; e < arrayHogar.length; e++) {
            if (arrayHogar[e].hour === `${hour}:00:00`) {
                hogarData[i].innerText =  parseInt(hogarData[i].innerText) + arrayHogar[e].product_one + arrayHogar[e].product_two + arrayHogar[e].product_trhee
            }
        }
        indice ++
    }

    indice = 9
    hour = ""

    for (let i = 0; i < movilData.length; i++) {
        if (indice < 10) {
            hour = "0"+indice
        } else {
            hour = indice
        }
        for (let e = 0; e < arrayMovil.length; e++) {
            if (arrayMovil[e].hour === `${hour}:00:00`) {
                movilData[i].innerText =  parseInt(movilData[i].innerText) + arrayMovil[e].product_one + arrayMovil[e].product_two + arrayMovil[e].product_trhee
            }
        }
        indice ++
    }

    for (let i = 0; i < ventasApi.length; i++) {
        if ((ventasApi[i].date === now) && (ventasApi[i].camp_cod === 1)) {
            totalHogar += ventasApi[i].total
        } else if ((ventasApi[i].date === now) && (ventasApi[i].camp_cod === 2)) {
            totalMovil += ventasApi[i].total
        }
    }

    hogarTotal.innerText = totalHogar
    movilTotal.innerText = totalMovil
    

    optionsCamp = ""
    for (let i = 0; i < campAPi.length; i++) {
        optionsCamp += `<option>${(campAPi[i].name_camp).toUpperCase()}</option>`
    }

    campDataSelect[0].innerHTML = optionsCamp
    campDataSelectTop[0].innerHTML = optionsCamp

    let circle = measurerSup.children[0].children[1].attributes
    let percent = measurerSup.children[1].children[0].childNodes
    let campCod = getCampCod(campDataSelect[0].value)
    let nameSup = getNameSupervisor(campCod)
    let listProduct = product(campCod)

    if (campCod !== 2) {
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

    for (let i = 0; i < supApi.length; i++) {
        if (nameSup === supApi[i].name) {
            let total = 0
            let meta = 0
            let productOne = 0
            let producTwo = 0
            let productTrhee = 0
            dataGeneralSup.innerHTML = ""
            for (let e = 0; e < ventasApi.length; e++) {
                let planList = []
                let aseCod
                if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === now)) {
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
                    table(campCod,asesorNom,listProduct,planList)
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

    campDataSelect.addEventListener("submit",e=>{
        e.preventDefault()

        let circle = measurerSup.children[0].children[1].attributes
        let percent = measurerSup.children[1].children[0].childNodes
        let campCod = getCampCod(campDataSelect[0].value)
        let nameSup = getNameSupervisor(campCod)
        let listProduct = product(campCod)
    
        if (campCod !== 2) {
            headGridSup.classList.remove ("head-grid-movil")
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
            headGridSup.classList.remove ("head-grid-hogar")
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
    
        for (let i = 0; i < supApi.length; i++) {
            if (nameSup === supApi[i].name) {
                let total = 0
                let meta = 0
                let productOne = 0
                let producTwo = 0
                let productTrhee = 0
                dataGeneralSup.innerHTML = ""
                for (let e = 0; e < ventasApi.length; e++) {
                    let planList = []
                    let aseCod
                    if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === now)) {
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
                        table(campCod,asesorNom,listProduct,planList)
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
    })

    campDataSelect[0].addEventListener("change",e=>{

        let circle = measurerSup.children[0].children[1].attributes
        let percent = measurerSup.children[1].children[0].childNodes
        let campCod = getCampCod(campDataSelect[0].value)
        let nameSup = getNameSupervisor(campCod)
        let listProduct = product(campCod)
    
        if (campCod !== 2) {
            headGridSup.classList.remove ("head-grid-movil")
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
            headGridSup.classList.remove ("head-grid-hogar")
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
    
        for (let i = 0; i < supApi.length; i++) {
            if (nameSup === supApi[i].name) {
                let total = 0
                let meta = 0
                let productOne = 0
                let producTwo = 0
                let productTrhee = 0
                dataGeneralSup.innerHTML = ""
                for (let e = 0; e < ventasApi.length; e++) {
                    let planList = []
                    let aseCod
                    if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === now)) {
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
                        table(campCod,asesorNom,listProduct,planList)
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
    })
    
    campDataSelectTop.addEventListener("submit",e=>{
        e.preventDefault()

        let circle = measurerSup.children[0].children[1].attributes
        let percent = measurerSup.children[1].children[0].childNodes
        let campCod = getCampCod(campDataSelectTop[0].value)
        let nameSup = getNameSupervisor(campCod)
        let listProduct = product(campCod)
    
        if (campCod !== 2) {
            headGridSup.classList.remove ("head-grid-movil")
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
            headGridSup.classList.remove ("head-grid-hogar")
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
    
        for (let i = 0; i < supApi.length; i++) {
            if (nameSup === supApi[i].name) {
                let total = 0
                let meta = 0
                let productOne = 0
                let producTwo = 0
                let productTrhee = 0
                dataGeneralSup.innerHTML = ""
                for (let e = 0; e < ventasApi.length; e++) {
                    let planList = []
                    let aseCod
                    if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === now)) {
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
                        table(campCod,asesorNom,listProduct,planList)
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
    })

    campDataSelectTop[0].addEventListener("change",e=>{

        let circle = measurerSup.children[0].children[1].attributes
        let percent = measurerSup.children[1].children[0].childNodes
        let campCod = getCampCod(campDataSelectTop[0].value)
        let nameSup = getNameSupervisor(campCod)
        let listProduct = product(campCod)
    
        if (campCod !== 2) {
            headGridSup.classList.remove ("head-grid-movil")
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
            headGridSup.classList.remove ("head-grid-hogar")
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
    
        for (let i = 0; i < supApi.length; i++) {
            if (nameSup === supApi[i].name) {
                let total = 0
                let meta = 0
                let productOne = 0
                let producTwo = 0
                let productTrhee = 0
                dataGeneralSup.innerHTML = ""
                for (let e = 0; e < ventasApi.length; e++) {
                    let planList = []
                    let aseCod
                    if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === now)) {
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
                        table(campCod,asesorNom,listProduct,planList)
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
    })

}, 1000);