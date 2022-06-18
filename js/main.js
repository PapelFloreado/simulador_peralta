
let select = document.getElementById("select")
let metros2 = document.getElementById("metros2")
let flexRadioDefault1 = document.getElementById("flexRadioDefault1")
let padre = document.getElementById("cotizacion");
let submit = document.addEventListener("submit", cotizador)
const listadoCarrito = document.getElementById("listadoCarrito")
const mouse = document.querySelector("#final")
const listadoSeguros = document.getElementById("listadoSeguros") 
const pagarCarrito = document.getElementById("pagarCarrito")



// COTIZADOR SEGURO PERSONALIZADO

const cotizado = [] 


function cotizador(e){
    
    e.preventDefault()
    let select = document.getElementById("select")
    let flexRadioDefault1 = document.getElementById("flexRadioDefault1")
    
    
    if ( select.value == "val2" && flexRadioDefault1.checked == true){
        let id = creoID()
        let resultado = (metros2.value * precio * IVA * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>`

        class Cotizacion {
            constructor (cotizacion) {
                this.cotizacion = cotizacion
                this.resultado = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            
        })
        cotizacion.addEventListener("click",(cotizacion)=> {                 
                const liCarrito = document.createElement("li")
                      liCarrito.id = id
                      liCarrito.innerText = "Su Cotizacion es de $" + resultado + "," + "ID: " + id
                      liCarrito.className = "list-group-item"
                      liCarrito.addEventListener("dblclick", ()=> {
                        eliminarDelCarrito(`${id}`)
                    })
                      listadoCarrito.append(liCarrito)
                    })
                    
        cotizacion.addEventListener("mousemove",()=>{
            final.title = "Agregar al carrito"
        })
        padre.appendChild(cotizacion)
        
        return cotizacion
        
        
    }else if ( select.value == "val1" && flexRadioDefault1.checked == true ) {
        let id = creoID()
        let resultado = (metros2.value * precio * IVA).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>`

        class Cotizacion {
            constructor (cotizacion) {
                this.cotizacion = cotizacion
                this.resultado = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
                                        
        })
        cotizacion.addEventListener("click",(cotizacion)=> {                 
            const liCarrito = document.createElement("li")
                  liCarrito.id = id
                  liCarrito.innerText = "Su Cotizacion es de $" + resultado + "," + "ID: " + id
                  liCarrito.className = "list-group-item"
                  liCarrito.addEventListener("dblclick", ()=> {
                    eliminarDelCarrito(`${id}`)
                })

                  
                  listadoCarrito.append(liCarrito)
        })
        
        cotizacion.addEventListener("mousemove",()=>{
            final.title = "Agregar al carrito"
        })
        padre.appendChild(cotizacion)

        return cotizacion
        
    }else if ( select.value == "val1" && flexRadioDefault1.checked == false  ){
        let id = creoID()
        let resultado = (metros2.value * precio).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>`

        class Cotizacion {
            constructor (cotizacion) {
                this.cotizacion = cotizacion
                this.resultado = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
                                        
        })
        cotizacion.addEventListener("click",(cotizacion)=> {                 
            const liCarrito = document.createElement("li")
                  liCarrito.id = id
                  liCarrito.innerText = "Su Cotizacion es de $" + resultado + "," + "ID: " + id
                  liCarrito.className = "list-group-item"
                  liCarrito.addEventListener("dblclick", ()=> {
                    eliminarDelCarrito(`${id}`)
                })

                  
                  listadoCarrito.append(liCarrito)
        })
        cotizacion.addEventListener("mousemove",()=>{
            final.title = "Agregar al carrito"
        })                             
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val2" && flexRadioDefault1.checked == false ) {
        let id = creoID()
        let resultado = (metros2.value * precio * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado} ID:${id} </h2>`

        class Cotizacion {
            constructor (cotizacion) {
                this.cotizacion = cotizacion
                this.resultado = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
                                        
        })
        cotizacion.addEventListener("click",(cotizacion)=> {                 
            const liCarrito = document.createElement("li")
                  liCarrito.id = id
                  liCarrito.innerText = "Su Cotizacion es de $" + resultado + "," + "ID: " + id
                  liCarrito.className = "list-group-item"
                  liCarrito.addEventListener("dblclick", ()=> {
                    eliminarDelCarrito(`${id}`)
                })

                  
                  listadoCarrito.append(liCarrito)
        })
        cotizacion.addEventListener("mousemove",()=>{
            final.title = "Agregar al carrito"
        })
        padre.appendChild(cotizacion)
        return cotizacion
    
    }

}




const cargarSeguros = (elemento)=> { 
    
    listadoSeguros.innerHTML = ""
    for (elemento of seguros) {
        
        const divSeguros = document.createElement("li") 
        divSeguros.className = "list-group-item"       
                divSeguros.innerHTML = 
                `<div class="container card mb-5 border-0" style="max-width: 840px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${elemento.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fs-2 text">${elemento.tipo}</h5>
                      <p class="card-text fs-4 text">${elemento.description} </p>
                      <p id="precio" class="card-text precio fs-4 text">Precio sin impuestos: $${elemento.importe}  </p>
                      <p id="precioFinal" class="card-text precioFinal fs-4 text">Precio Final: $${elemento.valorFinal}</p>
                    </div>
                    <button id="boton "  ${elemento.valorFinal} type="button" class="btn ms-2  btn-primary">Agregar al Carrito</button>
                    </div>
                    </div>
                    </div>`
                                       

                    listadoSeguros.appendChild(divSeguros)

                    divSeguros.addEventListener("click", (divSeguros)=> {          
                        carrito.push(elemento)
                                                    
                    })
                    divSeguros.addEventListener("click",(seguros)=> {                 
                        const liCarrito = document.createElement("li")
                              liCarrito.innerText = elemento.tipo + `${elemento.valorFinal}`
                              liCarrito.className = "list-group-item"
                              listadoCarrito.appendChild(liCarrito)
                            }) 
                
            }         
        }

       
cargarSeguros()
        
        


        

        
const agregarAlCarrito = (elemento)=> { 
    
if (elemento > "") {
    const id = elemento + "enCarrito" 
    const tipo = elemento + "enCarrito"
    const liCarrito = document.createElement("li")
            liCarrito.id = id
            liCarrito.className = "list-group-item"
            liCarrito.innerText = elemento           
            liCarrito.tipo = tipo
            liCarrito.addEventListener("dblclick", ()=> {
                eliminarDelCarrito(`${id}`)
            })
            listadoCarrito.append(liCarrito)
    }
}

const eliminarDelCarrito = (id)=> { //Usen el DEBUGGER para seguir el código paso a paso
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(id)
       
              itemAeliminar.remove()
              return
    }
}

/* const total = (elemento)=> {
    listadoCarrito.innerHTML = ""
    for (elemento of carrito) {
        const final = document.createElement("div")

        final.innerHTML = `<!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`
        final.addEventListener("click",()=>{

        }) 

    }


} */