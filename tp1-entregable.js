function logIn(/* usuario,password */) {
    while (true) {
        var usuario = prompt("Ingrese su usuario", usuario)
        var password = prompt("Ingrese password", password);
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
    var selection = prompt("¿Qué esta buscando? Presione 1 para componentes -  2 para servicios", selection)
    if (selection == 1) {
        componente();
    } else {
        while (true) {
            if (selection == null || selection == '') {
                alert("Usted no selecciono ninguna opcion. Debe volver a cargar la pagina para iniciar nuevamente")
                break
            }
        }

    } servicio();
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
    var cantidad = prompt("Cuantos desea?", cantidad)
    var final = (cantidad * prod)
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
    var cantidad = prompt("Cuantos ordenadores son?", cantidad)
    var final = (cantidad * serv)
    console.log("El precio a pagar es:", final);
}


