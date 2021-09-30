function validar_nombreUsuario(string){
    var error = "";
    let longitud = string.length;
    if(longitud <= 3){
        error += "El nombre de usuario debe tener mas de 3 caracteres \n";
    }
    if(longitud > 9){
        error += "El nombre de usuario debe tener menos de 10 caracteres \n";
    }
    if(!verificacionAlfanumerica(string)){
        error += "El nombre de usuario debe contener solo caracteres alfanumericos (A-Z 0-9)";
    }
    if(error === ""){
        alert("Nombre de usuario valido");
        return true;
    }else{
        alert(error);
        return false;
    }
}

function validar_contrasena(string){
    var error = "";
    let longitud = string.length;
    if(longitud < 6){
        error += "La contrasena debe tener 6 o mas caracteres \n";
    }
    if(!verificacionAlfanumerica(string)){
        error += "La contrasena debe contener solo caracteres alfanumericos (A-Z 0-9)";
    }
    if(error === ""){
        alert("Contrasena valida");
        return true;
    }else{
        alert(error);
        return false;
    }    
}

function verificacionAlfanumerica(dato){
   var expresion = /^[0-9a-zA-Z]+$/;
   if(expresion.test(dato)){
      return true;
   }else{
      return false;
   }
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;











