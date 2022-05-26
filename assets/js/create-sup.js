
createSup.addEventListener("submit",e=>{
    e.preventDefault()

    if (userSup.value !== "" && pass.value !== "") {
        let formulario = new FormData(createSup)
        userSup.classList.remove('error')
        supName.classList.remove('error')
        supPaterno.classList.remove('error')
        supMaterno.classList.remove('error')
        pass.classList.remove('error')

        fetch(urlCreateSup,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
        updateSupList()
    } else {
        console.log("error")
        userSup.classList.add('error')
        supName.classList.add('error')
        supPaterno.classList.add('error')
        supMaterno.classList.add('error')
        pass.classList.add('error')
    }
})