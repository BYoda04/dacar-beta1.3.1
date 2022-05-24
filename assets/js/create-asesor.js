
setTimeout(() => {
    supAsesor.innerHTML = optionsSup
}, 1000);

createAsesor.addEventListener("submit",e=>{
    e.preventDefault()
    
    if (userAsesor.value !== "" && (apellidoPaterno.value !== "" && apellidoMaterno.value !== "")) {
        let formulario = new FormData(createAsesor)
        userAsesor.classList.remove('error')
        apellidoPaterno.classList.remove('error')
        apellidoMaterno.classList.remove('error')

        fetch(urlCreateAsesor,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        userAsesor.classList.add('error')
        apellidoPaterno.classList.add('error')
        apellidoMaterno.classList.add('error')
    }
})