import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', '111.222.333-45');
const cliente2 = new Cliente('Alice', '222.333.444-56');

const conta1 = new ContaCorrente(104, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

conta1.deposito(200);
conta1.saque(100);

conta1.transferencia(conta2, 100);

console.log(ContaCorrente.numeroDeContas);
