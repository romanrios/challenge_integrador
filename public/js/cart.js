// Eventos para botones (+) y (-)

// array con números del 1 al 40
const numbers = [];
for (let i = 1; i <= 40; i++) {
    numbers.push(i);
}

// iteramos
numbers.forEach(number => {
    const add = document.querySelector('#add_' + String(number));
    const subtract = document.querySelector('#subtract_' + String(number));
    const quantity = document.querySelector('#quantity_' + String(number));

    // Verifica si los elementos existen antes de agregar eventos
    if (add && subtract && quantity) {
        add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
        subtract.addEventListener('click', () => {
            if (quantity.value > 1) {
                quantity.value = Number(quantity.value) - 1;
            }
        })
    }
});
