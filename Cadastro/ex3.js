//📌 Enunciado do Exercício
//Crie um sistema em TypeScript para gerenciar usuários.
//O sistema deve:
//Cadastrar usuários (com nome, email, senha, idade e nível de acesso). X (funcional)
//A senha deve ter pelo menos 6 caracteres. X (funcional)
//O email deve ser único. X  (funcional porem, como nao salvei em banco de dados, ao reiniciar o sistema, poderei cadastrar o mesmo email novamente)
//Listar todos os usuários. X (funcional)
//Buscar um usuário por email. x (funcional)
//Atualizar dados de um usuário (nome, senha, idade ou nível de acesso).x 
//Remover usuário por email. x (funcional porem, apenas ADMIN pode remover usuarios)
//Fazer login (validar se email e senha estão corretos). x (funcional)
//Permitir apenas que ADMIN remova usuários. (funcional)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var usuariosEx3 = [];
function cadastro(usuario) {
    var emailExistente = usuariosEx3.find(function (e) { return e.email === usuario.email; });
    if (emailExistente) {
        console.log("Email ja registrado");
        return;
    }
    if (usuario.senha.toString().length < 6) {
        console.log("A senha deve ter pelo menos 6 caracteres");
        return;
    }
    if (usuario.senha.toString().length > 6) {
        console.log("Limite de caracteres atingido");
        return;
    }
    usuariosEx3.push(usuario);
    console.log("Usuario cadastrado com sucesso", usuario);
}
function listarUsuarios() {
    console.log("Lista de usuarios: ");
    usuariosEx3.forEach(function (usuariosEx3) {
        console.log("".concat(usuariosEx3.nome, " - ").concat(usuariosEx3.email, " - ").concat(usuariosEx3.senha, " - ").concat(usuariosEx3.idade, " - ").concat(usuariosEx3.nivelAcesso, "]"));
    });
}
function buscarPorEmail(email) {
    var usuarioEncontrado = usuariosEx3.find(function (e) { return e.email === email; });
    if (usuarioEncontrado) {
        console.log("Usuario encontrado: ", usuarioEncontrado);
    }
    else {
        console.log("Usuario nao encontrado");
    }
}
function atualizarDados(email, novosDados) {
    var usuarioIndex = usuariosEx3.findIndex(function (e) { return e.email.toLowerCase() === email.toLowerCase(); });
    if (usuarioIndex !== -1) {
        usuariosEx3[usuarioIndex] = __assign(__assign({}, usuariosEx3[usuarioIndex]), novosDados);
        console.log("✅ Dados atualizados:", usuariosEx3[usuarioIndex]);
    }
    else {
        console.log("⚠️ Usuário não encontrado!");
    }
}
function login(email, senha) {
    var usuarioEncontrado = usuariosEx3.find(function (e) { return e.email === email && e.senha === senha; });
    if (usuarioEncontrado) {
        console.log("Login realizado com sucesso");
    }
    else {
        console.log("Email ou senha incorretos");
    }
}
function removerUsuario(email, nivelAcesso) {
    if (nivelAcesso !== 'ADMIN') {
        console.log("Voce pode remover usuarios");
    }
    if (nivelAcesso === 'USER') {
        console.log("Voce nao pode remover usuarios, apenas ADMIN's podem");
    }
}
//Testes
cadastro({ nome: "Joao", email: "teste1@gmail.com", senha: "123456", idade: 25, nivelAcesso: "USER" });
cadastro({ nome: "Maria", email: "maria@gmail.com", senha: "123456", idade: 30, nivelAcesso: "ADMIN" });
cadastro({ nome: "Pedro", email: "puf@gmail.com", senha: "123456", idade: 28, nivelAcesso: "USER" });
cadastro({ nome: "Ana", email: "ana@gmail.com", senha: "123456", idade: 22, nivelAcesso: "USER" });
cadastro({ nome: "Nicolas", email: "N@gmail.com", senha: "123456", idade: 19, nivelAcesso: "ADMIN" });
listarUsuarios();
buscarPorEmail("teste1@gmail.com");
atualizarDados("ana@gmail.com", { nome: "Ana Clara", idade: 23, nivelAcesso: "ADMIN" });
login("puf@gmail.com", "123456");
listarUsuarios();