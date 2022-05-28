setTimeout(() => {
    for (let i = 0; i < rolApi.length; i++) {
        if (parseInt(rol.innerText) === rolApi[i].id_rol) {
            rol.innerText = rolApi[i].rol_name
        }
    }
    
    for (let i = 0; i < supApi.length; i++) {
        if (nameTitle.innerText === supApi[i].name) {
            campTitle.innerText += ` ${camp(supApi[i].camp_cod)}`
            turnTitle.innerText += ` ${turn(supApi[i].turn_cod)}`
        }
    }
}, 1000);