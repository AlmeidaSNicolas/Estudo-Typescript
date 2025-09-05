const sum = (a: number, b:number) => {
    return a + b
}

const value = sum(10, 100)


const log = (message: string) => {
    console.log(message)  //funcoes void nao retornam nada
}

const euSou = {
    nome: "Nicolas",
    idade: 19
}

const euTrabalho = {
    empresa: "Google",
    cargo: "Engenheiro"
}

function apresentar(euSou: {nome: string, idade: number}, euTrabalho: {empresa: string, cargo: string}) {
    return `Olá, meu nome é ${euSou.nome}, tenho ${euSou.idade} anos, trabalho na empresa ${euTrabalho.empresa} como ${euTrabalho.cargo}`
}

interface MathFunc {
    (x:number, y: number): number;
}

const sub: MathFunc = (x: number, y: number): number => x - y;
