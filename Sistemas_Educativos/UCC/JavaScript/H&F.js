let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');
let fecha = new Date();
let mesAnyo = ['Enero','Febrero', 'Marzo','abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let diaSemana = ['Domingo','Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];
mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;
setInterval(()=>{
  let hora = new Date();
  mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000);