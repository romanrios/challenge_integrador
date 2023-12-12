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

        add.addEventListener('click', () => {
            if (quantity.value < 10) {
                quantity.value = Number(quantity.value) + 1;
                add.disabled = true;
                subtract.disabled = true;
            }
        });

        subtract.addEventListener('click', () => {
            if (quantity.value > 1) {
                quantity.value = Number(quantity.value) - 1;
                add.disabled = true;
                subtract.disabled = true;
            }
        })
    }
});



//  Función para agregar o restar items al carrito con una solicitud POST
function addToCart(itemId, baseQuantity, quantityToAddOrSubstract) {

    if (
        (quantityToAddOrSubstract === 1 && baseQuantity < 10) ||
        (quantityToAddOrSubstract === -1 && baseQuantity > 1)
    ) {

        const data = { quantity: quantityToAddOrSubstract };

        fetch(`/shop/item/${itemId}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }

                // Recargar la página después de que la solicitud sea exitosa
                location.reload();

            })
            .catch(error => {
                console.error('Error al realizar la solicitud POST:', error);
            });
    }
}