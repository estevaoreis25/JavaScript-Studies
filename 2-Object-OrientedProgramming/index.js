import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
const cliente1 = new Cliente();
cliente1.nome = "Diego";
cliente1.cpf = 397463819201;

const cliente2 = new Cliente();
cliente2.nome = "Tamires";
cliente2.cpf = 39494847593;


const contaCorrenteDiego = new ContaCorrente();
contaCorrenteDiego.agencia = 1001;

console.log(contaCorrenteDiego.getSaldo());
contaCorrenteDiego.sacar(30);
contaCorrenteDiego.depositar(90);
console.log(contaCorrenteDiego.getSaldo());

const contaCorrenteTamires = new ContaCorrente();
contaCorrenteTamires.agencia = 1001;
contaCorrenteTamires.depositar(200);

console.log(contaCorrenteTamires.getSaldo());
contaCorrenteTamires.sacar(20);
console.log(contaCorrenteTamires.getSaldo());

console.log(cliente1);
console.log(cliente2);