window.onload = function(){
    if(!sessionStorage.getItem("bienvenida")){
        alert("¡Bienvenida a mi actividad de JavaScript!\n\nAquí encontrará cinco ejercicios prácticos de manipulación del DOM.");
        sessionStorage.setItem("bienvenida", "true");
    }
};