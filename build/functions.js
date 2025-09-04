const sum = (a, b) => {
    return a + b;
};
const value = sum(10, 100);
const log = (message) => {
    console.log(message); //funcoes void nao retornam nada
};


const euSou = {
    nome: "Nicolas",
    idade: 19
};
const euTrabalho = {
    empresa: "Google",
    cargo: "Engenheiro"
};
function apresentar(euSou, euTrabalho) {
    return `Olá, meu nome é ${euSou.nome}, tenho ${euSou.idade} anos, trabalho na empresa ${euTrabalho.empresa} como ${euTrabalho.cargo}`;
}
console.log(apresentar(euSou, euTrabalho));


export {};
