import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
    }

    sacar (valorDaOperacao) {
        const taxa = 1.02;
        return this._sacar(valorDaOperacao, taxa);
    }
};
