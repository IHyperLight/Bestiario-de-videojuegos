const con = require('./conect');


function validarDatos(){
    var usuario = document.getElementById('usuario').value;
    var cont = document.getElementById('contraseña').value;

    if (usuario.length<1 || cont.length<1) {
        alert("Por favor, rellene los campos solicitados");
    } else {
        console.log("Hola");
        verificarUsuario(usuario,cont);
    }
}

function verificarUsuario(usuario, cont){
    if(usuario == "a" && cont == "b"){
        mostrarSugerencias();
    }
    
}

function mostrarSugerencias(){
    var formulario = document.getElementById("f1");
    var resultados = document.getElementById("resultados");

    formulario.style.opacity="0";
    resultados.style.top="200px";
    resultados.style.opacity="0.9";
    resultados.style.zIndex="9";
}
