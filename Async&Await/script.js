// sintaxe
/* function primeirFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui!");
            resolve();
        }, 1000);
    })
}

async function segundaFuncao(){
    console.log("iniciou");

    await primeirFuncao();

    console.log("iniciou");
}
segundaFuncao(); */

// prático
/*
function getUser(id){
    return fetch(`https://reqres.in/api/user/id=${id}`)
    .then((res) => {
        if(!res.ok){
            throw new Error(`Erro HTTP: ${res.status}`)
        }
        return res.json()
    })
}

async function showUserName(id) {
    try{
        const user = await getUser(id)
        if(!user.data){
            console.log("Usuário não encontrado!")
            return
        }
        console.log(`O nome do usuário é: ${user.data.first_name}`)
    } catch (err){
        console.log(`Erro ${err.message}`)
    }
}
showUserName(3) */

// ou usar API que não bloqueia (melhor para estudo)

function getUser(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
}

async function showUserName(id) {
    try{
        const user = await getUser(id)
        console.log(`O nome do usuário é: ${user.name}`)
    } catch (err){
        console.log(`Erro: ${err}`)
    }
}

showUserName(3)