console.log("Working with Lists");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Minha listas de destinos: ", listaDeDestinos);

listaDeDestinos.push(`Brasilia`); // adding some items in the list

console.log("Minha lista atualizada", listaDeDestinos);
listaDeDestinos.splice(1, 1); //Delete items from item number 1 and delete just one item
console.log("Minha lista atualizada", listaDeDestinos);
console.log(listaDeDestinos[1]);
