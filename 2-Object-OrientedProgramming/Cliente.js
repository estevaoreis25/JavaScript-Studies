export class Cliente {
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

    autenticar(senha){
        return true;
    }
    
    cadastraSenha(senha){
        this._senha = senha;
    }
}