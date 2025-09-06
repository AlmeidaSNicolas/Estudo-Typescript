// a) Crie uma variável "nome" que só pode armazenar uma string
// b) Crie uma variável "idade" que só pode armazenar um número
// c) Crie uma variável "ativo" que só pode armazenar um boolean
const nome = "Nicolas";
const idade = 20;
const ativo = true;
// a) Crie uma função "soma" que receba dois números e retorne a soma deles
// b) Crie uma função "boasVindas" que receba um nome (string) e retorne: "Olá, <nome>!"
const soma = (b, c) => {
    return b + c;
};
const boasVindas = (nome = "Nicolas") => {
    return console.log("ola" + nome);
};
// a) Crie um array de números chamado "notas"
// b) Crie uma função que receba esse array e retorne a média das notas
const notas = [10, 7, 8, 6];
const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};
console.log(calcularMedia(notas));



// a) Crie uma interface "Usuario" com nome (string), idade (number) e ativo (boolean)
// b) Crie uma variável do tipo "Usuario" e preencha com seus dados
// c) Crie uma função que receba um "Usuario" e retorne uma frase:
//    "O usuário <nome> tem <idade> anos e está ativo? <ativo>"
const apresentarUsuario = (usuario) => {
    return `O usuário ${usuario.nome} tem ${usuario.idade} anos e está ativo? ${usuario.ativo}`;
};
// Exemplo de uso
const nicolas = {
    nome: "Nicolas",
    idade: 20,
    ativo: true
};
console.log(apresentarUsuario(nicolas));
export {};
