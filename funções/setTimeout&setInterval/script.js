// setTimeout
// primeiro parâmetro é uma function
// segundo parâmetro é o intervalo em milisegundos (1s é 1000 ms)
// esse tempo de espera se chama: chamada assíncrona.

console.log("antes do setTimeout");

setTimeout(function(){
 console.log("Testando o setTimeout");
}, 2000)

console.log("Depois do setTimeout");

// setInterval

setInterval(function(){
    console.log("Testando o setInterval");
}, 1000);

// clearTimeout
var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1500);

x = 5;

if(x > 0){
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

// clearInterval
var myInterval = setInterval(function(){
    console.log("imprimindo interval");
}, 500);

setTimeout(function(){
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);