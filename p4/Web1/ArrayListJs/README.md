# Manipulação de Listas em JavaScript

## `map()`

O método `map()` é uma função em JavaScript que cria um novo Array a partir de um Array existente, aplicando uma função em cada elemento. Então, em vez de iterar manualmente sobre o array usando um laço, é possível simplesmente usar o método Array.map(). O método Array.map() permite iterar sobre o array e modificar seus elementos usando uma função de callback. A função de callback será executada em cada um dos elementos do array.

### Vantagens:
- Permite transformar arrays de forma eficiente;
- Não altera o array original;
- Código mais limpo e fácil de entender.

### Exemplos:

**1. Elevar os números ao quadrado**

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero * numero);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

**2. Juntando nomes**
const usuarios = [
  { nome: "Susan", sobrenome: "Giraldi" },
  { nome: "Daniel", sobrenome: "Pereira" }
];

const nomesCompletos = usuarios.map(usuario => `${usuario.nome} ${usuario.sobrenome}`);
console.log(nomesCompletos); // Saída: ["Susan Giraldi", "Daniel Pereira"]

**3. Metade dos números**
const numeros = [2, 6, 8, 10];
const metade = numeros.map(numero => numero / 2);
console.log(metade); // Saída: [1, 3, 4, 5]


## `filter()`

O método `filter()` filtra os elementos de um Array, ele cria um novo Array contendo apenas os elementos do array original que atendem uma determinada condição. Em vez de usar a estrutura `for` com `if`, é possível simplesmente utilizar `Array.filter()`. O método executa uma função de callback para cada item do array, e retorna apenas os elementos para os quais a função retorna `true`.

### Vantagens:
- Permite filtrar elementos de forma clara e concisa;
- Não modifica o array original;
- Funciona bem em conjunto com outros métodos como `map()` e `reduce()`.

### Exemplos:

**1. Filtrar números pares**

const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Saída: [2, 4]

**2. Filtrar frutas vermelhas**

const frutas = [
  { nome: 'Maçã', cor: 'vermelha' },
  { nome: 'Banana', cor: 'amarela' },
  { nome: 'Morango', cor: 'vermelha' }
];

const frutasVermelhas = frutas.filter(fruta => fruta.cor === 'vermelha');
console.log(frutasVermelhas);
// Saída: [ { nome: 'Maçã', cor: 'vermelha' }, { nome: 'Morango', cor: 'vermelha' } ]

**3. Filtrar maiores de idade**

const pessoas = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 18 },
  { nome: 'Lucas', idade: 15 },
  { nome: 'Laura', idade: 17 }
];

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(maioresDeIdade);
// Saída: [ { nome: 'João', idade: 20 }, { nome: 'Maria', idade: 18 } ]

## `reduce()`

O método `reduce()` reduz os elementos de um Array a um único valor. Ele executa uma função de callback para cada item do array, acumulando os resultados em um único valor final. Em vez de usar estruturas como `for` e variáveis auxiliares para somar, agrupar ou transformar dados, é possível utilizar `Array.reduce()` de forma mais concisa e funcional. O método recebe dois argumentos: uma função de callback e um valor inicial opcional para o acumulador.

### Vantagens:
- Permite transformar arrays em valores únicos (número, string, objeto, etc.);
- Código mais limpo e funcional para operações acumulativas;
- Muito útil em somatórios, médias, agrupamentos e contagens.

### Exemplos:

**1. Somar todos os números**

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, valorAtual) => acc + valorAtual, 0);
console.log(soma); // Saída: 15

**2. Calcular média de notas**

const notas = [8, 7, 10, 9];
const total = notas.reduce((acc, nota) => acc + nota, 0);
const media = total / notas.length;
console.log(media); // Saída: 8.5

**3. Contar ocorrências de cores**

const cores = ['azul', 'vermelho', 'azul', 'verde', 'vermelho', 'vermelho'];

const contagem = cores.reduce((acc, cor) => {
  acc[cor] = (acc[cor] || 0) + 1;
  return acc;
}, {});

console.log(contagem);
// Saída: { azul: 2, vermelho: 3, verde: 1 }







