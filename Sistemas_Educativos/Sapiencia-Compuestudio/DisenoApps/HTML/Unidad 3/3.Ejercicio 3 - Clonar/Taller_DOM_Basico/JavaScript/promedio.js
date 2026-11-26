function calcular(){
    let not1 = parseFloat(document.getElementById("nota1").value);
    let not2 = parseFloat(document.getElementById("nota2").value);
    let not3 = parseFloat(document.getElementById("nota3").value);
    let promedio = (not1 + not2 + not3)/3;
    document.getElementById("promedio").value =
        promedio.toFixed(1);
}