// Variables generales.

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
const guardarCompra = document.getElementById("guardarCompra")
const guardarCotizacion = document.querySelector("#guardarCotizacion")
const btnSubmit = document.querySelector("#btnSubmit")

// COTIZADOR SEGURO PERSONALIZADO

let cotizado = []

    

function cotizador(e){

    e.preventDefault()
    let select = document.getElementById("select")
    let flexRadioDefault1 = document.getElementById("flexRadioDefault1")
    
    
    if ( select.value == "val2" && flexRadioDefault1.checked == true){
        
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * IVA * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = spinner()
                                    setTimeout(()=>{
                                        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado}</h2>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`
                                    }, 1800)
        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {
            document.querySelector("#btnSubmit")       
            cotizado.push ( new Cotizacion)
            cotizado = JSON.stringify(cotizado)
            localStorage.setItem("cotizado", cotizado)
            
        })
       
        btnSubmit.addEventListener("click", (submit)=>{
           submit = document.querySelector("#btnSubmit").setAttribute("disabled", "")
        })
        
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val1" && flexRadioDefault1.checked == true ) {
        
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * IVA).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = spinner()
                                    setTimeout(()=>{
                                        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado}</h2>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`
                                    }, 1800)
        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            cotizado = JSON.stringify(cotizado)
            localStorage.setItem("cotizado", cotizado)
            
        })
        btnSubmit.addEventListener("click", (submit)=>{
            submit = document.querySelector("#btnSubmit").setAttribute("disabled", "")
         })       
       
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val1" && flexRadioDefault1.checked == false  ){
        
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = spinner()
                                    setTimeout(()=>{
                                        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado}</h2>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`
                                    }, 1800)

        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            cotizado = JSON.stringify(cotizado)
            localStorage.setItem("cotizado", cotizado)
            
        })
        btnSubmit.addEventListener("click", (submit)=>{
            submit = document.querySelector("#btnSubmit").setAttribute("disabled", "")
         })
        
        padre.appendChild(cotizacion)

        return cotizacion

    }else if ( select.value == "val2" && flexRadioDefault1.checked == false ) {
        
        let tipo = "Seguro Personalizado"
        let resultado = parseFloat(metros2.value * precio * sinAlarma).toFixed(2)
        let cotizacion = document.createElement("div")
        cotizacion.innerHTML = spinner()
                                    setTimeout(()=>{
                                        cotizacion.innerHTML = `<h2 id="final">Tu seguro costará $${resultado}</h2>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quiero que me Llamen</button>`
                                    }, 1800)
        class Cotizacion {
            constructor (cotizacion) {
                this.tipo = tipo
                this.valorFinal = resultado
                this.id = creoID()
            }
        }
        cotizacion.addEventListener("click", (cotizacion)=> {          
            cotizado.push ( new Cotizacion)
            cotizado = JSON.stringify(cotizado)
            localStorage.setItem("cotizado", cotizado)
            
        })
        btnSubmit.addEventListener("click", (submit)=>{
            submit = document.querySelector("#btnSubmit").setAttribute("disabled", "")
         })
       
        
        padre.appendChild(cotizacion)

        return cotizacion
    }
}

// Animacion de Cotizacion.

const spinner = ()=>{
    return `<div class="m-3 d-flex align-items-center">
    <strong class="fs-1" style="width: 3rem; height: 3rem;">Cotizando...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true" style="width: 5rem; height: 5rem;"></div>
  </div>`
}