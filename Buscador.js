//Realizar busquedas
const creaturas = [
    {Nombre: 'Demonibestia', videoj: 'The Witcher 3: WildHunt',imag:'mon1.png'},
    {Nombre: 'Chasqueador', videoj: 'The Last of Us', imag:'mon7.png'},
    {Nombre: 'Ender Dragon', videoj: 'Minecraft',imag:'mon6.png'},
    {Nombre: 'Xenomorfo', videoj: 'Alien Isolation',imag:'mon8.png'},
    {Nombre: 'Adam Smasher', videoj: 'Cyberpunk 2077',imag:'mon4.png'},
    {Nombre: 'Frostclaw', videoj: 'Horizon Zero Dawn',imag:'mon3.png'},
    {Nombre: 'El bebé', videoj: 'Resident Evil Village',imag:'mon2.png'},
    {Nombre: 'Siam', videoj: 'Silent Hill Homecoming',imag:'mon5.png'}  
]


const formulario = document.querySelector("#barra-busqueda");
const resultado = document.querySelector("#resultado");

const buscar = ()=>{
    resultado.innerHTML ="";

    const texto = formulario.value.toLowerCase();

    for(let creatura of creaturas){
        let nombre = creatura.Nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML+=`<li><a href="${creatura.Nombre}.html"><img src="Imagenes/${creatura.imag}" width="40px" > ${creatura.Nombre}  -  ${creatura.videoj}</a></li>`
        }
    }

    if(resultado.innerHTML===""){
        resultado.innerHTML+=`<li>No se encontraron resultados</li>`
    }
}

formulario.addEventListener('keyup',buscar);

//Mostrar y ocultar buscador

iconoBuscar= document.getElementById("iconoBusqueda");
coberturaPantalla=document.getElementById("cobertura");
buscador = document.getElementById("buscador");
barraBusqueda =document.getElementById("barra-busqueda"); 

function mostrar_Buscador(){
    buscador.style.top="25px";
    buscador.style.opacity="0.9";
    buscador.style.zIndex="9";
    coberturaPantalla.style.display="block";
    barraBusqueda.focus();
}

function ocultar_Buscador(){
    buscador.style.top="-40px";
    buscador.style.zIndex="-1";
    buscador.style.opacity="0";
    coberturaPantalla.style.display="none";
}

iconoBuscar.addEventListener("click", mostrar_Buscador);
coberturaPantalla.addEventListener("click",ocultar_Buscador);


