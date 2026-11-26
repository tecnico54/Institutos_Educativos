function calcular(){
    let h_t = Number(document.getElementById("horas").value);
    let val = Number(document.getElementById("valor").value);
    let wage = h_t * val;
        document.getElementById("resultado").value = wage;
}