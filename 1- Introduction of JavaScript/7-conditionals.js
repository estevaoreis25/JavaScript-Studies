console.log("Working with Condutionals");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const acompanhada = true;

console.log("Minha listas de destinos: ", listaDeDestinos);

listaDeDestinos.push(`Brasilia`); // adding some items in the list

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1) // remove some item
} else if (acompanhada) {
    console.log("Menor de idade acompanhado");
    listaDeDestinos.splice(1, 1) // remove some item
} else {
    console.log("Menor de idade não acompanhao. Não posso vender");
}

const temPassagemComprada = true;
console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Voce não pode embarcar");
}