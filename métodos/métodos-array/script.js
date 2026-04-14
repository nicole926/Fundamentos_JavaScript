// length

var arr = [1,2,3,4,5];
console.log(arr.length);

// push - também adiciona elementos ao array
arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

// pop- remove o elemento do fim do array
arr.pop();
console.log(arr);

// unshift - adiciona elementos no começo do array

arr.unshift(0);
arr.unshift('teste');
console.log(arr);

// shift - remove elemento do começo
arr.shift();
console.log(arr);

// como acessar o último elemento de um array ---------------------------------------------------------------------------------------------------
console.log(arr [arr.length - 1]);

// isArray - verifica se é um array
console.log(Array.isArray(arr));

// splice - pode adicionar/remover elementos pelo índice (número do índice, números de elementos que irá deletar, elemento que irá ser adicionado)
var arr2 = [1,2,3,4,5];
arr2.splice(2, 0, 999);
console.log(arr2);

arr2.splice(4, 1);
console.log(arr2);

// indexOf
console.log(arr2.indexOf(5));

// tranformar array em string usando join
var arr3 = ["o","rato", "roeu", "a", "roupa", "do", "rei", "de", "roma"];
console.log(arr3.join(" "));

// inverter um array com o método reverse
console.log(arr3.reverse());