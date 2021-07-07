import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor (agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
        ContaCorrente.numeroDeContas++;
    }

    sacar (valorDaOperacao) {
        const taxa = 1.1;
        return this._sacar(valorDaOperacao, taxa);
    };
};
