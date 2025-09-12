//Exercício 4 – CRUD de Filmes
//Interface Filme com: id, titulo, ano, genero.
//Funções:
//Adicionar filme.
//Listar filmes.
//Atualizar ano de lançamento pelo id.
//Remover filme pelo id.
var cartaz = [];
//adicionar
function adicionarFilmes(filme) {
    cartaz.push(filme);
    console.log("Filmes adicionados ");
}
//listar
function listarFilmes() {
    cartaz.forEach(function (cartaz) {
        console.log("".concat(cartaz.id, " - ").concat(cartaz.titulo, " - ").concat(cartaz.ano, " - ").concat(cartaz.genero));
    });
}
//atualizar ano de lançamento por ID
function atualizarAno(ano, novoId) {
    var newYear = cartaz.find(function (year) { return year.ano === ano; }); //sempre chamar minha const, nao posso chamar minha interface
    if (newYear) {
        newYear.ano = novoId;
        console.log("Ano atualizado com sucesso");
    }
    else {
        console.log("Ano nao atualizado");
    }
}
//remover filmes
function remove(id) {
    cartaz = cartaz.filter(function (item) { return item.id !== id; });
    console.log("item removido com sucesso");
}
var filme1 = {
    id: 1,
    titulo: "Titanic",
    ano: 1997
};
var filme2 = {
    id: 2,
    titulo: "Dirty Dancing",
    ano: 1987
};
var filme3 = {
    id: 3,
    titulo: "Burlesque",
    ano: 2010
};
var filme4 = {
    id: 4,
    titulo: "Grease",
    ano: 1878
};
var filme5 = {
    id: 5,
    titulo: "Ghost",
    ano: 1990
};
var filme6 = {
    id: 6,
    titulo: "Footlose",
    ano: 1984
};
var filme7 = {
    id: 7,
    titulo: "Gran Turismo",
    ano: 2021
};

adicionarFilmes(filme1);
adicionarFilmes(filme2);
adicionarFilmes(filme3);
adicionarFilmes(filme4);
adicionarFilmes(filme5);
adicionarFilmes(filme6);
adicionarFilmes(filme7);
listarFilmes()
atualizarAno(1, 2005)

