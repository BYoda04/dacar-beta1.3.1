setTimeout(() => {
    listUpdateSup.innerHTML = optionsSup
}, 1000);

deleteSup.addEventListener("submit",e=>{
    e.preventDefault()
    let formulario = new FormData(deleteSup)

    if (inputSup.value === listUpdateSup.value) {
        listUpdateSup.classList.add('error')
    } else if(supApi.length > 1){
        listUpdateSup.classList.remove('error')
        fetch(urlDeleteSup,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        listUpdateSup.classList.add('error')
    }
    
})