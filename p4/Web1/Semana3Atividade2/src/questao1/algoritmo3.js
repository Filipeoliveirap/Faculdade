const estudantes = [ // Array de objetos com nome e notas
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   
   const estudantesMedias = estudantes.map((estudante) => { // o map vai retornar um novo Array com os valores do Array original
    const total = estudante.notas.reduce((soma, nota) => soma + nota); // o reduce vai somar todas as notas do estudante, retornando um único valor
    let {nome} = estudante; //aqui acontece uma desestruturação do objeto estudante, pegando apenas o nome do estudante
    return { nome, media: total / estudante.notas.length }; //aqui o map retorna um novo objeto com o nome do estudante e a média das notas, onde a média é o total das notas dividido pelo número de notas
   });
   