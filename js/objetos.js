class Seguros {
    constructor (tipo, importe) {
        this.tipo = tipo.toLowerCase()
        this.importe = parseFloat(importe)
        this.vender = false
        this.valorFinal = this.precioFinal()
    }
    
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }

}

const seguros = []
function generadorAutomatico(){
seguros.push (new Seguros("Seguro Paquete Completo", 22500))
seguros.push (new Seguros("Seguro Solo Hogar", 15500))
seguros.push (new Seguros("Seguro Solo vehiculo", 9500))
seguros.push (new Seguros("Seguro Smartphone", 5000))
seguros.push (new Seguros("Seguro Incendio", 12000))
seguros.push (new Seguros("Seguro Retiro", 19000))

}


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

const carrito = []

function generarCarrito(){
    carrito.push (new Seguros("Seguro Paquete Completo", 22500))

}


