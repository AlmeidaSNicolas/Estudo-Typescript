//Exercício 1 – Cadastro e Login
//Crie uma interface Usuario com:
//interface Usuario {
//  id: number;
//  nome: string;
//  senha: string;
//}
//Regras:
//Criar usuários com nome e senha.
//Criar uma função login(nome, senha) que valide se o usuário existe e a senha confere.
//Retornar "Login bem-sucedido" ou "Usuário/senha inválidos".
var users = [];
function adicionarUsuario(usuario) {
    users.push(usuario);
}
function login(nome, senha) {
    var usuarioEncontrado = users.find(function (u) { return u.nome === nome && u.senha === senha; });
    if (usuarioEncontrado) {
        return "Login bem-sucedido";
    }
    else {
        return "Usuário/senha inválidos";
    }
}
function listarUsers() {
    console.log("Lista de users: ");
    users.forEach(function (users) {
        console.log("".concat(users.id, " - ").concat(users.nome, " - ").concat(users.senha, "]")); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    });
}
var usuario1 = {
    id: 1,
    nome: "Nicolas",
    senha: "Nicolas1011",
    email: "nicolas@email.com"
};
var usuario2 = {
    id: 2,
    nome: "Naju",
    senha: "110823",
    email: "naju@email.com"
};
adicionarUsuario(usuario1);
adicionarUsuario(usuario2);

console.log(login("Naju", "110823"));
