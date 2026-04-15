console.log("==========01==========");
// 🔥 DESAFIO 1 — Manipulando array básico
// Crie um array com 5 frutas.
// Adicione uma fruta no final (push)
// Remova a última (pop)
// Adicione uma no início (unshift)
// Remova a primeira (shift)
// Mostre o array final no console
// 👉 Desafio extra: mostre também o tamanho do array

let frutas = ["maçã", "banana", "laranja", "mamão", "limão"];

frutas.push("acerola");
frutas.pop();
frutas.unshift("pera");
frutas.shift();
console.log(frutas);
console.log(frutas [frutas.length - 1]);
console.log(frutas.length);

console.log("==========02==========");
// 🔥 DESAFIO 2 — Encontrando elemento
// Crie um array com nomes de pessoas.
// Use indexOf para encontrar o índice de um nome específico
// Se existir, mostre:"Encontrado na posição X"
// Se não existir: "Nome não encontrado"

let nomes = ["Lucas", "Pedro", "Mateus", "Marcos", "João"];
console.log(nomes);

let posicao = nomes.indexOf("João");
if (posicao !== -1){
    console.log("Encontrado na posição " + posicao);
} else {
    console.log("Nome não encontrado!");
}

console.log("==========03==========");
// 🔥 DESAFIO 3 — Último elemento do array
// Crie um array de números.
// Mostre o último elemento usando:
// arr[arr.length - 1]
// 👉 Desafio extra: mostre também o primeiro

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(numbers [numbers.length - 1]);
console.log(numbers[0]);

console.log("==========04==========");
// 🔥 DESAFIO 4 — Objeto com método (nível iniciante)
// Crie um objeto chamado carro com: marca, modelo, ano
// E um método:

// ligar: function(){
//    console.log("O carro ligou 🚗");
// }
// Mostre a marca no console
// Chame o método ligar

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function(){
        console.log("O carro ligou 🚗");
    }
}

console.log(carro.marca);
carro.ligar();

console.log("==========05==========");
// 🔥 DESAFIO 5 — Objeto com lógica (esse aqui é chave 👀)
// Crie um objeto calculadora com:
// somar: function(a, b){}
// subtrair: function(a, b){}
// multiplicar: function(a, b){}
// Cada método deve retornar o resultado
// Chame cada um e mostre no console
// 👉 Exemplo esperado: calculadora.somar(2, 3) // 5

let calculadora = {
    somar: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    }
}

var somando = calculadora.somar(2, 4);
console.log(somando);

var subtraindo = calculadora.subtrair(10, 5);
console.log(subtraindo);

var multiplicando = calculadora.multiplicar(2, 5);
console.log(multiplicando);

console.log("==========06==========");
// 🧠 DESAFIO EXTRA 
// Crie um array de objetos: [{ nome: "Ana", idade: 20 }, { nome: "Carlos", idade: 30 }]
// Agora: Mostre o nome da segunda pessoa e mostre a idade da primeira

let lista = [
    {nome: "Ana", idade: 20},
    {nome: "Carlos", idade: 30}
]

console.log(lista[1].nome);
console.log(lista[0].idade);