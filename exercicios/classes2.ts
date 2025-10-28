// 🧩 Exercício 1 — Conceito básico de protected
// Crie uma classe Pessoa com:
// um atributo protected nome: string;
// um método público apresentar() que imprime:
// "Olá, meu nome é <nome>."
// Depois crie uma classe Aluno que herda de Pessoa e:
// tenha um método público estudar() que usa o nome protegido e imprime:
// "<nome> está estudando."
// Teste criando um objeto de Aluno e chamando os dois métodos.

class Pessoa {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome}.`);
  }
}

class Aluno extends Pessoa {
  estudar(): void {
    console.log(`${this.nome} está estudando.`);
  }
}

// Teste:
const aluno = new Aluno("Nicolas");
aluno.apresentar();
aluno.estudar();


//⚙️ Exercício 2 — Modificando um atributo protegido
//Crie uma classe ContaBancaria com:
//protected saldo: number;
//um método público verSaldo() que exibe o saldo;
//um construtor que receba um saldo inicial.
//Crie uma subclasse ContaCorrente que:
//tenha um método público depositar(valor: number) que soma ao saldo;
//tenha um método público sacar(valor: number) que subtrai do saldo se houver dinheiro suficiente.
//Teste os métodos e veja se o acesso ao saldo funciona corretamente.

class ContaBank {
  protected saldo: number;

  constructor(saldoIncial:number){
    this.saldo = saldoIncial;
  }
  VerSaldo(): void {
    console.log('Saldo atual: R$' + this.saldo)
  }
}

class ContaCorrente extends ContaBank {
  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado.`);
    return;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo){
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado.`);
    }
    return;
  }

}



// Teste:
const conta = new ContaCorrente(1000);
conta.VerSaldo();
conta.depositar(500);
conta.sacar(300);
conta.VerSaldo();



//🧠 Exercício 3 — Usando classe abstrata com protected
//Crie uma classe abstrata chamada Funcionario com:
//protected nome: string;
//protected salario: number;
//um método abstrato calcularBonus(): number;
//um método público mostrarInformacoes() que exibe nome e salário.
//Depois, crie duas classes concretas:
//Gerente → bônus de 20% do salário.
//Desenvolvedor → bônus de 10% do salário.
//Crie objetos das duas subclasses e teste os métodos.

abstract class Funcionario {
  protected nome: string;
  protected salario: number;

  constructor(nome:string, salario:number){
    this.nome = nome;
    this.salario = salario;
  }
  abstract calcularBonus(): number;

  mostrarInformacoes(): void {
    console.log('Nome: ' + this.nome + ', salario: Rs$' + this.salario);
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
      return this.salario * 0.2;
  }
}

class Desenvolvedor extends Funcionario {

  calcularBonus(): number {
    return this.salario * 0.1;
  }
}

// Teste:
const gerente = new Gerente("Ana", 5000);
gerente.mostrarInformacoes();
console.log('Bônus do gerente: R$' + gerente.calcularBonus());

const Desenvolvedor1 = new Desenvolvedor("Nicolas", 4000);
Desenvolvedor1.mostrarInformacoes();
console.log('Bonus do desenvolvedor: R$' + Desenvolvedor1.calcularBonus());



//🔐 Exercício 4 — Encapsulamento com métodos protected
//Crie uma classe abstrata UsuarioSistema com:
//protected senha: string;
//um método protected validarSenha(senhaDigitada: string): boolean que retorna true se for igual à senha armazenada;
//um método abstrato login(senhaDigitada: string): void.
//Depois crie uma subclasse Administrador que:
//implementa o login usando o validarSenha;
//se for correta, exibe "Acesso permitido", senão "Acesso negado".

abstract class UsuarioSistema {
  protected senha: string;

  constructor(senha: string){
    this.senha = senha;
  }

  protected validarSenha(senhaDigitada: string): boolean {
    return this.senha === senhaDigitada;
  }

  abstract Login(senhaDigitada: string): void;
}

class Administrador extends UsuarioSistema {
  Login(senhaDigitada: string): void {
    if (this.validarSenha(senhaDigitada)){
      console.log("Acesso permitido");
    }
    else {
      console.log("Acesso negado");
    }
  }
}

const admin = new Administrador("minhaSenha123");
admin.Login("minhaSenha123"); // Acesso permitido
admin.Login("1");   // Acesso negado


//⚔️ Exercício 5 — Misturando tudo
//Crie uma classe abstrata Personagem com:
//protected nome: string;
//protected vida: number;
//um método abstrato atacar(alvo: Personagem): void;
//um método público status() que mostra nome e vida.
//Crie duas subclasses:
//Guerreiro: o ataque tira 10 de vida do alvo.
//Mago: o ataque tira 7 de vida, mas o mago recupera 3 de vida.
//Depois, simule um combate chamando os métodos em sequência:

abstract class Personagem {
  protected nome: string;
  protected vida: number;

  constructor(nome:string, vida:number){
    this.nome = nome;
    this.vida = vida;
  }
  abstract atacar(alvo: Personagem): void;
  status():void{
    console.log(`${this.nome} - Vida: ${this.vida}`);
  }
}

class Guerreiro  extends Personagem {

  constructor(nome:string, vida:number){
    super(nome, vida);
  }

  public atacar(alvo: Personagem): void {
    this.vida -= 10;
    console.log(`${this.nome} atacou causando 10 de dano.`);
  }
}

class Mago extends Personagem {
  constructor(nome:string, vida:number){
    super(nome, vida);
  }

  public atacar(alvo: Personagem): void {
    this.vida -= 7;
    this.vida += 3;
    console.log(`${this.nome} atacou causando 7 de dano e recuperando 3 de vida.`);
  }
}

// Simulação de combate:
const guerreiro = new Guerreiro("Thor", 100);
const mago = new Mago("Merlin", 80);
guerreiro.status();
mago.status();
guerreiro.atacar(mago);
mago.status();
mago.atacar(guerreiro);
guerreiro.status();
mago.status();