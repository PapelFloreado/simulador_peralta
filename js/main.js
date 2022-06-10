//Primer desafio
alert("Hola, vamos a cotizar tu seguro juntos")
let metros = parseInt(prompt("Ingrese la cantidad de metros a asegurar"))
let alarma = confirm("¿Tenés alarma?") 
let consumidorFinal = confirm("¿Sos consumidor final?")

if (alarma === true && consumidorFinal === true){
    function cotizador (metros, precio, IVA) {
        return ( metros * precio * IVA )
    }
}else if( alarma === false && consumidorFinal === true ){
    function cotizador (metros, precio, IVA, sinAlarma) {
        return ( metros * precio * IVA * sinAlarma )
    }
}else if( alarma === true && consumidorFinal === false){
    alert("Recordá que deberas pagar tus impuestos")
    function cotizador (metros, precio) {
        return ( metros * precio)
    }
}else if( alarma === false && consumidorFinal === false){
    alert("Recordá que deberas pagar tus impuestos")
    function cotizador (metros, precio, sinAlarma) {
        return ( metros * precio * sinAlarma)
    }
}

let resultado = cotizador(metros, precio, IVA, sinAlarma)
alert("Tu seguro costará: $" + resultado + " por mes.")

//Desafio y 1era Entrega proyecto final

generadorAutomatico()
console.table(seguros)


alert("filtremos un producto juntos")
let filtrado = console.table(filtrarProducto())
alert(filtrado)

alert("ahora busquemos un producto")
let busqueda = console.table(buscarProducto())
alert(busqueda)

alert("vamos a simular algo")

seguros[0].vender = confirm("deaseas comprar un seguro de paquete completo")
if (seguros[0].vender === true) {
    generarCarrito()
    console.table(carrito)
    let confirma = confirm("desea conocer el precio final")
    if(confirma === true){
        alert(seguros[0].valorFinal)
           
    }
}else if (seguros[0].vender === false) {
    alert("Oh lo sentimos mucho...")
}


