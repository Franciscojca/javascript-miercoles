document.writeln("<h1> Clase 2 Javascript </h1>")
// crrear arreglo 20 numeros

let arrayNumeros=[]

for(let i=1; i<20; i++){
    arrayNumeros.push(i*2)

}

console.log(arrayNumeros)

// sumar items de un arreglo

let edades=[21,8,5,15,44]

let suma=0

edades.forEach(funsuma)

function funsuma(item){
    suma+=item

console.log(suma)
}

console.log("la suma es",suma)

// Ejercicio:

let alumno=["Ana","Carlos","Javier","Pablo","Felipe"]
let notas=[6.7,4.5,5.5,6.6,7.0]

//mostrar notas