//type annotations
const filter = (value) => value < 0;
const numberss = [-1, -2, -3, -4, -5];
numberss.filter(filter); //a função filter espera um valor que seja do tipo number
//Crie variáveis com anotações de tipo explícitas para os seguintes valores:
//Um nome (string)
//Uma idade (number)
//Um valor booleano para "está ativo"
//Um array de números
const nomes = (value) => "";
const age = (value) => value > 0;
const boolean = (value) => true && false;
const numbers = [1, 2, 3, 4, 5];
//2. Função tipada simples
//Escreva uma função que receba dois números e retorne a soma deles.
//Use anotações de tipo tanto nos parâmetros quanto no retorno.
const x = 10;
const y = 5;
function sum(x, y) {
    return x + y;
}
console.log(sum(x, y));
//3. Função com string
//Crie uma função que receba um nome (string) e retorne a mensagem:
//Olá, <nome>! Seja bem-vindo.
const nome = "Nicolas";
function ola(nome) {
    return "ola" + nome;
}
ola(nome);
//4. Objetos tipados
//Defina um tipo (ou interface) para representar uma pessoa com os campos:
//nome (string)
//idade (number)
//ativo (boolean)
//Depois, crie uma variável usuario usando esse tipo e atribua valores.
class Pessoa {
    nome;
    age;
    ativo;
    constructor(nome, age, ativo) {
        this.nome = nome;
        this.age = age;
        this.ativo = ativo;
    }
}
;
const user = new Pessoa("Nicolas", 20, true);
console.log(user);
//5. Array tipado
//Crie uma função que receba um array de strings (nomes) e retorne o primeiro nome do array.
let teste = [
    ["Nicolas"],
    ["leo"],
    ["Xan"],
    ["anajulia"]
];
function primeiro(teste) {
    return teste[0]
}
;
console.log(primeiro(teste));
export {};
