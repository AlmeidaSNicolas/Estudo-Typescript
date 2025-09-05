interface IPerson{
    id: number;
    name: string; //nao conseguimos definir propiedades pretected em interfaces
    
    sayMyName():string
}

class Person implements IPerson {
    readonly id: number;
    name: string;
    private age: number;

    constructor(id: number, name: string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name
    }
}

const N = new Person(1, "Nicolas", 22)

class Enploy extends Person {
    constructor(id: number, name: string, age:number){
        super(id, name, age)
    }

}


