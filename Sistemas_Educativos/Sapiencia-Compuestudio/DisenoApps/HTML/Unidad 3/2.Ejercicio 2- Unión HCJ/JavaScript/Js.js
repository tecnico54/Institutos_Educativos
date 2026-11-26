//Primera forma
function saludar(){
	let nombre1 = document.getElementById("nombre").value;
	document.getElementById("resultado").value = "Hola, " + nombre1;
	alert("Bienvenido, " + nombre1);
}
//Segunda forma
function registrar(){
	let Nombre2 = document.getElementById("nombre2").value;
	let Programa = document.getElementById("programa").value;
	//alert("Bienvenido, " + Nombre2 + ", " + " Su programa es: " + Programa);	
	//Tercera forma
	document.getElementById("resultado11").value = 
		"Bienvenido, " + Nombre2 + ", " + " Su programa es: " + Programa;
	document.getElementById("resultado22").innerText =
		"Aprendiz: " + Nombre2 + " | " + " Programa: " + Programa;
	document.getElementById("resultado33").innerHTML =
		`<p style="color: #48e;">
			<strong>Aprendiz:</strong> ${Nombre2}<br>
			<strong>Pragrama:</strong> ${Programa}
		</p>`;
	document.getElementById("resultado44").textContent =
		"Bienvenido, " + Nombre2 + ", " + " Su programa es: " + Programa;
}
//Operadores
function calcularOperaciones(){
	let num1 = parseInt(document.getElementById("valorUno").value);
	let num2 = parseInt(document.getElementById("valorDos").value);
	//Suma:
	let suma = num1 + num2;
		document.getElementById("resultado_suma").innerText = 
			suma;
	//Resta:
	let resta = num1 - num2;
		document.getElementById("resultado_resta").innerText =
			resta;
	//Multiplicación:
	let multi = num1 * num2;
		document.getElementById("resultado_multiplicacion").innerText =
			multi;
	//División
	let div = num1 / num2;
		document.getElementById("resultado_division").innerText =
			div

}
