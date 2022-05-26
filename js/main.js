// Primer desafio opcional entregable.

let numero = parseInt(prompt("Hola, ingrese un numero del 1 al 20"));


for (let i = 1; i <= 20; i++){
    let resultado = numero + i;
    console.log("Este es nuestro resultado:",resultado)
    if (resultado === 10){
        console.log("Llegaste a la mitad, tranqui...")
    }else if(resultado === 15){
        console.warn("Te estas acercando al limite...")
    }else if(resultado === 20){
        console.error("Chocaste!!!")
        break;
    }else if(numero >= 20){
        alert("recarga la página... dijimos hasta el 20")
        break;
    }
}



