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
