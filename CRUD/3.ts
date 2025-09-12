//Exercício 2 – CRUD de Produtos
//Crie uma interface Produto com: id, nome, preco.
//Funções:
//Adicionar produto.
//Listar produtos.
//Atualizar preço pelo id.
//Remover produto pelo id.

interface produto{
    id: number
    nome:string
    preco:number
}


let Produtos:produto[] = []; 


//adicionar produtos
function adicionarProduto(produto:produto){
    Produtos.push(produto);
    console.log("produtos adicionados")
}

//listar produtos
function listarProdutos(): void{
    console.log("Lista de Produtos: ")
    Produtos.forEach(Produtos => {
        console.log(`${Produtos.id} - ${Produtos.nome} - ${Produtos.preco}]`); //essa aparenta ser a sintaxe padrao para realizar uma lista com CRUD
    })
}

//atualizar preço pelo ID
function atualizarPeloId(id: number, novoPreco: number){
    const produto = Produtos.find(item => item.id === id); //notações como item(sao meramente casuais e rotineiras), isso se da com o fato de que se eu for utilizar um nome muito longo meu codigo ficaria muito poluido.
    if (produto){
        produto.preco = novoPreco;
        console.log("Preço atualizado com sucesso!");
    }else{
        console.log("preço nao atualizado.")
    }
}

//remover produto pelo ID
function removeById(id:number): void {
    Produtos = Produtos.filter(item => item.id !== id);
    console.log("Produto removido");
}
const produto1: produto = {
    id: 1,
    nome: "Brigadeiro",
    preco: 15.00
};
const produto2: produto = {
    id: 2,
    nome: "Blush",
    preco: 7.00
}

const produto3: produto = {
    id: 3,
    nome: "Bebe reborn",
    preco: 50.00
}


adicionarProduto(produto1);
adicionarProduto(produto2);
adicionarProduto(produto3);
listarProdutos();
atualizarPeloId(3,100);




