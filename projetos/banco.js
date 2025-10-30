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
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
    Cliente.prototype.mostrarInformacoes = function () {
        console.log("Meu nome \u00E9 ".concat(this.nome, " e meu cpf \u00E9 ").concat(this.cpf.toUpperCase()));
    };
    return Cliente;
}());
var TipoConta;
(function (TipoConta) {
    TipoConta[TipoConta["Corrente"] = 0] = "Corrente";
    TipoConta[TipoConta["Poupanca"] = 1] = "Poupanca";
})(TipoConta || (TipoConta = {}));
var Conta = /** @class */ (function () {
    function Conta(cliente, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.cliente = cliente;
        this.saldo = saldoInicial;
    }
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saque indisponível, saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado com sucesso!"));
        }
    };
    Conta.prototype.verSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.rendimento = function () {
        this.saldo += this.saldo * 0.01; // padrão, pode ser sobrescrito
    };
    return Conta;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        var taxa = 1.5;
        if (valor + taxa > this.saldo) {
            console.log("Saque indisponível, saldo insuficiente para cobrir taxa");
        }
        else {
            this.saldo -= (valor + taxa);
            console.log("Saque de R$".concat(valor, " realizado com sucesso! Taxa: R$").concat(taxa));
        }
    };
    return ContaCorrente;
}(Conta));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.rendimento = function () {
        this.saldo += this.saldo * 0.05; // 5% de rendimento
    };
    return ContaPoupanca;
}(Conta));
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
        this.clientes = [];
    }
    Banco.prototype.criarCliente = function (nome, cpf) {
        var novoCliente = new Cliente(this.clientes.length + 1, nome, cpf);
        this.clientes.push(novoCliente);
        return novoCliente;
    };
    Banco.prototype.abrirConta = function (tipo, cliente, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        var novaConta;
        if (tipo === TipoConta.Corrente) {
            novaConta = new ContaCorrente(cliente, saldoInicial);
        }
        else {
            novaConta = new ContaPoupanca(cliente, saldoInicial);
        }
        this.contas.push(novaConta); // ✅ adicionar ao array
        console.log("Conta ".concat(TipoConta[tipo], " aberta para ").concat(cliente.nome, " com saldo inicial de R$").concat(saldoInicial));
    };
    Banco.prototype.listarContas = function () {
        this.contas.forEach(function (conta, index) {
            console.log("Conta ".concat(index + 1, ": Cliente - ").concat(conta.cliente.nome, ", Saldo - R$").concat(conta.verSaldo()));
        });
    };
    Banco.prototype.transferir = function (origemId, destinoId, valor) {
        var contaOrigem = this.contas[origemId - 1];
        var contaDestino = this.contas[destinoId - 1];
        if (!contaOrigem || !contaDestino) {
            console.log("Conta de origem ou destino não encontrada");
            return;
        }
        if (contaOrigem.verSaldo() >= valor) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            console.log("Transfer\u00EAncia de R$".concat(valor, " realizada com sucesso!"));
        }
        else {
            console.log("Saldo insuficiente para transferência");
        }
    };
    Banco.prototype.mostrarMensagem = function (mensagem) {
        if (typeof mensagem === 'string') {
            console.log("Tua mensagem é uma string:", mensagem);
        }
        else {
            console.log("Tua mensagem é um número:", mensagem);
        }
    };
    return Banco;
}());
// 🔹 Teste
var banco = new Banco();
var cliente1 = banco.criarCliente("Julia", "123.456.789-00");
var cliente2 = banco.criarCliente("Carlos", "987.654.321-00");
banco.abrirConta(TipoConta.Corrente, cliente1, 10000);
banco.abrirConta(TipoConta.Poupanca, cliente2, 5000);
banco.transferir(1, 2, 2000);
banco.listarContas();
