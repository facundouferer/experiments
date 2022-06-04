

const displayValorActual = document.getElementById('valorActual');
const diplayValorAnterior = document.getElementById('valorAnterior');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperaciones = document.querySelectorAll('.operador');

const display = new Display(diplayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregrarNumero(boton.textContent);
    });
});

const botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener('click', () => {
    display.borrarNumero();
});

const botonBorrarTodo = document.getElementById('borrarTodo');
botonBorrarTodo.addEventListener('click', () => {
    display.borrarTodo();
});

botonesOperaciones.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

