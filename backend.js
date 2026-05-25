const nmbrdigitado = String(document.getElementById('nmbrdigitado'))

const button = document.getElementsByClassName('butao');

console.log(button)

const table = []

table.push(button)


table[0].addEventListener('click', () => {
    nmbrdigitado.hidden = false;
    nmbrdigitado.textContent = ("Hello World");
});

// preciso adicionar