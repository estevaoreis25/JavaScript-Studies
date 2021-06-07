console.log("Working with Looping");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const acompanhada = true;
let temPassagemComprada = true;
const destino = "Rio de Janeiro";

console.log("\nMinha listas de destinos: ", listaDeDestinos);

listaDeDestinos.push(`Brasilia`); // adding some items in the list


const podeComprar = idadeComprador >= 18 || acompanhada == true;

let contador = 0;

let existe = false;
console.log(listaDeDestinos.length);
while (contador < listaDeDestinos.length) {
    console.log(listaDeDestinos[contador]);
    console.log("Valor do contador", contador);
    if (destino == listaDeDestinos[contador]) {
        console.log(destino, listaDeDestinos[contador]);
        existe = true;
        break;
    }
    contador++;
}

if (existe) {
    console.log("Local escolhido", listaDeDestinos.splice(contador, 1));
    console.log("Locais restantes", listaDeDestinos);
}