/*arrays

let numero = 0

//let palabras = 'hola mundo'

//let condicion = true

//let vector = [] //creo array vacio

const nombreMujeres=['sabrina','silvana','gabriela','sofia','analia','juana']


//for of

for(const mujer of nombreMujeres){
    console.log(mujer)
}



//for (se suele usar)

for(let i=0; i<nombreMujeres.length; i++){
    console.log(nombreMujeres[i])
}



version con while (no se suele usar)

let i = 0
while (i<nombreMujeres.length){
    console.log(nombreMujeres)
    i++
}

let vector2 = [10,'hola mundo',1.5,true,false, [25,'hola mundo dos',true]]


console.log(vector2.length)

console.log(vector2[2])



let numeros=[20,10,5,9]

const multiplo = (numerosParametros) => {
    let resultado = 0
    for(let i=0; i<numerosParametros.length; i++){
        resultado=numerosParametros[i]*10
        console.log(resultado)
    }
    return resultado
}

console.log(multiplo(numeros))


const contiene = (numero,numeros) => {
    for(let i=0;i<numeros.length;i++){
        console.log(numeros[i])
        if  (numero == numeros[i]){
        console.log(numeros[i])
        return true
    }else{
        
        
    }
}return false

}

console.log(contiene (5,[7,99,34,5,23,45,56]))


const obtenerMenor = (array) =>{
    let resultado=array[0]
    for(let i=0;i<array.length;i++){
        console.log(array[i])
        if(array[i]<=resultado){           
        resultado=array[i]    
        }
    }
    return resultado
}


console.log(`el menor numero es ${obtenerMenor([0,5, 7, 99, 34, 54, 2, 12])}`)
*/
const sumar = (array) => {
    let suma=0
    for (let i=0;i<array.length;i++){
        suma=suma+array[i]
    }
    return suma
}

console.log(sumar([5, 7, 10, 12, 24]))
