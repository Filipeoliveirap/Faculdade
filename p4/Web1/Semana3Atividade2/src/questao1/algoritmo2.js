const letras = [ //criando a matriz de letras
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
   
   let resultado = letras.flat().reduce((objeto, letra) => { //o flat vai transformar a matriz em um array simples, e o reduce vai contar quantas vezes cada letra apareceu no array, o reduce vai retornar um objeto com a letra e a quantidade de vezes que ela apareceu
    if (objeto[letra]) { //faz uma verificação se a letra já existe no objeto, se sim, soma +1 a quantidade de vezes que ela apareceu
      objeto[letra] += 1;
    } else { //se não, cria a letra no objeto e atribui o valor 1
      objeto[letra] = 1;
    }
    return objeto;
   }, {});

   //objetivo do algoritmo é contar quantas vezes cada letra apareceu na matriz
   