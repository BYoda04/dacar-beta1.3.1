defaultTimeInput.value = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

setTimeout(() => {
    inputAsesor.innerHTML = optionsListAsesor
}, 1000);

setInterval(()=>{
    timeDefault()
}, 1000)

saveDefault.addEventListener("submit",e=>{
    e.preventDefault()
    goal.disabled = true
})

sendData.addEventListener("click",e=>{
    e.preventDefault()
    const formData = document.getElementsByName('forms-data')
    for (let i = 0; i < formData.length; i++) {
        let formItem = formData[i]
        formItem[0].value = defaultTimeInput.value
        formItem[1].value = defaultHourInput.value
        formItem[2].value = goal.value
        if ((parseInt(goal.value) !== 0) && (parseInt(formItem[1].value) !== 0)) {
            goal.classList.remove('error')

            let formulario = new FormData(formItem)
            fetch(urlSendDataSup,{
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
            goal.classList.add('error')
        }
    }
})

