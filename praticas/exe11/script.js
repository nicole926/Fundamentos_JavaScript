const { createElement } = require("react");

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

var titulo = document.getElementsByTagName('h1')[0];
var botao = document.getElementById('botao');

function clicou(){
    titulo.innerText = 'Você clicou!';
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

var lista = getElementById('lista')
var input = getElementById('input');
var botao = getElementById('botao')

botao.onclick = function(){
    var texto = input.value; // pega o que a pessoa digitou.
    var li = document.createElement("li"); // cria um elemento novo.
    li.innerText = texto; // coloca o texto dentro dele.
    lista.appendChild(li); // Colocar na tela
}


console.log("===================04==================");
// 🔥 DESAFIO 4 — Objeto + lógica real
// Crie um objeto contaBancaria com: titular, saldo
// Métodos:
// depositar(valor)
// sacar(valor)
// verSaldo()
// 👉 Regras:

// Não pode sacar mais do que tem
// Usar this corretamente

// 💥 Extra: Mostrar mensagem tipo: "Saldo insuficiente", "Depósito realizado"



console.log("===================05==================");
// 🔥 DESAFIO 5 — Misturando TUDO (esse é o mais importante)

// HTML:
// <p id="contador">0</p>
// <button id="mais">+</button>
// <button id="menos">-</button>

// JS:
// Crie um objeto contador com:
// valor inicial 0

//Métodos:
// incrementar()
// decrementar()
// atualizarTela()

// 👉 Quando clicar:
// botão + → incrementa
// botão - → decrementa
// e atualiza o <p>

// 💥 Aqui você vai juntar: objeto, this, DOM