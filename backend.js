const display = document.getElementById('display');
const botoesNumeros = document.querySelectorAll('.btn-numero');
const storedValue = 0;

botoesNumeros.forEach(botao => {

    botao.addEventListener('click', (e) => {
        const numeroClicado = e.target.value;
        
        adicionarNumeroNoDisplay(numeroClicado);
    });
});

function adicionarNumeroNoDisplay(numero) {
    display.value += numero; 
}

function somar() {
    storedValue.value = display.value;
    display.value = "";
}

function calcular() {
    console.log(display.value);
    console.log(storedValue.value);
    const result = Number(display.value) + Number(storedValue.value);
    console.log(result)
    display.value = result;
}