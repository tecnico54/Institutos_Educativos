function mostrarHorarioHoy(){
    const hoy = new Date();
    const mes = hoy.getMonth()
    const dia = hoy.getDate();
    const contenedor = document.getElementById("horarioHoy");
    // ======== FECHAS DEL AÑO ACADÉMICO ========
    // Primer semestre
    const inicioSemestre = { mes: 9, dia: 2 };
    const finSemestre1    = { mes: 10, dia: 31 };
    // =========================================
    function dentroDelRango(inicio, fin){
        if(mes < inicio.mes || mes > fin.mes){
            return false;
        }
        if(mes === inicio.mes && dia < inicio.dia){
            return false;
        }
        if(mes === fin.mes && dia > fin.dia){
            return false;
        }
        return true;
    }
    const enClases =
        dentroDelRango(inicioSemestre, finSemestre1);
    if(!enClases){
        contenedor.innerHTML = `
            <p><b>Terminastes tus estudio, preparate para trabajar 😄.</b></p>
        `;
        return;
    }
    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];
    const nombreDia = dias[hoy.getDay()];
    const clasesHoy = materias.filter(
        materia => materia.dia === nombreDia
    );
    if(clasesHoy.length === 0){
        contenedor.innerHTML = `
            <h3>Hoy es ${nombreDia}</h3>
            <p>No tienes clases hoy.</p>
            <p>📚 Aprovecha para estudiar o descansar.</p>
        `;
        return;
    }
    let html = `<h3>Hoy es ${nombreDia}</h3>`;
    if(clasesHoy.length === 1){
        html += `<p>📖 Hoy tienes <b>1 clase</b>.</p>`;
    }else{
        html += `<p>📖 Hoy tienes <b>${clasesHoy.length} clases</b>.</p>`;
    }
    html += `<p>✨ ¡Muchos éxitos!</p><br>`;
    clasesHoy.forEach(materia => {
        html += `
            <div class="materia">
                <h4>${materia.nombre}</h4>
                <p><b>Hora:</b> ${materia.hora}</p>
                <p><b>Salón:</b> ${materia.salon}</p>
            </div>
            <hr>
        `;
    });
    contenedor.innerHTML = html;
}
mostrarHorarioHoy();