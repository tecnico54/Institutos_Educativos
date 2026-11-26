const semestres = {
    1: {
        nombre: "Primer semestre",
        materias: [
            { nombre: "Idioma Extranjero I", nota: 4.2 },
            { nombre: "Humanidades I", nota: 4.6 },
            { nombre: "Cálculo Diferencial", nota: 3.0 },
            { nombre: "Técnicas de Medición de Variables", nota: 3.2 },
            { nombre: "Construcción de Algoritmos", nota: 4.0 },
            { nombre: "Contexto de la Ingeniería de Software", nota: 3.1 }
        ]
    },
    2: {
        nombre: "Segundo semestre",
        materias: [
            { nombre: "Idioma Extranjero II", nota: 4.0 },
            { nombre: "Ingeniería de Requisitos", nota: 4.1 },
            { nombre: "Humanidades II", nota: 4.3 },
            { nombre: "Aspectos Administrativos y Económicos", nota: 3.7 },
            { nombre: "Cálculo Integral", nota: null },
            { nombre: "Física Mecánica", nota: 3.0 },
            { nombre: "Álgebra Lineal", nota: 3.9 }
        ]
    },
    3: {
        nombre: "Tercer semestre",
        materias: [
            { nombre: "Idioma Extranjero III", nota: 4.1 },
            { nombre: "Humanidades III", nota: 4.0 },
            { nombre: "Análisis de Software", nota: 3.5 },
            { nombre: "Aspectos Contables", nota: 3.0 },
            { nombre: "Ecuaciones Diferenciales", nota: 3.6 },
            { nombre: "Física de Electro Magnetismo", nota: null },
            { nombre: "Probabilidad y Estadística", nota: null }
        ]
    },
    4: {
        nombre: "Cuarto semestre",
        materias: [
            { nombre: "Idioma Extranjero IV", nota: 3.8 },
            { nombre: "Institucional I", nota: 4.0 },
            { nombre: "Ingeniería Económica", nota: 5.0 },
            { nombre: "Cálculo Multivariado", nota: null },
            { nombre: "Estructuras de Datos", nota: 3.5 },
            { nombre: "Diseño de Software", nota: 3.4 },
            { nombre: "Patrones del Software", nota: 4.5 },
            { nombre: "Calidad del Software", nota: 4.0 }
        ]
    },
    5: {
        nombre: "Quinto semestre",
        materias: [
            { nombre: "Institucional II", nota: 3.5 },
            { nombre: "Formación y Evaluación de Proyectos", nota: 4.3 },
            { nombre: "Sistema Transaccionales y Bases de Datos", nota: 3.5 },
            { nombre: "Diseño de Interfaces de Software", nota: 4.6 },
            { nombre: "Arquitecturas de Software", nota: 5.0 },
            { nombre: "Arquitectura Computacional", nota: 4.3 },
            { nombre: "Electiva I", nota: null },
            { nombre: "Electiva II", nota: null }
        ]
    },
    6: {
        nombre: "Sexto semestre",
        materias: [
            { nombre: "Institucional III", nota: 4.3 },
            { nombre: "Computación Ubicua", nota: 4.6 },
            { nombre: "Electiva III", nota: null },
            { nombre: "Herramientas Computacionales para Interpretación de Resultados", nota: null },
            { nombre: "Programación Orientada a Objetos", nota: 4.3 },
            { nombre: "Propuesta de Trabajo de Grado", nota: null },
            { nombre: "Sistemas Distribuidos", nota: 3.7 },
            { nombre: "Sistemas Operativos", nota: 4.5 }
        ]
    },
    7: {
        nombre: "Séptimo semestre",
        materias: [
            { nombre: "Programación de Sistemas Embebidos y de Tiempo Real", nota: 3.7 },
            { nombre: "Compiladores", nota: 3.4 },
            { nombre: "Inteligencia de Negocios y Minería de Datos", nota: 3.7 },
            { nombre: "Pruebas Mantenimiento de Software", nota: null },
            { nombre: "Programación Orientada a la Web", nota: 4.0 },
            { nombre: "Aspectos Legales y Éticos para Ingeniería", nota: null },
            { nombre: "Construcción del Trabajo de Grado", nota: null },
            { nombre: "Metodologías de Software Colaborativo", nota: null }
        ]
    },
    8: {
        nombre: "Octavo semestre",
        materias: [
            { nombre: "Optativa", nota: null },
            { nombre: "Gestión de Proyectos de Software", nota: null },
            { nombre: "Programación Orientada a Entornos Multimediales", nota: null },
            { nombre: "Ingeniería Web", nota: 4.0 },
            { nombre: "Aplicación Práctica del Trabajo de Grado", nota: null },
            { nombre: "Sistemas de Comunicaciones y Seguridad Informática", nota: null },
            { nombre: "Sistemas de Inteligencia Artificial", nota: null },
            { nombre: "Aspectos Generales del Medio Ambiente", nota: null }
        ]
    }
};
const selectorSemestre = document.getElementById("selectorSemestre");
const tablaMaterias = document.getElementById("tablaMaterias");
const materiasAprobadas = document.getElementById("materiasAprobadas");
const materiasPendientes = document.getElementById("materiasPendientes");
const promedioGeneral = document.getElementById("promedioGeneral");
const totalMaterias = document.getElementById("totalMaterias");
const tituloVista = document.getElementById("tituloVista");
const mensaje = document.getElementById("mensaje");
function obtenerTodasLasMaterias(){
    const todas = [];
    Object.keys(semestres).forEach(function(numero){
        semestres[numero].materias.forEach(function(materia){
            todas.push({
                semestre: semestres[numero].nombre,
                nombre: materia.nombre,
                nota: materia.nota
            });
        });
    });
    return todas;
}
function obtenerMateriasDeLaVista(valor){
    if (valor === "todos"){
        return obtenerTodasLasMaterias();
    }
    const semestre = semestres[valor];
    return semestre.materias.map(function(materia) {
        return {
            semestre: semestre.nombre,
            nombre: materia.nombre,
            nota: materia.nota
        };
    });
}
function obtenerClaseNota(nota){
    if (nota === null) {
        return "notaPendiente";
    }
    if (nota >= 3.0 && nota < 4.0){
        return "notaAzul";
    }
    if (nota >= 4.0 && nota < 5.0){
        return "notaVerde";
    }
    if (nota === 5.0){
        return "notaVerdeOscuro";
    }
    return "";
}
function actualizarResumen(materias){
    let conNota = 0;
    let pendientes = 0;
    let sumaNotas = 0;

    materias.forEach(function(materia){
        if (materia.nota === null){
            pendientes++;
        }else{
            conNota++;
            sumaNotas += materia.nota;
        }
    });
    const promedio = conNota > 0 ? sumaNotas / conNota : 0;
    materiasAprobadas.textContent = conNota;
    materiasPendientes.textContent = pendientes;
    promedioGeneral.textContent = conNota > 0 ? promedio.toFixed(1) : "-";
    totalMaterias.textContent = materias.length;
}
function mostrarMaterias(valor){
    tablaMaterias.innerHTML = "";
    const materiasMostrar = obtenerMateriasDeLaVista(valor);
    if (valor === "todos"){
        tituloVista.textContent = "Todos los semestres";
    }else{
        tituloVista.textContent = semestres[valor].nombre;
    }
    materiasMostrar.forEach(function(materia){
        const fila = document.createElement("tr");
        const celdaSemestre = document.createElement("td");
        celdaSemestre.textContent = materia.semestre;
        const celdaMateria = document.createElement("td");
        celdaMateria.textContent = materia.nombre;
        const celdaNota = document.createElement("td");
        if (materia.nota === null){
            celdaNota.textContent = "Sin nota";
        }else{
            celdaNota.textContent = materia.nota.toFixed(1);
        }
        celdaNota.className = obtenerClaseNota(materia.nota);
        fila.appendChild(celdaSemestre);
        fila.appendChild(celdaMateria);
        fila.appendChild(celdaNota);
        tablaMaterias.appendChild(fila);
    });
    actualizarResumen(materiasMostrar);
    mensaje.textContent =
        "Mostrando " + materiasMostrar.length + " materia(s).";
}
selectorSemestre.addEventListener("change", function() {
    mostrarMaterias(selectorSemestre.value);
});
mostrarMaterias("todos");
