class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo;
    // Methods Get and Set
    getSaldo() {
        return this.#saldo;
    }
    //Methods
    depositar(valor) {
        if (valor > 0)
            this.#saldo += valor;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        } else {
            console.log("Esta conta nao possui saldo o sufuciente para fazer a operação de saque");
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Diego";
cliente1.cpf = 397463819201;

const cliente2 = new Cliente();
cliente2.nome = "Tamires";
cliente2.cpf = 39494847593;


const contaCorrenteDiego = new ContaCorrente();
//contaCorrenteDiego.saldo = 0;
contaCorrenteDiego.agencia = 1001;

console.log(contaCorrenteDiego.getSaldo());
contaCorrenteDiego.sacar(30);
console.log(contaCorrenteDiego.getSaldo());
contaCorrenteDiego.depositar(90);

const contaCorrenteTamires = new ContaCorrente();
//contaCorrenteTamires.saldo = 100;
contaCorrenteTamires.agencia = 1001;

console.log(contaCorrenteTamires.getSaldo());
contaCorrenteTamires.sacar(20);
console.log(contaCorrenteTamires.getSaldo());

console.log(cliente1);
console.log(cliente2);