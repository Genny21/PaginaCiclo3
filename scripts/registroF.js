let registros = [];

var agregarRegistro = function(){
    var usuario = document.getElementById("in_usuario").value;
    var contrasena = document.getElementById("in_contrasena").value;
    if (usuario == ""){
        document.getElementById("in_usuario").focus();
    } else{
        if (contrasena == ""){
            document.getElementById("in_contrasena").focus();
        } else{
//            console.log(usuario+" "+contrasena);

            registros.push(usuario, contrasena);
            console.log(registros);

/*             document.getElementById("in_usuario").value = "";
            document.getElementById("in_contrasena").value = ""; */
        }
    }
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;