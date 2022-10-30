//estructura while
/*
let x=1

while (x <= 100){
    console.log(X)
    x = x+1
}


//acumulador

let x=1
let suma=0
let palabras=''
let valor

while ( x <= 5 ){
    valor=parseInt(prompt('ingrese un valor'))
    x=x+1
    console.log(valor)
    suma=suma+valor
}




 

//id



mensaje.innerHTML = 'buenas tardes'
*/


//new date

let mensaje=document.querySelector('#mensaje')
let mifecha=document.querySelector('#fecha')


const horaActual = () => { 

    let fecha =new Date()
    let hora= fecha.getHours()
    let minutos=fecha.getMinutes()
    let segundos=fecha.getSeconds()
    mensaje.innerHTML = `hora actual es ${hora}:${minutos}:${segundos}`

}

setInterval(horaActual,1000)

const armoFecha = () => {
    let fecha=new Date()
    let dia=fecha.getDay()
    let mes=fecha.getMonth()

    let diaDeHoy=''
    let mesHoy=''

    console.log(mes)
    console.log(dia)  
        switch(dia){
            case 0:
                diaDeHoy='hoy es domingo'
                break
            case 1:
                diaDeHoy='hoy es lunes'
                break
            case 2:
                diaDeHoy='hoy es martes'
                break
            case 3:
                diaDeHoy='hoy es miercoles'
                break
            case 4:
                diaDeHoy='hoy es jueves'
                break
            case 5:
                diaDeHoy='hoy es viernes'
                break
            case 6:
                diaDeHoy='hoy es sabado'
                break
        }
        switch(mes){
            case 0:
                 mesHoy='Enero'
                break
            case 1:
                 mesHoy='Febrero'
                break
            case 2:
                 mesHoy='Marzo'
                break
            case 3:
               mesHoy='Abril'
                break
            case 4:
                mesHoy='Mayo'
                break
            case 5:
                 mesHoy='Junio'
                break
            case 6:
                 mesHoy='Julio'
                break

            case 7:
                 mesHoy='Agosto'
                break
            case 8:
               mesHoy='Septiembre'
                break
            case 9:
                 mesHoy='Octubre'
                break
            case 10:
                 mesHoy='Noviembre'
                break
            case 11:
                mesHoy='Diciembre'
                break
        }
mifecha.innerHTML =`${diaDeHoy} ${fecha.getDate()} de ${mesHoy}  del ${fecha.getFullYear()}`
        
    //lunes 24 de octubre del 2022
 }

armoFecha()



    

