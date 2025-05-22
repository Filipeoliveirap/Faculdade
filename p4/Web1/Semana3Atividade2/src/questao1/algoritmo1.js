const tamanho = 5; //pede ao usuario para inserir o tamanho da lista
const lista = new Array(tamanho).fill(null); //cria um Array com o tamanho passado pelo prompt, e preenche os valores das posssições como null
lista.map(function (item, index) { //o .map vai retornar o Array somando o valor da índice + 1. O .reduce vai multiplicar todos os valores das posições do novo Array a um unico valor
  return index + 1;
}).reduce(function (acumulador, item) {
  return acumulador * item;
});




let novoArray = new Array(tamanho).fill(null).map((item, index) => index + 1).reduce((acumulador, item) => acumulador + item); /*Essa é uma versão simplificada do código acima onde ja inicia o array com o tamanho passado pelo prompt e preenchendo
os valores com null, em seguida o map retorna um Array somando os valores das índice + 1 e logo após um reduce pra multiplicar todos esses valores, reduzindo a um único valor*/
console.log(novoArray);// mostrando o novo Array

//objetivo do algortimo é criar uma lista de numemeros de 1 a n, onde n é o valor passado pelo prompt, e depois multiplicar todos os valores dessa lista, reduzindo a um único valor
