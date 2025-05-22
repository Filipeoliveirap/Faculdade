const funcionarios = [ // array de objetos com os dados dos funcionários
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
   const funcionariosPorDepartamento = funcionarios.reduce( // o reduce vai reduzir o array de funcionários em um objeto onde a chave é o departamento e o valor é um array com os funcionários daquele departamento
    (acumulador, funcionario) => { // passando os parâmetros para o reduce onde o acumulador é o objeto que vai ser retornado e o funcionario é o elemento atual do array
      const departamento = funcionario.departamento; // pegando o departamento do funcionário
      if (!acumulador[departamento]) { // se o departamento não existe no objeto acumulador, cria um array vazio
        acumulador[departamento] = []; 
      }
      acumulador[departamento].push(funcionario); // adiciona o funcionário no array do departamento
      return acumulador; // retorna o objeto acumulador
    },
    {},
   );
   const mediasSalarioPorDepartamento = Object.keys( // o Object.keys vai retornar um array com as chaves do objeto acumulador, ou seja, os departamentos
    funcionariosPorDepartamento, // passando o objeto acumulador como parâmetro
   ).map((departamento) => { // o map vai percorrer o array de departamentos e retornar um novo array com os objetos que contém o departamento e a média salarial
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    ); // o reduce vai reduzir o array de funcionários do departamento em um número que é a soma dos salários
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length, 
    }; // retorna um objeto com o departamento e a média salarial
   // o total é a soma dos salários e o length é a quantidade de funcionários do departamento
   });
   
   
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000,
   ); // o filter vai filtrar o array de médias salariais e retornar um novo array com os departamentos que tem a média salarial maior que 65000
  

  // o objetivo do codigo é calcular a média salarial de cada departamento e filtrar os departamentos que tem a média salarial maior que 65000