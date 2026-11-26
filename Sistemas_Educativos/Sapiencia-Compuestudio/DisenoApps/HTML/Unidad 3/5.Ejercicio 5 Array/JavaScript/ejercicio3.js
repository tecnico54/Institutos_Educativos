let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

function agregarProducto() {
    if (!formulario.reportValidity()) {
        return;
    }

    listaProductos.push({
        nombre: producto.value.trim(),
        precio: parseFloat(precio.value),
        cantidad: parseInt(cantidad.value, 10)
    });

    formulario.reset();
    mostrar();
}

function mostrar() {
    let totalNuevo = 0;
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let productoActual = listaProductos[i];
        let subtotal = productoActual.precio * productoActual.cantidad;
        totalNuevo += subtotal;

        tabla.innerHTML += `<tr>
            <td>${productoActual.nombre}</td>
            <td>${productoActual.precio}</td>
            <td>${productoActual.cantidad}</td>
            <td>${subtotal}</td>
        </tr>`;
    }

    total.textContent = `Total: ${totalNuevo}`;
}