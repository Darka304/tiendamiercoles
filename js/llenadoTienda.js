//creando un arreglo de objetos

let productos = [
    {nombre:"batimovil", precio:400000, descripcion:"Batimovil a escala"},
    {nombre:"baticamiseta", precio:60000, descripcion:"Camiseta original DC"}

]

console.log(productos)

//Recorrer un arreglo

productos.forEach(function(producto){
    console.log(producto.nombre)
})