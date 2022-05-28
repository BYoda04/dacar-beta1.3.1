
setTimeout(() => {
    supList.innerHTML = optionsListSup

    const btnDeleteSup = document.getElementsByName('delete-sup')
    const agreeAsesor = document.getElementsByName('agree-asesor')
    const acordionAsesorList = document.getElementsByName('accordion-asesor-list')
    const nameSup = document.getElementsByName('name-sup')

    let nomSup
    let idActually
    let changeState

    for (let i = 0; i < btnDeleteSup.length; i++) {
        btnDeleteSup[i].addEventListener("click",e=>{
            e.preventDefault()
            nameSupDelete.innerText = `¿Esta seguro de eliminar al supervisor`
            nameSupDelete.innerText += ` ${nameSup[i].innerText}?`
            inputSup.value = nameSup[i].innerText
        })
    }

    for (let i = 0; i < agreeAsesor.length; i++) {
        agreeAsesor[i].addEventListener("click",e=>{
            e.preventDefault()
            supAsesor.value = nameSup[i].innerText
        })
    }

    for (let i = 0; i < acordionAsesorList.length; i++) {
        acordionAsesorList[i].addEventListener("click",e=>{
            e.preventDefault()
            nomSup = ""
            idActually = 0
            changeState = null
            nomSup = nameSup[i].innerText
            idActually = getId(nomSup)
            changeState = document.getElementsByName(`change-state-${idActually}`)

            for (let a = 0; a < changeState.length; a++) {
                changeState[a].addEventListener("click",e=>{
                    e.preventDefault()
                    supSearch.value = ""
                    deleteAsesorContainer.value = ""
                    const asesoresOf = document.getElementsByName(`asesores-of-${idActually}`)
                    supSearch.value = nomSup
                    deleteAsesorContainer.value = asesoresOf[a].innerText
                    console.log(supSearch.value)
                    console.log(deleteAsesorContainer.value)
                })
            }
        })
    }

}, 1000);
