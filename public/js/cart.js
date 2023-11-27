const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click', () => {
    if (quantity.value > 0) {
        quantity.value = Number(quantity.value) - 1
    }
});



const add2 = document.querySelector('#add2');
const subtract2 = document.querySelector('#subtract2');
const quantity2 = document.querySelector('#quantity2');

add2.addEventListener('click', () => quantity2.value = Number(quantity2.value) + 1);
subtract2.addEventListener('click', () => {
    if (quantity2.value > 0) {
        quantity2.value = Number(quantity2.value) - 1
    }
});