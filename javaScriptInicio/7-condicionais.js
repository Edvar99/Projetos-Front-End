console.log(`Trabalhando com condicionais`);//Uso de marcação de string com cráse para a interpolação de variáveis
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

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis");
//console.log(salvador, saoPaulo, riodeJaneiro)
console.log(listaDeDestinos);
// Uso do if para saber e agir de tal forma se a idade do cliente é >=18.E uso do else caso ele não tenha a idade requerida

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de Idade");
//     listaDeDestinos.splice(1, 1);
// } else
//     if (estaAcompanhada) {
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Não é maior de Idade e não posso vender");
//     }



// console.log(listaDeDestinos);
//Usando o comando splice que serve para remover um item de uma lista , no nosso caso um destino da nossa lista .
//Para remover um elemento usando splice , depois de usalo colocamos o numero onde se encontra o elemento , como por exemplo queremos eliminar `São Paulo` que se encontra como elemento numero 1 e depois dizemos quantos do elemento identificado  deve ser eliminado no caso 1 `São paulo`.
//Vale lembrar que quando trabalhamos com lista a contagem de elmentos sempre começar por 0 , por exemplo no nosso caso salvado é 0, Sâo paulo é 1, Riode janeiro é 2, Curitiba é 3.

//Exemplos de sinais
// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)
//Vale apena lembarar para  usar o igual se usa dois = ou seja == , pois o uso de apenas um = é sempre para atribuir algo.

//outro jeito de fazer msm coisa do codigo da linha 19 - 38

if (
    idadeComprador >= 18 || // o || serve como "ou" , observamos q oq queremos dizer é se ele tiver idade >= 18 ou estaAcompanhado == true.
    estaAcompanhada == true
) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de Idade e não posso vender");
}

// Aqui usamos o && como " e" que seria if(idadeComprador >18 e temPassagemComprada)
console.log("Embarque: \n\n "); // o \n é usado para pular uma linha
if(idadeComprador >18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
