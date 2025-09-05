const returnValue = (value) => value;
const message = returnValue('hello o krlh');
const count = returnValue(5);
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
//Promisses 
const returnPromisse = async () => {
    return 5;
};
const age = (value) => value;
const returnAge = age(12);
const writeAge = age(" Doze Anos ");
function pegarIdade(array) {
    return array[0];
}
const idadePegarstring = pegarIdade(["Doze Anos"]);
const idadePegarnumber = pegarIdade([12]);
export {};
