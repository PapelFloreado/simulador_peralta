
const select = document.getElementById("select")
const metros2 = document.getElementById("metros2")
const flexRadioDefault1 = document.getElementById("flexRadioDefault1")
const padre = document.getElementById("cotizacion");
const submit = document.addEventListener("submit", cotizador)
const mouse = document.querySelector("#final")
const pagarCarrito = document.getElementById("pagarCarrito")
const precioTotal = document.getElementById('precioTotal');
const listadoSeguros = document.getElementById("listadoSeguros") 
const listadoCarrito = document.getElementById("listadoCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")


// COTIZADOR SEGURO PERSONALIZADO

const cotizado = [] 



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


/* mostrarSeguros(seguros)

function mostrarSeguros(array) {
    listadoSeguros.innerHTML = ""
    
    array.forEach (el =>{
        const {img, tipo, description, importe, valorFinal, id} = el
        let div = document.createElement("div")
        div.innerHTML = `<div class="container card mb-5 border-0" style="max-width: 840px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title fs-2 text">${tipo}</h5>
              <p class="card-text fs-4 text">${description} </p>
              <p id="precio" class="card-text precio fs-6 text">Precio sin impuestos: $${importe}  </p>
              <p id="precioFinal" class="card-text precioFinal fs-6 text">Precio Final: $${valorFinal}</p>  
            </div>
            <button id="boton${id}" type="button" class="btn ms-2 btn-primary">Agregar al Carrito</button>
            </div>
            </div>
            </div>`
        listadoSeguros.appendChild(div)
        let btnAgregar = document.getElementById(`boton${id}`)
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id)
        })
    })
}

const agregarAlCarrito = (produId)=>{
    const productoDuplicado = carrito.some(segu => segu.id === produId)
    if (productoDuplicado) {
        const seguro = carrito.map (segu=> {
            if(segu.id === produId){
                segu.cantidad++
            }
        })
    }else {
        const item = seguros.find((segu)=>segu.id == produId)
        carrito.push(item)
        console.log(carrito)
    }
    actualizarCarro()
}                                         

const actualizarCarro = () =>{
    listadoCarrito.innerHTML = ""
    carrito.forEach((segu)=>{
        const div = document.createElement("div")
        div.innerHTML = `
        <p>${segu.tipo}</p>
        <p>Precio Final: $${segu.valorFinal}</p>
        <p>Cantidad: <span id="cantidad-prod">${segu.cantidad}</p>
        <button onclick="eliminarDelCarrito(${segu.id})" class="btn btn-primary" type="submit">Eliminar del carrito</button>
        `
        listadoCarrito.appendChild(div)
    })
    precioTotal.innerText = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
}

const eliminarDelCarrito = (produId) => {
    const item = carrito.find ((segu)=> segu.id === produId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarro()
}

vaciarCarrito.addEventListener("click", ()=>{
    carrito.length = 0
    actualizarCarro()
}) */