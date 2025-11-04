//🧩 Exercício — Cadastro de Produtos Simples
//Crie um programa que permita cadastrar e listar produtos.
//⚙️ Regras:
//Crie uma classe Produto com as propriedades:
//id: number
//nome: string
//preco: number
//Crie uma lista (array) para armazenar os produtos.
//Crie funções para:
//adicionarProduto(produto: Produto) → adiciona um novo produto ao array.
//listarProdutos() → mostra todos os produtos cadastrados no console.
//Adicione pelo menos 3 produtos de exemplo e mostre-os no console.

class Produto {
  id: number;
  nome: string;
  preco: number;

  constructor( id:number, nome:string, preco:number ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

let produtos: Produto[] = [];

function adicionarProduto(produto: Produto) {
  produtos.push(produto);
}

function listarProdutos(){
  console.log("Lista de produtos");
  produtos.forEach(produto => {
    console.log(`${produto.id} - ${produto.nome} - R$${produto.preco.toFixed(2)}`);
  });
}

adicionarProduto(new Produto(0, "sprite", 40));
adicionarProduto(new Produto(1, "Caneta", 2.5));
adicionarProduto(new Produto(2, "Caderno", 15.0));
adicionarProduto(new Produto(3, "Mochila", 120.99));

listarProdutos();