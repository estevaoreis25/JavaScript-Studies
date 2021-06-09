export class ContaCorrente {
    agencia;
    #saldo = 0;
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