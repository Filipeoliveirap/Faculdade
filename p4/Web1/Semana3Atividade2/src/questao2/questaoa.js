const a =  [1, 2, 3, 4, 5];
const b =  [6, 7, 8, 9, 10];

const somaA = a.reduce((acc, val) => acc + val, 0);
const somaB = b.reduce((acc, val) => acc + val, 0);

const resultado = somaA + somaB;

console.log(resultado);