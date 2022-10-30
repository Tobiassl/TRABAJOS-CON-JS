//para un comentario en una sola linea

/* comentarios para varias lineas
//console.log(numero)

let numero = 15

let palabras = 'hola mundo'

let numeroOtro = 35

let estado=true
 let otro_estado=false

let nombre = prompt('ingrese su nombre')

let apellido = prompt('ingrese su apellido')

let edad = prompt('ingrese su edad')

let estadocivil = prompt('ingrese su estado civil')

let email = prompt('ingrese su email')

console.log(`Su nombre es ${nombre}, su apellido es ${apellido}, su edad es ${edad} anios, su estado civil es ${estadocivil} y su email es ${email}`)
 





let valor1=prompt(`ingrese el valor1`)

let valor2=prompt(`ingrese el valor2`)

let resultadoMultiplicacion=valor1*valor2

let resultadoResta=valor1-valor2

let resultadoDivision=valor1/valor2

let resultadoSuma= parseInt(valor1)+parseInt(valor2)

console.log(resultadoMultiplicacion)
console.log(resultadoResta)
console.log(resultadoDivision)
console.log(resultadoSuma)


//estructura condicional simple
let numero=2

if(numero < 6){
            console.log('ingreso al if')
}



let nota=prompt('ingrese la nota del alumno')


if (nota<=4){
    console.log('el alumno desaprobo')
}
*/

// estructura condicional compuesta

let nota1=prompt('ingrese la nota 1')
let nota2=prompt('ingrese la nota 2')
let nota3=prompt('ingrese la nota 3')

let nota=parseInt(nota1)+parseInt(nota2)+parseInt(nota3)

let resultado = nota/3

/*
if(resultado>=4){
    console.log('regular')
}else{
    console.log('reprobado')
}
*/

//manera de hacerlo sin if ni else

resultado>=4 ? console.log('regular') : console.log('reprobado')



