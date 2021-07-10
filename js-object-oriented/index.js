import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './Funcionario/SistemaAutenticacao.js';

const diretor = new Diretor('Rodrigo', '224.556.557-54', 10000);
const gerente = new Gerente('Ricardo', '545.556.557-54', 5000);
diretor.cadastrarSenha('123456');
gerente.cadastrarSenha('123');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');

console.log(diretorEstaLogado, gerenteEstaLogado);

const cliente = new Cliente('Lais', '123.556.557-66', '456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');

console.log(clienteEstaLogado);
