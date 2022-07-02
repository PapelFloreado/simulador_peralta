const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const emailUser = document.querySelector("#emailUser")
const emailHost = document.querySelector("#emailHost")
const btnEnviar = document.querySelector("#submit")
const recuperarCarrito = document.querySelector("#recuperarCarrito")
const miCarrito = document.querySelector("#miCarrito")



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
      }) : (guardarCarrito(), guardarDatosUser(), Swal.fire({
        icon: 'success',
        title: 'Genial!',
        text: 'Tus datos fueron enviados',
      }))
    
})

function guardarCarrito(){
    carrito = JSON.stringify(carrito)
    localStorage.setItem("carrito", carrito)
}



recuperarCarrito.addEventListener("click", (e)=>{
    e.preventDefault()
    carrito.length === 0 ? Swal.fire({
        icon: 'error',
        title: 'Aquí no hay nada',
        text: 'Tu carrito todavía está vacio',
      }) : recuperarPedido()
    
})


function recuperarPedido() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
      let item = ""
          for (el of carrito) {
              item += `<h3>${el.tipo} - $${el.valorFinal}</h3>`
          }
          miCarrito.innerHTML = item
}


    