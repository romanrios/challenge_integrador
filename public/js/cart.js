const numbers = [];

for (let i = 1; i <= 40; i++) {
    numbers.push(i);
}

numbers.forEach(number => {
    const add = document.querySelector('#add_' + String(number));
    const subtract = document.querySelector('#subtract_' + String(number));
    const quantity = document.querySelector('#quantity_' + String(number));
    const cancel = document.querySelector('#cancel_' + String(number));
    const card = document.querySelector('#card_' + String(number));

    // Verifica si los elementos existen antes de agregar eventos
    if (add && subtract && quantity) {
        add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
        subtract.addEventListener('click', () => {
            if (quantity.value > 1) {
                quantity.value = Number(quantity.value) - 1;
            }
        });
        cancel.addEventListener('click', () => {
            card.remove();
        });
    }


});
