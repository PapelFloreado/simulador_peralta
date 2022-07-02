
mostrarSeguros(seguros)

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
        div.classList = "list-group-item"
        div.innerHTML = `
        <p>${segu.tipo}</p>
        <p>Precio Final: $${segu.valorFinal}</p>
        <p>Cantidad: <span id="cantidad-prod">${segu.cantidad}</p>
        <button onclick="eliminarDelCarrito(${segu.id})" class="btn btn-primary " type="submit">Eliminar del carrito</button>
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
})