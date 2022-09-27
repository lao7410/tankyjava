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




//Función cargar selecciones de opciones del usuario
const cargarCombo = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("🚩🚩🚩💥No existen elementos en el array.💥🚩🚩🚩")
    }
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
   /*  debugger */
    if (datosCompletos()) {
        const cotizacion = new Calculadora(cantidad.value, Servicio.value, Usuario.value, manoDeObra)
            importe.innerText = cotizacion.calcular()
            btnEnviar.classList.remove("ocultar")

        /* const seguro = new Cotizador(metros2.value, propiedad.value, ubicacion.value, CostoM2)
              importe.innerText = seguro.cotizar()
              btnEnviar.classList.remove("ocultar") */
    } else {
        alert("🚩🚩🚩RELLENAR TODOS LOS CAMPOS🚩🚩🚩")
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
    alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCalculo)
btnEnviar.addEventListener("click", enviarPorEmail)