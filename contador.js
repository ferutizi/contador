
const btnAumentar = document.querySelector('.btn-primary');
const btnDisminuir = document.querySelector('.btn-danger');
const btn10 = document.querySelector('.btn10');
const reset = document.querySelector('.btnReset');
const btn2 = document.querySelector('.btn2');

const span = document.getElementById('span');

let contador = 0;

btnAumentar.addEventListener('click', () => {
    contador++;
    span.textContent = contador;
})

btnDisminuir.addEventListener('click', () => {
    contador--;
    span.textContent = contador;
})

btn10.addEventListener('click', () => {
    contador = contador + 10;
    span.textContent = contador;
})

btn2.addEventListener('click', () => {
    contador = contador * 2;
    span.textContent = contador;
})

reset.addEventListener('click', () => {
    contador = 0;
    span.textContent = contador;
})