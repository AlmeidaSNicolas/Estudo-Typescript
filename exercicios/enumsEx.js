//Exercício 1 — Enum simples
//Crie um enum chamado Cor com os valores:
//Vermelho
//Verde
//Azul
//Depois, crie uma função que receba uma cor e imprima no console uma mensagem do tipo:
//"A cor escolhida é Vermelho"
var cor;
(function (cor) {
    cor["vermelho"] = "Vermelho";
    cor["Verde"] = "Verde";
    cor["Azul"] = "Azul";
})(cor || (cor = {}));
function escolherCor(c) {
    console.log("A cor escolhida \u00E9 ".concat(c));
}
escolherCor(cor.Verde);
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
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Domingo"] = 1] = "Domingo";
    DiaSemana[DiaSemana["Segunda"] = 2] = "Segunda";
    DiaSemana[DiaSemana["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    DiaSemana[DiaSemana["Quarta"] = 4] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 5] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 6] = "Sexta";
    DiaSemana[DiaSemana["S\u00E1bado"] = 7] = "S\u00E1bado";
})(DiaSemana || (DiaSemana = {}));
function nomeDoDia(num) {
    return DiaSemana[num] || "Numero Invalido";
    if (num < 1 || num > 7) {
        return "Numero Invalido";
    }
    else if (num === 1) {
        DiaSemana.Domingo;
    }
    else if (num === 2) {
        DiaSemana.Segunda;
    }
    else if (num === 3) {
        DiaSemana.Terça;
    }
    else if (num === 4) {
        DiaSemana.Quarta;
    }
    else if (num === 5) {
        DiaSemana.Quinta;
    }
    else if (num === 6) {
        DiaSemana.Sexta;
    }
    else if (num === 7) {
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
var statusPedido;
(function (statusPedido) {
    statusPedido["PENDENTE"] = "Pendente";
    statusPedido["EM_TRANSITO"] = "Em tr\u00E2nsito";
    statusPedido["ENTREGUE"] = "Entregue";
    statusPedido["CANCELADO"] = "Cancelado";
})(statusPedido || (statusPedido = {}));
function statusDoPedido(status) {
    console.log("Seu pedido est\u00E1 ".concat(status));
}
console.log(statusDoPedido(statusPedido.EM_TRANSITO));
//Exercício 4 — Uso de enums em objetos
//Crie um enum NivelAcesso com:
//ADMIN
//USUARIO
//VISITANTE
//Depois, crie um array de usuários, cada um com nome e nivelAcesso (usando o enum).
//Crie uma função que filtre e retorne apenas os usuários com nível ADMIN.
var nivelAcesso;
(function (nivelAcesso) {
    nivelAcesso["ADMIN"] = "Admin";
    nivelAcesso["USUARIO"] = "Usuario";
    nivelAcesso["VISITANTE"] = "Visitante";
})(nivelAcesso || (nivelAcesso = {}));
var usuarios = [
    { nome: "Nicolas", nivelAcesso: nivelAcesso.ADMIN },
    { nome: "João", nivelAcesso: nivelAcesso.USUARIO },
    { nome: "Maria", nivelAcesso: nivelAcesso.VISITANTE },
    { nome: "Ana", nivelAcesso: nivelAcesso.ADMIN },
    { nome: "Pedro", nivelAcesso: nivelAcesso.ADMIN }
];
function filtrarAdmins(users) {
    return users.filter(function (user) { return user.nivelAcesso === nivelAcesso.ADMIN; });
}
console.log(filtrarAdmins(usuarios));
//Exercício 5 — Enum + Switch Case
//Crie um enum Operacao com:
//SOMA
//SUBTRACAO
//MULTIPLICACAO
//DIVISAO
//Crie uma função que receba dois números e uma operação do enum, e retorne o resultado correspondente usando switch case.
var operacao;
(function (operacao) {
    operacao["SOMA"] = "Soma";
    operacao["SUBTRACAO"] = "Subtra\u00E7\u00E3o";
    operacao["MULTIPLICACAO"] = "Multiplica\u00E7\u00E3o";
    operacao["DIVISAO"] = "Divis\u00E3o";
})(operacao || (operacao = {}));
function calcular(num1, num2, op) {
    switch (op) {
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
console.log(calcular(10, 20, operacao.MULTIPLICACAO));

//Exercício 6 — Enum e função de validaçãoCrie um enum TamanhoCamisa com:
//P
//M
//G
//GG
//Crie uma função que receba um tamanho como string e verifique se ele existe no enum, retornando true ou false.

var tamanhoCamisa;
(function (tamanhoCamisa) {
    tamanhoCamisa["P"] = "P";
    tamanhoCamisa["M"] = "M";
    tamanhoCamisa["G"] = "G";
    tamanhoCamisa["GG"] = "GG";
})(tamanhoCamisa || (tamanhoCamisa = {}));
function validarTamanho(tamanho) {
    return Object.values(tamanhoCamisa).includes(tamanho);
}
console.log(validarTamanho("M"));
