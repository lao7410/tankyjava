class Calculadora {
    constructor(cantidad,Servicio, Usuario, manoDeObra ) {
        
        this.cantidad = parseInt (cantidad)
        this.factorSrv = parseFloat (Servicio)
        this.factorUsr = parseFloat (Usuario)
        this.mo = parseInt (manoDeObra)
        
    }
    calcular() {
        /* if (yaCliente.value==="..."){  
            let resultado = (this.cantidad * this.factorServicio * this.factorUsuario * this.manoDeObra) //cargar algor para descuento x ser usr.
        return resultado.toFixed(2)}
        else{
            let resultado = ((this.cantidad * this.factorServicio * this.factorUsuario * this.manoDeObra)/1.25)
            return resultado.tofixed(2)    
        } */
        let resultado = (this.cantidad * this.factorSrv * this.factorUsr * this.mo ) //cargar algor para descuento x ser usr.
        return resultado.toFixed(2)
    }
}

const msjalerta = (msj,icono) => { 
    Swal.fire({
        icon: icono,
        title: msj,
        confirmButtonAriaLabel: 'Thumbs up, great!'
        /* text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>' */
      })
}

//DOM
const Servicio = document.querySelector("#Servicio")
const Usuario = document.querySelector("#Usuario")
const cantidad = document.querySelector("#cantidad")
const btnCotizar = document.querySelector("button")
const importe = document.querySelector("span")//cambiar clase cuando se agregue la 2da logica
const btnEnviar = document.querySelector("span.guardar")//quitar mas tarde

//BASE DE DATOS FICTICIA 
const datosServicio = [ {tipo: 'Instalacion S.O', factor: 1.05},
                        {tipo: 'Armado', factor: 1.03},
                        {tipo: 'Configuracion CPU / LAPTOP', factor: 1.03},
                        {tipo: 'Armado y configuracion de red', factor: 1.51},
                        {tipo: 'Diagnostico', factor: 1.05},
                        {tipo: 'Mantenimiento preventivo', factor: 1.20},
                        {tipo: 'Desarrollo', factor: 3.92}]

const datosUsuario = [  {tipo: 'Usuario privado', factor: 1.15},
                        {tipo: 'Adultos mayores', factor: 1.00},
                        {tipo: 'PyMe (Entre 10 y 40 empleados)', factor: 2.29},
                        {tipo: 'Grandes empresas (más de 40 empleados)', factor: 4.50},]

//BD clientes registrados                        
const yaClientes = [    {tipo: 'Ford', factor: 1.25},
                        {tipo: 'VW', factor: 1.25},
                        {tipo: 'Hp', factor: 1.25},
                        {tipo: 'Lenovo', factor: 1.25},]

const manoDeObra = 2950

const productoscompletos = [    {id: '0001', tipo: 'Intel Core I3', precio: '10000',stock:'8'},
                                {id: '0002', tipo: 'Intel Core I5', precio: '15000',stock:'19'},
                                {id: '0003', tipo: 'Intel Core I7', precio: '19000',stock:'10'},
                                {id: '0004', tipo: 'Intel Core I9', precio: '20000',stock:'11'},
                                {id: '0005', tipo: 'AMD 1', precio: '5000',stock:'1'},
                                {id: '0006', tipo: 'CELERON', precio: '250000',stock:'4'},
                                {id: '0007', tipo: 'PENTIUM GOLD', precio: '5000',stock:'5'},
                                {id: '0008', tipo: 'RYZEN 7', precio: '100000',stock:'70'},
                                //{id: '0006', tipo: 'CELERON', precio: '250000',stock:'4'},
                                //{id: '0007', tipo: 'PENTIUM GOLD', precio: '5000',stock:'5'},
                                //{id: '0008', tipo: 'RYZEN 7', precio: '100000',stock:'70'},

]




//Función cargar selecciones de opciones del usuario
//OPERADOR TERNARIO
const cargarCombo = (select, array)=> {
    array.length > 0 ? array.forEach(elemento => {select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`}) : console.error("🚩🚩🚩💥No existen elementos en el array.💥🚩🚩🚩")
  /*   if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("🚩🚩🚩💥No existen elementos en el array.💥🚩🚩🚩")
    } */
}


cargarCombo(Servicio, datosServicio)
cargarCombo(Usuario, datosUsuario)

const datosCompletos = ()=> { 
    
     if (Servicio.value !== "..." && Usuario.value !== "..." && parseInt(cantidad.value) && cantidad.value > 0 && cantidad.value <= 24) {
        return true
    } else {
        return false
    }
}

const realizarCalculo = ()=> {
    if (datosCompletos()) {
        debugger
        const cotizacion = new Calculadora(cantidad.value, Servicio.value, Usuario.value, manoDeObra)
            importe.innerText = cotizacion.calcular()
            btnEnviar.classList.remove("ocultar")

        /* const seguro = new Cotizador(metros2.value, propiedad.value, ubicacion.value, CostoM2)
              importe.innerText = seguro.cotizar()
              btnEnviar.classList.remove("ocultar") */
    } else {
       /*  alert("🚩🚩🚩RELLENAR TODOS LOS CAMPOS🚩🚩🚩") */
       msjalerta ("Rellenar los campos","warning ")
        
    }
}

const enviarPorEmail = ()=> {
    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        Servicio: Servicio[Servicio.selectedIndex].text,
        Usuario: Usuario[Usuario.selectedIndex].text,
        cantidad: cantidad.value,
        Importe: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    msjalerta("Cotización enviada. ¡Muchas gracias por elegirnos!",)
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCalculo)
btnEnviar.addEventListener("click", enviarPorEmail)











//DESEESTRUCTURACION
function generadorAutomatico() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950, "NOTEBOOK"))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900, "NOTEBOOK"))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949, "NOTEBOOK"))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890, "TABLET"))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090, "NOTEBOOK"))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000, "NOTEBOOK"))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800, "NOTEBOOK"))
    productos.push(new Producto(8901, "IPAD MINI 7.9", 189900, "TABLET"))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}
generadorAutomatico()
generarCarrito()

//Método ForEach()
function listarProductos() {
    //debugger
    productos.forEach((producto) => {
        console.log(producto)
    })
}

//Método find()
function buscarProducto() {
    //debugger
    let nombreProd = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.find((producto) => producto.nombre.includes(nombreProd))
    if (resultado !== undefined) {
        console.log(resultado)
    } else {
        /* console.warn("No se encontró un elemento coincidente.") */
        msjalerta("No se encontró un elemento coincidente.", "warning")
    }
    //let resultado = productos.find((producto)=> producto.nombre === "LENOVO IDEAPAD 13")
}

//Método filter()
function filtrarProductos() {
    //debugger
    let parametro = prompt("Ingresa el parámetro a filtrar:")
    let resultado = productos.filter((producto) => producto.nombre.includes(parametro))
    console.table(resultado)
}

//Método some() equivale a indexOf()
function existeProducto() {
    let existe = productos.some((producto) => producto.id === 34444456)
    if (existe) {
        console.log("El código ingresado sí existe en el listado de productos.")
    } else {
        console.warn("No se encontró el código")
    }
}

//Método Map() = mapea una estructura nueva
function proyectarIncremento() {
    let proyeccion = productos.map((producto) => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: parseFloat((producto.importe * 1.15).toFixed(2))
        }
    })
    console.table(proyeccion)
}
let DESC = -35000 || 0
//Reduce a un único resultado valores de un array
function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, DESC)
    console.log("Total del carrito:", total)
}

//Ordena los productos por la propiedad indicada
function ordenarProductos() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(productos)
}

// INCORPORANDO LIBRERIAS


