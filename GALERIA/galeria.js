//let imagen =document.querySelectorAll('.image')
let imagen =document.querySelectorAll('.image')



for(let i=0; i<=8 ;i++){
        imagen[i].addEventListener('click',()=>{
           if(imagen[i].classList.contains('focus') == false ){
            imagen[i].classList.add('focus')
            }else{
                imagen[i].classList.remove('focus')
            }
           
        })
}

//funcion anonima== no tiene nombre, cuando hacemos el de un addEvenlistener