//Exercício 2 – CRUD de Produtos
//Crie uma interface Produto com: id, nome, preco.
//Funções:
//Adicionar produto.
//Listar produtos.
//Atualizar preço pelo id.
//Remover produto pelo id.
var Produtos = [];
//adicionar produtos
function adicionarProduto(produto) {
    Produtos.push(produto);
    console.log("produtos adicionados");
}
//listar produtos
function listarProdutos() {
    console.log("Lista de Produtos: ");
    Produtos.forEach(function (Produtos) {
        console.log("".concat(Produtos.id, " - ").concat(Produtos.nome, " - ").concat(Produtos.preco, "]")); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    });
}
//atualizar preço pelo ID
function atualizarPeloId(id, novoPreco) {
    var produto = Produtos.find(function (item) { return item.id === id; }); //notações como item(sao meramente casuais e rotineiras), isso se da com o fato de que se eu for utilizar um nome muito longo meu codigo ficaria muito poluido.
    if (produto) {
        produto.preco = novoPreco;
        console.log("Preço atualizado com sucesso!");
    }
    else {
        console.log("preço nao atualizado.");
    }
}
//remover produto pelo ID
function removeById(id) {
    Produtos = Produtos.filter(function (item) { return item.id !== id; });
    console.log("Produto removido");
}
var produto1 = {
    id: 1,
    nome: "Brigadeiro",
    preco: 15.00
};
var produto2 = {
    id: 2,
    nome: "Blush",
    preco: 7.00
};
var produto3 = {
    id: 3,
    nome: "Bebe reborn",
    preco: 50.00
};

adicionarProduto(produto1);
adicionarProduto(produto2);
adicionarProduto(produto3);
atualizarPeloId(3, 1000);
removeById(3);
listarProdutos();

