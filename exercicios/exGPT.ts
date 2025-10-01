//Exercício 1: Parâmetro de Função Flexível
//Objetivo: Criar uma função que aceite tanto um valor de um enum predefinido quanto um number para representar um status customizado.
//Tarefa:
//Crie um enum numérico chamado CodigoStatus. Ele deve ter os membros Ok = 200, NaoEncontrado = 404 e ErroServidor = 500.
//Crie um type alias (apelido de tipo) chamado CodigoHttp, que seja uma união de CodigoStatus e number.
//Crie uma função responderRequisicao que recebe um parâmetro codigo do tipo CodigoHttp.
//Dentro da função, imprima a mensagem "Resposta enviada com o código: [codigo]".
//Chame a função três vezes: uma com CodigoStatus.Ok, uma com CodigoStatus.NaoEncontrado e uma com um número qualquer, como 301.



enum codigos{
    ok = 200,
    NaoEncontrado = 404,
    ErroServidor = 500
}

type CodigoHttp = codigos

function responderRequisicao(codigo: CodigoHttp){
    console.log(`Resposta enviada com o codigo: ${codigo}`)
}



responderRequisicao(200);
responderRequisicao(500);

//Exercício 2: Modelando Tipos de Ação
//Objetivo: Usar a combinação de enum e union type para modelar o estado de uma ação que pode ter um payload (dados associados) de tipos diferentes.
//Tarefa:
//Crie um enum de string chamado TipoAcao com os membros CARREGAR_PERFIL e DEFINIR_IDADE.
//Crie duas interfaces:
//AcaoCarregarPerfil: deve ter uma propriedade tipo com o valor literal TipoAcao.CARREGAR_PERFIL e uma propriedade payload do tipo { idUsuario: string }.
//AcaoDefinirIdade: deve ter uma propriedade tipo com o valor literal TipoAcao.DEFINIR_IDADE e uma propriedade payload do tipo number.
//Crie um type alias chamado Acao, que seja uma união de AcaoCarregarPerfil e AcaoDefinirIdade.
//Crie uma função executarAcao que recebe um parâmetro acao do tipo Acao.
//Dentro da função, use um if ou switch para verificar o acao.tipo.
//Se for CARREGAR_PERFIL, imprima "Carregando perfil do usuário: [idUsuario]".
//Se for DEFINIR_IDADE, imprima "Definindo idade para: [payload]".

// Seu código aqui
enum TipoAcao {
  CARREGAR_PERFIL = "CARREGAR_PERFIL",
  DEFINIR_IDADE = "DEFINIR_IDADE",
}

interface AcaoCarregarPerfil {
  tipo: TipoAcao.CARREGAR_PERFIL;
  payload: { idUsuario: string };
}

interface AcaoDefinirIdade {
  tipo: TipoAcao.DEFINIR_IDADE;
  payload: number;
}

type Acao = AcaoCarregarPerfil | AcaoDefinirIdade;

function executarAcao(acao: Acao) {
  switch (acao.tipo) {
    case TipoAcao.CARREGAR_PERFIL:
      console.log(`Carregando perfil do usuário: ${acao.payload.idUsuario}`);
      break;
    case TipoAcao.DEFINIR_IDADE:
      console.log(`Definindo idade para: ${acao.payload}`);
      break;
  }
}

const acao1: Acao = {
  tipo: TipoAcao.CARREGAR_PERFIL,
  payload: { idUsuario: "user-123-xyz" }
};

const acao2: Acao = {
  tipo: TipoAcao.DEFINIR_IDADE,
  payload: 30
};

executarAcao(acao1);
executarAcao(acao2);


