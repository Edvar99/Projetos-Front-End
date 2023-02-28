//Console.log("Trabalhando com variáveis");
console.log("Trabalhando com atribuição de variáveis");
//JS é case sensitive ,ou seja é sensível a letra maiúsculas e minúsculas.


let nome = "Edvar";
let ano = 2021

// Não fazer: 
// exemplo mes = "Janeiro";
// Sempre nomear a variável com const ou let 
// Qual a diferença entre const e let ? const é uma variável que não pode ser sobre escrita ou seja  o valor atribuido a ela não pode ser mudado.

const sobrenome = ("Neves");
console.log(nome + sobrenome);// O JS imprime oq queremos mas sem vírgula ...
console.log(nome,  sobrenome);// Usando a vírgula como separador separador de itens  chegamos a o resultado esperado. 
console.log(nome + " " + sobrenome); // Usando a concatenação de um texto em vazio o JS irá imprimir o espaço que queremos"
console.log(`Meu nome é ${nome} ${sobrenome}`);// Utilizando a crase para trás  também podemos declarar uma string , utilizando a interpolação de variáveis utlizamos o ${variável} assim colocamos uma variável dentro de uma string, tendo como exemplos o  ${nome} ${sobrenome}.

nome = nome + sobrenome; //Sobre escrevendo uma variável (let) e atribuindo a ela um novo valor ,que é a soma de nome + sobrenome ,podemos atribuir qualquer novo valor  em um variável que seja  let podendo ela a antiga ser string e o seu novo valor atribuido ser um número por exemplo,O JS  não possui restrições ou limitações , lembrando que apenas variávens let podem ser reescritas e  para atribuir um novo valor a uma variável já existente NÃO é preciso o ussar novamente let .
console.log(nome);
// Apesar de tudo que foi dito sobre mudança de estado de variáveis (por exemplo mudar uma variável string para numerica) isto não é uma boa prática , também vale lembrar que é sempre bom tentar manter a maioria das suas variáveis em const e usar let apenas quando necessário, pois mudança de estado na progamação é algo dificíl de debugar e achar .

const nomeCompleto = nome;//(nome = nome + sobrenome)
console.log(nomeCompleto)

//Exemplo de bom uso da variável let abaixo:
let contador = 0;
contador = contador + 1;

//Outra boa prática é nomear o mais preciso possível , sem se importar com o tamanho do nome dado  ou coisa do tipo.
//let para declarar variáveis que variam 
//const para declarar variáveis que não variam
//optar por usar mais const do que let 

let idade;//declarando variável
idade = 26;//atribuindo valor
idade = idade + 1;//atribuindo um novo valor 
console.log(idade)
