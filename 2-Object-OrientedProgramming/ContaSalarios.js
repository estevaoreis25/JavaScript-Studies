import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente, agencia){
        super(0, cliente, agencia);
    }
    sacar(valor){
        const taxa = 1.005; 
        return this._sacar(taxa, valor);
    }
}