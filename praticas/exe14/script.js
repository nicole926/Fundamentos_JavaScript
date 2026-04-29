console.log("-=-=-=-=-=-01-=-=-=-=-=");
// 👉 Um contador de 1 até 5
// Regras:
// Use setInterval
// A cada 1 segundo soma +1
// Quando chegar em 5:
// 👉 pare o intervalo com clearInterval
// 👉 mostre: "Acabou!"

// var n = 0;
// var contador = setInterval(() => {
//     n += 1;
//     console.log(n);

//     if(n === 5){
//         clearInterval(contador);
//         console.log("Acabou!");
//     }
// }, 500);

console.log("-=-=-=-=-=-02-=-=-=-=-=");
// 👉 contador regressivo de 5 até 0
// Regras:
// começa em 5
// vai diminuindo
// quando chegar em 0:
// para o intervalo
// mostra: "BOOM 💥" 

// var i = 6;
// var contador2 = setInterval(() => {
//     console.log(i);

//     if(i === 0){
//         clearInterval(contador2);
//         console.log("BOOM 💥");
//     }
//     i -= 1;
// }, 1000);

console.log("-=-=-=-=-=-03-=-=-=-=-=");
// Contador de números pares
// 👉 Faça:
// Mostrar no console apenas os números pares de 2 até 10.
// Regras:
// usar setInterval
// contar de 2 em 2
// quando chegar em 10:
// parar o intervalo
// mostrar:
// Fim dos pares

// var pares = 0;
// var contatdorPares = setInterval(() => {
//     pares += 2;
//     console.log(pares);

//     if(pares === 10){
//         clearInterval(contatdorPares);
//         console.log("Fim dos pares");
//     }
// }, 1000);

console.log("-=-=-=-=-=-04-=-=-=-=-=");
// Mensagem atrasada + repetição
// 👉 Faça:
// esperar 2 segundos com setTimeout
// depois disso começar um setInterval
// mostrar: Olá
// 3 vezes
// 4. depois parar
// 5. mostrar: Terminou
// Saída esperada: Depois de 2 segundos:
// Olá
// Olá
// Olá
// Terminou
// 💡 Dica importante:
// Você vai usar: ✅ setTimeout, ✅ setInterval, ✅ clearInterval
// console.log("rodou o script");
// var contador = 0;

// setTimeout(() => {
//     var intervalo = setInterval(() => {
//         console.log("Olá");
//         contador++;

//         if(contador === 3){
//             clearInterval(intervalo);
//             console.log("Terminou!");
//         }
//     }, 1000);
// }, 2000);

console.log("-=-=-=-=-=-05-=-=-=-=-=");
// Começa em 0
// A cada 1 segundo: soma +1
// mostra no console assim:
// Tempo: 1s
// Tempo: 2s
// Tempo: 3s
// ...
// Quando chegar em 5 segundos: parar o contador
// mostrar: Tempo encerrado!
// ⚠️ Regras técnicas (importante): ✔ usar setInterval, ✔ usar clearInterval, ✔ usar uma variável contador
// 💡 Dica (não é resposta, é pista): Você vai usar algo assim: tempo++ e if(tempo === 5)

// var tempo = 0;
// var contadorSegundos = setInterval(() => {
//     tempo++;
//     console.log("Tempo: "+ tempo+"s");

//     if(tempo === 5){
//         clearInterval(contadorSegundos);
//         console.log("Tempo encerrado!");
//     };
// }, 1000);


console.log("-=-=-=-=-=-06-=-=-=-=-=");
// 👉 Começa em: 00:00
// 👉 Conta até: 00:10
// 👉 A cada 1 segundo:
// soma +1 segundo
// atualiza o formato
// 👉 Quando chegar em 00:10:
// parar o intervalo
// mostrar: Finalizado!
// ⚠️ Regras importantes ✔ usar setInterval, ✔ usar clearInterval, ✔ usar variável de tempo
// String(numero).padStart(2, '0')

 var segundos = 0;

 var interval = setInterval(() => {
    segundos++;
    console.log("00:"+String(segundos).padStart(2, '0'));

    if(segundos === 10){
        clearInterval(interval);
        console.log("Finalizado!");
    }
 }, 1000);