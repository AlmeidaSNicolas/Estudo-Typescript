 // Union types permitem que uma variável possa ser de mais de um tipo

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