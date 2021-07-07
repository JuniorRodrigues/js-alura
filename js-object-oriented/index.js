import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', '111.222.333-45');
const conta1 = new ContaCorrente(104, cliente1);

conta1.deposito(200);
conta1.saque(100);

const contaPoupanca = new ContaPoupanca(132, cliente1, 50);

console.log(contaPoupanca);
console.log(conta1);
