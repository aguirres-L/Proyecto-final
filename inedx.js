
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





// 1ro Slider 
const carouselImages = document.querySelector('.carousel-images');
let counter = 0;

function slide() {
  if (counter >= carouselImages.children.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselImages.style.transform = `translateX(-${counter * 100}%)`;
  setTimeout(slide, 3000);
}

setTimeout(slide, 3000);


// 2do Slider 

const Sliderimg = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let i = 0;

nextBtn.addEventListener('click', () => {
  if (i >= Sliderimg.children.length - 1) return;
  i++;
  Sliderimg.style.transform = `translateX(-${i * 25}%)`;
});

prevBtn.addEventListener('click', () => {
  if (i <= 0) return;
  i--;
  Sliderimg.style.transform = `translateX(-${i * 25}%)`;
});


// Enrutamiento Destacados


const cb =(e)=>{
  if(e.target.name === "destacado"){
    window.location.href = "./perros.html";
  }
}




document.addEventListener('click',(e)=>{
  console.log(e.target.value)
  console.log('hola')
 cb(e)
 filtro(e)
})

