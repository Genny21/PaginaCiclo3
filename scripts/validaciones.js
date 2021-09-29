function validar_nombreUsuario(string){
    
    let form = document.form_registro_usuario;
    let usuario=string;
    const filterAlpha = (str) => {
        if (typeof str !== "string")
            return false;
        return str.replace(/([A-Z]|[a-z]|[0-9]){4,9}/g, "") === "";
    }
    
    if(filterAlpha(usuario)==true && usuario!=""){
        alert("verdadero");
    }else{
        alert("falso");
    }
    
}
function validar_contrasena(string){
    let form = document.form_registro_usuario;
    let contrasena=string;
    const filterAlpha = (str) => {
        if (typeof str !== "string")
            return false;
        return str.replace(/([A-Z]|[a-z]|[0-9]){6,}/g, "") === "";
    }
    
    if(filterAlpha(contrasena)==true && contrasena!=""){
        alert("verdadero");
    }else{
        alert("falso");
    }
}
module.exports.validar_nombreUsuario = validar_nombreUsuario();
module.exports.validar_contrasena = validar_contrasena();




