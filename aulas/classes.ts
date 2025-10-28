export class Player{
    name: string;
    private health: number;
    constructor(name: string, health: number){
        this.name = name;
        this.health = 20;
    }
    public getHealth(): number{
        return this.health;
    }
}

const player = new Player('Gandolf', 100);

class Animal {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    makeSound(): void{
        console.log('${this.name} esta fazendo um som');
    }
}

const koda = new Animal("Koda", 6);
koda.makeSound();






class Dog extends Animal {
    breed: string;    

    constructor(name: string, age: number, breed: string){
    super(name, age);
    this.breed = breed;
    }
    makeSound(): void {
        console.log('${this.name} esta latindo')
    }
}

const Dog1 = new Dog("Luci", 3, "Labrador");


interface Drivable{
    start(): void;
    drive(): void;
}

class Car implements Drivable{
    start(): void {
        console.log("Carro ligado");
    }
    drive(): void {
        console.log("Carro em movimento");
    }
}


//classe abstrata (a mesma nao pode ser utilizada para criar objetos/instancias)

abstract class Shape {
 abstract area(): number;

 describe(): void {
    console.log("Esta é uma forma geométrica");
 }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * 2;
    }
    describe(): void {
        console.log("Isso é um circulo")
    }
}

const Circle1 = new Circle(5);
Circle1.area();
Circle1.describe();


//modificador de acesso PROTECTED

class Person {
    protected age: number;
    

    constructor(age: number){
        this.age = age;
        
    }
    protected getAge():number{
        return this.age;
    }
}

class Worker extends Person {
   private name: string;
   constructor(name: string, age: number){
        super (age);
        this.name = name;
   }
   public introduce(): void {
    console.log("Eu sou   + this.name +  e tenho  + ${this.getAge()} +  anos.");
   }
}

const worker1 = new Worker("Junin poka pança", 45);
worker1.introduce();

