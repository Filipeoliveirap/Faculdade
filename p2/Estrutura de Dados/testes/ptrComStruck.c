//usando sTruck e ponteiros 
#include <stdio.h>

int main(){ //criação da variavel de estudante/tipo de dado definido pelo usuario
    struct estudante{
        int nMatricula;
        char nome[30];
        float vMensalidade;
        char dataBacharelado[30];
    };

struct estudante stud1, *ptr_stud1;//declara variavel do tipo struct estudante e declara variael do tipo ponteiro de struct estudante.

ptr_stud1 = &stud1; //leitura de dados do usuario
printf("\n Entre matricula: ");
scanf("%d", &ptr_stud1->nMatricula);
getchar();
printf("\n Entre nome: ");
fgets(ptr_stud1->nome, sizeof(ptr_stud1->nome), stdin);
printf("\n Entre mensalidade: ");
scanf("%f", &ptr_stud1->vMensalidade);
getchar();
printf("\n Entre dataBacharelado: ");
fgets(ptr_stud1->dataBacharelado, sizeof(ptr_stud1->dataBacharelado),stdin);

//exibir dados coletados
printf("\n ********CADRASTRO DO ESTUDANTE********");
printf("\n No. Matricula = %d", ptr_stud1->nMatricula);
printf("\n Nome = %s", ptr_stud1->nome);
printf("\n Mensalidade = %9.2f", ptr_stud1->vMensalidade);
printf("\n dataBacharelado = %s", ptr_stud1->dataBacharelado);

return 0;

}