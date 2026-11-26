function calcular(){
    //Variables:
    let product = document.getElementById("producto").value;
    let amount = Number(document.getElementById("cantidad").value);
    let price = Number(document.getElementById("precio").value);
    //Validaciones:
    if(product.trim() === ""){
        alert("Ingrese un producto, por favor");
        document.getElementById("producto").style.background = "#f00";
        return;
    }else{
        document.getElementById("producto").style.background = "#008000";
    }
    if(isNaN(amount === "") || amount <= 0){
        alert("Cantidad invalida, favor de ingresarlo correctamente");
        document.getElementById("cantidad").style.background = "#f00";
        return;
    }else{
        document.getElementById("cantidad").style.background = "#008000";
    }
    if(isNaN(price === "") || price <= 0){
        alert("Precio invalido, favor de ingresarlo correctamente");
        document.getElementById("precio").style.background = "#f00";
        return;
    }else{
        document.getElementById("precio").style.background = "#008000";
    }
    //Calcular subtotal:
    let subTotal = amount * price;
     document.getElementById("subtotal").value =
        "$ " + subTotal.toLocaleString("es-co");
    //Calcular descuento:
    let disacount = subTotal * 0.30;
    let porcent = (disacount / subTotal) * 100;
    let newSub = subTotal - disacount;
    //Mostrar descuento:
    document.getElementById("descuento").value = porcent + " %";
    //Condición del IVA:
    let iVa = newSub * 0.19;
    //Calcular porcentaje del IVA:
    let iVA = (iVa / newSub) * 100;
    if(product.toLowerCase() === "huevo" || product.toLowerCase() === "leche" || product.toLowerCase() === "pan"){
        iVA = 0;
    }
    document.getElementById("iva").value =
        iVA + " %";
    //Calcular total:
    let toTal = newSub + iVa;
    document.getElementById("total").value =
        "$ " + toTal.toLocaleString("es-co");
}