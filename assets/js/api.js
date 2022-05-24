
let rolApi
let supApi
let usersApi

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