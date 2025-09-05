//tipos basicos 
const name = "Matheus"; //nao definir explicitamente a variavel nao abala TANTO, ja que o proprio TS ja infere o tipo
const agr = 30;
const isAdmin = true;
//tipos especiais
const n = null;
const u = undefined;
//para criar suas listas apos definir o tipo como: boolean, string ou number, utilize a marcação []
const numbers = [1, 2, 3, 4, 5]; // [] sinaliza pro TS que isso é uma lista de numbers
const booleans = [true, false, true]; // [] sinaliza pro TS que isso é uma lista de booleans 
const names = ["Matheus", "João", "Maria"]; // [] sinaliza pro TS que isso é uma lista de strings
//tipo TUPPLE tupla
const pessoa = ["Lucas", 30]; // a tupla faz com que o codigo veja que o primeiro elemento é uma string e o segundo um number
const eletro = [true, "TV"]; //a tupla geralmente é usada para garantir algum tipo de ordem de dados
// LISTA DE TUPLAS
const peoples = [
    ['matheus', 15],
    ['joão', 25],
    ['maria', 35],
    ['pedro', 19]
];
//intersections
const productId = false;
//enum 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
//type assertions    
const productName = "Boné";
let itemtId = productName; //dizendo pro TS que o productName é uma string
let itemId = productName; //dizendo pro TS que o productName é uma string
console.log(Direction);
export {};


