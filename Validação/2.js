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
var permissoes = [];
function criarUser(us) {
    permissoes.push(us);
}
var users = [];
function adicionarUsuario(usuario) {
    users.push(usuario);
}
function acessarPainel(usuario) {
    if (usuario.role === "admin") {
        console.log("Acesso Total");
    }
    else if (usuario.role === "user") {
        console.log("Acesso Limitado");
    }
    else if (usuario.role === "estagiario") {
        console.log("Sem acesso a coisas importantes");
    }
}
function listarUsers() {
    console.log("Lista de users: ");
    users.forEach(function (users) {
        console.log("".concat(users.id, " - ").concat(users.nome, " - ").concat(users.senha, "]")); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    });
}
var user1 = {
    id: 1,
    nome: "Nicolas",
    senha: "10112005",
    role: "admin"
};
var user2 = {
    id: 2,
    nome: "Naju",
    senha: "110823",
    role: "admin"
};
var user3 = {
    id: 3,
    nome: "Tonhao",
    senha: "1904",
    role: "estagiario"
};
adicionarUsuario(user1);
adicionarUsuario(user2);
adicionarUsuario(user3);
listarUsers();
acessarPainel(user1);
acessarPainel(user3);
