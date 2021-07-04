import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = '111.222.333-45';

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = '222.333.444-56';

const conta1 = new ContaCorrente();
conta1.agencia = 104;
conta1.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = cliente2;

conta1.deposito(200);
conta1.saque(100);

conta1.transferencia(conta2, 100);

console.log(conta1);
console.log(conta2);
