import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Diego", 397463819201);

const cliente2 = new Cliente( "Tamires", 39494847593);

const contaCorrenteDiego = new ContaCorrente(1001, cliente1, 30);

contaCorrenteDiego.depositar(90);
console.log(contaCorrenteDiego);

const contaCorrenteTamires = new ContaCorrente(1001, cliente2, 200);

contaCorrenteTamires.sacar(20);
console.log(contaCorrenteTamires);

//Transference

contaCorrenteTamires.transferir(50, contaCorrenteDiego);

console.log(`Valor atual de Tamires: ${contaCorrenteTamires.saldo}`);
console.log(`Valor atual de Diego: ${contaCorrenteDiego.saldo}`);

console.log(`Numero de contas no momento ${ContaCorrente.numeroContas}`);