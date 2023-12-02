const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');
const form = document.querySelector('.item__cart');


add.addEventListener('click', () => {
    quantity.value = Number(quantity.value) + 1
    if (quantity.value > 10) {
        quantity.value = 10;
    };
});

subtract.addEventListener('click', () => {
    if (quantity.value > 1) {
        quantity.value = Number(quantity.value) - 1
    };
});

quantity.addEventListener('input', () => {
    // Elimina caracteres no numéricos del valor del input
    quantity.value = quantity.value.replace(/\D/g, '');

    if (quantity.value > 10) {
        quantity.value = 10;
    }
});

// Agrega el controlador de eventos para evitar el envío al presionar "Enter"
form.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        quantity.blur(); // Perder el foco del input al presionar Enter
    }
});