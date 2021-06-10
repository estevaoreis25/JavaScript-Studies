import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalarios.js";

const cliente1 = new Cliente("Diego", 397463819201);

const contaCorrenteDiego = new ContaCorrente(1001, cliente1, 30);

contaCorrenteDiego.depositar(90);

const contaPoupancaDiego = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioDiego = new ContaSalario(cliente1, 20021);

console.log(contaCorrenteDiego);
console.log(contaPoupancaDiego);
console.log(contaSalarioDiego);

console.log(`Numero de contas correntes no momento ${ContaCorrente.numeroContas}`);
