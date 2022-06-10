
let ventasApi
let ventasCampApi
let inversionApi

fetch(urlVentas)
.then(r=>r.json())
.then(r=>{

    ventasApi = r.items

})

fetch(urlVentasCamp)
.then(r=>r.json())
.then(r=>{

    ventasCampApi = r.items

})

fetch(urlInversion)
.then(r=>r.json())
.then(r=>{

    inversionApi = r.items

})