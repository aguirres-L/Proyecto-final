
// Nav1 

const $ofertas = document.querySelector('.info')

let  index =0 ;
let mensje = [" 🩺 Urgencias 24hs","🧼 Baños 10% off"," 🚑 Veterinaria a Domicilio","15.000+ MASCOTAS FELICES 🐶🐱🐠"]    

function cambiarTextNav(){
        $ofertas.innerHTML = mensje[index]
        index ++;
       if(index >= mensje.length){
       index=0;
       }
    }

    setInterval(cambiarTextNav,2500)
    
    
    
    const $cards = document.querySelectorAll('.card'),
      $productos = document.getElementById('productos');


  document.addEventListener('DOMContentLoaded',(e)=>{
    $productos.innerHTML = `<p>${$cards.length.toLocaleString()} Productos</p>`
  
  })

    
    
    //console.log(index)
// mesnajes de oferta Nav 1

    // Nav 2
        const $perro = document.querySelector('.perro'),
        $gato = document.querySelector('.gato'),
        $homeNav = document.querySelector('.home'),
        $pez = document.querySelector('.fish');

        
        // Options 
        const  $optionPerr = document.querySelector('.perros'),
        $optionGato = document.querySelector('.gatos'),
        $optionPez = document.querySelector('.pez');
        
        
     


// Evento para mostrar las options 
document.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    if(e.target === $perro){
    $optionPerr.style.visibility="visible"
    $optionGato.style.visibility="hidden"
    $optionPez.style.visibility="hidden"
    
    }else   if(e.target === $gato){
        $optionPerr.style.visibility="hidden"
        $optionGato.style.visibility="visible"
        $optionPez.style.visibility="hidden"
        }
        else   if(e.target === $pez){
            $optionPerr.style.visibility="hidden"
            $optionGato.style.visibility="hidden"
            $optionPez.style.visibility="visible"
            }
   
})






console.log(document.querySelectorAll('[id="toy"]'))

const $cardToy = document.querySelectorAll('[id="toy"]'),
      $cardFood = document.querySelectorAll('[id="food"');
      
const $card = document.querySelector('.articulos');
      

const filtro=(e)=>{
  if(e.target.value==="Comida"){
    console.log(255)
    $cardToy.forEach(el=>{
      el.style.display="none"
    })
    
    $cardFood.forEach(el=>{
      el.style.display="block"
      })
    
  } else if(e.target.value ==="Juguetes"){
    $cardFood.forEach(el=>{
    el.style.display="none"
    })
    
    
    $cardToy.forEach(el=>{
      el.style.display="block"
    })
  } 
  
  
  
  
}


document.addEventListener('click',(e)=>{
 filtro(e)
})

