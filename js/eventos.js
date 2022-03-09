
let etiquetaBoton = document.getElementById("boton")
let bandera = true
let titulo = document.getElementById("a")

function cambiarFoto(){
bandera = !bandera
let etiquetaFoto = document.getElementById("papolin")

if(bandera){
 etiquetaFoto.src="img/papolin.jpg"
 
}
else{
   etiquetaFoto.src="img/papolin2.jpg"
   }
}

function cambiarTitulo(){
    titulo.textContent="Puto el que lo lea"
}

titulo.addEventListener("mouseover", cambiarTitulo)
etiquetaBoton.addEventListener("click",cambiarFoto)

