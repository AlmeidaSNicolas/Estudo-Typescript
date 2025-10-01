 // Union types permitem que uma variável possa ser de mais de um tipo

import { readFile } from "fs";

 type primitivos = string | number | boolean;

 export function mains(value: primitivos){

//essa sintaxe pode ser utilizada para nos permitir utilizar metodos propios de cada tipo, mesmo nosso value sendo do tipo primitivo: string | number | boolean
    if(typeof value === "string"){ 
        
        return; //apos colocar esse return apos o codigo verificar se value = string, caso eu tente declarar um value fora desse if, o mesmo so podera ser do tipo: boolean ou number
    }
    if (typeof value === "number"){
        return; //apos colocar esse return apos o codigo verificar se value = number, caso eu tente declarar um value fora desse if, o mesmo so podera ser do tipo: boolean 
    }

    if (typeof value === "boolean"){
        return;  
    }
  
        value;
 }


//Exercício 1 – Calculadora Simples
//Crie uma função que recebe dois valores que podem ser number ou string.
//Se ambos forem números, retorne a soma.
//Se ambos forem strings, retorne a concatenação.
//Se forem tipos diferentes, retorne "Tipos incompatíveis".

type valores = string | number;

const a: valores = 5;
const b: valores = 10;

export function calculadoraSimples(a: valores, b: valores):valores | undefined{
    if(typeof a=== "number" && typeof b === "number"){
        return a + b;
    }
    if(typeof a === "string" && typeof b === "string"){
        return a.concat(b);
    }
    if(typeof a !== typeof b){
        console.log("Tipos incompatíveis");
        return;
    }
}
//refinamento de tipos

//union types é quando unimos diferentes tipos em um só, ao usar o operador | (ele vai poder ser ou um ou outro)

enum TraficLightType{
    Yellow,
    red,
    green
}
interface YellowColor{
    type: TraficLightType.Yellow;
    wait(): void;
}
interface redColor{
    type: TraficLightType.red;
    stop() :void;        //ao tipar suas interfaces com um type: e definilo como o nome do seu enum + . + o nome do valor do enum, vc consegue fazer um refinamento de tipos
}
interface greenColor{
    type: TraficLightType.green;
    drive(): void;
}

type TraficLight = YellowColor | redColor | greenColor;

const luzDeTrafico: TraficLight = {
    type: TraficLightType.red,
    stop() {
        console.log("Parar");
    }
}



///teste unitario ns


enum coisas {
    martelo,
    furadeira,
    tabua
}

interface marteloSom{
    type: coisas.martelo;
    martelar(): void,
}

interface furadeiraAcao{
    type: coisas.furadeira,
    furar(): void,
}

interface tabuaEco{
    type: coisas.tabua,
    eco(): void
}

type estoque = marteloSom | furadeiraAcao | tabuaEco 

const estoque1: estoque = {
    type: coisas.martelo,
    martelar() {
        console.log("martelada")
    },

}

const estoque2: estoque = {
    type: coisas.furadeira,
    furar() {
        console.log("furou")
    },
}

enum itens {
    pote,
    garrafa,
    geladeira
}

interface poteCheio{
    type: itens.pote
    cheio(): void
}

interface garrafaCheia{
    type: itens.garrafa
    vazia(): void
}

interface geladeiraVazia{
    type: itens.geladeira
    cheia(): void
}


//unit tipos literais dentro de um UNION TYPE

type ImageSize =  8 | 16 | 32 | 64 | 128 | 256| 512 | 1024 | 2048

interface Image{
    name: string;
    size: ImageSize
}

const image: Image = {
    name: "van gogh",
    size: 2048
}

type sattus = "notFound" | 404 | "ok" | 200 | "forbien" | 404

function sendStatus(Status: sattus){
   
}

sendStatus(404)

//funções recursivas JS/ts (é uma função que chama a si mesma dentro de si mesma)



type findItemPredicate = (number) | ( (value:string, index:number) => boolean )

function findItem(array: string[], predicate:number){
    if (typeof predicate === "number"){
        return array[predicate];
    }
    return array.find(predicate)
}

findItem(["julia", "luan", "nicolas"], 2)



type acharItem = (number) | ((value: string, index:number) => boolean) //esse tipe diz que, ao procurar o item ele vai receber primeiro: uma string depois um number e me retornar um boolean

function acharItem(array: string[], predicate:number){
    if (typeof predicate === "number"){
        return array[predicate];
    }
    return array.find(predicate)
}

