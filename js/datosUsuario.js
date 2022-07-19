//Datos usuarios para Recuperar Pedido o Cotizacion

const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const emailUser = document.querySelector("#emailUser")
const emailHost = document.querySelector("#emailHost")
const btnEnviar = document.querySelector("#submit")
const recuperarCarrito = document.querySelector("#recuperarCarrito")
const miCarrito = document.querySelector("#miCarrito")
const totalCompra = document.querySelector("#totalCompra")

//Guarda Datos User

function guardarDatosUser () {
    const datosUser = {nombre: nombre.value,
                       apellido: apellido.value,
                       emailUser: emailUser.value,
                       emailHost: emailHost.value,

    }
    let datosString = JSON.stringify(datosUser)
    localStorage.setItem("datosUser",datosString)
}

//Envia Datos y Remueve Local Storage si está OK

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

// Recupera datos del Carrito

recuperarCarrito.addEventListener("click", (e)=>{
   
    e.preventDefault()
    if (carrito.length > 0 || cotizado.length > 0) {
        recuperarPedido()
    }else if (carrito.length < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Aquí no hay nada',
            text: 'Tu carrito todavía está vacio',
          })
    }else if (cotizado.length < 1){
        Swal.fire({
            icon: 'error',
            title: 'Aquí no hay nada',
            text: 'Tu carrito todavía está vacio',
          })
    }
    
})

// Funcion para Recuperar Datos

function recuperarPedido() {

    if (cotizado.length > 0 && carrito.length === 0){ //Recupera Solo Cotizacion Seguro Personal
            
        let cotizado = JSON.parse(localStorage.getItem("cotizado"))
            cotizado.forEach(el => {
                cotizado = `<h3>${el.tipo} - $${el.valorFinal} Id: ${el.id}</h3>`
                
            });
        miCarrito.innerHTML = ""        
        miCarrito.innerHTML = cotizado
    
    } else if (cotizado.length > 0 && carrito.length !== 0) { //Recupera Cotizacion y Carritos de Compras
        
        let cotizado = JSON.parse(localStorage.getItem("cotizado")) || []
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        cotizado.forEach(el => {
            cotizadoFinal = parseInt(el.valorFinal)
            cotizado.push(cotizado.tipo, parseInt(cotizado.valorFinal),cotizado.id) 
            cotizado = `<h3>${el.tipo} - $${el.valorFinal} Id: ${el.id}</h3>`
            
        });
        
        miCarrito.innerHTML = cotizado
        
        let item = ""
        for (segu of carrito) {
            
            item += `<h3>${segu.tipo} - $${segu.valorFinal} Cantidad:${segu.cantidad}</h3>`
        }
        
        miCarrito.innerHTML = item + cotizado
    
        let final = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
        let finalTotal = final + cotizadoFinal
        let div = document.createElement("div")
        totalCompra.innerHTML =""
        miCarrito.innerHTML = item + cotizado
        div.innerHTML = `<h2>TOTAL FINAL: $${finalTotal}</h2>` 
        totalCompra.appendChild(div)

    }else if (carrito.length > 0) { // Recupera Solo Carrito de compras SIN COTIZACION PERSONAL
        let div = document.createElement("div")
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        let item = ""
        for (el of carrito) {
            
            item += `<h3>${el.tipo} - $${el.valorFinal} Cantidad:${el.cantidad}</h3>`
        }
        
        miCarrito.innerHTML = item 
    
        let final = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
        
        totalCompra.innerHTML =""
        div.innerHTML = `<h2>TOTAL FINAL: $${final}</h2>` 
        totalCompra.appendChild(div)

    }
}