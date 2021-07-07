import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', '111.222.333-45');
const contaCorrente = new ContaCorrente(104, cliente1, 0);
const contaPoupanca = new ContaPoupanca(132, cliente1, 50);

contaCorrente.depositar(500)
contaCorrente.sacar(100);

contaPoupanca.sacar(10);

console.log(contaCorrente);
console.log(contaPoupanca);
