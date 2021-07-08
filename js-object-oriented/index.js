import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';

const cliente1 = new Cliente('Ricardo', '111.222.333-45');
const contaCorrente = new ContaCorrente(104, cliente1);
const contaPoupanca = new ContaPoupanca(132, cliente1, 50);
const contaSalario =  new ContaSalario(cliente1);
// contaCorrente.depositar(500)
// contaCorrente.sacar(100);

// contaPoupanca.sacar(10);

contaSalario.depositar(200);
contaSalario.sacar(100);

console.log(contaSalario);
