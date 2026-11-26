race = [];
let subject = document.getElementById("materia");
let note = document.getElementById("nota");
let botonAccept = document.getElementById("aceptar");
let botonCancel = document.getElementById("cancelar");
let botonReturn = document.getElementById("regresar");
let botonRemove = document.getElementById("eliminar");
let botonAverage = document.getElementById("promedio");
let tablaCabeza = document.getElementById("tabla__Cabezera");
let tablaCuerpo = document.getElementById("tabla__Cuerpo");
let result = document.getElementById("calificacion");
subject.focus();
function materiaProgreso(){
    if(subject.value.trim() === ""){
        alert("Favor de ingresar la asignatura");
        subject.style.background = "rgba(255, 0, 0, 0.5)";
        subject.focus();
        return;
    }else if(/[0-9]/.test(subject.value)){
        alert("No se admite números");
        subject.style.background = "rgba(255, 0, 0, 0.5)";
        subject.value = "";
        subject.focus();
        return;
    }else{
        subject.style.background = "#fff";
    }
    if(note.value === ""){
        alert("Favor de ingresar su nota/s");
        note.style.background = "rgba(255, 0, 0, 0.5)";
        note.value = ""
        note.focus();
        return;
    }else if(note.value !== ""){
        botonAverage.style.display = "inline-block";
    }else if(note.value < 0 || note.value > 5){
        alert("Su nota debe estar entre 0 y 5");
        note.style.background = "rgba(255, 0, 0, 0.5)";
        note.value = ""
        note.focus();
        return;
    }else{
        note.style.background = "#fff";
    }
    race.push(Number(note.value));
    tablaCabeza.innerHTML = `
            <th colspan="10" style="background: rgb(0, 0, 100); border: 2px outset #008000; color: #fff;">
                ${subject.value}
            </th>
        `
    tablaCuerpo.innerHTML += `
            <td style="background: #fff; border: 2px outset #008000; text-align: center">
                ${note.value}
            </td>
        `
        subject.style.display = "none";
        note.value = "";
        note.focus();
}
function promedio(){
    let suma = 0;
    if(race.length === 1){
        alert("Debes ingresar una segunda nota para calcular el promedio");
        note.focus();
        return;
    }
    for(let i = 0; i < race.length; i++){
        suma += race[i];
    }
    let average = suma / race.length;
    result.innerText = "Promedio: " + average.toFixed(1);
    note.style.display = "none";
    botonAccept.style.display = "none";
    botonReturn.style.display ="inline-block";
}
function regresar(){
    note.style.display = "inline-block";
    botonAccept.style.display = "inline-block";
    botonCancel.style.display = "inline-block";
    botonRemove.style.display = "inline-block";
    result.innerText = "";
    note.style.background = "#fff";
    note.focus();
}
function eliminar(){
    race = [];
    tablaCuerpo.innerHTML = "";
    note.focus();
}
function borrar(){
    race = [];
    subject.style.display = "inline-block";
    subject.value = "";
    note.value = "";
    tablaCabeza.innerHTML = "";
    tablaCuerpo.innerHTML = "";
    result.innerText = "";
    botonReturn.style.display = "none";
    botonRemove.style.display = "none";
    botonAverage.style.display = "none";
    subject.style.background = "#fff";
    note.style.background = "#fff";
    subject.focus();
}