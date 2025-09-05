const returnValue = <T>(value: T): T => value;

const message = returnValue<string>('hello o krlh')

const count = returnValue<number>(5)

function getFirstValueFromArray<Type>(array: Type[]){
    return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);


//Promisses 
const returnPromisse = async (): Promise<number> => {
    return 5
}

const age = <a>(value: a): a => value;
const returnAge = age<number>(12)

const writeAge = age<string>(" Doze Anos ")

function pegarIdade<pegar>(array: pegar[]){
    return array[0]
}

const idadePegarstring = pegarIdade<string>(["Doze Anos"]);

const idadePegarnumber = pegarIdade<number>([12]);

//Classes
class GenericNumber<A> {
    zeroValue: A;
    sum: (x: A, y:A) => A;

    constructor(zeroValue: A, sum: (x: A, y: A) => A ){
        this.zeroValue = zeroValue
        this.sum =sum
    }
}
const myGenericNumber= new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y;
})


class armario<G> {
    armarioNumber: G;
    sum: (x: G, y:G) => G;

    constructor(armarioNumber: G, sum: (x: G, y: G) => G){
        this.armarioNumber = armarioNumber
        this.sum = sum
    }
}
 const myArmarioName = new armario<number>(0, (x: number, y:number) => {
        return x + y;
    })

    