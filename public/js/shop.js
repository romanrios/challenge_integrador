// links funkos / remeras / llaveros
function redirectToSelected() {
    var selectElement = document.getElementById("orderby");
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;

    // Redirigir a la ruta seleccionada
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
