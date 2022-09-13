function agregarUsuario() {
    let usuario = prompt("Ingrese su usuario")
    let password = prompt("Ingrese su contraseña")
    usrRegistrados.push(new Usuarios(usuario, password))
    console.table(usrRegistrados)
}


function logIn(/* usuario,password */) {
    while (true) {
        let usuario = prompt("Ingrese su usuario")
        let password = prompt("Ingrese password");
        if (usuario == '' || password == '' || usuario == null || password == null) {
            alert("Los campos no pueden estar vacio, intente nuevamente")
        }
        else {
            console.log("Bienvenido")
            break;
        }
    }
}

function seleccionCompra() {
    let selection = prompt("¿Qué esta buscando? Presione 1 para componentes -  2 para servicios")
    if (selection == 1) {
        componente();
    } else {
        if (selection == null || selection == '' || selection !== 2) {
            alert("Usted no selecciono ninguna opcion. Debe volver a cargar la pagina para iniciar nuevamente")
        }
    } servicio()
}

function componente() {
    let mouse = 10
    let teclado = 20
    let procesador = 100
    let memoria = 50

    let producto = prompt("Ingrese el producto que desea comprar:")

    switch (producto.toLowerCase()) {
        case "mouse":
            console.log("Ud. ha seleccionado comprar un", producto)
            precioProducto(mouse)
            break
        case "teclado":
            console.log("Ud. ha seleccionado comprar un", producto)
            precioProducto(teclado)
            break
        case "memoria":
            console.log("Ud. ha seleccionado comprar un", producto)
            precioProducto(memoria)
            break
        case "procesador":
            console.log("Ud. ha seleccionado comprar un", producto)
            precioProducto(procesador)
            break
        default:
            console.warn("Por el momento no tenemos", producto)
            break
    }
}

function precioProducto(prod) {
    let cantidad = prompt("Cuantos desea?", cantidad)
    let final = (cantidad * prod)
    console.log("El precio a pagar es:", final);
}

function servicio() {
    let reparacion = 15
    let instalacion = 30
    let configuracion = 45
    let service = prompt("Ingrese el servicio que desa contratar:")
    debugger

    switch (service.toLowerCase()) {
        case "reparacion":
            console.log("Ud. ha seleccionado el servicio", service)
            precioProducto(reparacion)
            break
        case "instalacion":
            console.log("Ud. ha seleccionado el servicio", service)
            precioProducto(instalacion)
            break
        case "configuracion":
            console.log("Ud. ha seleccionado el servicio", service)
            precioProducto(configuracion)
            break
        default:
            console.warn("No realizamos el servicio", service)
            break
    }
}

function precioProducto(serv) {
    let cantidad = prompt("Cuantos ordenadores son?", cantidad)
    let final = (cantidad * serv)
    console.log("El precio a pagar es:", final);
}


// Interactuar con HTML - Modificar lista de producto dentro de carrito

/* function agregarProducto() {
    const tabla = document.getElementById("tabla")
    let filaProducto = 
} */

function cargaFilaServicios(){ //falta terminar
    let fila = ""
        servicios.forEach(servicio => { 
            fila = `<tr>
                        <td>${servicio.id}</td>
                        <td>${servicio.nombre}</td>
                        <td>${servicio.importe}</td>
                        <td>${servicio.precioProductoxhs()}</td>

                    </tr>`
                    tabla.innerHTML += fila
        })
}

function cargarProductos(){
    debugger
    let fila = ""
        productos.forEach(producto => {
            fila =`<tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.importe}</td>
                    <td>${producto.precioFinal()}</td>        
            </tr>`
            tabla.innerHTML += fila
    })

}