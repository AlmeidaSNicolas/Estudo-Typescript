var usuarios = [];
//adicionar usuarios
function adicionarUsuarios(usuario) {
    usuarios.push(usuario);
}
var user1 = {
    id: 1,
    nome: "Nicolas",
    email: "teste@com"
};
var user2 = {
    id: 2,
    nome: "Ana julia",
    email: "teste2@gmail.com"
};
var user3 = {
    id: 3,
    nome: "Roberto",
    email: "robertao@teste.com"
};
//Listar USUARIOS
function listarUsuarios() {
    console.log("Lista de tarefas:");
    usuarios.forEach(function (usuarios) {
        console.log("".concat(usuarios.id, " - ").concat(usuarios.nome, " - ").concat(usuarios.email, "]"));
    });
}
//ATUALIZAR EMAIL DE usuarios pelo ID
function atualizarEmail(id, novoEmail) {
    var usuario = usuarios.find(function (u) { return u.id === id; });
    if (usuario) {
        usuario.email = novoEmail;
        console.log("Email atualizado com sucesso!");
    }
    else {
        console.log("Usuário não encontrado.");
    }
}
//REMOVER UM USUARIO PELO ID
function removerUserById(id) {
    usuarios = usuarios.filter(function (u) { return u.id !== id; });
    console.log("Usuario removido");
}


atualizarEmail(2, "funciona?@gmail.com");
