defaultTimeInput.value = `${fechaActualID.getFullYear()}-${month[fechaActualID.getMonth()]}-${fechaActualID.getDate()<10 ? "0" + fechaActualID.getDate() : fechaActualID.getDate()}`

setTimeout(() => {
    inputAsesor.innerHTML = optionsListAsesor
}, 1000);

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
        formItem[1].value = goal.value
        if ((parseInt(goal.value) !== 0) && (parseInt(formItem[1].value) !== 0)) {
            goal.classList.remove('error')

            let formulario = new FormData(formItem)
            fetch(urlSendDataSup,{
                method: 'POST',
                body: formulario
            })
            .then(r => r.json())
        } else {
            goal.classList.add('error')
        }
    }
})

