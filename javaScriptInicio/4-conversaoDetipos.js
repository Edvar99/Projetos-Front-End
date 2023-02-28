console.log("Conversão de tipos");

console.log("ano" + 2020);
console.log("2" + "2");//Concatenação de dois textos (n é uma soma)
console.log(parseInt("2")+ parseInt("2"));//parseInt converte a variável ("2") que é do tipo string  para uma variável númerica 

console.log("10" / "2");//Em caso de divisão o JS automaticamente tenta converter os dois textos que é uma variável em string  ("10") e ("2") para número 
console.log("Ricardo" / "2");// O JS retorna com NaN (Not a Number) ou seja "ricardo" não é um número 

console.log(6.5);
console.log(6,5);//O JS lê a virgula como um caracter especial , ou seja sempre que for usar um número não inteiro use o . (ponto flutuante) e nunca a vírgula 
