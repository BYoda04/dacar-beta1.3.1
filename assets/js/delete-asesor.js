setTimeout(() => {
    supSearch.innerHTML = optionsSup
}, 1000);

searchAsesor.addEventListener("click",e=>{
    e.preventDefault()
    let supValue = (supSearch.value).toLowerCase()
    for (let i = 0; i < supApi.length; i++) {
        if (supValue === `${supApi[i].name} ${supApi[i].apellido_paterno} ${supApi[i].apellido_materno}`) {
            agreeAsesor(supApi[i].id_supervisor)
        }
    }
})

updateState.addEventListener("submit",e=>{
    e.preventDefault()
    
    let formulario = new FormData(updateState)
    if (deleteAsesorContainer.value !== "" && (stateActive.checked || stateDisabled.checked)) {
        deleteAsesorContainer.classList.remove ('error')
        stateActive.classList.remove ('error')
        stateDisabled.classList.remove ('error')

        fetch(urlDeleteAsesor,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        deleteAsesorContainer.classList.add ('error')
        stateActive.classList.add ('error')
        stateDisabled.classList.add ('error')
    }
    
})