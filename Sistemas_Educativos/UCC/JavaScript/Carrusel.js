let indice = 0;
const slides = document.querySelectorAll(".slide");
function mostrarSlide(n){
    slides.forEach(slide=>slide.classList.remove("active"));
    indice = n;
    if(indice>=slides.length){
        indice=0;
    }
    if(indice<0){
        indice=slides.length-1;
    }
    slides[indice].classList.add("active");
}
function cambiarSlide(direccion){
    mostrarSlide(indice+direccion);
}
mostrarSlide(0);