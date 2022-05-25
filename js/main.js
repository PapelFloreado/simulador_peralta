// Primer desafio opcional entregable.
debugger
let numero = parseInt(prompt("Hola, ingrese un numero del 1 al 10"));

if (numero < 10) {
    for (let i = 1; i >= 10; i++) {
        let resultado = numero + i;
        console.log(resultado);
    }
}else{ (numero > 10)
    alert("menos que 10! volve a empezar!");  
}