let alunos = [
    {nome: 'maria', idade: 15},
    {nome: 'joana', idade: 16},
    {nome: 'joão', idade: 17},
    {nome: 'pedro', idade: 18},
];

let idade = alunos.map(aluno => aluno.idade);
let maiorIdade = idade.filter(idade => idade >= 18);

const items = [
    {name: 'apple', price: 1},
    {name: 'banana', price: 2},
    {name: 'orange', price: 3},
    {name: 'kiwi', price: 30},
    {name: 'morango', price: 10},
    {name: 'uva', price: 5},
];

let total = items.map(item => item.price).filter(price => price >= 10).reduce((acc, price) => acc + price, 0);

