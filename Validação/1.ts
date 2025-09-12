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

interface usuario{
    id: number
    nome: string
    senha: string
    email: string
}

let users: usuario [] = []

function adicionarUsuario(usuario: usuario){
    users.push(usuario)
}

function login(nome: string, senha: string): string {
  const usuarioEncontrado = users.find(
    (u) => u.nome === nome && u.senha === senha
  );

  if (usuarioEncontrado) {
    return "Login bem-sucedido";
  } else {
    return "Usuário/senha inválidos";
  }
}

function listarUsers(): void{
    console.log("Lista de users: ")
    users.forEach(users => {
        console.log(`${users.id} - ${users.nome} - ${users.senha}]`); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    })
}



const usuario1: usuario = {
    id: 1,
    nome: "Nicolas",
    senha: "Nicolas1011",
    email: "nicolas@email.com"
}   

const usuario2: usuario = {
    id: 2,
    nome: "Naju",
    senha: "110823",
    email: "naju@email.com"
}

adicionarUsuario(usuario1);
adicionarUsuario(usuario2);
listarUsers();


console.log(login("Joao", "123")); //usuario nao encontrado

console.log(login("Naju", "110823")) //login bem sucedido