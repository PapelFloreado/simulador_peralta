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


const seguros = []
let carrito = []

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



function creoID() {
    return parseInt(Math.random() * 10000)
}
