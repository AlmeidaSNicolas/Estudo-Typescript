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


interface Chef {
    cook(): void;
    diploma: string;
    certificate: string;
}

interface Teacher {
    teach(): void;
    diploma: string;
}

interface Driver {
    drive(): void;
    license: string;
}

type Professional = Chef | Teacher | Driver;

function Chef(value: Professional ): value is Chef {
    return (value as Chef).cook !== undefined
}

function execute(professional: Professional){
    switch (true) {
        case Chef(professional): {
            professional.cook
            break;
        }
        case 'teach'in professional: {
            professional.diploma
            break;
        }
        case 'drive' in professional: {
            professional.drive
            break;
        }
    }
}