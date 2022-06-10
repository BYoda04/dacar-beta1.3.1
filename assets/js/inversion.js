
inversion.addEventListener("submit",e=>{
    e.preventDefault()
    let formulario = new FormData(inversion)

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
})

setTimeout(() => {
    for (let i = 0; i < inversionApi.length; i++) {
        let array = (inversionValues[7].innerText).split(" ")
        let ventasInversion = parseInt(array[1])
        if (inversionApi[i].date === dateStartAdmin.value) {
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

    graphicAdmin.addEventListener("submit",e=>{
        e.preventDefault()

        for (let i = 0; i < inversionApi.length; i++) {
            let array = (inversionValues[7].innerText).split(" ")
            let ventasInversion = parseInt(array[1])
            if (inversionApi[i].date === dateStartAdmin.value) {
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
    })
}, 1500);