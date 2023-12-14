// links menú "ORDENAR POR"
// esta función se dispara desde el HTML
function redirectToSelected() {
    let selectElement = document.getElementById("orderby");
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;

    // Redirigir a la ruta seleccionada
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
