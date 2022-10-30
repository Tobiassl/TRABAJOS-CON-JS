let papel=document.querySelector('#papel')
let piedra=document.querySelector('#piedra')
let tijera=document.querySelector('#tijera')




papel.addEventListener('click',()=>{
    let clickpapel='papel'
    console.log(clickpapel)
})

piedra.addEventListener('click',()=>{

    console.log('hizo click sobre piedra')
})


tijera.addEventListener('click',()=>{
    console.log('hizo click sobre tijera')
})

const EleccionPc = () => {
    //random == 0*3
    let random= Math.floor(Math.random()*3)
    console.log(random)
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

 console.log(EleccionPc())

 let computadora= EleccionPc()

 console.log(computadora)

 const ganador = (computador,) => {

  }