
changePassword.addEventListener("submit",e=>{
    e.preventDefault()

    if ((newPassword.value !== "" && repeatPassword.value !== "") || (lastPassword.value !== "" && ((newPassword.value !== "" && repeatPassword.value !== "") && !(newPassword.value !== repeatPassword.value)))) {
        let formulario = new FormData(changePassword)

        fetch(urlSend,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        alerta.classList.remove ('display')
        setTimeout(() => {
            alerta.classList.add ('display')
        }, 1500);
    }

})