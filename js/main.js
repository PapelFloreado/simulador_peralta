
let select = document.getElementById("select")
let metros2 = document.getElementById("metros2")
let flexRadioDefault1 = document.getElementById("flexRadioDefault1")
let padre = document.getElementById("cotizacion");
let submit = document.addEventListener("submit", cotizador)
const mouse = document.querySelector("#final")
const pagarCarrito = document.getElementById("pagarCarrito")
const precioTotal = document.getElementById('precioTotal');
const listadoSeguros = document.getElementById("listadoSeguros") 
const listadoCarrito = document.getElementById("listadoCarrito")





// COTIZADOR SEGURO PERSONALIZADO

const cotizado = [] 

const eliminarDelCarrito = (productoID)=> {
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
              itemAeliminar.remove()
              return
    }
}


function cotizador(e){
    
    e.preventDefault()
    let select = document.getElementById("select")
    let flexRadioDefault1 = document.getElementById("flexRadioDefault1")
    
    
    if ( select.value == "val2" && flexRadioDefault1.checked == true){
        let id = creoID()
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * IVA * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`

        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            carrito.push(new Cotizacion)
            
        })
        
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val1" && flexRadioDefault1.checked == true ) {
        let id = creoID()
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * IVA).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`

        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            carrito.push(new Cotizacion)                            
        })
       
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val1" && flexRadioDefault1.checked == false  ){
        let id = creoID()
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`

        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            carrito.push(new Cotizacion)                            
        })

        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val2" && flexRadioDefault1.checked == false ) {
        let id = creoID()
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`

        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            carrito.push(new Cotizacion)                            
        })
        
        padre.appendChild(cotizacion)

        return cotizacion
    }
}


mostrarSeguros(seguros)

function mostrarSeguros(array) {
    listadoSeguros.innerHTML = ""
    
    array.forEach (el =>{
        let div = document.createElement("div")
        div.innerHTML = `<div class="container card mb-5 border-0" style="max-width: 840px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${el.img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title fs-2 text">${el.tipo}</h5>
              <p class="card-text fs-4 text">${el.description} </p>
              <p id="precio" class="card-text precio fs-6 text">Precio sin impuestos: $${el.importe}  </p>
              <p id="precioFinal" class="card-text precioFinal fs-6 text">Precio Final: $${el.valorFinal}</p>
              <p id="id" class="card-text fs-6 text">ID:${el.id}</p>    
            </div>
            <button id="boton${el.id}" type="button" class="btn ms-2 btn-primary">Agregar al Carrito</button>
            </div>
            </div>
            </div>`
        listadoSeguros.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id);
        })
    })
}

function agregarAlCarrito(id) {
    let productoAgregar = seguros.find(obj=> obj.id === id)
    carrito.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
}   

function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
     div.innerHTML=` <p>${productoAgregar.tipo}</p>
                     <p>Precio Final: $${productoAgregar.valorFinal}</p>
                     <button id="eliminar${productoAgregar.id}" class="btn btn-primary" type="submit">Eliminar del carrito</button>`
     listadoCarrito.appendChild(div)
 
     let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
     btnEliminar.addEventListener('click',()=>{
         btnEliminar.parentElement.remove()
         carrito = carrito.filter(el => el.id !== productoAgregar.id)
         actualizarCarrito()
         console.log(carrito);
     })
 }
 
 function actualizarCarrito (){
    precioTotal.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,el)=> acc + el.valorFinal, 0 )   

}                                                          