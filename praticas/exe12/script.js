console.log("-=-=-=-=-=-=01-=-=-=-=-=");
// 🧠 DESAFIO 1 — Lista dinâmica básica
// Crie uma lista (ul) no HTML com 3 itens.
// 👉 Faça:
// Use querySelectorAll para pegar os li
// Crie uma função que:
// percorra a lista (loop) -
// mostre no console o texto de cada item
// Mostre também quantos itens existem -
// 💡 Dica: usa .textContent e .length -

var listaFrutas = document.querySelectorAll('li');
console.log("Total de Frutas: "+listaFrutas.length);

for(let i = 0; i < listaFrutas.length; i++){
    console.log("Item "+(i + 1)+ " : "+listaFrutas[i].textContent); 
    // i + 1 significa que i = 0 + 1 = 1, i = 1 + 2 = 2....vai aumentando a sequência começando do 1 ao invés do 0.
}

console.log("-=-=-=-=-=-=02-=-=-=-=-=");
//🧠 DESAFIO 2 — Alterando conteúdo com condição
// Você vai trabalhar com um parágrafo:
// 👉 Faça:
// Pegue um <p> pelo ID
// Crie uma variável com um número (ex: idade = 17)
// Crie uma função que:
// se idade >= 18 → muda o texto para "Maior de idade"
// senão → "Menor de idade"
// 💡 Usa if + textContent

var verificaIdade = document.getElementById('verificaIdade');
console.log(verificaIdade);
function idade(n){
    if(n >= 18){
        verificaIdade.textContent = "Maior de idade";
    }
    else{
        verificaIdade.textContent = "Menor de idade";
    }
}
idade(27);

console.log("-=-=-=-=-=-=03-=-=-=-=-=");
// 🧠 DESAFIO 3 — Criando elementos com loop
// Agora começa a ficar interessante 😏
// 👉 Faça:
// Crie um array com 5 nomes
// Use um loop (for)
// Para cada nome:
// crie um li
// adicione o nome dentro
// adicione em uma ul no HTML
// 💡 Usa: createElement, createTextNode, appendChild

var nomes = ["Marta", "Zuza", "Manel", "Natan", "Jean"];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body')[0];

body.appendChild(listaUl);

for(let i = 0; i < nomes.length; i++){
    var liFor = document.createElement('li');
    liFor.textContent = nomes[i];
    listaUl.appendChild(liFor);
}

console.log("-=-=-=-=-=-=04-=-=-=-=-=");
// 🧠 DESAFIO 4 — Contador de itens
// 👉 Faça:
// Pegue todos os elementos com classe .item
// Crie uma função que:
// conte quantos existem
// mostre no console
// e também coloque esse número em um <h2>
// 💡 Ex: "Total de itens: 5"

var listaFrutas2 = document.querySelectorAll('.item');

var total = listaFrutas2.length;
console.log("Total de itens: "+ total);

var novoH2 = document.createElement('h2');
novoH2.textContent = "Total de itens: "+ total;

var body = document.querySelector('body');
body.appendChild(novoH2);

console.log("-=-=-=-=-=-=05-=-=-=-=-=");
// 🧠 DESAFIO 5 — Substituindo conteúdo (innerHTML vs textContent)
// 👉 Faça:
// Crie um div com id box
// Crie uma função que:
// usando innerHTML, coloque: <strong>Texto em negrito</strong>
// depois substitua usando textContent com o mesmo texto
// 👉 Observe a diferença no resultado