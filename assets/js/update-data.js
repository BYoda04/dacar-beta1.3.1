
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
                    
                    let idA = getIdAsesor(asesorItem[a].innerText)
                    asesorUpdate.value = idA
                    asesorNameOption.innerText = "Actualizar datos de"
                    asesorNameOption.innerText += ` ${asesorItem[a].innerText}`
                    planOneUpdate.value = ""
                    planTwoUpdate.value = ""
                    planTrheeUpdate.value = ""
                    metaUpdate.value = ""
                    for (let c = 0; c < ventasApi.length; c++) {
                        if ((ventasApi[c].asesor_cod === parseInt(asesorUpdate.value)) && (ventasApi[c].date === dateUpdate.value)) {
                            planOneUpdate.value = ventasApi[c].product_one 
                            planTwoUpdate.value = ventasApi[c].product_two
                            planTrheeUpdate.value = ventasApi[c].product_trhee
                            metaUpdate.value = ventasApi[c].meta
                        }
                    }
                })
            }
        })
        
    }
}, 1000);

dateUpdate.addEventListener("change",e=>{
    planOneUpdate.value = ""
    planTwoUpdate.value = ""
    planTrheeUpdate.value = ""
    for (let c = 0; c < ventasApi.length; c++) {
        if ((ventasApi[c].asesor_cod === parseInt(asesorUpdate.value)) && (ventasApi[c].date === dateUpdate.value)) {
            planOneUpdate.value = ventasApi[c].product_one 
            planTwoUpdate.value = ventasApi[c].product_two
            planTrheeUpdate.value = ventasApi[c].product_trhee
        }
    }
})

updateDataSold.addEventListener("submit",e=>{
    e.preventDefault()

    let formulario = new FormData(updateDataSold)

    fetch(urlSendDataAdmin,{
        method: 'POST',
        body: formulario
    })
    .then(r => r.json())
})