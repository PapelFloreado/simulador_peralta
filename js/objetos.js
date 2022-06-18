class Seguros {
    constructor (img,tipo, importe, description,id, vender,IVA, valorFinal ) {
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

function generadorAutomatico(){
seguros.push (new Seguros("../../assets/img/familia.jpg","Seguro Paquete Completo", 22500, "Este seguro cuida a lo que mas queres. Aprovechalo ahora."))
seguros.push (new Seguros("../../assets/img/hogar.jpg","Seguro Solo Hogar", 15500,"Este seguro cuida tu casa. Aprovechalo ahora."))
seguros.push (new Seguros("../../assets/img/auto1.jpg","Seguro Solo vehiculo", 9500,"Cuida tu vehículo para que te lleve donde quieras. Aprovechalo ahora."))
seguros.push (new Seguros("../../assets/img/smartphone.jpg","Seguro Smartphone", 5000,"Cuida tu SmartPhone para que todo funcione ok. Aprovechalo ahora."))
seguros.push (new Seguros("../../assets/img/incendio.jpg","Seguro Incendio", 12000,"Cuida todo el contenido de tu casa. Aprovechalo ahora."))
seguros.push (new Seguros("../../assets/img/adulto.jpg","Seguro Retiro", 19000, "Asegurate de un buen retiro con este seguro. Aprovechalo ahora."))

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

let carrito = []


function creoID() {
    return parseInt(Math.random() * 10000)
}



