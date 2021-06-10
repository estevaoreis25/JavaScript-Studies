import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    constructor (cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroContas += 1;
    }
    // superscript method 
    sacar(valor) {
        taxa = 1.05;
        return this._sacar(taxa, valor);
    }
}