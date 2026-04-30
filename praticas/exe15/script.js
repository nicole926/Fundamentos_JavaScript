// 🧠 DESAFIO 1 — Botão que alterna visibilidade
// 👉 Trabalha: click, style, condição (if)
// 💡 Faça:
// Quando clicar no botão (#btn)
// Ele deve mostrar ou esconder o <h1>
// Se estiver visível → esconde
// Se estiver escondido → mostra

var btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
    var titulo = document.querySelector("#h1DoBtn");
    if(titulo.style.display === 'none'){
        titulo.style.display = 'block';
    }
    else{
        titulo.style.display = 'none';
    };
});

// 🧠 DESAFIO 2 — Efeito de destaque com mouse
// 👉 Trabalha: mouseover, mouseout, manipulação de estilo
// 💡 Faça:
// Quando passar o mouse no <h2>
// Mude:
// cor do texto
// tamanho da fonte (ex: 20px → 30px)
// Quando tirar o mouse
// Volta ao normal
// 📌 Dica: this.style.fontSize = "30px";

var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener("mouseover", function(){
    this.style.cssText = "color: purple; font-size: 30px";
});

subtitle.addEventListener("mouseout", function(){
    this.style.cssText = "color: black; font-size: 1.5em;"
});

// 🧠 DESAFIO 3 — Contador de cliques
// 👉 Trabalha: variável, click, textContent
// 💡 Faça:
// Crie uma variável contador = 0
// Cada vez que clicar no botão:
// incrementa (contador++)
// mostra o valor dentro do <p id="legenda">
// 📌 Exemplo esperado:
// Cliques: 1
// Cliques: 2
// Cliques: 3

var contador = 0;
var btnContador = document.querySelector('#contador');

btnContador.addEventListener("click", function(){
    contador++;
    var  TextoContador = document.createElement('p');
    TextoContador.textContent = "Cliques: "+contador;

    var legenda = document.querySelector('#legenda')
    legenda.appendChild(TextoContador);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(legenda);
});

// 🔥 BÔNUS (leve, mas já te faz pensar)
// 👉 Junta tudo:
// Quando passar o mouse no botão:
// aparece o <p>
// Quando clicar:
// incrementa contador
// Quando tirar o mouse:
// some o <p>

var contador2 = 0;
var btnContador2 = document.querySelector('#contador2');

btnContador2.addEventListener("click", function(){
    contador2++;
    var textoContador2 = document.createElement('p');
    textoContador2.textContent = "Cliques: "+contador2;

    var legenda2 = document.querySelector("#legenda2");
    legenda2.appendChild(textoContador2);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(legenda2);

    btnContador2.addEventListener("mouseover", function(){
        var legenda2 = document.querySelector('#legenda2');
        legenda2.style.display = "block";
    });

    btnContador2.addEventListener("mouseout", function(){
        var legenda2 = document.querySelector('#legenda2');
        legenda2.style.display = "none";
    });

});