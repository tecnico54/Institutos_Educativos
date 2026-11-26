
// Esperar a que cargue completamente el HTML
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionar todos los enlaces de los ejercicios
    const ejercicios = document.querySelectorAll("ol li a");

    // Recorrer cada enlace
    ejercicios.forEach(function (ejercicio) {

        ejercicio.addEventListener("click", function (event) {

            // Obtener el nombre del ejercicio
            const nombreEjercicio = ejercicio.textContent;

            // Mostrar confirmación
            const confirmar = confirm(
                `¿Deseas ingresar a ${nombreEjercicio}?`
            );

            // Cancelar navegación si el usuario selecciona cancelar
            if (!confirmar) {
                event.preventDefault();
            }

        });

    });

});
