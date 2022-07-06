class Seguros {
    constructor (cantidad, img,tipo, importe, description,id, vender,iva, valorFinal ) {
        this.cantidad = cantidad
        this.img = img
        this.tipo = tipo
        this.importe = parseFloat(importe)
        this.vender = false
        this.iva = IVA
        this.valorFinal = this.precioFinal()
        this.description = description
        this.id = creoID()
    }
    
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }

}

class Cotizacion {
    constructor (cotizacion) {
        this.tipo = tipo
        this.valorFinal = resultado
        this.id = creoID()
    }
}


const seguros = []


function generadorAutomatico() {
    fetch("js/productos.json")
    .then(response => response.json())
    .then(productos=> {
        productos.forEach(producto => {
            seguros.push(new Seguros(producto.cantidad, producto.img, producto.tipo, producto.importe, producto.description))
            
        });
        mostrarSeguros(seguros)
        console.log(seguros)
    })
    .catch(err=> console.log(err))
}
/* 
seguros.push (new Seguros(1,"assets/img/familia.jpg","Seguro Paquete Completo", 22500, "Este seguro cuida a lo que mas queres. Aprovechalo ahora.", 1))
seguros.push (new Seguros(1,"assets/img/hogar.jpg","Seguro Solo Hogar", 15500,"Este seguro cuida tu casa. Aprovechalo ahora.", 1))
seguros.push (new Seguros(1,"assets/img/auto1.jpg","Seguro Solo vehiculo", 9500,"Cuida tu vehículo para que te lleve donde quieras. Aprovechalo ahora.", 1))
seguros.push (new Seguros(1,"assets/img/smartphone.jpg","Seguro Smartphone", 5000,"Cuida tu SmartPhone para que todo funcione ok. Aprovechalo ahora.", 1))
seguros.push (new Seguros(1,"assets/img/incendio.jpg","Seguro Incendio", 12000,"Cuida todo el contenido de tu casa. Aprovechalo ahora.", 1))
seguros.push (new Seguros(1,"assets/img/adulto.jpg","Seguro Retiro", 19000, "Asegurate de un buen retiro con este seguro. Aprovechalo ahora.", 1))
 */


generadorAutomatico()

function filtrarProducto (){
    let producto = prompt("ingrese el producto")
    let filtrado = seguros.filter(p => p.tipo.includes(producto.toLowerCase()))
    return filtrado
}

function buscarProducto() {
    let producto = prompt("Ingrese el producto que desea buscar:").toLowerCase()
    if (producto !== "") {
        let busqueda = seguros.find (s => s.tipo.includes(producto.toLocaleLowerCase()) )
        return busqueda
    }
}

let carrito = []


function creoID() {
    return parseInt(Math.random() * 10000)
}
