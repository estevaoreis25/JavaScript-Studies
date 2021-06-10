import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
const cliente1 = new Cliente();
cliente1.nome = "Diego";
cliente1.cpf = 397463819201;

const cliente2 = new Cliente();
cliente2.nome = "Tamires";
cliente2.cpf = 39494847593;

//Diego
const contaCorrenteDiego = new ContaCorrente();
contaCorrenteDiego.agencia = 1001;

console.log(contaCorrenteDiego.getSaldo());
contaCorrenteDiego.sacar(30);
contaCorrenteDiego.depositar(90);
console.log(contaCorrenteDiego.getSaldo());

contaCorrenteDiego.cliente = cliente1;
console.log(contaCorrenteDiego);

// Tamires
const contaCorrenteTamires = new ContaCorrente();
contaCorrenteTamires.agencia = 1001;
contaCorrenteTamires.depositar(200);

console.log(contaCorrenteTamires.getSaldo());
contaCorrenteTamires.sacar(20);
console.log(contaCorrenteTamires.getSaldo());

contaCorrenteTamires.cliente = cliente2;
console.log(contaCorrenteTamires);


//Transference

contaCorrenteTamires.transferir(50, contaCorrenteDiego);

console.log(`Valor atual de Tamires: ${contaCorrenteTamires.getSaldo()}`);
console.log(`Valor atual de Diego: ${contaCorrenteDiego.getSaldo()}`);