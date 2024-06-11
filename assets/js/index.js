precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const precioInicial = parseFloat(document.querySelector('.precio-inicial').innerHTML);
let cantidad = 0;
const cantidadElemento = document.querySelector('.cantidad');
const totalElemento = document.querySelector('.valor-total');

function actualizarTotal() {
    const total = precioInicial * cantidad;
    totalElemento.innerHTML = total.toFixed(2);
}

document.querySelector('.sumar').onclick = function() {
    cantidad++;
    cantidadElemento.innerHTML = cantidad;
    actualizarTotal();
};

document.querySelector('.restar').onclick = function() {
    if (cantidad > 0) {
        cantidad--;
        cantidadElemento.innerHTML = cantidad;
        actualizarTotal();
    }
};
