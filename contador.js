
const btnAumentar = document.querySelector('.btn-primary');
const btnDisminuir = document.querySelector('.btn-danger');

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