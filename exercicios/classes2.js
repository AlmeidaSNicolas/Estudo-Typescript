// 🧩 Exercício 1 — Conceito básico de protected
// Crie uma classe Pessoa com:
// um atributo protected nome: string;
// um método público apresentar() que imprime:
// "Olá, meu nome é <nome>."
// Depois crie uma classe Aluno que herda de Pessoa e:
// tenha um método público estudar() que usa o nome protegido e imprime:
// "<nome> está estudando."
// Teste criando um objeto de Aluno e chamando os dois métodos.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, "."));
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.estudar = function () {
        console.log("".concat(this.nome, " est\u00E1 estudando."));
    };
    return Aluno;
}(Pessoa));
// Teste:
var aluno = new Aluno("Nicolas");
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
var ContaBank = /** @class */ (function () {
    function ContaBank(saldoIncial) {
        this.saldo = saldoIncial;
    }
    ContaBank.prototype.VerSaldo = function () {
        console.log('Saldo atual: R$' + this.saldo);
    };
    return ContaBank;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado."));
        return;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado."));
        }
        return;
    };
    return ContaCorrente;
}(ContaBank));
// Teste:
var conta = new ContaCorrente(1000);
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
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.mostrarInformacoes = function () {
        console.log('Nome: ' + this.nome + ', salario: Rs$' + this.salario);
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.salario * 0.2;
    };
    return Gerente;
}(Funcionario));
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desenvolvedor.prototype.calcularBonus = function () {
        return this.salario * 0.1;
    };
    return Desenvolvedor;
}(Funcionario));
// Teste:
var gerente = new Gerente("Ana", 5000);
gerente.mostrarInformacoes();
console.log('Bônus do gerente: R$' + gerente.calcularBonus());
var Desenvolvedor1 = new Desenvolvedor("Nicolas", 4000);
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
var UsuarioSistema = /** @class */ (function () {
    function UsuarioSistema(senha) {
        this.senha = senha;
    }
    UsuarioSistema.prototype.validarSenha = function (senhaDigitada) {
        return this.senha === senhaDigitada;
    };
    return UsuarioSistema;
}());
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    function Administrador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Administrador.prototype.Login = function (senhaDigitada) {
        if (this.validarSenha(senhaDigitada)) {
            console.log("Acesso permitido");
        }
        else {
            console.log("Acesso negado");
        }
    };
    return Administrador;
}(UsuarioSistema));
var admin = new Administrador("minhaSenha123");
admin.Login("minhaSenha123"); // Acesso permitido
admin.Login("1"); // Acesso negado
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
var Personagem = /** @class */ (function () {
    function Personagem(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    Personagem.prototype.status = function () {
        console.log("".concat(this.nome, " - Vida: ").concat(this.vida));
    };
    return Personagem;
}());
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome, vida) {
        return _super.call(this, nome, vida) || this;
    }
    Guerreiro.prototype.atacar = function (alvo) {
        this.vida -= 10;
        console.log("".concat(this.nome, " atacou causando 10 de dano."));
    };
    return Guerreiro;
}(Personagem));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome, vida) {
        return _super.call(this, nome, vida) || this;
    }
    Mago.prototype.atacar = function (alvo) {
        this.vida -= 7;
        this.vida += 3;
        console.log("".concat(this.nome, " atacou causando 7 de dano e recuperando 3 de vida."));
    };
    return Mago;
}(Personagem));
// Simulação de combate:
var guerreiro = new Guerreiro("Thor", 100);
var mago = new Mago("Merlin", 80);
guerreiro.status();
mago.status();
guerreiro.atacar(mago);
mago.status();
mago.atacar(guerreiro);
guerreiro.status();
mago.status();
//Exercicios dia 29 
//🧩 Exercício 1 — Chamando o construtor da classe pai
//Crie uma classe Pessoa com:
//um construtor que receba nome e idade;
//um método apresentar() que exiba algo como "Olá, meu nome é João e tenho 25 anos.".
//Depois, crie uma subclasse Aluno que:
//receba também um curso no construtor;
//chame o construtor da classe pai com super(nome, idade);
//sobrescreva o método apresentar() para incluir o curso também.
//Desafio extra: Crie um objeto da classe Aluno e chame apresentar().
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa2.prototype.apresentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.name, " e tenho ").concat(this.age, " anos."));
    };
    return Pessoa2;
}());
var Aluno2 = /** @class */ (function (_super) {
    __extends(Aluno2, _super);
    function Aluno2(name, age, curso) {
        var _this = _super.call(this, name, age) || this;
        _this.curso = curso;
        return _this;
    }
    Aluno2.prototype.apresentar = function () {
        console.log("Ola, meu nome \u00E9 ".concat(this.name, ", tenho ").concat(this.age, " anos e curso ").concat(this.curso, "."));
    };
    return Aluno2;
}(Pessoa2));
var aluno2 = new Aluno2("Nicolas", 19, "Engenharia de Software");
aluno2.apresentar();
//⚙️ Exercício 2 — Chamando métodos da classe pai
//Crie uma classe Funcionario com:
//propriedades nome e salario;
//método mostrarInformacoes() que exibe nome e salário.
//Crie uma subclasse Gerente que:
//tenha um método mostrarInformacoes() que chame o método da classe pai (super.mostrarInformacoes());
//e depois exiba também "Cargo: Gerente".
//Desafio extra: Faça o mesmo com uma subclasse Desenvolvedor.
var Funcionario2 = /** @class */ (function () {
    function Funcionario2(nome, salario) {
        this.nome = nome;
        this.salario = salario.toFixed(2);
    }
    Funcionario2.prototype.mostrarInformacoes = function () {
        console.log("Nome: ".concat(this.nome, ", Sal\u00E1rio: R$").concat(this.salario));
    };
    return Funcionario2;
}());
var gerente2 = /** @class */ (function (_super) {
    __extends(gerente2, _super);
    function gerente2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gerente2.prototype.mostrarInformacoes = function () {
        (_super.prototype.mostrarInformacoes.call(this));
        console.log("Cargo: Gerente");
    };
    return gerente2;
}(Funcionario2));
var dev = /** @class */ (function (_super) {
    __extends(dev, _super);
    function dev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dev.prototype.monstrarInformacoes = function () {
        (_super.prototype.mostrarInformacoes.call(this));
        console.log("Cargo: Desenvolvedor");
    };
    return dev;
}(Funcionario2));
var G1 = new gerente2("Julia", 5000);
var d1 = new dev("Nicolas", 4000);
G1.mostrarInformacoes();
d1.monstrarInformacoes();
// Crie uma classe Animal com:
//um método falar() que exiba "O animal faz um som.".
//Crie uma subclasse Cachorro que:
//sobrescreva o método falar(), mas antes de imprimir "O cachorro late!", chame super.falar().
//👉 Resultado esperado:
//O animal faz um som.
//O cachorro late!
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.falar = function () {
        console.log("O animal faz um som.");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.falar = function () {
        (_super.prototype.falar.call(this));
        console.log("O cachorro late!");
    };
    return Cachorro;
}(Animal));
var dg1 = new Cachorro();
dg1.falar();
var dg2 = new Animal();
dg2.falar();
