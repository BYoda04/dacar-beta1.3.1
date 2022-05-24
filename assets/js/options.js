
let optionsSup

setTimeout(() => {
    optionsSup = ""
    for (let i = 0; i < supApi.length; i++) {
        optionsSup += `<option>${(supApi[i].supervisor_name).toUpperCase()}</option>`
    }
}, 900);
