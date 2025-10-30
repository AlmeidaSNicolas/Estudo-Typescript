//🧩 Tarefa 1 — Sistema de Login Simples (TypeScript)
//Quero que você crie um mini sistema (sem HTML, só terminal mesmo) que:
//Permita cadastrar usuários (nome, email, senha).
//Faça login comparando o email e senha.
//Use uma estrutura de dados adequada (objeto, array, etc.) pra armazenar os usuários.
//Use funções separadas pra cada ação (ex: cadastrarUsuario(), fazerLogin()).
//E quero que o código seja organizado, legível e bem comentado.
//💬 Assim que terminar, cola o código aqui pra eu revisar e te dar um feedback como se fosse tua entrega de sprint.
// Array para armazenar os usuários cadastrados
var Usuarios = [
    { nome: "João", email: "teste1@gmail.com", senha: "senha123" },
    { nome: "Maria", email: "teste2@gmail.com", senha: "senha456" },
];
// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
    // Verifica se o email já está cadastrado
    var usuarioExistente = Usuarios.find(function (u) { return u.email === email; });
    if (usuarioExistente) {
        console.log("Erro: email ja cadastrado.");
        return;
    }
    // Adiciona o novo usuário ao array
    var novoUsuario = { nome: nome, email: email, senha: senha };
    Usuarios.push(novoUsuario);
    console.log("Usuario cadastrado com sucesso!");
}
// Função para fazer login
function fazerLogin(email, senha) {
    // Procura o usuário pelo email
    var usuario = Usuarios.find(function (u) { return u.email === email; });
    if (!usuario) {
        console.log("Erro: usuario naoo encontrado.");
        return;
    }
    else if (usuario.senha !== senha) {
        console.log("Erro: senha incorreta.");
        return;
    }
    else {
        console.log("Login bem-sucedido! Bem-vindo, ".concat(usuario.nome, "."));
    }
}
//🧩 Próximo Desafio (Tarefa 2)
//Quero que você evolua esse sistema.
//📈 Tarefa 2 — Sessões de Usuário
//Quando o login for bem-sucedido, salve o usuário logado em uma variável global chamada usuarioLogado.
//Crie uma função logout() que limpe o usuário logado.
//E uma função verUsuarioLogado() que mostre quem está logado (ou diga “Nenhum usuário logado”).
//💬 Entregue o código aqui e eu vou revisar como se fosse tua segunda sprint.
// Variável global para armazenar o usuário logado
var usuarioLogado = null;
function fazerLoginAtualizado(email, senha) {
    var usuario = Usuarios.find(function (u) { return u.email === email; });
    if (!usuario || usuario.senha !== senha) {
        console.log("❌ Erro: email ou senha incorretos.");
        return false;
    }
    usuarioLogado = usuario;
    console.log("\u2705 Login bem-sucedido! Bem-vindo, ".concat(usuario.nome, "."));
    return true;
}
function logout() {
    if (usuarioLogado) {
        console.log("\uD83D\uDC4B Usu\u00E1rio ".concat(usuarioLogado.nome, " deslogado com sucesso."));
        usuarioLogado = null;
    }
    else {
        console.log("⚠️ Nenhum usuário logado no momento.");
    }
}
function verUsuarioLogado() {
    if (usuarioLogado) {
        console.log("\uD83D\uDFE2 Usu\u00E1rio logado: ".concat(usuarioLogado.nome, " (").concat(usuarioLogado.email, ")"));
    }
    else {
        console.log("🔴 Nenhum usuário está logado.");
    }
}
cadastrarUsuario("Joao", "teste3@gmail.com", "123456");
fazerLoginAtualizado("teste4@gmail.com", "123456");
verUsuarioLogado();
logout();
fazerLoginAtualizado("teste1@gmail.com", "senha123");
