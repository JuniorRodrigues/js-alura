export class Conta {
    constructor (agencia, cliente, saldoInicial) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo   = saldoInicial;
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
        console.log('Bytebank -', nomeDaOperacao);
        console.log('Cliente:', this.cliente.nome);
        console.log(`Saldo anterior R$ ${saldoAnterior}`),
        console.log(nomeDaOperacao, 'R$', valor);
        console.log(`Saldo atual R$ ${this._saldo}`);
        console.log('------------------------\n');
    };

    sacar (valorDaOperacao) {
        let taxa = 1;
        return this._sacar(valorDaOperacao, taxa);
    };

    _sacar (valorDaOperacao, taxa) {
        if (this._saldo < valorDaOperacao) return 0;

        const saldoAnterior = this._saldo;
        this._saldo -= valorDaOperacao * taxa;

        this.exibirExtrato('Saque', saldoAnterior, valorDaOperacao);

        return valorDaOperacao;
    };

    depositar (valorDaOperacao) {
        if (valorDaOperacao <= 100) return;

        const saldoAnterior = this._saldo;
        this._saldo += valorDaOperacao;

        this.exibirExtrato('Depósito', saldoAnterior, valorDaOperacao);

        return valorDaOperacao;
    };

    transferir (conta, valorDaOperacao) {
        const valorDeTransferencia = this.sacar(valorDaOperacao);
        conta.depositar(valorDeTransferencia);
    }
};
