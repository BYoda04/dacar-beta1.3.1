let campAPi
let turnApi
let activoApi
let productApi

fetch(urlCamp)
.then(r=>r.json())
.then(r=>{

    campAPi = r.items

})

fetch(urlTurn)
.then(r=>r.json())
.then(r=>{

    turnApi = r.items

})

fetch(urlActivo)
.then(r=>r.json())
.then(r=>{

    activoApi = r.items

})

fetch(urlProduct)
.then(r=>r.json())
.then(r=>{

    productApi = r.items

})