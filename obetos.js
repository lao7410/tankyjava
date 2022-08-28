/* function Producto (nombre, apellido, edad){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
}

const producto1=new Producto ("","","")
const prducto2=new Producto("","","") */

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva() {
        return this.precio * IVA
    }
    descontarStock(unidades) {
        return this.stock = this.stock - unidades
    }
}

const producto1 = new Producto("Macbook Air 13 M1", 1200, 45)
const producto2 = new Producto("Macbook Pro 14 M1", 1900, 30)
const producto3 = new Producto("iMac", 2000, 11)
