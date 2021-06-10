import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //Public Attributes
    static numeroContas =0;
    agencia;
    _cliente;

    //Private Attributes
    #saldo = 0;

    //Constructor
    constructor(agencia, novoCliente, saldo){
        this.agencia = agencia;
        this.cliente = novoCliente;
        this.depositar(saldo);
        ContaCorrente.numeroContas +=1;
    }

    // Methods Get and Set
    get cliente(){
        return this._cliente;
    }
    set cliente(valor){
        if(valor instanceof Cliente){
            this._cliente = valor;
        }
    }
    get saldo() {
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