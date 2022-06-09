
let ventasApi
let ventasCampApi

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