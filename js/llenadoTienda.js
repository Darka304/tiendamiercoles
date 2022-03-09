//creando un arreglo de objetos

let productos = [
    {foto: 'img/papolin.jpg', nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {foto: 'img/papolin2.jpg', nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"},
    {foto: 'img/papolin.jpg', nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {foto: 'img/papolin2.jpg', nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"},
    {foto: 'img/papolin.jpg', nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {foto: 'img/papolin2.jpg', nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"},
    {foto: 'img/papolin.jpg', nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {foto: 'img/papolin2.jpg', nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"},
    {foto: 'img/papolin.jpg', nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {foto: 'img/papolin2.jpg', nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"}

]

console.log(productos)

//Recorrer un arreglo

let fila = document.getElementById("tarjetas")

productos.forEach(function(producto){
    console.log(producto.nombre)


let columna = document.createElement("div")
columna.classList.add("col")

let tarjeta = document.createElement("div")
tarjeta.classList.add("card")
tarjeta.classList.add("h-100")

let imagen = document.createElement("img")
imagen.classList.add("card-img-top")
imagen.src=producto.foto

tarjeta.appendChild(imagen)
columna.appendChild(tarjeta)
fila.appendChild(columna)
})