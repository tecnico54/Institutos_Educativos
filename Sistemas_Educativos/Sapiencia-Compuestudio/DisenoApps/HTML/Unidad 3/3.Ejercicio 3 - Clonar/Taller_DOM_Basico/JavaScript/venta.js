function calcular(){
    let amount = Number(document.getElementById("cantidad").value);
    let price = Number(document.getElementById("precio").value);
    let subtotal = amount * price; 
        document.getElementById("subtotal").value = subtotal;
    let iva = subtotal * 0.19;
        document.getElementById("IVA").value = iva;
    let discount = subtotal * 0.1;
        document.getElementById("descuento").value = discount;
    let total = subtotal + iva - discount
        document.getElementById("total").value = total;
}