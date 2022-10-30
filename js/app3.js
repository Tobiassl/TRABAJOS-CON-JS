/*estructura repetitiva for

for(let i=0; i<=10; i++){
    console.log(i)
}


//Desarrollar un programa que muestre la tabla multiplicar del 5

for(let i=0; i<=10; i++){
    console.log(i*5)
}


//funcion nombrada

function suma(a,b){
    let resultado=a+b
    return resultado
}

let valor1=parseInt(prompt('ingrese el primer valor'))
let valor2=parseInt(prompt('ingrese el segundo valor'))

console.log(suma(valor1,valor2))


//funcion flecha

const suma = (a,b) =>{
    let resultado=a+b
    return resultado
}

let valor1=parseInt(prompt('ingrese el primer valor'))
let valor2=parseInt(prompt('ingrese el segundo valor'))

console.log(suma(valor1,valor2))


const mensaje = (palabra) => {
    let resultado = `${palabra}!`
    return resultado
}

console.log(mensaje('hola'))
//hola!


const obtenerNombreCompleto = (a,b) =>{
    let resultado = `${a} ${b}`
    return resultado
}

console.log(obtenerNombreCompleto('pedro','lopez'))


const convertirHorasEnSegundos = (a) =>{
    let resultado = a*3600
    return resultado
}

console.log(convertirHorasEnSegundos(1))
//3600

console.log(convertirHorasEnSegundos(3))
//10800


const generarEmail = (a,b)=>{
    return `${a}@${b}.com`
}

console.log(generarEmail('pedro','gmail'))



const puedeAvanzar = (a)=>{
    if(a=='verde')
    
    return true

}
else{
    return false  
}

console.log(puedeAvanzar('verde'))
//true

console.log(puedeAvanzar('rojo'))
//false



//operador ternario

const puedeAvanzar = (a)=>{

    return a=='verde' ? true: false

}

console.log(puedeAvanzar('verde'))
//true

console.log(puedeAvanzar('rojo'))
//false


const jugarPiedraPapelTijera = (a,b)=>{

    if(a=='piedra'&& b=='piedra'){
        return 'empate'
    }else{
        if(a=='piedra' && b=='papel' || a=='papel' && b=='piedra')
        return 'ganopapel'
    }

}

jugarPiedraPapelTijera('piedra','piedra')
//empate

jugarPiedraPapelTijera('piedra','papel')
//ganopapel

*/


//vincular HTML con JS por etiqueta
let mensajeHtml = document.querySelector('#mensaje')

console.log(mensajeHtml)