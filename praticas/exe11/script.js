console.log("===================01===================")
// 🔥 DESAFIO 1 — Entendendo o this na prática
// Crie um objeto carro com: marca, modelo, velocidade (começa em 0)
//E métodos:
// acelerar() → aumenta velocidade em 10
// frear() → diminui velocidade em 5
// status() → mostra no console: "O carro X está a Y km/h"
// 👉 Regra importante: usar this em tudo
// 💥 Desafio extra: Não deixar a velocidade ficar negativa

let carro = {
    marca: "Toyota",
    modelo: "Hilux",
    velocidade: 0,
    acelerar: function(){
        this.velocidade += 10;
    },
    frear: function(){
        this.velocidade -= 5;
    },
    status: function(){
        return 'O carro '+this.marca+' está a '+carro.velocidade+'km/h';
    }
}

carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log(carro.status());

console.log("===================02===================");
// 🔥 DESAFIO 2 (VERSÃO SIMPLIFICADA)
// HTML: <h1 id="titulo">Título original</h1>
// <button id="botao">Clique aqui</button>
// JS: Pegar o botão com getElementById, Quando clicar nele: mudar o texto do <h1></h1>

var titulo = document.getElementsByTagName('h1');
var botao = document.getElementById('botao');

function clicou(){
    document.getElementsByTagName('h1') == 'Você Clicou!'
}
clicou();
console.log(titulo);

console.log("===================03==================");
// 🔥 DESAFIO 3 — Lista dinâmica
// HTML:
// <ul id="lista"></ul>
// <input type="text" id="input">
// <button id="add">Adicionar</button>
// JS:
// Ao clicar no botão:
// pegar o valor do input
// criar uma <li>
// adicionar na lista
// 👉 Dica: createElement, appendChild
// 💥 Extra: Limpar o input depois de adicionar,  Não deixar adicionar vazio

