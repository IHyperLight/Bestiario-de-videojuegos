function obtenerDatos(){
    var correo = document.getElementById('correo').value;
    var nombre = document.getElementById('nombre').value;
    var videojuego = document.getElementById('videojuego').value;

    if (correo.length<1 || nombre.length<1 || videojuego.length<1) {
        alert("Por favor, rellene los campos solicitados");
    } else {
        console.log("Nombre o descripción: ",nombre,"\n","Videojuego al que pertenece: ",videojuego,"\n");
    }

    

}
