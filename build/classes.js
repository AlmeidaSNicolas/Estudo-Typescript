class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const N = new Person(1, "Nicolas", 22);
class Enploy extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
export {};
