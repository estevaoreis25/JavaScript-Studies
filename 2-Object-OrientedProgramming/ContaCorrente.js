export class ContaCorrente {
    //Public Attributes
    agencia;
    cliente;

    //Private Attributes
    #saldo = 0;

    // Methods Get and Set
    getSaldo() {
        return this.#saldo;
    }

    //Others Methods
    depositar(valor) {
        if (valor > 0)
            this.#saldo += valor;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        } else {
            console.log("Esta conta nao possui saldo o sufuciente para fazer a operação de saque");
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        console.log(valorSacado);
        conta.depositar(valorSacado);
    }
}