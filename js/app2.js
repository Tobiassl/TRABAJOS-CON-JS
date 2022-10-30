//condicion anidada
/*
let nota1=prompt('ingrese la nota 1')
let nota2=prompt('ingrese la nota 2')
let nota3=prompt('ingrese la nota 3')


nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)

let = promedio (nota1+nota2+nota3)/3

if(promedio >= 7){
    console.log("aprobado")
}else{
    if(promedio >= 4){
        console.log("regular")
    }else{
        console.log("desaprobado")
    }
}


//operadores logicos "y" "and" &&

let num1, num2, num3;

        num1 = prompt('ingrese primer numero:')
        num2 = prompt('ingrese segundo numero:')
        num3 = prompt('ingrese tercer numero:')
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        num3 = parseInt(num3)

        if(num1>num2 && num1>num3){
            console.log("el numero mayor es el num1") 
        }else{
            if(num2>num3){
                console.log("el numero mayor es el num2")
            }else{
                console.log("el numero mayor es el num3")
            }
        }
        


//cortocircuito o circuito corto (sin IF)

let resultado=true

console.log(resultado && 'perro')


//estructuras repetitivas (while)== MIENTRAS

//contador

let x=1

while(x<=100){
    console.log(x)
    x = x + 1
}


let x = 11

while(x<=275){
    console.log(x)
    x = x + 11

}


let x = 8

while(x<=500){
    console.log(x)
    x = x + 8

}


//concepto acumulador

let x=1
let suma=0

while(x<=5){
    let valor =prompt('ingrese un valor')
    valor=parseInt(valor)
    console.log(valor)
    suma=suma+valor
    x=x+1
}
console.log(suma)
*/

//clase Date == fecha

let mivariable = new Date()

let horas=mivariable.getHours()
let minutos=mivariable.getMinutes()


let dia=mivariable.getDate()
let mes=mivariable.getMonth()+1
let anio=mivariable.getFullYear()

console.log(`la hora actual es: ${horas}: ${minutos}`)

console.log(`la fecha de hoy es : ${dia}/${mes}/${anio}`)

console.log(mivariable.getDay()+1)

//hoy es lunes 17 de octubre 2021

