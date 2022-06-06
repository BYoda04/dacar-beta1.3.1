
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

    console.log(ventasApi);
    for (let i = 0; i < ventasApi.length; i++) {
        if ((ventasApi[i].date === now) && (ventasApi[i].camp_cod === 1)) {
            totalHogar += ventasApi[i].total
        } else if ((ventasApi[i].date === now) && (ventasApi[i].camp_cod === 2)) {
            totalMovil += ventasApi[i].total
        }
    }
    hogarTotal.innerText = totalHogar
    movilTotal.innerText = totalMovil
}, 1000);