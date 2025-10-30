// Type guard

function printValue(value: string | number){
    if (typeof value === 'string'){
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}


//exemplo com instaceof

class Dog {
   latido() {
    console.log("Au Au");
   } 
}

class Cat {
    miado() {
        console.log("Miau Miau");
    }
}

function fazerSom(animal: Dog | Cat){
    if (animal instanceof Dog){
        animal.latido();
    }
    else {
        animal.miado();
    }
}

const dog = new Dog();
fazerSom(dog);

const cat = new Cat();
fazerSom(cat);

//exemplo com in

interface Fish {
    nadar(): void;
}
interface Passaro {
    voar(): void;
}

function move(pet: Fish | Passaro){
    if('nadar' in pet){
        pet.nadar();
    }
    else {
        pet.voar();
    }
}