interface usuario{
    id:number
    nome:string
    email:string //deixa o segmento email como "nao necessario"
}

let usuarios: usuario[] = [];

//adicionar usuarios
function adicionarUsuarios(usuario: usuario) {
    usuarios.push(usuario);
}

const user1: usuario = {
    id: 1,
    nome: "Nicolas",
    email: "teste@com"
};

const user2: usuario = {
    id: 2,
    nome: "Ana julia"   ,
    email: "teste2@gmail.com"
}

const user3: usuario = {
    id: 3,
    nome: "Roberto",
    email: "robertao@teste.com"
}

//Listar USUARIOS
function listarUsuarios(): void {
    console.log("Lista de tarefas:");
    usuarios.forEach(usuarios => {
        console.log(`${usuarios.id} - ${usuarios.nome} - ${usuarios.email}]`);
    })
}

//ATUALIZAR EMAIL DE usuarios pelo ID
function atualizarEmail(id: number, novoEmail: string) {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        usuario.email = novoEmail;
        console.log("Email atualizado com sucesso!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

//REMOVER UM USUARIO PELO ID
function removerUserById(id: number): void {
    usuarios = usuarios.filter(u => u.id !== id);
    console.log("Usuario removido");
}

adicionarUsuarios(user1);
adicionarUsuarios(user2);
adicionarUsuarios(user3);

listarUsuarios()

