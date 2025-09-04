//tipos basicos 

const name: string = "Matheus"; //nao definir explicitamente a variavel nao abala TANTO, ja que o proprio TS ja infere o tipo
const agr: number = 30;
const isAdmin: boolean = true;

//tipos especiais
const n: null = null;
const u: undefined = undefined;

//para criar suas listas apos definir o tipo como: boolean, string ou number, utilize a marcação []

const numbers: number[] = [1, 2, 3, 4, 5]; // [] sinaliza pro TS que isso é uma lista de numbers
const booleans: boolean[] = [true, false, true]; // [] sinaliza pro TS que isso é uma lista de booleans 
const names: string[] = ["Matheus", "João", "Maria"];  // [] sinaliza pro TS que isso é uma lista de strings


//tipo TUPPLE tupla

const pessoa:[string, number] = ["Lucas", 30] // a tupla faz com que o codigo veja que o primeiro elemento é uma string e o segundo um number
const eletro:[boolean, string] = [true, "TV"] //a tupla geralmente é usada para garantir algum tipo de ordem de dados

// LISTA DE TUPLAS
const peoples: [string, number][]= [
    ['matheus', 15],
    ['joão', 25],
    ['maria', 35],
    ['pedro', 19]
]


//intersections
const productId: string | number | boolean = false

//enum 
enum Direction {
    up = 1,
    down = 2,
}

const direction = Direction.up;


//type assertions    
const productName:any = "Boné"


let itemtId = productName as string //dizendo pro TS que o productName é uma string

let itemId = <string>productName //dizendo pro TS que o productName é uma string


console.log(Direction)

