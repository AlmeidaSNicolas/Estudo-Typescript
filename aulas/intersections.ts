// type intersections (sendo representada pelo operador &) pegando todas as propiedades e metodos de uma interface

import { NOMEM } from "dns";

interface Robot{
    material: string;
    fuel: string;
}

interface Human{
    name: string;
    idade: number;
}

type Ciborg = Robot & Human;


/////

interface MyFatchOptions{
    printInput: boolean;
    printTime: boolean;
}

type RequestOptions = MyFatchOptions & RequestInit;

export function myFecth(input: string, options?: MyFatchOptions){
    if(options?.printInput){
        console.log("input", input);
    }
    if (options?.printTime){
        console.log("time", new Date().toLocaleDateString());
    }
    return fetch(input);
}
// fecth serve para fazer requisições para alguma URL

//intersections serve para unir types, ou seja, unir as propriedades de dois tipos em um só.
// no caso acima, RequestOptions tem todas as propriedades de MyFatchOptions e RequestInit (que é um type do próprio JS)







//exercicios do chatgpt abaixo:
type carro = {
    marca: string;
    modelo: string;
}

type motor = {
    potencia:number;
    combustivel: "gasolina"|"diesel"|"eletrico";
}

type carroComMotor = carro & motor;

const carro1: carroComMotor = {
    marca: "Honda",
    modelo: "Civic",
    potencia: 300,
    combustivel: "gasolina"
}


// ex 2

type Jogador = { nickname: string; nivel: number };
type Inventario = { itens: string[] };

type JogadorCompleto = Jogador & Inventario;

const jogador1: JogadorCompleto = {
    nickname:"Junin",
    nivel: 100,
    itens: ["poçao magica", "espada de fogo", "coração do dragao celestial"]
}



//📝 Exercícios sobre Intersections
//Exercício 1 – Mago Guerreiro
//Crie:
//Mago → { mana: number; magia: string }
//Guerreiro → { forca: number; arma: string }
//Depois, crie um tipo MagoGuerreiro que seja a interseção dos dois.
//👉 Instancie um objeto válido (um personagem híbrido).

interface Mago {
    mana: number;
    magia: string;
}

interface Guerreiro {
    forca: number;
    arma: string;
}

type MagoGuerreiro = Mago & Guerreiro;

const MagoGuerreiro1: MagoGuerreiro = {
    mana: 300,
    magia: "criador dos ceus oculares, abram-se os olhos do universo",
    forca: 1000,
    arma: "espada do vazio absoluto"
}

//Exercício 2 – Produto com desconto
//Crie:
//Produto → { nome: string; preco: number }
//Desconto → { percentual: number }
//Depois, crie um ProdutoComDesconto e instancie um objeto válido.

type PRODUTO = {
    nome: string;
    preco: number;
}

type desconto = {
    percentual: number;
}

type produtoComDesconto = PRODUTO & desconto;

const produto0:produtoComDesconto = {
    nome: "notebook",
    preco: 5000,
    percentual: 30
}

//Exercício 3 – Conflito de tipos
//Dado:
type A = { ativo: boolean };
type B = { ativo: "sim" | "não" };
type C = A & B;
//👉 O que acontece com C? Ele é válido? Por quê?

//Nao C nao é valido, pois a propriedade "ativo" tem tipos conflitantes. Em A, "ativo" é um booleano (true ou false), enquanto em B, "ativo" é uma string que pode ser "sim" ou "não". Como resultado, não há um valor que possa satisfazer ambas as definições ao mesmo tempo, tornando a interseção inválida.

//Crie:
//Usuario → { id: number; nome: string }
//Funcionario → { cargo: string; salario: number }
//Cliente → { pontosFidelidade: number }
//Depois:
//Crie um tipo FuncionarioCliente que seja a interseção de Usuario, Funcionario e Cliente.
//Instancie um objeto válido desse tipo.

type usuario = {
    id: number,
    nome: string,

}
type funcionario = {
    cargo: string,
    salario: number,
}
type cliente = {
    pontosFidelidade: number,
}
type FuncionarioCliente = usuario & funcionario & cliente;

const funcionarioCliente1: FuncionarioCliente = {
    id: 1,
    nome: "Lucas",
    cargo: "Gerente",
    salario: 2000,
    pontosFidelidade: 1500
}

//Exercício 5 – Intersection + Union
//Dado:
type Video = { tipo: "video"; duracao: number };
type Imagem = { tipo: "imagem"; resolucao: string };
type Conteudo = Video | Imagem;
type Compartilhavel = { compartilhar: () => void };
type ConteudoCompartilhavel = Conteudo & Compartilhavel;
//👉 Explique o que acontece quando criamos um objeto de ConteudoCompartilhavel.
//Ele pode ser video, imagem ou os dois?

//Um objeto desse tipo so pode ou ser video ou imagem, pois o tipo Conteudo é uma união (union) de Video e Imagem. Portanto, um objeto de ConteudoCompartilhavel deve ter as propriedades de Compartilhavel (ou seja, o método compartilhar) e as propriedades de um dos tipos em Conteudo (ou seja, as propriedades de Video ou as propriedades de Imagem). No entanto, ele não pode ter propriedades de ambos os tipos ao mesmo tempo, pois isso violaria a definição de união.

//Exercício 6 – Avançado: Reutilizando intersections
//Crie:
//Endereco → { rua: string; cidade: string }
//Contato → { telefone: string; email: string }
//Pessoa → { nome: string; idade: number }
//Agora crie um tipo PessoaCompleta que seja a interseção dos três (Endereco & Contato & Pessoa) e instancie um objeto válido.

type endereco = {
    rua: string,
    cidade: string,
}
type contato = {
    telefone: string,
    email: string,
}
type pessoa = {
    nome: string,
    idade: number,
}

type pessoaCompleta = endereco & contato & pessoa;

const pessoa1: pessoaCompleta = {
    rua:  "Rua das flores",
    cidade:  "São Paulo",
    telefone:  "123456789",
    email:  "teste1@euacerteigpt.com",
    nome:  "Ana",
    idade:  28,
}

//3. Diferença resumida
//Estilo	Exemplo	Onde usar normalmente
//camelCase	 | idadeDoUsuario |	variáveis, funções, objetos
//PascalCase |	PessoaCompleta |	classes, interfaces, types, enums