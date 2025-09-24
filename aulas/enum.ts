//Enum
//maneira de defirnir conjuntos enumerados

enum Direction {
    North = 1,
    South = 2,
    East = 3,
    West = 4
}

const pos = {
    x: 100,
    y: 230,
    direction: Direction.South
}

//Enum's com valores sendo STRINGS

enum ClothingSize {
    ExtraSmall = "Bem pequeno",
    Small = "Pequeno",
    Medium = "Medio",    //caso eu altere o valor de um enum, a segurança da tipagem do typescript mantera o valor correto Exemplo: eu mudei de M para Medio, e a tipagem se manteve intacta
    Large = "Ggrande",
    ExtraLarge = "Muito Grande"
}

const camisa = {
    color: "blue",
    size: ClothingSize.Medium
}

//

enum StatusAprovação {
    Aprovado = "1",
    Pendente = "2",
    Rejeitado = "3"
}
const PessoaAprovada = {
    nome: "Ana",
    status: StatusAprovação.Aprovado
}


// Enums tornam o código mais legível e fácil de manter, especialmente quando lidamos com um conjunto fixo de valores relacionados. Eles ajudam a evitar erros de digitação e fornecem uma maneira clara de representar estados ou categorias dentro do código.
// deixa o codigo mais facil de se dar manuntenção e mais legivel
// ajuda a evitar erros de digitação
// fornece uma maneira clara de representar estados ou categorias dentro do código
