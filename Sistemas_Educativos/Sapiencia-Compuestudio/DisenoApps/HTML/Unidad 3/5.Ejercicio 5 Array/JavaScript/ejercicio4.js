//Lista:
let listaArrayAcademica = [];
//Variables:
let i_Nombre = document.getElementById("estudiante");
let i_Edad = document.getElementById("edad");
let i_Curso = document.getElementById("curso");
let tabla = document.getElementById("Tabla__Cuerpo");
function quest(){
    //Varoles:
    let student = i_Nombre.value.trim().toUpperCase().toLowerCase();
    let age = i_Edad.value.toUpperCase().toLowerCase();
    let course = i_Curso.value.trim().toUpperCase().toLowerCase();
    //Condición estudiante:
    if(i_Nombre.value.trim() === ""){
        alert("Favor, ingresa el nombre completo del estudiante");
        i_Nombre.style.background = "#f00";
        i_Nombre.focus();
        return;
    }else if(/[0-9]/.test(i_Nombre.value)){
        alert("No se admite números");
        i_Nombre.style.background = "#f00";
        i_Nombre.focus();
        return;
    }else{
        i_Nombre.style.background = "#fff";
    }
    //Condición edad:
    if(i_Edad.value === ""){
        alert("Favor, ingresa la edad del estudiante");
        i_Edad.style.background = "#f00";
        i_Edad.focus();
        return;
    }else if(Number(i_Edad.value) >= 100 || Number(i_Edad.value) <= 0){
        alert("Error: número mayor 0 igual a 100 0 un número negativo");
        i_Edad.style.background = "#f00";
        i_Edad.focus();
        return;
    }else{
        i_Edad.style.background = "#fff";
    }
    //Condición curso:
    if(i_Curso.value.trim() === ""){
        alert("Favor, ingresa el curso actual del estudiante");
        i_Curso.style.background = "#f00";
        i_Curso.focus();
        return;
    }else if(/[0-9]/.test(i_Curso.value)){
        alert("No se admite números");
        i_Curso.style.background = "#f00";
        i_Curso.focus();
        return;
    }else{
        i_Curso.style.background = "#fff";
    }
    //Validad el estudiante repetido:
    let existe = listaArrayAcademica.find(alumno => alumno.student === student);
    if(existe){
        alert("El estudiante " + student + " no fue encotrado");
        i_Nombre.style.background = "#f00";
        i_Nombre.focus();
        return;
    }
    //Añadir estudiante al array:
    listaArrayAcademica.push({
        student,
        age,
        course
    });
    //Añadir en la tabla:
    tabla.innerHTML = "";
    tabla.style.background = "#fff";
    for(let i = 0; i < listaArrayAcademica.length; i++){
        tabla.innerHTML += `
            <tr>
                <td style="border: 2px outset #008000;">${listaArrayAcademica[i].student}</td>
                <td style="border: 2px outset #008000;">${listaArrayAcademica[i].age}</td>
                <td style="border: 2px outset #008000;">${listaArrayAcademica[i].course}</td>
            </tr>
        `;
    }
    console.log(listaArrayAcademica);
    //Limpiar campos:
    i_Nombre.value = "";
    i_Edad.value = "";
    i_Curso.value = "";
    i_Nombre.focus();
}