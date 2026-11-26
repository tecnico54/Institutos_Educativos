function calcularPresupuesto(){
    let guestnumber = parseInt(document.getElementById("numero-inv").value);
    let luch = parseFloat(document.getElementById("cost-comida").value);
    let drink = parseFloat(document.getElementById("cost-bebida").value);
    let decoration = parseFloat(document.getElementById("cost-decor").value);
    let music = parseFloat(document.getElementById("cost-musica").value);
    let tip_staff = parseFloat(document.getElementById("propina-porc").value);
    //Operaciones:
    let luchT = luch * guestnumber;
    let drinkT = drink * guestnumber;
    let decorationT = decoration * guestnumber;
    let musicT = music * guestnumber;
    let subtotal_LRDM = luchT + drinkT + decorationT + musicT;
    let tip_staffT = tip_staff;
    let tip = (tip_staffT / subtotal_LRDM) * 100;
    let total = subtotal_LRDM + tip_staffT;
    let guest = total / guestnumber;
        //Mensaje:
        document.getElementById("comida-total-s").innerText = "$ " + luchT.toLocaleString("es-Co");
        document.getElementById("bebida-total-s").innerText = "$ " + drinkT.toLocaleString("es-Co");
        document.getElementById("decoracion").innerText = "$ " + decorationT.toLocaleString("es-Co");
        document.getElementById("musica").innerText = "$ " + musicT.toLocaleString("es-Co");
        document.getElementById("subtotal").innerText = "$ " + subtotal_LRDM.toLocaleString("es-Co");
        document.getElementById("propina").innerText = tip.toFixed(1) + "%";
        document.getElementById("total-general").innerText = "$ " + total.toLocaleString("es-Co");
        document.getElementById("costo-inv").innerText = "$ " + guest.toLocaleString("es-Co");
}