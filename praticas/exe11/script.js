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

botao.onclick = function(){
    titulo.innerText = 'Você clicou!'
}
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

var lista = document.getElementById('lista');
var input = document.getElementById('input');
var botaoAdd = document.getElementById('add');

botaoAdd.onclick = function(){
    var texto = input.value; // pega o que a pessoa digitou.

    if(texto.trim() === ""){
        alert("Digite o que deseja adicionar!");
        return
    }

    var li = document.createElement("li"); // cria um elemento novo.
    li.innerText = texto; // coloca o texto dentro dele.
    lista.appendChild(li); // Colocar na tela
    input.value = "";
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

let contaBancaria = {
    titular: "joãozin",
    saldo: 0,

    depositar: function(valor){
        this.saldo += valor;
        if(valor > 0){
            console.log("Depósito de "+valor+" realizado com sucesso!");
        }
        else{
            console.log("Valor de depósito inválido!");
        }
    },
    sacar: function(valor){
        if(valor > this.saldo){
            console.log(this.titular+" seu saldo é insuficiente para este saque...")
        }
        else if(valor <= 0){
            console.log("Valor de saque inválido!");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de "+valor+" realizado!");
        }
    },
    verSaldo: function(){
        return this.saldo;
    }
}

contaBancaria.depositar(100);
contaBancaria.sacar(20);
console.log(contaBancaria.verSaldo());


console.log("===================05==================");
// 🔥 DESAFIO 5 — Misturando TUDO (esse é o mais importante)
// HTML:
// <p id="contador">0</p>
// <button id="mais">+</button>
// <button id="menos">-</button>
// JS:Crie um objeto contador com: valor inicial 0
//Métodos: incrementar(),decrementar(),atualizarTela()
// 👉 Quando clicar:
// botão + → incrementa
// botão - → decrementa
// e atualiza o <p>

var display = document.getElementById('contador');
var botaoMais = document.getElementById('mais');
var botaoMenos = document.getElementById('menos');

let contador = {
    valor: 0,
    incrementar: function(){
        this.valor += 1;
        this.atualizarTela();
    },
    decrementar: function(){
        this.valor -= 1;
        this.atualizarTela();
    },
    atualizarTela: function(){
        display.innerText = this.valor;
    }
}

botaoMais.onclick = function(){
    contador.incrementar();
}

botaoMenos.onclick = function(){
    contador.decrementar();
}