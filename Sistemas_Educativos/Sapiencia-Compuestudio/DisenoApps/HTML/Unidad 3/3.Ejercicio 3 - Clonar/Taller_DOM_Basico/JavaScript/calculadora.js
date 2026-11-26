function sumar(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let suma = n1 + n2;
    document.getElementById("resultado1").value =
        suma;
}
function restar(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let resta = n1 - n2;
    document.getElementById("resultado1").value =
        resta;
}
function multi(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let multi = n1 * n2;
    document.getElementById("resultado1").value =
        multi;
}
function divi(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let divi = n1 / n2;
    document.getElementById("resultado1").value =
        divi;
}