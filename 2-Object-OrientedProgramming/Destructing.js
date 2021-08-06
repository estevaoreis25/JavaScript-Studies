const numeroPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numeroPares, ...numerosImpares];
console.log(numeros);

const [num1, num2, ...outrosNumeros]= [1, 2, 3, 4, 5, 6];
console.log(num1, num2, outrosNumeros);

const [nome1 = "Paty"] = []; // default values

console.log(nome1);

const pessoa = {
    nome: "Dani",
    idade: 28,
    altura: 1.56
}

const pessoaComTelefone = 
    {...pessoa, 
    telefone: 1234456
}

console.log(pessoa, pessoaComTelefone);

const {nome} = pessoa;

console.log(nome);

function imprimeDados({nome, idade}){
    console.log(nome, idade);
}

imprimeDados(pessoa);