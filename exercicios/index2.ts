//type annotations

import { Interface } from "readline";

const filter = (value: number) => value < 0;

const numberss = [-1, -2, -3, -4, -5];

numberss.filter(filter) //a função filter espera um valor que seja do tipo number


//Crie variáveis com anotações de tipo explícitas para os seguintes valores:
//Um nome (string)
//Uma idade (number)
//Um valor booleano para "está ativo"
//Um array de números

const nomes = (value: string) => ""

const age = (value:number) => value >0

const boolean = (value:boolean) => true && false

const numbers = [1,2,3,4,5];

//2. Função tipada simples
//Escreva uma função que receba dois números e retorne a soma deles.
//Use anotações de tipo tanto nos parâmetros quanto no retorno.

const x:number = 10
const y:number = 5

function sum (x:number, y:number){
    return x + y
}
console.log(sum(x, y))

//3. Função com string
//Crie uma função que receba um nome (string) e retorne a mensagem:
//Olá, <nome>! Seja bem-vindo.

const nome = "Nicolas"

function ola(nome:string): string {
    return "ola" + nome
}
ola(nome);

//4. Objetos tipados
//Defina um tipo (ou interface) para representar uma pessoa com os campos:
//nome (string)
//idade (number)
//ativo (boolean)
//Depois, crie uma variável usuario usando esse tipo e atribua valores.

class Pessoa{
    nome:string
    age:number
    ativo:boolean

    constructor(nome:string, age:number, ativo:boolean){
        this.nome = nome
        this.age = age
        this.ativo = ativo
    }
};

const user = new Pessoa("Nicolas", 20, true);

console.log(user);

//5. Array tipado
//Crie uma função que receba um array de strings (nomes) e retorne o primeiro nome do array.

let teste = [
    ["Nicolas"],
    ["leo"],
    ["Xan"],
    ["anajulia"]
]
function primeiro(teste){
    return  teste[0] //para selecinar objetos especificos de um array sempre utilize []
};
console.log(primeiro(teste));

let array = [
    ["juliao"],
    ["pedrao"],
    ["serjao"],
    ["claudin"]
]

function ultimo(array){
    return array[3]
}
console.log(ultimo(array));

//6. Union Types
//Crie uma variável id que pode ser string ou number.
//Teste atribuindo valores dos dois tipos.

const id:string | number = 10 

//7. Função com parâmetro opcional
//Crie uma função que receba um nome e uma idade (sendo que a idade pode ser opcional).
//Se a idade for passada, retorne: "Nome: X, Idade: Y".
//Se não for passada, retorne apenas: "Nome: X".


const name:string = "Nicolas"
const idade:number | undefined = 19

function saudar(name:string, idade:number | undefined){
    if (idade === undefined){
        console.log(name)
    }else if (idade === 19){
        console.log(name + idade)
    }
}

saudar(name,idade)


//8. Enum
//Crie um enum para representar status de um pedido:
//Pendente
//Pago
//Cancelado
//Depois, crie uma função que receba um status (do tipo enum) e retorne uma mensagem correspondente.

enum pedidos{
    Pendente,
    Pago,
    Cancelado
}

let parametro: pedidos = pedidos.Pendente

function status(parametro) {
    if (parametro === pedidos.Pendente){
        console.log("Seu pedido esta sendo analisado pela equipe ")
    }else if (parametro === pedidos.Pago){
        console.log("Seu pedido ja foi pago e esta indo pra liberação ")
    }else if (parametro === pedidos.Cancelado){
        console.log("seu pedido foi cancelado, obrigado pela preferencia")
    }
}

status(parametro);




