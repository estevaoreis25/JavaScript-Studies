import {Cliente} from "./Cliente.js"
export class Conta {
        //Constructor
        constructor(saldo, novoCliente, agencia){
            this.agencia = agencia;
            this.cliente = novoCliente;
            this._saldo = saldo;
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
            return this._saldo;
        }
    
        //Others Methods
        depositar(valor) {
            if (valor > 0)
                this._saldo += valor;
        }
    
        sacar(valor) {
           taxa = 1;
           return this._sacar(taxa, valor);
        }

        _sacar(taxa, valor){
            valorSacado = taxa*valor;
            if (this._saldo >= valorSacado) {
                this._saldo -= valorSacado;
                return valorSacado;
            } else {
                console.log("Esta conta nao possui saldo o sufuciente para fazer esta operação de saque");
                return 0;
            }
        }
    
        transferir(valor, conta){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
}