findItem(["nicolas", "2", "julio"], 2)

//Declare uma variável chamada id que possa aceitar tanto string quanto number.
//Atribua um número a ela.
//Em seguida, atribua uma string a ela.
//Tente atribuir um valor booleano (true ou false) e observe o erro que o TypeScript irá apontar.

let id: number | string //aparentemente os :(dois pontos) servem para dizer que uma variavel pode ser "isso" ou "aquilo"

id = 12
id = "Nicolas"

//Crie uma função chamada imprimirId que recebe um parâmetro id.
//O tipo desse parâmetro deve ser uma união de string e number.
//Dentro da função, apenas imprima o valor do id no console com uma mensagem, por exemplo: "Meu ID é: [id]".
//Chame a função com um número e depois com uma string para testar.

function ImprimirId(id: string | number ){
    console.log("meu nome é: ${id} " )
}
ImprimirId (1)
ImprimirId ("Nicolas")

//Crie uma função chamada processarInput que aceita um parâmetro input do tipo string | number.
//Dentro da função:
//Se o input for do tipo number, multiplique-o por 2 e retorne o resultado.
//Se o input for do tipo string, converta-o para maiúsculas (ex: input.toUpperCase()) e retorne o resultado.
//Use um if/else com o operador typeof para verificar o tipo do input antes de realizar a operação.

function ProcessarInput (input: string | number){
    if (typeof input ===  "number")
        return  input * 2
    if (typeof input === "string")  // a validação com typeof é popularmente chamada de typeguard
        return input.toUpperCase()
}

console.log(ProcessarInput(10))
console.log(ProcessarInput("Nicolas"))


//Declare uma variável chamada meuArray que seja um array.
//Os elementos deste array podem ser do tipo number ou boolean.
//Inicialize o array com alguns números e booleanos misturados.
//Crie uma função chamada filtrarNumeros que recebe um array do tipo (number | boolean)[] e retorna um novo array contendo apenas os números.

let meuArray: (number | boolean)[] = [1, true, 3, false, 5, 50, false, true, 100]

function filtrarNumeros(arr: (number | boolean)[]): number[] {
  return arr.filter(item => typeof item === 'number') as number[];
}


//Crie um tipo (type alias) chamado StatusPedido.
//Este tipo deve ser uma união de três strings literais: "aprovado", "reprovado" e "pendente".
//Crie uma função chamada verificarStatus que recebe um parâmetro do tipo StatusPedido.
//A função deve imprimir uma mensagem diferente para cada status.
//Tente chamar a função com uma das três strings válidas e depois com uma string inválida (ex: "cancelado") para ver o erro.

type statusPedido = "aprovado" | "reprovado" | "pendente"

function VerificarStatus(status: statusPedido){
    if (status === "aprovado"){
        console.log("Pedido aprovado ")
    }
    else if (status === "reprovado"){
        console.log("Seu pedido foi reprovado")
    }
    else{
        console.log("seu pedido esta pendente ")
    }
}


//Crie duas interfaces: Usuario e Admin.
//Usuario deve ter as propriedades id (number) e nome (string).
//Admin deve ter as mesmas propriedades de Usuario e mais uma: nivelAcesso (number).
//Crie um tipo Pessoa que seja uma união de Usuario e Admin.
//Crie uma função chamada imprimirBoasVindas que recebe um parâmetro do tipo Pessoa.
//Dentro da função:
//Imprima uma mensagem geral como "Bem-vindo(a), [nome da pessoa]!".
//Se a pessoa for um Admin, imprima também uma mensagem extra como "Nível de Acesso: [nível de acesso]".
//Para verificar se a pessoa é um Admin, use o operador in. Ex: if ('nivelAcesso' in pessoa).

interface Usuario {
    id: number,
    nome: string
}

interface Admin {
    id: number,
    nome: string
    nivelAcesso: number,
}

type Trabalhador = Usuario | Admin

function Mensagem(pessoa: Trabalhador){
    console.log("Bem vindo(a) ${nome}")

    if ('nivelAcesso' in pessoa) {
    console.log(`Nível de Acesso: ${pessoa.nivelAcesso}`);
  }
}

const usuer1: Usuario = { id: 1, nome: "Ana"};
const adminUser: Admin = { id: 2, nome: "Carlos", nivelAcesso: 5 };

console.log(usuer1)
console.log('---');
Mensagem(adminUser);