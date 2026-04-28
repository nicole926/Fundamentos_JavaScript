console.log("-=-=-=-=-=-01-=-=-=-=-=");
// 👉 Um contador de 1 até 5
// Regras:
// Use setInterval
// A cada 1 segundo soma +1
// Quando chegar em 5:
// 👉 pare o intervalo com clearInterval
// 👉 mostre: "Acabou!"

var n = 0;
var contador = setInterval(() => {
    n += 1;
    console.log(n);

    if(n === 5){
        clearInterval(contador);
        console.log("Acabou!");
    }
}, 500);

console.log("-=-=-=-=-=-02-=-=-=-=-=");
// 👉 contador regressivo de 5 até 0
// Regras:
// começa em 5
// vai diminuindo
// quando chegar em 0:
// para o intervalo
// mostra: "BOOM 💥" 

var i = 6;
var contador2 = setInterval(() => {
    console.log(i);

    if(i === 0){
        clearInterval(contador2);
        console.log("BOOM 💥");
    }
    i -= 1;
}, 1000);