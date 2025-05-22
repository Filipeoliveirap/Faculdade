let aluno1 = { 
    "nome" : "joão",
    "nascimento" : "2024-08-01",
    "peso" : "60.5",
    "disciplina": [
        "pweb 1",
        "pweb2"
    ]
} // lista JSON
aluno1.nome = aluno1.nome.toUpperCase(); //forma de mudar uma string imável
console.log(aluno1.nome);

let aluno2 = `{
    'nome' : 'joao'
}`;

let aluno3 = "{"
+ "'nome' : 'joao' "
"}";

let alunos = [aluno1, aluno2]; //lista

alunos = [];
alunos.push(aluno1);
alunos.push(aluno2);//essa é boa para quando voce não sabe o valor e vai adicionando ao decorrer...

for ( let aluno of alunos) { //para mostrar a lista interando os elementos do array
    console.log(aluno.nome);
}