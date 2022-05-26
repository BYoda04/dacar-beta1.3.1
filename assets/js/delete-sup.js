setTimeout(() => {
    listDeleteSup.innerHTML = optionsSup
    listUpdateSup.innerHTML = optionsSup
}, 1000);

deleteSup.addEventListener("submit",e=>{
    e.preventDefault()
    let formulario = new FormData(deleteSup)

    if (listDeleteSup.value === listUpdateSup.value) {
        listDeleteSup.classList.add('error')
        listUpdateSup.classList.add('error')
    } else if(supApi.length > 1){
        listDeleteSup.classList.remove('error')
        listUpdateSup.classList.remove('error')
        fetch(urlDeleteSup,{
            method: 'POST',
            body: formulario
        })
        .then(r => r.json())
    } else {
        listDeleteSup.classList.add('error')
        listUpdateSup.classList.add('error')
    }
    
})