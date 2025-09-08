// a) Crie uma variável "nome" que só pode armazenar uma string
// b) Crie uma variável "idade" que só pode armazenar um número
// c) Crie uma variável "ativo" que só pode armazenar um boolean


const nome:string = "Nicolas";

const idade:number = 20

const ativo:boolean = true

// a) Crie uma função "soma" que receba dois números e retorne a soma deles
// b) Crie uma função "boasVindas" que receba um nome (string) e retorne: "Olá, <nome>!"

const soma = (b: number, c:number) =>{
    return b + c
};

const boasVindas = (nome: string = "Nicolas" ) => {
    return console.log("ola" + nome)
}


// a) Crie um array de números chamado "notas"
// b) Crie uma função que receba esse array e retorne a média das notas

const notas: number[] = [10, 7, 8, 6];
const calcularMedia = (notas: number[]): number => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};
console.log(calcularMedia(notas));

// a) Crie uma interface "Usuario" com nome (string), idade (number) e ativo (boolean)
// b) Crie uma variável do tipo "Usuario" e preencha com seus dados
// c) Crie uma função que receba um "Usuario" e retorne uma frase:
//    "O usuário <nome> tem <idade> anos e está ativo? <ativo>"
interface User {
    nome: string;
    idade: number;
    ativo: boolean;
}
const apresentarUsuario = (usuario: User): string => {
    return `O usuário ${usuario.nome} tem ${usuario.idade} anos e está ativo? ${usuario.ativo}`;
};
// Exemplo de uso
const nicolas: User = {
    nome: "Nicolas",
    idade: 20,
    ativo: true
};
console.log(apresentarUsuario(nicolas));


// a) Crie uma função que receba um parâmetro que pode ser "string" ou "number"
// b) Se for número, retorne o dobro
// c) Se for string, retorne em maiúsculas
const teste = (valor: string | number): string | number => {
    if (typeof valor === "number"){
        return valor * 2;
    }else {
        {
            return valor.toUpperCase();
        }
    }
}


// a) Crie uma classe "Pessoa" com propriedades: nome (string) e idade (number)
// b) Adicione um método "apresentar" que retorne:
//    "Olá, meu nome é <nome> e eu tenho <idade> anos."
// c) Crie um objeto dessa classe e chame o método
class Pessoa {
    nome: string;
    idade: number;  //codigo corrigdo pelo gepeto(gpt)

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

const noova = new Pessoa("Nicolas", 19);

console.log(noova.apresentar());

// a) Crie um enum "Cores" com: VERMELHO, VERDE e AZUL
// b) Crie uma função que receba uma cor do enum e retorne uma frase:
//    "Você escolheu a cor <cor>"

