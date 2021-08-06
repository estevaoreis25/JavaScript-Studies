export class Funcionario {
    constructor(nome, cpf, salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;

        this._bonificacao = 1;
        this._senha;

    }

    autenticar(senha){
        return this._senha == senha;
    }
    cadastraSenha(senha){
        this._senha = senha;
    }

}