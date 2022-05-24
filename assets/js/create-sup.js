
createSup.addEventListener("submit",e=>{
    e.preventDefault()

    if (userSup.value !== "" && pass.value !== "") {
        let formulario = new FormData(createSup)
        userSup.classList.remove('error')
        pass.classList.remove('error')

        fetch(urlCreateSup,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        userSup.classList.add('error')
        pass.classList.add('error')
    }
})