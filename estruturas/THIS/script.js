var teste = 5;

console.log(this.teste);
console.log(teste);

// alert('olá');
// this.alert('olá 2');

let pessoa = {
    nome: "Maria",
    idade: 20,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    dizerNome: function(){
        console.log("O meu nome é "+this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. '+this.nome;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
console.log(pessoa.idade);

var sdc= pessoa.saudacao();
console.log("Olá "+sdc);