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