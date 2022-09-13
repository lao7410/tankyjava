const usrRegistrados = []
const productos = []
const servicios = []
const tabla = document.getElementById("tabla")


const creoID = () => parseInt(Math.random() * 10000)

/* function Producto (nombre, apellido, edad){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
}

const producto1=new Producto ("","","")
const prducto2=new Producto("","","") */

class Usuarios {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
}



class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
    }
    precioFinal() {
        return '$' + parseFloat ((this.importe + IVA).tofixed(2))
    }
    
}

class Servicio {
    constructor(nombre, precio, hs) {
        this.nombre = nombre
        this.precio = precio
        this.hs = hs
    }
    precioxHs() {
        return this.precio * hs
    }
    descontarStock(unidades) {
        return this.stock = this.stock - unidades
    }

}

function generadorDeServicios() {
    servicios.push(new Servicio(0001, "SOPORTE TECNICO", 1000, ""))
    servicios.push(new Servicio(0002, "ARMADO PC", 2000, ""))
    servicios.push(new Servicio(0003, "DIAGNOSTICO DE RED", 2500, ""))
    servicios.push(new Servicio(0004, "INSTALACION Y CONFIGURACION SISTEMA OPERATIVO", 5000, ""))
    servicios.push(new Servicio(0005, "LIMPIEZA", 4000, ""))
    servicios.push(new Servicio(0006, "CONFIG USUARIO", 3500, ""))
    servicios.push(new Servicio(0007, "REPARACION", 67980, ""))
    servicios.push(new Servicio(000, "CAMBIO PANTALLA", 1890, ""))
}

function generadorDeProductos() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950, "NOTEBOOK"))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900, "NOTEBOOK"))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949, "NOTEBOOK"))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890, "TABLET"))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090, "NOTEBOOK"))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000, "NOTEBOOK"))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800, "NOTEBOOK"))
    productos.push(new Producto(8901, "IPAD MINI 7.9", 189900, "TABLET"))

}



/* const producto1 = new Producto("Macbook Air 13 M1", 1200, 45)
const producto2 = new Producto("Macbook Pro 14 M1", 1900, 30)
const producto3 = new Producto("iMac", 2000, 11)
 */
