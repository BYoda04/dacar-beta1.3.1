
setInterval(()=>{
    timeInput()
}, 1000)

inversion.addEventListener("submit",e=>{
    e.preventDefault()

    let formulario = new FormData(inversion)

    if (parseInt(numberInversion.value) === 0 || parseInt(lead.value) === 0 || parseInt(googleLead.value) === 0) {
        numberInversion.classList.add('error')
        lead.classList.add('error')
        googleLead.classList.add('error')
    } else {
        numberInversion.classList.remove('error')
        lead.classList.remove('error')
        googleLead.classList.remove('error')
        fetch(urlSendInversion,{
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
    }
})

setTimeout(() => {
    for (let i = 0; i < inversionApi.length; i++) {
        let array = (inversionValues[8].innerText).split(" ")
        let ventasInversion = parseInt(array[1])
        if (inversionApi[i].date === dateStartAdmin.value) {
            timeSet(inversionApi[i].hour)
            inversionValues[1].innerText = `inversion: ${parseFloat(inversionApi[i].inversion)}`
            inversionValues[2].innerText = `leads: ${parseFloat(inversionApi[i].lead)}`
            inversionValues[3].innerText = `cpl: ${(parseFloat(inversionApi[i].inversion)/parseFloat(inversionApi[i].lead)).toFixed(2)}`
            if (ventasInversion !== 0) {
                inversionValues[4].innerText = `cpa: ${(parseFloat(inversionApi[i].inversion)/ventasInversion).toFixed(2)}`
            } else {
                inversionValues[4].innerText = `cpa: ${0}`
            }
            inversionValues[5].innerText = `%venta: ${(ventasInversion/parseFloat(inversionApi[i].lead)).toFixed(2)}`
            inversionValues[6].innerText = `%web: ${(parseFloat(inversionApi[i].lead)/parseFloat(inversionApi[i].google)).toFixed(2)}`
        } else {
            inversionValues[1].innerText = `inversion: ${0}`
            inversionValues[2].innerText = `leads: ${0}`
            inversionValues[3].innerText = `cpl: ${0}`
            inversionValues[4].innerText = `cpa: ${0}`
            inversionValues[5].innerText = `%venta: ${0}`
            inversionValues[6].innerText = `%web: ${0}`
        }
    }

}, 1500);

graphicAdmin.addEventListener("submit",e=>{
    e.preventDefault()
    let i = 0

    setTimeout(() => {
        for ( i; i < inversionApi.length; i++) {
            let array = (inversionValues[8].innerText).split(" ")
            let ventasInversion = parseInt(array[1])
            if (dateEndAdmin.value !== "") {
                if (inversionApi[i].date === dateStartAdmin.value) {
                    let dataOne = 0
                    let dataTwo = 0
                    let dataTrhee = 0
                    for ( i; i < inversionApi.length; i++) {
                        if (inversionApi[i].date !== dateEndAdmin.value) {
                            timeSet(inversionApi[i].hour)
                            dataOne += parseFloat(inversionApi[i].inversion)
                            dataTwo += parseFloat(inversionApi[i].lead)
                            dataTrhee += parseFloat(inversionApi[i].google)
                            inversionValues[1].innerText = `inversion: ${(parseFloat(dataOne)).toFixed(2)}`
                            inversionValues[2].innerText = `leads: ${parseFloat(dataTwo)}`
                            inversionValues[3].innerText = `cpl: ${(parseFloat(dataOne)/parseFloat(dataTwo)).toFixed(2)}`
                            inversionValues[4].innerText = `cpa: ${(parseFloat(dataOne)/ventasInversion).toFixed(2)}`
                            inversionValues[5].innerText = `%venta: ${(ventasInversion/parseFloat(dataTwo)).toFixed(2)}`
                            inversionValues[6].innerText = `%web: ${(parseFloat(dataTwo)/parseFloat(dataTrhee)).toFixed(2)}`
                        } else {
                            timeSet(inversionApi[i].hour)
                            dataOne += parseFloat(inversionApi[i].inversion)
                            dataTwo += parseFloat(inversionApi[i].lead)
                            dataTrhee += parseFloat(inversionApi[i].google)
                            inversionValues[1].innerText = `inversion: ${(parseFloat(dataOne)).toFixed(2)}`
                            inversionValues[2].innerText = `leads: ${parseFloat(dataTwo)}`
                            inversionValues[3].innerText = `cpl: ${(parseFloat(dataOne)/parseFloat(dataTwo)).toFixed(2)}`
                            inversionValues[4].innerText = `cpa: ${(parseFloat(dataOne)/ventasInversion).toFixed(2)}`
                            inversionValues[5].innerText = `%venta: ${(ventasInversion/parseFloat(dataTwo)).toFixed(2)}`
                            inversionValues[6].innerText = `%web: ${(parseFloat(dataTwo)/parseFloat(dataTrhee)).toFixed(2)}`
                            break
                        }
                    }
                }
            } else {
                if (inversionApi[i].date === dateStartAdmin.value) {
                    timeSet(inversionApi[i].hour)
                    inversionValues[1].innerText = `inversion: ${parseFloat(inversionApi[i].inversion)}`
                    inversionValues[2].innerText = `leads: ${parseFloat(inversionApi[i].lead)}`
                    inversionValues[3].innerText = `cpl: ${(parseFloat(inversionApi[i].inversion)/parseFloat(inversionApi[i].lead)).toFixed(2)}`
                    if (ventasInversion !== 0) {
                        inversionValues[4].innerText = `cpa: ${(parseFloat(inversionApi[i].inversion)/ventasInversion).toFixed(2)}`
                    } else {
                        inversionValues[4].innerText = `cpa: ${0}`
                    }
                    inversionValues[5].innerText = `%venta: ${(ventasInversion/parseFloat(inversionApi[i].lead)).toFixed(2)}`
                    inversionValues[6].innerText = `%web: ${(parseFloat(inversionApi[i].lead)/parseFloat(inversionApi[i].google)).toFixed(2)}`
                    break
                } else {
                    inversionValues[1].innerText = `inversion: ${0}`
                    inversionValues[2].innerText = `leads: ${0}`
                    inversionValues[3].innerText = `cpl: ${0}`
                    inversionValues[4].innerText = `cpa: ${0}`
                    inversionValues[5].innerText = `%venta: ${0}`
                    inversionValues[6].innerText = `%web: ${0}`
                }
            }
        }
    }, 1000);
})