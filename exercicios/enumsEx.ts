//Exercício 1 — Enum simples
//Crie um enum chamado Cor com os valores:
//Vermelho
//Verde
//Azul
//Depois, crie uma função que receba uma cor e imprima no console uma mensagem do tipo:
//"A cor escolhida é Vermelho"

enum cor {
    vermelho = "Vermelho",
    Verde = "Verde",
    Azul = "Azul"
}
function escolherCor(c: cor){
    console.log(`A cor escolhida é ${c}`);
}
escolherCor(cor.Verde)


//Exercício 2 — Enum numérico
//Crie um enum chamado DiaSemana com valores numéricos, começando de 1:
//Domingo = 1
//Segunda
//Terça
//Quarta
//Quinta
//Sexta
//Sábado
//Crie uma função que receba um número e retorne o nome do dia correspondente usando o enum.

enum DiaSemana {
    Domingo = 1,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}

function nomeDoDia(num: number): string {
    return DiaSemana[num] || "Numero Invalido";

    if (num <1 || num > 7){
        return "Numero Invalido";
    }else if (num === 1){
        DiaSemana.Domingo;
    }else if (num === 2){
        DiaSemana.Segunda;
    }else if (num === 3){
        DiaSemana.Terça;
    }else if (num === 4){
        DiaSemana.Quarta;
    }else if (num === 5){
        DiaSemana.Quinta;
    }else if (num === 6){
        DiaSemana.Sexta;
    }else if (num === 7){
        DiaSemana.Sábado;
    }
}

console.log(nomeDoDia(5));

//Exercício 3 — Enum com valores string
//Crie um enum chamado StatusPedido com valores string:
//PENDENTE = "Pendente"
//EM_TRANSITO = "Em trânsito"
//ENTREGUE = "Entregue"
//CANCELADO = "Cancelado"
//Crie uma função que receba um status e retorne uma mensagem apropriada, por exemplo:
//"Seu pedido está Em trânsito"

enum statusPedido{
    PENDENTE = "Pendente",
    EM_TRANSITO = "Em trânsito",
    ENTREGUE = "Entregue",
    CANCELADO = "Cancelado"
}

function statusDoPedido(status: statusPedido){
    console.log(`Seu pedido está ${status}`);
}

console.log(statusDoPedido(statusPedido.EM_TRANSITO));


//Exercício 4 — Uso de enums em objetos
//Crie um enum NivelAcesso com:
//ADMIN
//USUARIO
//VISITANTE
//Depois, crie um array de usuários, cada um com nome e nivelAcesso (usando o enum).
//Crie uma função que filtre e retorne apenas os usuários com nível ADMIN.

enum nivelAcesso{
    ADMIN = "Admin",
    USUARIO = "Usuario",
    VISITANTE = "Visitante"
}

type usuario = {
    nome: string,
    nivelAcesso: nivelAcesso
}

const usuarios: usuario[] = [
    {nome: "Nicolas", nivelAcesso: nivelAcesso.ADMIN},
    {nome: "João", nivelAcesso: nivelAcesso.USUARIO},
    {nome: "Maria", nivelAcesso: nivelAcesso.VISITANTE},
    {nome: "Ana", nivelAcesso: nivelAcesso.ADMIN},
    {nome: "Pedro", nivelAcesso: nivelAcesso.ADMIN}
]

function filtrarAdmins(users: usuario[]): usuario[]{
    return users.filter(user => user.nivelAcesso === nivelAcesso.ADMIN);
}

console.log(filtrarAdmins(usuarios));

//Exercício 5 — Enum + Switch Case
//Crie um enum Operacao com:
//SOMA
//SUBTRACAO
//MULTIPLICACAO
//DIVISAO
//Crie uma função que receba dois números e uma operação do enum, e retorne o resultado correspondente usando switch case.

enum operacao {
    SOMA = "Soma",
    SUBTRACAO = "Subtração",
    MULTIPLICACAO = "Multiplicação",
    DIVISAO = "Divisão"
}

function calcular(num1: number, num2:number, op: operacao):number | string{
    switch(op){
        case operacao.SOMA:
            return num1 + num2;
        case operacao.SUBTRACAO:
            return num1 - num2;
        case operacao.MULTIPLICACAO:
            return num1 * num2;
        case operacao.DIVISAO:
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

console.log(calcular(10, 20, operacao.MULTIPLICACAO))

//Exercício 6 — Enum e função de validaçãoCrie um enum TamanhoCamisa com:
//P
//M
//G
//GG
//Crie uma função que receba um tamanho como string e verifique se ele existe no enum, retornando true ou false.

enum tamanhoCamisa{
    P = "P",
    M = "M",
    G = "G",
    GG = "GG"
}
function validarTamanho(tamanho: string): boolean{
    return Object.values(tamanhoCamisa).includes(tamanho as tamanhoCamisa);
}
console.log(validarTamanho("XG"));