console.log(`Trabalhando com listas`);//Uso de marcação de string com cráse para a interpolação de variáveis
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const riodeJaneiro = `Rio de Janeiro`;


//Arrays
//Ao invés de escrevermos um por um podemos umas uma array para colcoar todas no mesmo lugar e assim poupar tempo.
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

//Para adicionar mais um destino sem ter que voltar na linha 9 podemos usar a listaDeDestinos.push
listaDeDestinos.push(`Curitiba`);//Usando o listaDeDestinos.push para adicionar uma lista de destino.

console.log("Destinos possiveis");
//console.log(salvador, saoPaulo, riodeJaneiro)
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
//Usando o comando splice que serve para remover um item de uma lista , no nosso caso um destino da nossa lista .
//Para remover um elemento usando splice , depois de usalo colocamos o numero onde se encontra o elemento , como por exemplo queremos eliminar `São Paulo` que se encontra como elemento numero 1 e depois dizemos quantos do elemento identificado  deve ser eliminado no caso 1 `São paulo`.
//Vale lembrar que quando trabalhamos com lista a contagem de elmentos sempre começar por 0 , por exemplo no nosso caso salvado é 0, Sâo paulo é 1, Riode janeiro é 2, Curitiba é 3.

console.log(listaDeDestinos[1]);
//Imprimindo um elemento especifico da lista de destinos , dentro do console.log colocamos entre [] a posição do elemento desejado.

console.log(listaDeDestinos[1],listaDeDestinos[0]);
//Imprimindo mais de um elemento desejado , observe a ordem imprimida ...

