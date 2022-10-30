//metodos JS basicos
//metodos para cadenas de caracteres
/*
let mensaje = 'hola mundo'
 let resultado = mensaje.includes('ssss')
 console.log(resultado) true


//metodo touppercase

 let mensaje = 'hola mundo'
 let resultadoDos = mensaje.toUpperCase()
 console.log(resultadoDos)

//Metodo tolowercase
let mensaje = 'HOLA mundo'
 let resultadoDos = mensaje.toLowerCase()
 console.log(resultadoDos)


//metodo replace

let mensaje = 'hola mundo'
 let resultadoDos = mensaje.replace('hola','adios')
 console.log(resultadoDos) 


//metodo repeat

let mensaje = 'hola mundo'
 let resultadoDos = mensaje.repeat(6)
 console.log(resultadoDos)



//metodo trim

let mensaje = '                                 hola mundo '
 let resultadoDos = mensaje.trim()
 console.log(mensaje)
 console.log(resultadoDos)
 

//metodo slice

let mensaje = 'holas mundo'
 let resultadoDos = mensaje.slice(0,4)
 console.log(resultadoDos)

//metodo join

let array=[1,2,3,4,5,6,7,8]
//let mensaje = 'hola mundo'
 let resultadoDos = array.join('-')
 console.log(resultadoDos)


//metodo indexOF

let mensaje = 'hola mundo'
 let resultadoDos = mensaje.indexOf('otra cosa')
 console.log(resultadoDos)


//metodo array

let array = ['perro','gato','tortuga']
let resultado = array.push('leon')
console.log(array)
console.log(resultado)


//shift y unshift

//let array = ['perro','gato','tortuga','loro']
//let resultado = array.unshift('elefante')
//console.log(array)

//reverse

let array = ['perro','gato','tortuga','loro']
let resultado = array.reverse()
console.log(array)


//sort

let array = ['perro','gato','tortuga','loro']
let resultado = array.sort()
console.log(array)


const tieneMismaLongitud = (a,b) => {
    
    return a.lenght == b.lenght ? true : false

    //if(a.lenght == b.lenght){
    //    return true
    //}else{
    //    r//eturn false
    // }

}

console.log(tieneMismaLongitud('javascript','java'))
//false
console.log(tieneMismaLongitud('manzana','cerveza'))
//true



const esValida = (a,b) => {

    return a.lenght >=8 ? true : false


}



console.log(esValida('contraseniaMuySegura'))
//true

console.log(esValida('abc123'))
//false



//regex

const burlarse = (palabra) => {
    let volcal = palabra.replaceAll('a','i')
    return volcal

}

console.log(burlarse('programar es dificil'))



//metodos JS avanzados

//map
const array=[1,2,3,4,5,6]

let resultado = array.map(elemento => elemento*10)
console.log(resultado)


//filter
const array=[1,2,3,4,5,6]

let resultado = array.filter(elemento => elemento > 2 || elemento == 5)
console.log(resultado)
*/