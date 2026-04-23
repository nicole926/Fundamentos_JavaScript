// tag

var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

// id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

// class
var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);

// querrySelectorAll

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

//querySelector
var itensQuery3 = document.querySelector('#lista');
console.log(itensQuery3);

var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');
console.log(span);

// 1º sempre selecione o elemento
var title = document.querySelector('#title');
console.log(title);

// innerHTML
title.innerHTML = "testando o texto alterado!";

// textContent -> mais utilizado e recomendado
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

subtitle.textContent = "Testendo o textContent";

//createElement
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do parágrafo");
novoParagrafo.appendChild(texto);

var body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById('container');
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span!"));
console.log(el);
container.appendChild(el);

// remover elementos (removeChild)

var container = document.querySelector("#container");
var p = document.querySelector("#container p");
container.removeChild(p);

// remover o elemento em sí

var subtitle = document.querySelector(".subtitle");
subtitle.remove();

// Adicionar elemento

var el = document.createElement('div');

el.classList = "div-criada";
console.log(el);

// inserindo elemento filho (appendChild)
var container = document.querySelector("#container");
container.appendChild(el);

// insertBefore - insere antes
var el2 = document.createElement("div");
el2.classList.add("div-before");
el2.textContent = "Sou a div antes 😎";
var referencia = document.querySelector("#container span");
container.insertBefore(el2, referencia);

// Trocando elementos com o DOM
var el = document.createElement('h3');
el.classList = "testando classe";
var texto = document.createTextNode("Este é o texto do h3");
el.appendChild(texto);
console.log(el);

// selecionar o elemento que quero trocar
var title = document.querySelector('#title');
console.log(title);
var pai = title.parentNode; // seleciona o pai do elemento automaticamente
pai.replaceChild(el, title);

// setAttribute
var title2 = document.querySelector("#title");
title2.setAttribute("class", "testando-atributo");
console.log(title);

var btn = document.querySelector("#btn");
btn.setAttribute("disabled", "disabled");

var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "Titulo-2");

// remover atributo

var lista = document.querySelector("#lista");
lista.removeAttribute("id");