//Narrowing reinamento de tipos 

function printValue(value: string | number | boolean) {
  if (typeof value === 'string' || typeof value === 'number'){
    console.log("numero ou string" , 1)
    return;
  }
  value
}

class Dog{
  latir() {
    console.log("au")
  }
}
class gato{
  miar(){
    console.log("miau")
  }
}


function makeASound(animal: Dog | gato){
  if (animal instanceof Dog){
    animal.latir
    console.log("auau")
    return
  }
  animal.miar
}

const dog = new Dog();
makeASound(dog);

//Narrowing em interfaces 

interface fish{
  swin: () => void;
}
interface bird{
  voar: () => void;
}

function move(animal: fish | bird) {
  if ("swin" in animal){
    animal.swin
    return;
  }
  animal.voar
}

function main(value: string[] | Date){
  if("push" in value){
    value;
    return;
  }
  
}
function handles(value: string | null){
  if (value === null) return;
    value.toUpperCase()

}

//testes unitarios do segundo melhor dev do mundo

interface Human {
  nome: string;
  age: number;
  living(): void;
}

interface Alien {
  nome: string;
  naveEspacial(): void;
}

interface Post{
  author: string[]
  Date: Date;
}

function handle (value: Human | Alien | Post){
  if ("living" in value) {
    value;
    return;
  } else if ("naveEspacial" in value){
    value;
    return;
  } else {
    value;
    return
  }
}
