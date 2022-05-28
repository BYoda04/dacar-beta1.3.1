setTimeout(() => {
    supSearch.innerHTML = optionsSup
}, 1000);

updateState.addEventListener("submit",e=>{
    e.preventDefault()
    
    let formulario = new FormData(updateState)
    if (stateActive.checked || stateDisabled.checked) {
        stateActive.classList.remove ('error')
        stateDisabled.classList.remove ('error')

        fetch(urlDeleteAsesor,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        stateActive.classList.add ('error')
        stateDisabled.classList.add ('error')
    }
    
})