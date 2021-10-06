var contador = 0;
let registros = [];
arreglot = [];


function validar_nombreUsuario(string) {
    var error = "";
    let longitud = string.length;
    if (longitud <= 3) {
        error += "El nombre de usuario debe tener mas de 3 caracteres \n";
    }
    if (longitud > 9) {
        error += "El nombre de usuario debe tener menos de 10 caracteres \n";
    }
    if (!verificacionAlfanumerica(string)) {
        error += "El nombre de usuario debe contener solo caracteres alfanumericos (A-Z 0-9)";
    }
    if (error === "") {
        alert("Nombre de usuario valido");
        return true;
    } else {
        alert(error);
        return false;
    }
}

function validar_contrasena(string) {
    var error = "";
    let longitud = string.length;
    if (longitud < 6) {
        error += "La contrasena debe tener 6 o mas caracteres \n";
    }
    if (!verificacionAlfanumerica(string)) {
        error += "La contrasena debe contener solo caracteres alfanumericos (A-Z 0-9)";
    }
    if (error === "") {
        alert("Contrasena valida");
        return true;
    } else {
        alert(error);
        return false;
    }
}

function verificacionAlfanumerica(dato) {
    var expresion = /^[0-9a-zA-Z]+$/;
    if (expresion.test(dato)) {
        return true;
    } else {
        return false;
    }
}

function agregarRegistro() {
    if (validar_nombreUsuario(document.getElementById('in_usuario').value) === true && validar_contrasena(document.getElementById('in_contrasena').value) === true) {

        function Usuario(usuario, contrasena) {
            this.usuario = usuario;
            this.contrasena = contrasena;
        }
        var usuariocapturar = document.getElementById('in_usuario').value;
        var contrasenacapturar = document.getElementById('in_contrasena').value;

        nuevosujeto = new Usuario(usuariocapturar, contrasenacapturar);
        registros.push(nuevosujeto);
        arreglot = registros;
    }
}



function filtrarPorContrasena(arreglo, filtro) {
    
    function Contrasena(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
    array = arreglo;
    alerta = "";
    alerta1 = "";

    for (var i = 0; i < array.length; i++) {
        alerta += arreglo[i].usuario + ", " + arreglo[i].contrasena + "\n";
    }

    arreglo1 = [];

    for (var k = 0; k < array.length; k++) {

        
        var usuarioarray = array[k].usuario;
        var contrasenaarray = array[k].contrasena;
        nuevosujeto1 = null;
        if ((array[k].contrasena.length) <= filtro) {

            nuevosujeto1 = new Contrasena(usuarioarray, contrasenaarray);
            arreglo1.push(nuevosujeto1);
            nuevosujeto1 = null;
        }

        

    }
    alerta = "";
        for (var i = 0; i < arreglo1.length; i++) {
            alerta += arreglo1[i].usuario + ", " + arreglo1[i].contrasena + "\n";
            console.log(arreglo1[i].usuario + ", " + arreglo1[i].contrasena);
        }
        alert("array final=" + alerta);
    console.log(arreglo1);
    return arreglo1;
}

function pedir() {
    filtro = prompt("Ingrese filtro: ");
    return filtro;
}




module.exports.registros=registros;
module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;










