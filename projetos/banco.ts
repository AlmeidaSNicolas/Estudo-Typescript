class Cliente {
  id: number;
  nome: string;
  cpf: string;

  constructor(id: number, nome: string, cpf: string){
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
  }

  mostrarInformacoes(): void {
    console.log(`Meu nome é ${this.nome} e meu cpf é ${this.cpf.toUpperCase()}`);
  }
}

enum TipoConta {
  Corrente,
  Poupanca
}

interface Transacionavel {
  depositar(valor: number): void
  sacar(valor: number): void;
  verSaldo(): number;
}

abstract class Conta implements Transacionavel {
  protected saldo: number;
  public cliente: Cliente;

  constructor(cliente: Cliente, saldoInicial: number = 0) {
    this.cliente = cliente;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if(valor > this.saldo){
      console.log("Saque indisponível, saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    }
  }

  verSaldo(): number {
    return this.saldo;
  }

  rendimento(): void {
    this.saldo += this.saldo * 0.01; // padrão, pode ser sobrescrito
  }
}

class ContaCorrente extends Conta {
  sacar(valor: number): void {
    const taxa = 1.5;
    if(valor + taxa > this.saldo){
      console.log("Saque indisponível, saldo insuficiente para cobrir taxa");
    } else {
      this.saldo -= (valor + taxa);
      console.log(`Saque de R$${valor} realizado com sucesso! Taxa: R$${taxa}`);
    }
  }
}

class ContaPoupanca extends Conta {
  rendimento(): void {
    this.saldo += this.saldo * 0.05; // 5% de rendimento
  }
}

class Banco {
  private contas: Conta[] = [];
  private clientes: Cliente[] = [];

  criarCliente(nome:string, cpf:string): Cliente {
    const novoCliente = new Cliente(this.clientes.length + 1, nome, cpf);
    this.clientes.push(novoCliente);
    return novoCliente;
  }

  abrirConta(tipo: TipoConta, cliente: Cliente, saldoInicial: number = 0): void {
    let novaConta: Conta;

    if(tipo === TipoConta.Corrente){
      novaConta = new ContaCorrente(cliente, saldoInicial);
    } else {
      novaConta = new ContaPoupanca(cliente, saldoInicial);
    }

    this.contas.push(novaConta); // ✅ adicionar ao array
    console.log(`Conta ${TipoConta[tipo]} aberta para ${cliente.nome} com saldo inicial de R$${saldoInicial}`);
  }

  listarContas(): void {
    this.contas.forEach((conta, index) => {
      console.log(`Conta ${index + 1}: Cliente - ${conta.cliente.nome}, Saldo - R$${conta.verSaldo()}`);
    });
  }

  transferir(origemId: number, destinoId: number, valor: number): void {
    const contaOrigem = this.contas[origemId - 1];
    const contaDestino = this.contas[destinoId - 1];

    if(!contaOrigem || !contaDestino){
      console.log("Conta de origem ou destino não encontrada");
      return;
    }

    if(contaOrigem.verSaldo() >= valor){
      contaOrigem.sacar(valor);
      contaDestino.depositar(valor);
      console.log(`Transferência de R$${valor} realizada com sucesso!`);
    } else {
      console.log("Saldo insuficiente para transferência");
    }
  }

  mostrarMensagem(mensagem: string | number): void {
    if (typeof mensagem === 'string') {
      console.log("Tua mensagem é uma string:", mensagem);
    } else {
      console.log("Tua mensagem é um número:", mensagem);
    }
  }
}

// 🔹 Teste
const banco = new Banco();
const cliente1 = banco.criarCliente("Julia", "123.456.789-00");
const cliente2 = banco.criarCliente("Carlos", "987.654.321-00");

banco.abrirConta(TipoConta.Corrente, cliente1, 10000);
banco.abrirConta(TipoConta.Poupanca, cliente2, 5000);

banco.transferir(1, 2, 2000);
banco.listarContas();
