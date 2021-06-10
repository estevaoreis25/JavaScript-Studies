import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Diego", 397463819201);

const contaCorrenteDiego = new ContaCorrente(1001, cliente1, 30);

contaCorrenteDiego.depositar(90);

const contaPoupancaDiego = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteDiego);
console.log(contaPoupancaDiego);

console.log(`Numero de contas correntes no momento ${ContaCorrente.numeroContas}`);