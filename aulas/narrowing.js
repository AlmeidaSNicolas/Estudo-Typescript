//Narrowing reinamento de tipos 
function printValue(value) {
    if (typeof value === 'string' || typeof value === 'number') {
        console.log("numero ou string", 1);
        return;
    }
    value;
}
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.latir = function () {
        console.log("au");
    };
    return Dog;
}());
var gato = /** @class */ (function () {
    function gato() {
    }
    gato.prototype.miar = function () {
        console.log("miau");
    };
    return gato;
}());
function makeASound(animal) {
    if (animal instanceof Dog) {
        animal.latir;
        console.log("auau");
    }
    else if (animal instanceof gato) {
        animal.miar;
    }
}
var dog = new Dog();
makeASound(dog);
