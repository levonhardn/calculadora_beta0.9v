const display = document.getElementById('display');
const botoesNumeros = document.querySelectorAll('.btn-numero');
let resultadoAnterior = null;
let operacaoAtual = null;
let ultimoNumeroSomado = null;
let deveLimparDisplay = false;

botoesNumeros.forEach(botao => {

    botao.addEventListener('click', (e) => {
        const numeroClicado = e.target.value;
        
        adicionarNumeroNoDisplay(numeroClicado);
    });
});

function adicionarNumeroNoDisplay(numero) {
    if (deveLimparDisplay) {
        display.value = "";
        deveLimparDisplay = false;
    }

    display.value += numero; 
}

function somar() {
    resultadoAnterior = Number(display.value || 0);
    operacaoAtual = "soma";
    deveLimparDisplay = true;
}

function calcular() {
    if (operacaoAtual === "soma") {
        ultimoNumeroSomado = Number(display.value || 0);
        resultadoAnterior += ultimoNumeroSomado;
        display.value = resultadoAnterior;
        operacaoAtual = null;
        deveLimparDisplay = true;
        return;
    }

    if (ultimoNumeroSomado !== null) {
        resultadoAnterior = Number(display.value || 0) + ultimoNumeroSomado;
        display.value = resultadoAnterior;
        deveLimparDisplay = true;
    }
}
