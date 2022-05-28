
dateStart.value = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

setTimeout(() => {

    let circle = measurerSup.children[0].children[1].attributes
    let percent = measurerSup.children[1].children[0].childNodes

    for (let i = 0; i < supApi.length; i++) {
        if (nameTitle.innerText === supApi[i].name) {
            let total = 0
            let meta = 0
            for (let e = 0; e < ventasApi.length; e++) {
                if ((parseInt(ventasApi[e].sup_cod) === parseInt(supApi[i].id_supervisor)) && (ventasApi[e].date === dateStart.value)) {
                    console.log(ventasApi[e])
                    total += ventasApi[e].total
                    if (ventasApi[e].meta !== meta) {
                        meta += ventasApi[e].meta
                    }
                }
            }
            console.log(total)
            console.log(meta)
            percent[0].nodeValue = `${((parseInt(total)/parseInt(meta))*100).toFixed(1)}`
            circle[3].value = `--i:${((parseInt(total)/parseInt(meta))*100).toFixed(1)};`
        }
    }

    asesoresSup.innerHTML = optionsAsesorSupGraphics
    console.log(asesoresSup.value)
    console.log(checkSup.checked)

}, 1000);