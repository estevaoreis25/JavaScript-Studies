import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalarios.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./Funcionarios/SistemaAutencacao.js"

// Contas 

const cliente1 = new Cliente("Diego", 397463819201);

const contaCorrenteDiego = new ContaCorrente(1001, cliente1, 30);

contaCorrenteDiego.depositar(90);

const contaPoupancaDiego = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioDiego = new ContaSalario(cliente1, 20021);

/* console.log(contaCorrenteDiego);
console.log(contaPoupancaDiego);
console.log(contaSalarioDiego); 
console.log(`Numero de contas correntes no momento ${ContaCorrente.numeroContas}`); */

// **********************************************************************************

// Funcionarios
const diretor = new Diretor("Rodrigo", 12334567902, 10000);
const gerente = new Gerente("Ricardo", 12345678910, 5000);
const cliente = new Cliente("Marcos", 80293847163);

diretor.cadastraSenha("123456");
gerente.cadastraSenha("4321");
cliente.cadastraSenha("3236");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "3236");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
