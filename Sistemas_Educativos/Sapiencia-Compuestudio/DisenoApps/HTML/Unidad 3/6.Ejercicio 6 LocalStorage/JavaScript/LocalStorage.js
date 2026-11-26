let come_si_chiama = document.getElementById("nombre");
let result = document.getElementById("resultado");
function guardarNombre(){
    let nombre = come_si_chiama.value.trim();
    let array = JSON.parse(localStorage.getItem("nombre")) || [];
    if(come_si_chiama.value === ""){
        alert("Favor de ingresar su nombre");
        come_si_chiama.focus();
    }else{
        array.push(nombre);
        localStorage.setItem("nombre", JSON.stringify(array));
        result.innerText =
            "✅️ Su nombre se guardó correctamente: " + nombre;
        come_si_chiama.value = "";
        come_si_chiama.focus();
    }
}
function mostrar(){
    let array = JSON.parse(localStorage.getItem("nombre")) || [];
    let resultado = document.getElementById("resultadoM");
    if(array.length === 0){
        resultado.innerText = "No hay nombres guardados";
        return;
    }
    resultado.innerText = array.join(", ");
}
function editar(){
    let position = document.getElementById("posicion").value;
    let change = document.getElementById("nuevo").value;
    let résultat = document.getElementById("resultadoE");
    let array = JSON.parse(localStorage.getItem("nombre")) || [];
    if(position === "" || change === ""){
        alert("Completar los campos");
        return;
    }
    position = Number(position) - 1;
    if(position < 0 || position >= array.length){
        alert("La posición no existe");
        return;
    }
    array[position] = change;
    localStorage.getItem("nombre", JSON.stringify(array));
    position.value = "";
    change.value = "";
    résultat.innerText = "Lista actualizada: " + array;
}
function eliminar(){
    let risultato = document.getElementById("resultadoEl");
    localStorage.removeItem("nombre");
    risultato.innerText = "Los nombres se han eliminado"
}
function guardarMascota() {
    const mascota = {
        nombre: document.getElementById("mascota").value.trim(),
        raza: document.getElementById("raza").value.trim(),
        edad: Number(document.getElementById("edad").value)
    };
    localStorage.setItem("mascota", JSON.stringify(mascota));
    document.getElementById("resultadoMascota").textContent =
        "Mascota guardada correctamente";
}