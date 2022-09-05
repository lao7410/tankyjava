function agregarUsuario() {
    let usuario = prompt("Ingrese su usuario")
    let password = prompt("Ingrese su contraseña")
    usrRegistrados.push(new Usuarios(usuario, password))
    console.table(usrRegistrados)
}

/* function usrYaregistrado() {
    let yareg = prompt("Ya se encuentra registrado?")
    if (yareg === no) {
        console.alert("Se debe registrar")
        agregarUsuario()
    } else {
        logIn()

    }

}
 */