import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    static numeroDeContas = 0;

    constructor (cliente) {
        super(100, cliente, 0);
    }

    sacar (valorDaOperacao) {
        const taxa = 1.01;
        return this._sacar(valorDaOperacao, taxa);
    };
};
