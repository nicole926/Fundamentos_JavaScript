
console.log('-=-=-=-=-=-=-=-=-=-=01-=-=-=-=-=-=-=-=-=');
// 🧠 EXERCÍCIO 1 — Manipulando título + função
// 👉 Trabalha: querySelector, style, função simples
// Faça:
// Pegue um <h1> com id title
// Crie uma função chamada mudarTitulo
// Dentro dela:
// Mude o texto para: "Novo título atualizado"
// Mude a cor para verde
// Mude o fundo para preto
// 💡 Depois chame a função

function mudarTitulo(){
    var texto = document.querySelector('#title');
    texto.textContent = 'Novo título atualizado';
    texto.style.cssText = "color: green; background-color: black;";
}
mudarTitulo();

console.log('-=-=-=-=-=-=-=-=-=-=02-=-=-=-=-=-=-=-=-=');
// 🧠 EXERCÍCIO 2 — Lista com loop
// 👉 Trabalha: array + for + DOM
// Faça:
// Crie um array com 5 nomes
// Pegue uma <ul> do HTML
// Use um for
// Para cada nome:
// Crie um <li>
// Adicione o nome dentro
// Adicione na <ul>

var nomes = ["Ana", "Beatriz", "Josi", "Marcos", "Lucas"];
var ul = document.querySelector('ul');

for(let i = 0; i < nomes.length; i++){
    let liFor = document.createElement('li');
    liFor.textContent = nomes[i];
    ul.appendChild(liFor);
}

console.log('-=-=-=-=-=-=-=-=-=-=03-=-=-=-=-=-=-=-=-=');
// 🧠 EXERCÍCIO 3 — Função com callback (igual você já fez, mas diferente)
// 👉 Trabalha: lógica + callback
// Faça:
// Crie uma função subtracao(a, b, cb)
// Crie uma função divisao(a, b, cb)
// Use a função exibir que você já fez
// 💡 Teste assim:
// subtracao(10, 5, exibir);
// divisao(20, 4, exibir);

function exibir(num){
    console.log("O resultado das operações foi: "+num);
}

function subtracao(a, b, cb){
    var sub = a - b;
    cb(sub);
}

function divisao(a, b, cb){
    var div = a / b;
    cb(div);
}

subtracao(7, 5, exibir);
divisao(10, 2, exibir);

console.log('-=-=-=-=-=-=-=-=-=-=04-=-=-=-=-=-=-=-=-=');
// 🧠 EXERCÍCIO 4 — Alterando vários elementos
// 👉 Trabalha: querySelectorAll, loop
//Faça:
// Crie vários <p> no HTML
// Use querySelectorAll("p")
// Use um loop (for)
// Para cada <p>:
// Mude a cor para roxo
// Coloque fundo cinza

var p = document.querySelectorAll('p');
for(let i = 0; i < p; i++){
    var iFor = p[i];
    iFor.style.cssText = "color: purple; background-color: grey;";
}

console.log('-=-=-=-=-=-=-=-=-=-=05-=-=-=-=-=-=-=-=-=');
// 🧠 EXERCÍCIO 5 — Mini sistema de operações (mais completo 🔥)
// 👉 Trabalha: tudo junto (função + callback + DOM)
// Faça:
// Crie 2 inputs no HTML (números)
// Crie 2 botões:"Somar", "Multiplicar"
// Crie uma <p> para mostrar resultado
// No JS:
// Pegue os valores dos inputs
// Quando clicar:
// Use sua função soma ou multiplicacao
// Mostre o resultado dentro do <p> (não só no console)


var numero1 = document.getElementById('n1');
var numero2 = document.getElementById('n2');

function exibir(num){
    document.getElementById('contador').textContent = num;
}

function soma(a, b, cb){
    var resultado = a + b;
    cb(resultado);
}

function multiplicacao(a, b, cb){
    var resultado = a * b;
    cb(resultado);
}

document.getElementById('somar').onclick = function(){
    console.log("Clicou somar");
    var n1 = Number(numero1.value);
    var n2 = Number(numero2.value);

    soma(n1, n2, exibir);
}

document.getElementById('multi').onclick = function(){
    var n1 = Number(numero1.value);
    var n2 = Number(numero2.value);

    multiplicacao(n1, n2, exibir);
}
