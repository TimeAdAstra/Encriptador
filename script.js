function encriptar(){

    var textoContenedor = document.getElementById("textoEncriptado");
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    
             var textoEncriptado = texto.replace(/e/img, "enter");
             var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
             var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
             var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
             var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
             textoContenedor.value = "";
            
        document.getElementById("mensajeDesencriptado").innerHTML = textoEncriptado;
        document.getElementById("btn-copiado").style.display = "show";
        document.getElementById("btn-copiado").style.display = "inherit";
        document.getElementById("mensajeDesencriptado").style.backgroundImage = "none";
        
    
}
    
function desencriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = texto.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("mensajeDesencriptado").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#mensajeDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
