//Exercício 4 – CRUD de Filmes
//Interface Filme com: id, titulo, ano, genero.
//Funções:
//Adicionar filme.
//Listar filmes.
//Atualizar ano de lançamento pelo id.
//Remover filme pelo id.

interface Filme{
    id:number
    titulo:string
    ano:number
    genero?:string
}

let cartaz:Filme [] = [];


//adicionar
function adicionarFilmes(filme:Filme){
    cartaz.push(filme);
    console.log("Filmes adicionados ")
}

//listar
function listarFilmes(){
    cartaz.forEach(cartaz => {
        console.log(`${cartaz.id} - ${cartaz.titulo} - ${cartaz.ano} - ${cartaz.genero}`)
    })
}

//atualizar ano de lançamento por ID
function atualizarAno(id: number, novoAno: number) {
  const filme = cartaz.find(t => t.id === id);
  if (filme) {
    filme.ano = novoAno;
    console.log("Ano atualizado com sucesso!");
  } else {
    console.log("Ano não atualizado, filme não encontrado.");
  }
}

//remover filmes
function remove(id:number): void{
    cartaz = cartaz.filter(item => item.id !== id)
    console.log("item removido com sucesso")
}

const filme1:Filme = {
    id: 1,
    titulo: "Titanic",
    ano: 1997
}

const filme2:Filme = {
    id:2,
    titulo: "Dirty Dancing",
    ano: 1987
}

const filme3:Filme = {
    id:3,
    titulo: "Burlesque",
    ano: 2010
}

const filme4:Filme = {
    id:4,
    titulo: "Grease",
    ano: 1878
}

const filme5:Filme = {
    id:5,
    titulo: "Ghost",
    ano: 1990
}

const filme6:Filme = {
    id:6,
    titulo:"Footlose",
    ano: 1984
}

const filme7:Filme = {
    id:7,
    titulo:"Gran Turismo",
    ano: 2021
}


adicionarFilmes(filme1);
adicionarFilmes(filme2);
adicionarFilmes(filme3);
adicionarFilmes(filme4);
adicionarFilmes(filme5);
adicionarFilmes(filme6);
adicionarFilmes(filme7);
listarFilmes()
atualizarAno(7, 2023);
