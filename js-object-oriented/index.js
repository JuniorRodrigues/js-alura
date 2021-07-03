import { CheckingAccount } from './CheckingAccount.js';
import { Customer } from './Customer.js';

const cliente1 = new Customer();
cliente1.name = 'Ricardo';
cliente1.cpf = '111.222.333-45';

const cliente2 = new Customer();
cliente2.name = 'Alice';
cliente2.cpf = '222.333.444-56';

console.log(cliente1);
console.log(cliente2);

const account1 = new CheckingAccount();
account1.branch = 104;
account1.costumer = cliente1;

const account2 = new CheckingAccount();
account2.branch = 102;
account2.costumer = cliente2;

account1.deposit(200);
account1.withdraw(100);

account1.transfer(account2, 100);

console.log(account1);
console.log(account2);
