//Despliega productos en pantalla

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
            <button id="boton${id}" type="button" class="btn ms-2 btn-primary liveToastBtn">Agregar al Carrito</button>
            </div>
            </div>
            </div>`
        listadoSeguros.appendChild(div)
        let btnAgregar = document.getElementById(`boton${id}`)
        btnAgregar.addEventListener('click',()=>{
            const toastLiveExample = document.getElementById('liveToast')
           
                const toast = new bootstrap.Toast(toastLiveExample)

                toast.show()
            
            
            agregarAlCarrito(el.id)
            jsonCarrito()
            
        })
    })

}

// Funciones para Guardar Caritto a JSON y Remover SI VACIA EL CARRITO ANTES DE COMPRAR

function jsonCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito))
}
function removerJson() {
    localStorage.removeItem("carrito")
}

// Agrega productos al carrito y suma cantidad

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

// Actualiza el Carrito cada vez que hace una seleccion

const actualizarCarro = () =>{
    listadoCarrito.innerHTML = ""
    carrito.forEach((segu)=>{
        const div = document.createElement("div")
        div.classList = "list-group-item"
        div.innerHTML = `
        <p>${segu.tipo}</p>
        <p>Precio Final: $${segu.valorFinal}</p>
        <button type="button" id="${segu.id}" class="btn btn-primary restar">-</button>
        <span id="cantidad-prod">${segu.cantidad}
        <button type="button" id="${segu.id}" class="btn btn-primary sumar">+</button>
        `
        listadoCarrito.appendChild(div)
    })
    precioTotal.innerText = carrito.reduce((acc, segu)=> acc + segu.valorFinal * segu.cantidad, 0)
    
}

// Elimina productos del Carrito

const eliminarDelCarrito = (produId) => {
    const item = carrito.find ((segu)=> segu.id === produId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarro()
}

// Vacia Carrito

vaciarCarrito.addEventListener("click", ()=>{
    carrito.length = 0
    precioTotal.innerText = 0
    removerJson()
    actualizarCarro()
})

// Suma y resta cada elemento del carrito y Actualiza el JSON

listadoCarrito.addEventListener("click", (e)=>{

    const restarProd = e.target.classList.contains("restar")
    const sumarProd= e.target.classList.contains("sumar")
    if (sumarProd || restarProd) {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == e.target.id) {
                if (sumarProd) {
                    carrito[i].cantidad +=1
                    
                }else if (restarProd) {
                    carrito[i].cantidad -=1
                    
                }
                jsonCarrito()
            }
            if (carrito[i].cantidad <= 0) {
                carrito.splice (i, 1)
                jsonCarrito()
                if(carrito.length < 1){
                    removerJson()
                }
            }
            
        }
        actualizarCarro()
    } 
})

// Recupera JSON de carrito si lo hubiera

function recuperoJson() {
    if (localStorage.length > 0){

        carritoJson = JSON.parse(localStorage.getItem("carrito"))
        carritoJson.forEach(producto => {
            carrito.push(new Seguros(producto.cantidad, producto.img, producto.tipo, producto.importe, producto.description))
            actualizarCarro()
        });
    }
      
}
recuperoJson()


