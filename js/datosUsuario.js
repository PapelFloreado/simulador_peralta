const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const emailUser = document.querySelector("#emailUser")
const emailHost = document.querySelector("#emailHost")
const btnEnviar = document.querySelector("#submit")
const recuperarCarrito = document.querySelector("#recuperarCarrito")
const miCarrito = document.querySelector("#miCarrito")
const totalCompra = document.querySelector("#totalCompra")


function guardarDatosUser () {
    const datosUser = {nombre: nombre.value,
                       apellido: apellido.value,
                       emailUser: emailUser.value,
                       emailHost: emailHost.value,

    }
    let datosString = JSON.stringify(datosUser)
    localStorage.setItem("datosUser",datosString)
}

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault()
    nombre.value, apellido.value, emailUser.value, emailHost.value === "" ? Swal.fire({
        icon: 'error',
        title: 'oh No!',
        text: 'Parece que faltan algunos datos',
      }) : (guardarDatosUser(), Swal.fire({
        icon: 'success',
        title: 'Genial!',
        text: 'Tus datos fueron enviados',
      }),storageRemove(),setTimeout(()=>{
        window.scroll(top)
      }, 500)
       ,setTimeout(()=>{
          location.reload()
      }, 800))
    
})

function storageRemove() {
    localStorage.clear()
}

recuperarCarrito.addEventListener("click", (e)=>{
    e.preventDefault()
    carrito.length=== 0 ? Swal.fire({
        icon: 'error',
        title: 'Aquí no hay nada',
        text: 'Tu carrito todavía está vacio',
      }) : recuperarPedido()
    
})


function recuperarPedido() {
    debugger
    if (cotizado.length > 0 && carrito.length === 0){

        let cotizado = JSON.parse(localStorage.getItem("cotizado"))
            cotizado.forEach(el => {
                cotizado = `<h3>${el.tipo} - $${el.valorFinal} Id: ${el.id}</h3>`
                
            });
            
        miCarrito.innerHTML = cotizado
    
    } else if (cotizado.length > 0 && carrito.length !== 0) {
        let cotizado = JSON.parse(localStorage.getItem("cotizado"))
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        cotizado.forEach(el => {
            cotizado = `<h3>${el.tipo} - $${el.valorFinal} Id: ${el.id}</h3>`
            
        });
        
        miCarrito.innerHTML = cotizado
        
        let item = ""
        for (el of carrito) {
            
            item += `<h3>${el.tipo} - $${el.valorFinal} Cantidad:${el.cantidad}</h3>`
        }
        miCarrito.innerHTML = item + cotizado
    
        let final = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
        let finalTotal = final + cotizado
        let div = document.createElement("div")
        div.innerHTML = `<h2>TOTAL FINAL: $${finalTotal}</h2>` 
        totalCompra.appendChild(div)

    }else if (carrito.length !== 0) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        let item = ""
        for (el of carrito) {
            
            item += `<h3>${el.tipo} - $${el.valorFinal} Cantidad:${el.cantidad}</h3>`
        }
        miCarrito.innerHTML = item 
    
        let final = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
        let div = document.createElement("div")
        div.innerHTML = `<h2>TOTAL FINAL: $${final}</h2>` 
        totalCompra.appendChild(div)

    }
}