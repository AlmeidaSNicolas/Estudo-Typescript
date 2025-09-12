//Exercício 2 – Sistema com Roles (funções de usuário)
//Crie uma interface Usuario com:
//interface Usuario {
//id: number;
//nome: string;
//senha: string;
//role: "admin" | "user";
//
//Regras:
//Criar usuários com role.
//Criar uma função acessarPainel(usuario) que:
//Se role = "admin", imprime "Acesso total".
//Se role = "user", imprime "Acesso limitado".

interface role{
    id: number;
    nome:string;
    senha:string;
    role: "admin" | "user" | "estagiario";
}

let permissoes:role [] = []

function criarUser(us:role){
    permissoes.push(us)
}

let users: role[] = [];

function adicionarUsuario(usuario: role){
    users.push(usuario)
}

function acessarPainel(usuario: role): void {
    if (usuario.role === "admin"){
        console.log("Acesso Total")
    }else if (usuario.role === "user"){
        console.log("Acesso Limitado")
    }else if (usuario.role === "estagiario"){
        console.log("Sem acesso a coisas importantes")
    }
}

function listarUsers(): void{
    console.log("Lista de users: ")
    users.forEach(users => {
        console.log(`${users.id} - ${users.nome} - ${users.senha}]`); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    })
}

const user1:role = {
    id: 1,
    nome: "Nicolas",
    senha: "10112005",
    role: "admin"    
}

const user2:role = {
    id: 2,
    nome: "Naju",
    senha:"110823",
    role: "admin"
}

const user3:role = {
    id:3,
    nome: "Tonhao",
    senha: "1904",
    role: "estagiario"
}

adicionarUsuario(user1);
adicionarUsuario(user2);
adicionarUsuario(user3);
listarUsers()
acessarPainel(user1);
acessarPainel(user3);