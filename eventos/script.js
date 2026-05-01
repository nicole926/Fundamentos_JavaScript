
// onload
window.onload = function(){
    console.log("Carregou o DOM");

    var title2 = document.querySelector("#title");
    console.log(title2);
}

console.log("carregou o js");

var title = document.querySelector("#title");
console.log(title);

// click
var btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");
    console.log(this);
    this.style.color = "red";
});

var title = document.querySelector('#title');
title.addEventListener("click", function(){
    var subtitle = document.querySelector('#subtitle');
    subtitle.style.display = "none";
});

// doble click
var subtitle = document.querySelector('#subtitle');
subtitle.addEventListener("dblclick", function(){
    console.log("Click duplo");
});

// mouseover
var title = document.querySelector('#title');
title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
})

// mouseout
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
});

// afetar outro elemento com mouseover
var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector('#legenda');
    legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function(){
    var legenda = document.querySelector('#legenda');
    legenda.classList.add("hide");
});

// keydown
document.addEventListener("keydown", function(event){
    console.log(event.key);
});