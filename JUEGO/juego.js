//declarar variables
let papel=document.querySelector('#papel')
let piedra=document.querySelector('#piedra')
let tijera=document.querySelector('#tijera')


//funciones

const EleccionPc = () => {
    //random == 0*3
    let random= Math.floor(Math.random()*3)
    if(random ==1){
        return 'piedra'
    }else{
        if(random==2){
            return 'papel'
        }
        else{
            if(random==0){
                return'tijeras'

            }
        }
    }
 }

let computadora= EleccionPc()

console.log('La pc selecciono',computadora)

//EVENTOS

papel.addEventListener('click',(computadora)=>{
    let clickpapel='papel'
    console.log(computadora)
    if (computadora == clickpapel)
    console.log(clickpapel)
})

piedra.addEventListener('click',()=>{

    console.log('hizo click sobre piedra')
})


tijera.addEventListener('click',()=>{
    console.log('hizo click sobre tijera')
})



 console.log(EleccionPc())


 const ganador = (computador,) => {

  }