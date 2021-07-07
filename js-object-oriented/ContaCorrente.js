import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo  = 0;
        ContaCorrente.numeroDeContas++;
    }

    set cliente (novoCliente) {
        if (!(novoCliente instanceof Cliente)) return;

        this._cliente = novoCliente;
    }

    get cliente () {
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    exibirExtrato (nomeDaOperacao, saldoAnterior, valor) {
        // console.log('Bytebank -', nomeDaOperacao);
        console.log('Cliente:', this.cliente.nome);
        console.log(`Saldo anterior R$ ${saldoAnterior}`),
        // console.log(nomeDaOperacao, 'R$', valor);
        console.log(`Saldo atual R$ ${this._saldo}`);
        console.log('------------------------\n');
    };

    saque (valorDaOperacao) {
        if (this._saldo < valorDaOperacao) return;

        const saldoAnterior = this._saldo;
        this._saldo -= valorDaOperacao;

        this.exibirExtrato('Saque', saldoAnterior, valorDaOperacao);

        return valorDaOperacao;
    };

    deposito (valorDaOperacao) {
        if (valorDaOperacao <= 100) return;

        const saldoAnterior = this._saldo;
        this._saldo += valorDaOperacao;

        this.exibirExtrato('Depósito', saldoAnterior, valorDaOperacao);

        return valorDaOperacao;
    };

    transferencia (conta, valorDaOperacao) {
        const valorDeTransferencia = this.saque(valorDaOperacao);
        conta.deposito(valorDeTransferencia);
    }
};
