
dateUpdate.value = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

setTimeout(() => {
    inputSupContainer.innerHTML = optionsListInputSup

    const buttonUpdateData = document.getElementsByName('button-update-data')
    const nameSupUpdate = document.getElementsByName('name-sup')
    for (let i = 0; i < buttonUpdateData.length; i++) {
        buttonUpdateData[i].addEventListener("click",e=>{
            e.preventDefault()

            let name = getId(nameSupUpdate[i].innerText)
            let list = document.getElementsByName(`list-of-${name}`)
            let asesorItem = document.getElementsByName(`asesores-of-${name}`)
            supUpdate.value = name
            for (let a = 0; a < list.length; a++) {
                list[a].addEventListener("click",e=>{
                    e.preventDefault()
                    timeUpdate()
                    
                    let idA = getIdAsesor(asesorItem[a].innerText)
                    asesorUpdate.value = idA
                    asesorNameOption.innerText = "Actualizar datos de"
                    asesorNameOption.innerText += ` ${asesorItem[a].innerText}`
                    planOneUpdate.value = 0
                    planTwoUpdate.value = 0
                    planTrheeUpdate.value = 0
                    metaUpdate.value = 0
                    for (let c = 0; c < ventasCampApi.length; c++) {
                        if (((ventasCampApi[c].asesor_cod === parseInt(asesorUpdate.value)) && (ventasCampApi[c].date === dateUpdate.value))&&(ventasCampApi[c].hour === hourUpdate.value)) {
                            planOneUpdate.value = ventasCampApi[c].product_one 
                            planTwoUpdate.value = ventasCampApi[c].product_two
                            planTrheeUpdate.value = ventasCampApi[c].product_trhee
                            metaUpdate.value = ventasCampApi[c].meta
                        }
                    }
                })
            }
        })
        
    }
}, 1000);

dateUpdate.addEventListener("change",e=>{
    let hourValid = hourValidate(hourUpdate.value)
    planOneUpdate.value = 0
    planTwoUpdate.value = 0
    planTrheeUpdate.value = 0
    metaUpdate.value = 0
    for (let c = 0; c < ventasCampApi.length; c++) {
        if (((ventasCampApi[c].asesor_cod === parseInt(asesorUpdate.value)) && (ventasCampApi[c].date === dateUpdate.value))&&(ventasCampApi[c].hour === hourValid)) {
            console.log("me ejecute");
            planOneUpdate.value = ventasCampApi[c].product_one 
            planTwoUpdate.value = ventasCampApi[c].product_two
            planTrheeUpdate.value = ventasCampApi[c].product_trhee
            metaUpdate.value = ventasCampApi[c].meta
        }
    }
})

hourUpdate.addEventListener("change",e=>{
    let hourValid = hourValidate(hourUpdate.value)
    planOneUpdate.value = 0
    planTwoUpdate.value = 0
    planTrheeUpdate.value = 0
    metaUpdate.value = 0
    for (let c = 0; c < ventasCampApi.length; c++) {
        if (((ventasCampApi[c].asesor_cod === parseInt(asesorUpdate.value)) && (ventasCampApi[c].date === dateUpdate.value))&&(ventasCampApi[c].hour === hourValid)) {
            planOneUpdate.value = ventasCampApi[c].product_one 
            planTwoUpdate.value = ventasCampApi[c].product_two
            planTrheeUpdate.value = ventasCampApi[c].product_trhee
            metaUpdate.value = ventasCampApi[c].meta
        }
    }
    hourUpdate.value = hourValid
})

updateDataSold.addEventListener("submit",e=>{
    if (parseInt(metaUpdate.value) !== 0) {
        e.preventDefault()
        metaUpdate.classList.remove('error')
    
        let formulario = new FormData(updateDataSold)
    
        fetch(urlSendDataAdmin,{
            method: 'POST',
            body: formulario
        })
        .then(r => {
            r.json()
            success.classList.remove('no-visible')
            setTimeout(() => {
                success.classList.add('no-visible')
            }, 1000);
        })
        .catch(err=>console.log(err.response))
    } else {
        e.preventDefault()
        metaUpdate.classList.add('error')
    }
})