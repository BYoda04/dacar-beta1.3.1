
let rolApi
let supApi
let usersApi
let asesorApi

fetch(urlRol)
.then(r=>r.json())
.then(r=>{

    rolApi = r.items

})

fetch(urlSup)
.then(r=>r.json())
.then(r=>{

    supApi = r.items

})

fetch(urlUsers)
.then(r=>r.json())
.then(r=>{

    usersApi = r.items

})

fetch(urlAsesor)
.then(r=>r.json())
.then(r=>{

    asesorApi = r.items

})
