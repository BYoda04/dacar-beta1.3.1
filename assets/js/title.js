setTimeout(() => {
    for (let i = 0; i < rolApi.length; i++) {
        if (parseInt(rol.innerText) === rolApi[i].id_rol) {
            rol.innerText = rolApi[i].rol_name
        }
    }
}, 1000);