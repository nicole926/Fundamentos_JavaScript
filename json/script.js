// json & objetos

const objs = [
    {
    nome: "Maria",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
        profissao: "Programador",
        empresa: "Empresa x"
    },
    hobbies :["Programar", "correr", "ler"]
    },
    {
        nome: "João",
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies :["jogar", "academia"]
    }
] 

console.log(objs);
// JSON
// convertendo objeto para JSON
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})
